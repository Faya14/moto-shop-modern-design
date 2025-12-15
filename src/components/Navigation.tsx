import { useNavigate, useLocation } from 'react-router-dom';

export default function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Главная' },
    { path: '/about', label: 'О компании' },
    { path: '/services', label: 'Услуги' },
    { path: '/catalog', label: 'Каталог' },
    { path: '/reviews', label: 'Отзывы' },
    { path: '/delivery', label: 'Доставка' },
    { path: '/contacts', label: 'Контакты' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 
            className="text-2xl font-bold text-primary cursor-pointer" 
            onClick={() => navigate('/')}
          >
            MOTO PREMIUM
          </h1>
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`text-sm font-medium transition-colors uppercase tracking-wider ${
                  location.pathname === item.path
                    ? 'text-primary'
                    : 'hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
