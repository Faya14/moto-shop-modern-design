import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';

export default function Index() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-foreground">
                Ваш мотоцикл мечты <span className="text-primary">уже ждёт вас</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Эксклюзивная коллекция премиальных мотоциклов для ценителей совершенства
              </p>
              <div className="flex gap-4">
                <Button onClick={() => navigate('/catalog')} size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Смотреть каталог
                </Button>
                <Button onClick={() => navigate('/contacts')} size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  Связаться с нами
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/6d28b7fd-df97-4a5b-a0a9-1527d610f849/files/ef5eb54e-9caa-439f-a93f-035c881f0a64.jpg"
                alt="Premium Motorcycle"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-20">
            <Card className="p-6 text-center hover:shadow-lg transition-all animate-fade-in">
              <div className="text-4xl font-bold text-primary mb-2">5000+</div>
              <div className="text-muted-foreground">довольных клиентов</div>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-all animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold text-primary mb-2">9+</div>
              <div className="text-muted-foreground">лет на рынке</div>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-all animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">моделей в наличии</div>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-all animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">гарантия качества</div>
            </Card>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-6">Популярные категории</h3>
            <div className="h-1 w-24 bg-primary mx-auto mb-12"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <Card className="p-8 text-center hover:shadow-xl transition-all cursor-pointer animate-fade-in" onClick={() => navigate('/catalog')}>
              <Icon name="Zap" className="text-primary mx-auto mb-4" size={64} />
              <h4 className="text-2xl font-bold mb-3">Спортивные</h4>
              <p className="text-muted-foreground mb-4">Высокая скорость и адреналин на каждом повороте</p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Смотреть модели
              </Button>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all cursor-pointer animate-fade-in" style={{ animationDelay: '0.1s' }} onClick={() => navigate('/catalog')}>
              <Icon name="Mountain" className="text-primary mx-auto mb-4" size={64} />
              <h4 className="text-2xl font-bold mb-3">Туристические</h4>
              <p className="text-muted-foreground mb-4">Комфорт и надёжность для дальних путешествий</p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Смотреть модели
              </Button>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all cursor-pointer animate-fade-in" style={{ animationDelay: '0.2s' }} onClick={() => navigate('/catalog')}>
              <Icon name="Bike" className="text-primary mx-auto mb-4" size={64} />
              <h4 className="text-2xl font-bold mb-3">Круизеры</h4>
              <p className="text-muted-foreground mb-4">Стиль и мощь американской классики</p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Смотреть модели
              </Button>
            </Card>
          </div>

          <div className="bg-primary/5 rounded-lg p-12 text-center mb-20">
            <h3 className="text-4xl font-bold mb-6">Почему выбирают нас?</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <Icon name="Award" className="text-primary mx-auto mb-4" size={48} />
                <h4 className="text-xl font-bold mb-2">Официальный дилер</h4>
                <p className="text-muted-foreground">Прямые контракты с производителями</p>
              </div>
              <div>
                <Icon name="Shield" className="text-primary mx-auto mb-4" size={48} />
                <h4 className="text-xl font-bold mb-2">Гарантия качества</h4>
                <p className="text-muted-foreground">Полная заводская гарантия</p>
              </div>
              <div>
                <Icon name="Truck" className="text-primary mx-auto mb-4" size={48} />
                <h4 className="text-xl font-bold mb-2">Бесплатная доставка</h4>
                <p className="text-muted-foreground">По Москве в течение 1-2 дней</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-bold mb-6">Готовы начать?</h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Приезжайте в наш салон для личного знакомства с мотоциклами или оставьте заявку онлайн
            </p>
            <div className="flex gap-4 justify-center">
              <Button onClick={() => navigate('/catalog')} size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Перейти в каталог
              </Button>
              <Button onClick={() => navigate('/about')} size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Узнать больше о нас
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-card border-t border-border py-12 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">MOTO PREMIUM</h2>
          <p className="text-muted-foreground mb-6">Ваш надёжный партнёр в мире мотоциклов</p>
          <div className="flex justify-center gap-6 mb-6">
            <Icon name="Instagram" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" size={24} />
            <Icon name="Facebook" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" size={24} />
            <Icon name="Youtube" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" size={24} />
          </div>
          <p className="text-sm text-muted-foreground">© 2024 MOTO PREMIUM. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
