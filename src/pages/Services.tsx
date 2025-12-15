import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';

export default function Services() {
  const navigate = useNavigate();

  const services = [
    {
      icon: 'Settings',
      title: 'Техническое обслуживание',
      description: 'Полный спектр работ по регламентному обслуживанию мотоциклов',
      details: [
        'Замена масла и фильтров',
        'Проверка и регулировка тормозной системы',
        'Проверка и натяжка цепи',
        'Диагностика электронных систем',
        'Замена технических жидкостей',
        'Проверка подвески и рулевого управления'
      ],
      price: 'от 5 000 ₽'
    },
    {
      icon: 'Wrench',
      title: 'Ремонт и восстановление',
      description: 'Ремонт любой сложности от мелких неисправностей до капитального ремонта',
      details: [
        'Ремонт двигателя',
        'Ремонт ходовой части',
        'Ремонт электрооборудования',
        'Кузовной ремонт и покраска',
        'Сварочные работы',
        'Восстановление после ДТП'
      ],
      price: 'от 8 000 ₽'
    },
    {
      icon: 'Palette',
      title: 'Индивидуальный тюнинг',
      description: 'Персонализация мотоцикла под ваш стиль и требования',
      details: [
        'Установка выхлопной системы',
        'Чип-тюнинг двигателя',
        'Установка спортивной подвески',
        'Аэрография и кастом-покраска',
        'Установка доп. оборудования',
        'Создание уникальных проектов'
      ],
      price: 'от 15 000 ₽'
    },
    {
      icon: 'Shield',
      title: 'Предпродажная подготовка',
      description: 'Комплексная подготовка мотоцикла к продаже',
      details: [
        'Полная диагностика',
        'Устранение мелких дефектов',
        'Детейлинг и полировка',
        'Химчистка салона',
        'Проверка документов',
        'Фотосъёмка для объявления'
      ],
      price: 'от 12 000 ₽'
    },
    {
      icon: 'Package',
      title: 'Продажа запчастей',
      description: 'Оригинальные запчасти и аксессуары для всех марок',
      details: [
        'Оригинальные запчасти',
        'Аналоги премиум-класса',
        'Расходные материалы',
        'Моторные масла',
        'Аксессуары и доп. оборудование',
        'Доставка по России'
      ],
      price: 'Уточняйте'
    },
    {
      icon: 'Store',
      title: 'Экипировка и одежда',
      description: 'Полный ассортимент экипировки для безопасной езды',
      details: [
        'Шлемы всех типов',
        'Мотокуртки и штаны',
        'Перчатки и ботинки',
        'Защита тела',
        'Дождевики',
        'Термобельё'
      ],
      price: 'от 3 000 ₽'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">Наши услуги</h1>
            <div className="h-1 w-24 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Полный спектр услуг для вашего мотоцикла — от регулярного обслуживания до эксклюзивного тюнинга
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => (
              <Card key={index} className="p-8 animate-fade-in hover:shadow-xl transition-all" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name={service.icon as any} className="text-primary" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Icon name="Check" className="text-primary" size={16} />
                          {detail}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-primary">{service.price}</span>
                      <Button onClick={() => navigate('/contacts')} variant="outline" className="border-primary text-primary hover:bg-primary/10">
                        Записаться
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="bg-card rounded-lg p-12 text-center animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">Почему выбирают нас?</h2>
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">9+</div>
                <div className="text-muted-foreground">лет опыта</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">5000+</div>
                <div className="text-muted-foreground">довольных клиентов</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">15</div>
                <div className="text-muted-foreground">сертифицированных мастеров</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">гарантия качества</div>
              </div>
            </div>
            <div className="flex gap-4 justify-center">
              <Button onClick={() => navigate('/contacts')} size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Записаться на сервис
              </Button>
              <Button onClick={() => navigate('/catalog')} size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Посмотреть каталог
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
