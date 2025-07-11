import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img
              src="https://cdn.poehali.dev/files/f9cdbe5a-3db5-4fc2-b22b-51ac995d9b06.png"
              alt="Hungry Fox"
              className="h-12 w-12"
            />
            <span className="text-xl font-bold text-[#FF6B35]">HUNGRY FOX</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-[#FF6B35] transition-colors">
              Главная
            </a>
            <a href="#about" className="hover:text-[#FF6B35] transition-colors">
              О нас
            </a>
            <a href="#menu" className="hover:text-[#FF6B35] transition-colors">
              Меню
            </a>
            <a
              href="#delivery"
              className="hover:text-[#FF6B35] transition-colors"
            >
              Доставка
            </a>
            <a
              href="#contact"
              className="hover:text-[#FF6B35] transition-colors"
            >
              Контакты
            </a>
            <a href="#jobs" className="hover:text-[#FF6B35] transition-colors">
              Вакансии
            </a>
          </div>
          <Button className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white">
            Заказать
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-20 min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <img
              src="https://cdn.poehali.dev/files/f9cdbe5a-3db5-4fc2-b22b-51ac995d9b06.png"
              alt="Hungry Fox Logo"
              className="mx-auto h-32 w-32 mb-6"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#FF6B35] to-yellow-400 bg-clip-text text-transparent">
            HUNGRY FOX
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Самые сочные бургеры в городе. Быстро, вкусно, с характером лисы!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white text-lg px-8 py-4"
            >
              <Icon name="ShoppingCart" className="mr-2" />
              Заказать сейчас
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white text-lg px-8 py-4"
            >
              <Icon name="Menu" className="mr-2" />
              Смотреть меню
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#FF6B35]">О нас</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hungry Fox — это не просто бургерная. Это место, где встречаются
              качество, скорость и неповторимый вкус.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-black border-gray-800">
              <CardContent className="p-6 text-center">
                <Icon
                  name="Clock"
                  size={48}
                  className="mx-auto mb-4 text-[#FF6B35]"
                />
                <h3 className="text-xl font-bold mb-2 text-white">
                  Быстрая подача
                </h3>
                <p className="text-gray-300">Готовим ваш заказ за 15 минут</p>
              </CardContent>
            </Card>
            <Card className="bg-black border-gray-800">
              <CardContent className="p-6 text-center">
                <Icon
                  name="Award"
                  size={48}
                  className="mx-auto mb-4 text-[#FF6B35]"
                />
                <h3 className="text-xl font-bold mb-2 text-white">
                  Премиум качество
                </h3>
                <p className="text-gray-300">Только свежие ингредиенты</p>
              </CardContent>
            </Card>
            <Card className="bg-black border-gray-800">
              <CardContent className="p-6 text-center">
                <Icon
                  name="Heart"
                  size={48}
                  className="mx-auto mb-4 text-[#FF6B35]"
                />
                <h3 className="text-xl font-bold mb-2 text-white">С любовью</h3>
                <p className="text-gray-300">Каждый бургер готовим с душой</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#FF6B35]">
              Наше меню
            </h2>
            <p className="text-xl text-gray-300">
              Попробуйте наши фирменные бургеры
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Fox Classic",
                price: "450₽",
                desc: "Говяжья котлета, сыр, салат, томат",
              },
              {
                name: "Spicy Fox",
                price: "520₽",
                desc: "Острая котлета, халапеньо, острый соус",
              },
              {
                name: "Cheese Fox",
                price: "480₽",
                desc: "Двойной сыр, бекон, карамелизированный лук",
              },
              {
                name: "Veggie Fox",
                price: "420₽",
                desc: "Веганская котлета, авокадо, свежие овощи",
              },
              {
                name: "BBQ Fox",
                price: "550₽",
                desc: "BBQ соус, бекон, луковые кольца",
              },
              {
                name: "Fish Fox",
                price: "490₽",
                desc: "Рыбная котлета, тартар, салат айсберг",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="bg-gray-900 border-gray-700 hover:border-[#FF6B35] transition-colors"
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">
                      {item.name}
                    </h3>
                    <span className="text-[#FF6B35] font-bold text-lg">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">{item.desc}</p>
                  <Button className="w-full bg-[#FF6B35] hover:bg-[#FF6B35]/90">
                    Добавить в корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section id="delivery" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#FF6B35]">Доставка</h2>
            <p className="text-xl text-gray-300">
              Быстрая доставка по всему городу
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Icon
                    name="MapPin"
                    className="text-[#FF6B35] mt-1"
                    size={24}
                  />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">
                      Зона доставки
                    </h3>
                    <p className="text-gray-300">
                      Доставляем в пределах МКАД и ближайшего Подмосковья
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Icon
                    name="Clock"
                    className="text-[#FF6B35] mt-1"
                    size={24}
                  />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">
                      Время доставки
                    </h3>
                    <p className="text-gray-300">
                      30-45 минут в зависимости от района
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Icon
                    name="CreditCard"
                    className="text-[#FF6B35] mt-1"
                    size={24}
                  />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">
                      Стоимость
                    </h3>
                    <p className="text-gray-300">
                      Бесплатно при заказе от 1000₽, иначе 150₽
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="bg-black border-gray-800">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-[#FF6B35]">
                  Заказать доставку
                </h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Ваш адрес"
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded text-white"
                  />
                  <input
                    type="tel"
                    placeholder="Телефон"
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded text-white"
                  />
                  <Button className="w-full bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-lg py-3">
                    Рассчитать доставку
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section id="jobs" className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-[#FF6B35]">
            Работа у нас
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Присоединяйтесь к команде Hungry Fox!
          </p>

          <Card className="max-w-2xl mx-auto bg-gray-900 border-gray-700">
            <CardContent className="p-8">
              <Icon
                name="Bike"
                size={64}
                className="mx-auto mb-6 text-[#FF6B35]"
              />
              <h3 className="text-2xl font-bold mb-4 text-white">
                Курьер на доставку
              </h3>
              <div className="text-left space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <Icon name="Check" className="text-[#FF6B35]" size={20} />
                  <span className="text-gray-300">
                    Зарплата от 60,000₽ в месяц
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" className="text-[#FF6B35]" size={20} />
                  <span className="text-gray-300">Гибкий график работы</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" className="text-[#FF6B35]" size={20} />
                  <span className="text-gray-300">
                    Оплачиваем бензин и страховку
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" className="text-[#FF6B35]" size={20} />
                  <span className="text-gray-300">Дружная команда</span>
                </div>
              </div>
              <Button className="w-full bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-lg py-3">
                <Icon name="Send" className="mr-2" />
                Откликнуться на вакансию
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#FF6B35]">Контакты</h2>
            <p className="text-xl text-gray-300">
              Свяжитесь с нами любым удобным способом
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-black border-gray-800 text-center">
              <CardContent className="p-6">
                <Icon
                  name="Phone"
                  size={48}
                  className="mx-auto mb-4 text-[#FF6B35]"
                />
                <h3 className="text-xl font-bold mb-2 text-white">Телефон</h3>
                <p className="text-gray-300">+7 (495) 123-45-67</p>
                <p className="text-gray-300">+7 (495) 765-43-21</p>
              </CardContent>
            </Card>
            <Card className="bg-black border-gray-800 text-center">
              <CardContent className="p-6">
                <Icon
                  name="MapPin"
                  size={48}
                  className="mx-auto mb-4 text-[#FF6B35]"
                />
                <h3 className="text-xl font-bold mb-2 text-white">Адрес</h3>
                <p className="text-gray-300">ул. Лисья, 15</p>
                <p className="text-gray-300">Москва, 123456</p>
              </CardContent>
            </Card>
            <Card className="bg-black border-gray-800 text-center">
              <CardContent className="p-6">
                <Icon
                  name="Clock"
                  size={48}
                  className="mx-auto mb-4 text-[#FF6B35]"
                />
                <h3 className="text-xl font-bold mb-2 text-white">
                  Режим работы
                </h3>
                <p className="text-gray-300">Пн-Вс: 10:00-23:00</p>
                <p className="text-gray-300">Доставка: 11:00-22:30</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <img
                src="https://cdn.poehali.dev/files/f9cdbe5a-3db5-4fc2-b22b-51ac995d9b06.png"
                alt="Hungry Fox"
                className="h-8 w-8"
              />
              <span className="text-lg font-bold text-[#FF6B35]">
                HUNGRY FOX
              </span>
            </div>
            <p className="text-gray-400">
              © 2024 Hungry Fox. Все права защищены.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-[#FF6B35]"
              >
                <Icon name="Instagram" size={20} />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-[#FF6B35]"
              >
                <Icon name="Facebook" size={20} />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-[#FF6B35]"
              >
                <Icon name="MessageCircle" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
