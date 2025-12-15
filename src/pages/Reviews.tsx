import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';

const reviews = [
  {
    id: 1,
    name: 'Александр Воронов',
    text: 'Купил Yamaha R1 месяц назад. Это не просто мотоцикл — это произведение искусства. Каждая деталь продумана до мелочей. Рекомендую всем!',
    rating: 5,
    date: '15 ноября 2024'
  },
  {
    id: 2,
    name: 'Дмитрий Соколов',
    text: 'Harley Davidson превзошёл все ожидания. Комфорт, мощность и элегантность в одном. Отличный сервис и профессиональная команда.',
    rating: 5,
    date: '8 ноября 2024'
  },
  {
    id: 3,
    name: 'Михаил Петров',
    text: 'BMW R1250 GS — идеальный выбор для дальних путешествий. Удобный, надёжный, технологичный. Доволен покупкой на все 100%!',
    rating: 5,
    date: '22 октября 2024'
  },
  {
    id: 4,
    name: 'Сергей Иванов',
    text: 'Приобрёл Kawasaki Ninja H2. Невероятная мощность и управляемость. Менеджеры помогли с выбором и оформлением. Спасибо!',
    rating: 5,
    date: '5 октября 2024'
  },
  {
    id: 5,
    name: 'Андрей Морозов',
    text: 'Honda Gold Wing — мечта любого туриста. Комфорт на высшем уровне. Доставка была быстрой, всё в идеальном состоянии.',
    rating: 5,
    date: '18 сентября 2024'
  }
];

export default function Reviews() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">Отзывы наших клиентов</h1>
            <div className="h-1 w-24 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground">
              Более 5000 довольных клиентов выбрали MOTO PREMIUM
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={review.id} className="p-8 animate-fade-in hover:shadow-lg transition-all" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{review.text}</p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">{review.name}</span>
                  <span className="text-sm text-muted-foreground">{review.date}</span>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="p-12 bg-primary/5 inline-block">
              <h2 className="text-3xl font-bold mb-4">Поделитесь своим опытом</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl">
                Мы ценим мнение каждого клиента и постоянно работаем над улучшением сервиса
              </p>
              <div className="flex gap-6 justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">5000+</div>
                  <div className="text-sm text-muted-foreground">клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">4.9</div>
                  <div className="text-sm text-muted-foreground">рейтинг</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">рекомендуют</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
