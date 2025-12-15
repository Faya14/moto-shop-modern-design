import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">О компании MOTO PREMIUM</h1>
            <div className="h-1 w-24 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground">Ваш надёжный партнёр в мире мотоциклов с 2015 года</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/6d28b7fd-df97-4a5b-a0a9-1527d610f849/files/177f3d83-9a93-44a9-9cda-577f0cf2a9b0.jpg"
                alt="Наш салон"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">Наша история</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  MOTO PREMIUM был основан в 2015 году группой энтузиастов, объединённых страстью к мотоциклам и желанием предоставить российскому рынку доступ к лучшим мировым брендам.
                </p>
                <p>
                  За годы работы мы стали одним из крупнейших дилеров премиальных мотоциклов в России. Наш салон в Москве занимает площадь более 2000 м² и представляет эксклюзивные модели от ведущих производителей.
                </p>
                <p>
                  Мы гордимся тем, что помогли более 5000 клиентам найти мотоцикл их мечты и продолжаем развиваться, открывая новые направления и расширяя ассортимент.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">Чем мы занимаемся</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 animate-fade-in hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Icon name="ShoppingBag" className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">Продажа мотоциклов</h3>
                <p className="text-muted-foreground">
                  Официальный дилер Yamaha, BMW, Harley-Davidson, Ducati, Kawasaki и Honda. Предлагаем как новые модели, так и мотоциклы с пробегом, прошедшие тщательную проверку.
                </p>
              </Card>

              <Card className="p-8 animate-fade-in hover:shadow-lg transition-all" style={{ animationDelay: '0.1s' }}>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Icon name="Wrench" className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">Сервисное обслуживание</h3>
                <p className="text-muted-foreground">
                  Собственный сервисный центр с сертифицированными мастерами. Выполняем техническое обслуживание, ремонт любой сложности и предпродажную подготовку.
                </p>
              </Card>

              <Card className="p-8 animate-fade-in hover:shadow-lg transition-all" style={{ animationDelay: '0.2s' }}>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Icon name="Package" className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">Запчасти и аксессуары</h3>
                <p className="text-muted-foreground">
                  Большой ассортимент оригинальных запчастей, экипировки и аксессуаров. Работаем напрямую с производителями, что гарантирует подлинность и доступные цены.
                </p>
              </Card>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">Наши преимущества</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: 'Award', title: 'Официальный дилер', text: 'Прямые контракты с производителями' },
                { icon: 'Shield', title: 'Гарантия качества', text: 'Полная заводская гарантия на все модели' },
                { icon: 'CreditCard', title: 'Гибкая оплата', text: 'Кредит, Trade-in, лизинг' },
                { icon: 'Truck', title: 'Быстрая доставка', text: 'Доставка по России 7-14 дней' },
                { icon: 'Users', title: 'Опытная команда', text: 'Профессиональные консультанты' },
                { icon: 'Clock', title: 'Режим работы', text: 'Без выходных 10:00 - 21:00' }
              ].map((item, index) => (
                <Card key={index} className="p-6 flex gap-4 animate-fade-in hover:shadow-lg transition-all" style={{ animationDelay: `${index * 0.05}s` }}>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon as any} className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.text}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">Готовы выбрать свой мотоцикл?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Приезжайте в наш салон на тест-драйв или позвоните нам — мы с радостью ответим на все ваши вопросы и поможем выбрать идеальный мотоцикл.
            </p>
            <div className="flex gap-4 justify-center">
              <Button onClick={() => navigate('/catalog')} size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Смотреть каталог
              </Button>
              <Button onClick={() => navigate('/contacts')} size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
