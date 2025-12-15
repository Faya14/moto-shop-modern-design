import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useNavigate, useParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';

const motorcyclesData: Record<string, any> = {
  '1': {
    id: 1,
    name: 'Yamaha R1 Sport',
    category: 'Спортивный',
    price: '1 450 000',
    image: 'https://cdn.poehali.dev/projects/6d28b7fd-df97-4a5b-a0a9-1527d610f849/files/ef5eb54e-9caa-439f-a93f-035c881f0a64.jpg',
    power: '200 л.с.',
    speed: '320 км/ч',
    engine: '998 см³',
    weight: '199 кг',
    torque: '112.4 Н⋅м',
    transmission: '6-ступенчатая',
    description: 'Yamaha YZF-R1 — легендарный спортбайк, воплощающий технологии MotoGP в серийном мотоцикле. Оснащён электронным управлением, системой контроля тяги и ABS.',
    features: [
      'Электронная система контроля тяги',
      'ABS с функцией контроля задней части',
      'Система быстрого переключения передач',
      'Полностью регулируемая подвеска',
      'LED освещение',
      'TFT дисплей с Bluetooth'
    ],
    colors: ['Синий', 'Красный', 'Чёрный']
  },
  '2': {
    id: 2,
    name: 'Harley Davidson Cruiser',
    category: 'Круизер',
    price: '1 890 000',
    image: 'https://cdn.poehali.dev/projects/6d28b7fd-df97-4a5b-a0a9-1527d610f849/files/07557c0a-cb81-48a3-b5a5-c2eef5ded732.jpg',
    power: '105 л.с.',
    speed: '180 км/ч',
    engine: '1868 см³',
    weight: '303 кг',
    torque: '155 Н⋅м',
    transmission: '6-ступенчатая',
    description: 'Классический американский круизер с мощным V-twin двигателем Milwaukee-Eight. Идеален для дальних поездок и неспешных круизов.',
    features: [
      'Двигатель Milwaukee-Eight 114',
      'Круиз-контроль',
      'Подогрев рукояток',
      'Премиум аудиосистема',
      'Кожаные кофры',
      'Хромированная отделка'
    ],
    colors: ['Чёрный', 'Серебристый', 'Красный']
  },
  '3': {
    id: 3,
    name: 'BMW R1250 GS',
    category: 'Туристический',
    price: '2 100 000',
    image: 'https://cdn.poehali.dev/projects/6d28b7fd-df97-4a5b-a0a9-1527d610f849/files/71028794-966e-41cf-b2a9-c3ea58b9474e.jpg',
    power: '136 л.с.',
    speed: '200 км/ч',
    engine: '1254 см³',
    weight: '249 кг',
    torque: '143 Н⋅м',
    transmission: '6-ступенчатая',
    description: 'Легендарный туристический эндуро, способный преодолеть любые дороги. Технология ShiftCam обеспечивает мощность на всех оборотах.',
    features: [
      'Система Dynamic ESA',
      'Режимы езды Pro',
      'TFT дисплей 6.5"',
      'Круиз-контроль',
      'Подогрев рукояток и сиденья',
      'Алюминиевые кофры'
    ],
    colors: ['Белый', 'Чёрный', 'Синий']
  },
  '4': {
    id: 4,
    name: 'Ducati Monster',
    category: 'Нейкед',
    price: '1 650 000',
    image: 'https://cdn.poehali.dev/projects/6d28b7fd-df97-4a5b-a0a9-1527d610f849/files/ef5eb54e-9caa-439f-a93f-035c881f0a64.jpg',
    power: '111 л.с.',
    speed: '240 км/ч',
    engine: '937 см³',
    weight: '188 кг',
    torque: '93 Н⋅м',
    transmission: '6-ступенчатая',
    description: 'Икона стиля с минималистичным дизайном и мощным L-twin двигателем. Идеальный баланс между спортивностью и комфортом.',
    features: [
      'Двигатель Testastretta 11°',
      'Электроника Ducati Safety Pack',
      'Подвеска Marzocchi',
      'Тормоза Brembo',
      'TFT дисплей 4.3"',
      'LED освещение'
    ],
    colors: ['Красный', 'Чёрный', 'Белый']
  },
  '5': {
    id: 5,
    name: 'Kawasaki Ninja H2',
    category: 'Спортивный',
    price: '2 850 000',
    image: 'https://cdn.poehali.dev/projects/6d28b7fd-df97-4a5b-a0a9-1527d610f849/files/ef5eb54e-9caa-439f-a93f-035c881f0a64.jpg',
    power: '231 л.с.',
    speed: '340 км/ч',
    engine: '998 см³',
    weight: '238 кг',
    torque: '141.7 Н⋅м',
    transmission: '6-ступенчатая',
    description: 'Единственный серийный мотоцикл с механическим нагнетателем. Технологии, пришедшие из авиационной промышленности Kawasaki Heavy Industries.',
    features: [
      'Механический нагнетатель',
      'Карбоновый обвес',
      'Электронный круиз-контроль',
      'Система Launch Control',
      'TFT дисплей с навигацией',
      'Система быстрого переключения'
    ],
    colors: ['Серебристый', 'Зелёный']
  },
  '6': {
    id: 6,
    name: 'Honda Gold Wing',
    category: 'Туристический',
    price: '3 200 000',
    image: 'https://cdn.poehali.dev/projects/6d28b7fd-df97-4a5b-a0a9-1527d610f849/files/71028794-966e-41cf-b2a9-c3ea58b9474e.jpg',
    power: '126 л.с.',
    speed: '200 км/ч',
    engine: '1833 см³',
    weight: '383 кг',
    torque: '170 Н⋅м',
    transmission: '7-ступенчатая DCT',
    description: 'Король туристических мотоциклов. Роботизированная коробка передач DCT, Apple CarPlay и непревзойдённый комфорт для дальних путешествий.',
    features: [
      'Коробка DCT с 7 передачами',
      'Apple CarPlay интеграция',
      'Премиум аудиосистема',
      'Подогрев сидений',
      'Электрическое ветровое стекло',
      'Система помощи при парковке'
    ],
    colors: ['Красный', 'Чёрный', 'Белый']
  }
};

export default function MotorcycleDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const moto = motorcyclesData[id || '1'];

  if (!moto) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Мотоцикл не найден</h1>
          <Button onClick={() => navigate('/catalog')}>Вернуться в каталог</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <Button 
            onClick={() => navigate('/catalog')} 
            variant="ghost" 
            className="mb-8 hover:bg-primary/10"
          >
            <Icon name="ArrowLeft" size={20} className="mr-2" />
            Назад в каталог
          </Button>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="animate-fade-in">
              <img 
                src={moto.image}
                alt={moto.name}
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-primary text-primary-foreground">{moto.category}</Badge>
              <h1 className="text-4xl font-bold mb-4">{moto.name}</h1>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {moto.description}
              </p>
              <div className="text-5xl font-bold text-primary mb-6">{moto.price} ₽</div>
              <div className="flex gap-4 mb-8">
                <Button onClick={() => navigate('/contacts')} size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Записаться на тест-драйв
                </Button>
                <Button onClick={() => navigate('/contacts')} size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  Задать вопрос
                </Button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6">
              <h3 className="text-sm text-muted-foreground mb-2">Мощность</h3>
              <div className="text-2xl font-bold">{moto.power}</div>
            </Card>
            <Card className="p-6">
              <h3 className="text-sm text-muted-foreground mb-2">Макс. скорость</h3>
              <div className="text-2xl font-bold">{moto.speed}</div>
            </Card>
            <Card className="p-6">
              <h3 className="text-sm text-muted-foreground mb-2">Объём двигателя</h3>
              <div className="text-2xl font-bold">{moto.engine}</div>
            </Card>
            <Card className="p-6">
              <h3 className="text-sm text-muted-foreground mb-2">Вес</h3>
              <div className="text-2xl font-bold">{moto.weight}</div>
            </Card>
            <Card className="p-6">
              <h3 className="text-sm text-muted-foreground mb-2">Крутящий момент</h3>
              <div className="text-2xl font-bold">{moto.torque}</div>
            </Card>
            <Card className="p-6">
              <h3 className="text-sm text-muted-foreground mb-2">Коробка передач</h3>
              <div className="text-2xl font-bold">{moto.transmission}</div>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Особенности и комплектация</h3>
              <ul className="space-y-3">
                {moto.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Доступные цвета</h3>
              <div className="flex gap-4 mb-6">
                {moto.colors.map((color: string, index: number) => (
                  <Badge key={index} variant="outline" className="text-base px-4 py-2">
                    {color}
                  </Badge>
                ))}
              </div>
              <div className="space-y-4 mt-8">
                <div className="flex items-center gap-3">
                  <Icon name="Shield" className="text-primary" size={24} />
                  <span className="text-sm">Гарантия 2 года</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Truck" className="text-primary" size={24} />
                  <span className="text-sm">Бесплатная доставка</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="CreditCard" className="text-primary" size={24} />
                  <span className="text-sm">Кредит 0%</span>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-12 text-center bg-primary/5">
            <h2 className="text-3xl font-bold mb-4">Заинтересовал этот мотоцикл?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Приезжайте в наш салон на тест-драйв или оставьте заявку — мы свяжемся с вами в течение 15 минут
            </p>
            <div className="flex gap-4 justify-center">
              <Button onClick={() => navigate('/contacts')} size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Оставить заявку
              </Button>
              <Button onClick={() => navigate('/catalog')} size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Смотреть другие модели
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
