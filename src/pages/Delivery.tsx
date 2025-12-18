import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';

export default function Delivery() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">Доставка мотоциклов</h1>
            <div className="h-1 w-24 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground">
              Безопасная и быстрая доставка в любую точку России и за рубеж
            </p>
          </div>

          <div className="space-y-8 mb-20">
            <Card className="p-8 flex gap-6 animate-fade-in hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="Truck" className="text-primary" size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">Доставка по Екатеринбургу и Свердловской области</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Бесплатная доставка премиальных мотоциклов по Екатеринбургу. Доставка в Свердловскую область — от 5 000 ₽.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={16} />
                    <span>Срок доставки: 1-2 дня</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={16} />
                    <span>Доставка в удобное время</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={16} />
                    <span>Проверка при получении</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={16} />
                    <span>Полное страхование</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 flex gap-6 animate-fade-in hover:shadow-lg transition-all" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="MapPin" className="text-primary" size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">Доставка по России</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Отправляем мотоциклы в любой город России. Работаем с проверенными транспортными компаниями.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={16} />
                    <span>Срок доставки: 7-14 дней</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={16} />
                    <span>Доставка до терминала или адреса</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={16} />
                    <span>Отслеживание груза онлайн</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={16} />
                    <span>Страховка на полную стоимость</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 flex gap-6 animate-fade-in hover:shadow-lg transition-all" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="Globe" className="text-primary" size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">Международная доставка</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Организуем доставку в страны СНГ и Европу с полным таможенным сопровождением и оформлением документов.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={16} />
                    <span>Срок доставки: от 14 дней</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={16} />
                    <span>Помощь с таможней</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={16} />
                    <span>Все документы для растаможки</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={16} />
                    <span>Консультация юристов</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 flex gap-6 animate-fade-in hover:shadow-lg transition-all" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="Package" className="text-primary" size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">Упаковка и страхование</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Мотоциклы упаковываются в специальные защитные материалы. Полное страхование на время транспортировки входит в стоимость.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={16} />
                    <span>Профессиональная упаковка</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={16} />
                    <span>Защита от повреждений</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={16} />
                    <span>Страховка на полную стоимость</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={16} />
                    <span>Фото и видео упаковки</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-8 text-center">
              <Icon name="Clock" className="text-primary mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold mb-2">Быстрая обработка</h3>
              <p className="text-muted-foreground">Отправка в течение 24 часов после оплаты</p>
            </Card>
            <Card className="p-8 text-center">
              <Icon name="Shield" className="text-primary mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold mb-2">Гарантия безопасности</h3>
              <p className="text-muted-foreground">Полное страхование на всех этапах</p>
            </Card>
            <Card className="p-8 text-center">
              <Icon name="Phone" className="text-primary mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold mb-2">Поддержка 24/7</h3>
              <p className="text-muted-foreground">Консультации на всех этапах доставки</p>
            </Card>
          </div>

          <Card className="p-12 text-center bg-primary/5">
            <h2 className="text-3xl font-bold mb-4">Стоимость доставки</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">Бесплатно</div>
                <div className="text-muted-foreground">Екатеринбург</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">от 5 000 ₽</div>
                <div className="text-muted-foreground">Свердловская область</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">от 15 000 ₽</div>
                <div className="text-muted-foreground">Регионы России</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              * Точная стоимость рассчитывается индивидуально в зависимости от региона и модели мотоцикла
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
}