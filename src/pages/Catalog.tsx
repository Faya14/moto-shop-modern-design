import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';

const motorcycles = [
  {
    id: 1,
    name: 'Yamaha R1 Sport',
    category: 'Спортивный',
    price: '1 450 000',
    image: 'https://cdn.poehali.dev/projects/6d28b7fd-df97-4a5b-a0a9-1527d610f849/files/ef5eb54e-9caa-439f-a93f-035c881f0a64.jpg',
    power: '200 л.с.',
    speed: '320 км/ч'
  },
  {
    id: 2,
    name: 'Harley Davidson Cruiser',
    category: 'Круизер',
    price: '1 890 000',
    image: 'https://cdn.poehali.dev/projects/6d28b7fd-df97-4a5b-a0a9-1527d610f849/files/07557c0a-cb81-48a3-b5a5-c2eef5ded732.jpg',
    power: '105 л.с.',
    speed: '180 км/ч'
  },
  {
    id: 3,
    name: 'BMW R1250 GS',
    category: 'Туристический',
    price: '2 100 000',
    image: 'https://cdn.poehali.dev/projects/6d28b7fd-df97-4a5b-a0a9-1527d610f849/files/71028794-966e-41cf-b2a9-c3ea58b9474e.jpg',
    power: '136 л.с.',
    speed: '200 км/ч'
  },
  {
    id: 4,
    name: 'Ducati Monster',
    category: 'Нейкед',
    price: '1 650 000',
    image: 'https://cdn.poehali.dev/projects/6d28b7fd-df97-4a5b-a0a9-1527d610f849/files/ef5eb54e-9caa-439f-a93f-035c881f0a64.jpg',
    power: '111 л.с.',
    speed: '240 км/ч'
  },
  {
    id: 5,
    name: 'Kawasaki Ninja H2',
    category: 'Спортивный',
    price: '2 850 000',
    image: 'https://cdn.poehali.dev/projects/6d28b7fd-df97-4a5b-a0a9-1527d610f849/files/ef5eb54e-9caa-439f-a93f-035c881f0a64.jpg',
    power: '231 л.с.',
    speed: '340 км/ч'
  },
  {
    id: 6,
    name: 'Honda Gold Wing',
    category: 'Туристический',
    price: '3 200 000',
    image: 'https://cdn.poehali.dev/projects/6d28b7fd-df97-4a5b-a0a9-1527d610f849/files/71028794-966e-41cf-b2a9-c3ea58b9474e.jpg',
    power: '126 л.с.',
    speed: '200 км/ч'
  }
];

export default function Catalog() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">Каталог мотоциклов</h1>
            <div className="h-1 w-24 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground">
              Эксклюзивная коллекция премиальных мотоциклов от ведущих мировых производителей
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {motorcycles.map((moto, index) => (
              <Card key={moto.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative overflow-hidden group cursor-pointer" onClick={() => navigate(`/motorcycle/${moto.id}`)}>
                  <img 
                    src={moto.image} 
                    alt={moto.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">{moto.category}</Badge>
                </div>
                <div className="p-6">
                  <h4 className="text-2xl font-bold mb-2">{moto.name}</h4>
                  <div className="flex gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Icon name="Zap" size={16} />
                      {moto.power}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="Gauge" size={16} />
                      {moto.speed}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-primary">{moto.price} ₽</span>
                    <Button onClick={() => navigate(`/motorcycle/${moto.id}`)} className="bg-primary text-primary-foreground hover:bg-primary/90">
                      Подробнее
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
