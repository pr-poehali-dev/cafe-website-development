import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-700">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
              <Icon name="Scan" className="text-white" size={24} />
            </div>
            <span className="text-xl font-bold text-blue-400">SelfServe</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-blue-400 transition-colors">
              Главная
            </a>
            <a
              href="#advantages"
              className="hover:text-blue-400 transition-colors"
            >
              Преимущества
            </a>
            <a
              href="#solutions"
              className="hover:text-blue-400 transition-colors"
            >
              Решения
            </a>
            <a href="#cases" className="hover:text-blue-400 transition-colors">
              Кейсы
            </a>
            <a
              href="#contact"
              className="hover:text-blue-400 transition-colors"
            >
              Контакты
            </a>
          </div>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white">
            Заказать демо
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-20 min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mb-6">
              <Icon name="Monitor" className="text-white" size={48} />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Кассы самообслуживания
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-slate-300 max-w-3xl mx-auto">
            Автоматизируйте процессы обслуживания клиентов. Сократите очереди,
            увеличьте прибыль и повысьте лояльность покупателей
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 text-white text-lg px-8 py-4"
            >
              <Icon name="Play" className="mr-2" />
              Смотреть демо
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white text-lg px-8 py-4"
            >
              <Icon name="Calculator" className="mr-2" />
              Рассчитать стоимость
            </Button>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">85%</div>
              <p className="text-slate-300">Сокращение времени обслуживания</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">40%</div>
              <p className="text-slate-300">Снижение операционных расходов</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">200+</div>
              <p className="text-slate-300">Успешных внедрений</p>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-blue-400">
              Преимущества автоматизации
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Внедрение касс самообслуживания кардинально меняет работу вашего
              бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-slate-900 border-slate-700 hover:border-blue-500 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Icon
                  name="Zap"
                  size={48}
                  className="mx-auto mb-4 text-yellow-400"
                />
                <h3 className="text-xl font-bold mb-2 text-white">
                  Быстрое обслуживание
                </h3>
                <p className="text-slate-300">
                  Клиенты обслуживаются в 3 раза быстрее
                </p>
              </CardContent>
            </Card>
            <Card className="bg-slate-900 border-slate-700 hover:border-blue-500 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Icon
                  name="TrendingDown"
                  size={48}
                  className="mx-auto mb-4 text-green-400"
                />
                <h3 className="text-xl font-bold mb-2 text-white">
                  Снижение затрат
                </h3>
                <p className="text-slate-300">Экономия на зарплатах до 40%</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-900 border-slate-700 hover:border-blue-500 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Icon
                  name="Users"
                  size={48}
                  className="mx-auto mb-4 text-blue-400"
                />
                <h3 className="text-xl font-bold mb-2 text-white">
                  Больше клиентов
                </h3>
                <p className="text-slate-300">Пропускная способность +60%</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-900 border-slate-700 hover:border-blue-500 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Icon
                  name="BarChart3"
                  size={48}
                  className="mx-auto mb-4 text-purple-400"
                />
                <h3 className="text-xl font-bold mb-2 text-white">Аналитика</h3>
                <p className="text-slate-300">Детальная статистика продаж</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-blue-400">
              Наши решения
            </h2>
            <p className="text-xl text-slate-300">
              Подберем оптимальную конфигурацию для вашего бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Retail Basic",
                price: "от 85 000₽",
                desc: "Базовое решение для небольших магазинов",
                features: [
                  'Сенсорный экран 15"',
                  "Сканер штрих-кодов",
                  "Принтер чеков",
                  "Терминал оплаты",
                ],
                badge: "Популярный",
              },
              {
                name: "Retail Pro",
                price: "от 120 000₽",
                desc: "Продвинутая касса для супермаркетов",
                features: [
                  'Сенсорный экран 21"',
                  "2D сканер",
                  "Весы",
                  "NFC оплата",
                  "Видеонаблюдение",
                ],
                badge: "Лучший",
              },
              {
                name: "Food Service",
                price: "от 95 000₽",
                desc: "Специально для кафе и ресторанов",
                features: [
                  "Экран клиента",
                  "Принтер заказов",
                  "Интеграция с кухней",
                  "Программа лояльности",
                ],
                badge: null,
              },
              {
                name: "Pharmacy",
                price: "от 110 000₽",
                desc: "Решение для аптечных сетей",
                features: [
                  "Считыватель рецептов",
                  "Проверка льгот",
                  "Весы для препаратов",
                  "Защищенное ПО",
                ],
                badge: null,
              },
              {
                name: "Fuel Station",
                price: "от 140 000₽",
                desc: "Автоматизация АЗС",
                features: [
                  "Водостойкий корпус",
                  "Связь с колонками",
                  "Мобильные платежи",
                  "Видеоконтроль",
                ],
                badge: null,
              },
              {
                name: "Custom",
                price: "по запросу",
                desc: "Индивидуальное решение под ваши задачи",
                features: [
                  "Уникальный дизайн",
                  "Специальное ПО",
                  "Интеграция с любыми системами",
                  "Полная поддержка",
                ],
                badge: "Под заказ",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="bg-slate-800 border-slate-600 hover:border-blue-500 transition-all duration-300 relative"
              >
                <CardContent className="p-6">
                  {item.badge && (
                    <Badge className="absolute -top-2 left-4 bg-blue-500 text-white">
                      {item.badge}
                    </Badge>
                  )}
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white">
                      {item.name}
                    </h3>
                    <span className="text-blue-400 font-bold text-lg">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-slate-300 mb-6">{item.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {item.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center text-sm text-slate-300"
                      >
                        <Icon
                          name="Check"
                          className="text-green-400 mr-2"
                          size={16}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600">
                    Узнать подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-blue-400">
              Успешные внедрения
            </h2>
            <p className="text-xl text-slate-300">
              Реальные результаты наших клиентов
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                company: 'Сеть "Продукты 24"',
                industry: "Розничная торговля",
                result: "Сокращение очередей на 70%",
                description: "15 касс самообслуживания в 3 магазинах",
                icon: "ShoppingCart",
              },
              {
                company: 'Кафе "Быстро и Вкусно"',
                industry: "Общепит",
                result: "Увеличение выручки на 35%",
                description: "4 кассы с интеграцией кухни",
                icon: "Coffee",
              },
              {
                company: 'Аптечная сеть "Здоровье+"',
                industry: "Фармацевтика",
                result: "Экономия персонала 40%",
                description: "8 касс с проверкой рецептов",
                icon: "Heart",
              },
              {
                company: 'АЗС "Топливо"',
                industry: "Нефтегаз",
                result: "Снижение ошибок на 95%",
                description: "12 терминалов с оплатой топлива",
                icon: "Fuel",
              },
              {
                company: 'Гипермаркет "Мега"',
                industry: "Ритейл",
                result: "Пропускная способность +80%",
                description: "25 касс с весовым оборудованием",
                icon: "Building",
              },
              {
                company: 'Кинотеатр "Премьер"',
                industry: "Развлечения",
                result: "Сокращение времени покупки билетов на 60%",
                description: "6 терминалов продажи билетов",
                icon: "Film",
              },
            ].map((caseItem, index) => (
              <Card
                key={index}
                className="bg-slate-900 border-slate-700 hover:border-blue-500 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                      <Icon
                        name={caseItem.icon as any}
                        className="text-blue-400"
                        size={24}
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {caseItem.company}
                      </h3>
                      <p className="text-sm text-slate-400">
                        {caseItem.industry}
                      </p>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-green-400 mb-2">
                    {caseItem.result}
                  </div>
                  <p className="text-slate-300">{caseItem.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-blue-400">
              Начать сотрудничество
            </h2>
            <p className="text-xl text-slate-300">
              Получите консультацию и расчет стоимости решения
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <Icon name="Phone" className="text-blue-400 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">
                      Телефон
                    </h3>
                    <p className="text-slate-300">+7 (495) 123-45-67</p>
                    <p className="text-slate-300">Звонки принимаем 24/7</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Icon name="Mail" className="text-blue-400 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Email</h3>
                    <p className="text-slate-300">info@selfserve.ru</p>
                    <p className="text-slate-300">Ответим в течение 1 часа</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Icon
                    name="MapPin"
                    className="text-blue-400 mt-1"
                    size={24}
                  />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Офис</h3>
                    <p className="text-slate-300">
                      Москва, ул. Технологическая, 15
                    </p>
                    <p className="text-slate-300">БЦ "Инновации", 12 этаж</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Icon name="Clock" className="text-blue-400 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">
                      Режим работы
                    </h3>
                    <p className="text-slate-300">Пн-Пт: 9:00-18:00</p>
                    <p className="text-slate-300">Техподдержка: 24/7</p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="bg-slate-800 border-slate-600">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-blue-400">
                  Заказать консультацию
                </h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="w-full p-3 bg-slate-700 border border-slate-600 rounded text-white placeholder-slate-400"
                  />
                  <input
                    type="tel"
                    placeholder="Телефон"
                    className="w-full p-3 bg-slate-700 border border-slate-600 rounded text-white placeholder-slate-400"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 bg-slate-700 border border-slate-600 rounded text-white placeholder-slate-400"
                  />
                  <select className="w-full p-3 bg-slate-700 border border-slate-600 rounded text-white">
                    <option>Тип бизнеса</option>
                    <option>Розничная торговля</option>
                    <option>Общепит</option>
                    <option>АЗС</option>
                    <option>Аптека</option>
                    <option>Другое</option>
                  </select>
                  <textarea
                    placeholder="Расскажите о ваших задачах"
                    rows={4}
                    className="w-full p-3 bg-slate-700 border border-slate-600 rounded text-white placeholder-slate-400"
                  />
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-lg py-3">
                    <Icon name="Send" className="mr-2" />
                    Отправить заявку
                  </Button>
                  <p className="text-xs text-slate-400 text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой
                    конфиденциальности
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-900 border-t border-slate-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <Icon name="Scan" className="text-white" size={16} />
              </div>
              <span className="text-lg font-bold text-blue-400">SelfServe</span>
            </div>
            <p className="text-slate-400">
              © 2024 SelfServe. Все права защищены.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Button
                variant="ghost"
                size="sm"
                className="text-slate-400 hover:text-blue-400"
              >
                <Icon name="Linkedin" size={20} />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-slate-400 hover:text-blue-400"
              >
                <Icon name="Youtube" size={20} />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-slate-400 hover:text-blue-400"
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
