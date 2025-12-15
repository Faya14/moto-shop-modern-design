import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';

export default function Contacts() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">Контакты</h1>
            <div className="h-1 w-24 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground">
              Свяжитесь с нами удобным способом — мы всегда на связи
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="space-y-6 animate-fade-in">
              <Card className="p-6 flex gap-4 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Адрес салона</h4>
                  <p className="text-muted-foreground">г. Москва, Рублёвское шоссе, 123</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    3 минуты от метро Кунцевская
                  </p>
                </div>
              </Card>

              <Card className="p-6 flex gap-4 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Телефон</h4>
                  <a href="tel:+74951234567" className="text-muted-foreground hover:text-primary transition-colors">
                    +7 (495) 123-45-67
                  </a>
                  <p className="text-sm text-muted-foreground mt-2">
                    Звонки принимаются ежедневно
                  </p>
                </div>
              </Card>

              <Card className="p-6 flex gap-4 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <a href="mailto:info@motopremium.ru" className="text-muted-foreground hover:text-primary transition-colors">
                    info@motopremium.ru
                  </a>
                  <p className="text-sm text-muted-foreground mt-2">
                    Ответим в течение 1 часа
                  </p>
                </div>
              </Card>

              <Card className="p-6 flex gap-4 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Время работы</h4>
                  <p className="text-muted-foreground">Понедельник - Воскресенье</p>
                  <p className="text-muted-foreground font-semibold">10:00 - 21:00</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Без перерывов и выходных
                  </p>
                </div>
              </Card>

              <Card className="p-6">
                <h4 className="font-bold mb-4">Социальные сети</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <Icon name="Instagram" className="text-primary" size={24} />
                  </a>
                  <a href="#" className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <Icon name="Facebook" className="text-primary" size={24} />
                  </a>
                  <a href="#" className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <Icon name="Youtube" className="text-primary" size={24} />
                  </a>
                  <a href="#" className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <Icon name="Send" className="text-primary" size={24} />
                  </a>
                </div>
              </Card>
            </div>

            <Card className="p-8 animate-scale-in">
              <h2 className="text-3xl font-bold mb-6">Оставьте заявку</h2>
              <p className="text-muted-foreground mb-6">
                Заполните форму и мы свяжемся с вами в течение 15 минут
              </p>
              <form className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                  <input 
                    type="text" 
                    placeholder="Иван Иванов" 
                    className="w-full px-4 py-3 bg-card border border-border rounded-md focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Телефон</label>
                  <input 
                    type="tel" 
                    placeholder="+7 (999) 123-45-67" 
                    className="w-full px-4 py-3 bg-card border border-border rounded-md focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <input 
                    type="email" 
                    placeholder="email@example.com" 
                    className="w-full px-4 py-3 bg-card border border-border rounded-md focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Сообщение</label>
                  <textarea 
                    placeholder="Расскажите, чем мы можем помочь" 
                    rows={4}
                    className="w-full px-4 py-3 bg-card border border-border rounded-md focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" size="lg">
                  Отправить заявку
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-all">
              <Icon name="Car" className="text-primary mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold mb-2">Парковка</h3>
              <p className="text-muted-foreground">Бесплатная охраняемая парковка для клиентов</p>
            </Card>
            <Card className="p-8 text-center hover:shadow-lg transition-all">
              <Icon name="Coffee" className="text-primary mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold mb-2">Зона ожидания</h3>
              <p className="text-muted-foreground">Комфортная зона с кофе и Wi-Fi</p>
            </Card>
            <Card className="p-8 text-center hover:shadow-lg transition-all">
              <Icon name="Users" className="text-primary mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold mb-2">Тест-драйв</h3>
              <p className="text-muted-foreground">Запись на тест-драйв по телефону</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
