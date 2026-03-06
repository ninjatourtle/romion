import React, { useState, useEffect } from 'react';
import { 
  Settings, 
  Cpu, 
  Wrench, 
  CheckCircle2, 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Menu, 
  X, 
  ChevronRight,
  Download,
  Factory,
  Layers,
  ShieldCheck,
  Clock
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Услуги', href: '#solutions' },
    { name: 'Кейсы', href: '#cases' },
    { name: 'Сервис', href: '#workflow' },
    { name: 'О компании', href: '#production' },
    { name: 'Контакты', href: '#footer' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 bg-accent flex items-center justify-center rounded-xl shadow-lg shadow-accent/20 group-hover:rotate-12 transition-transform duration-300">
            <Settings className="text-white w-6 h-6" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-black tracking-tighter text-industrial-black">
              РОМИОН
            </span>
            <span className="text-[10px] font-bold tracking-[0.2em] text-accent uppercase">
              ГРУПП
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-semibold text-industrial-black/70 hover:text-accent transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
              </a>
            ))}
          </div>
          
          <div className="h-8 w-px bg-gray-200" />

          <div className="flex items-center gap-6">
            <div className="flex flex-col items-end">
              <a href="tel:+78432103630" className="text-sm font-bold text-industrial-black hover:text-accent transition-colors">+7 (843) 210-36-30</a>
              <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">Пн-Пт 9:00 - 18:00</span>
            </div>
            <button className="px-5 py-2.5 bg-industrial-black text-white text-xs font-bold rounded-lg hover:bg-accent transition-all shadow-lg shadow-black/10">
              Связаться
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-6 md:hidden flex flex-col gap-4 shadow-xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <hr className="border-gray-100" />
            <div className="flex flex-col gap-2">
              <a href="tel:+78432103630" className="text-lg font-bold">+7 (843) 210-36-30</a>
              <a href="mailto:comdir@proteiros.ru" className="text-sm text-gray-500">comdir@proteiros.ru</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-industrial-gray/50 -skew-x-12 translate-x-1/4" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-accent/5 border border-accent/10 text-accent text-[10px] font-black uppercase tracking-[0.2em] mb-8">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Инжиниринг полного цикла
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] text-industrial-black mb-8 tracking-tighter">
              Разработка <br />
              <span className="text-accent">нестандартного</span> <br />
              оборудования
            </h1>
            
            <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-xl leading-relaxed font-medium">
              ООО «Ромион Групп» — эксперты в создании уникальных технологических решений: от идеи и ТЗ до запуска готовых линий.
            </p>
            
            <div className="flex flex-wrap gap-5 mb-16">
              <button className="px-10 py-5 bg-accent text-white font-black text-sm uppercase tracking-widest rounded-2xl hover:bg-industrial-black transition-all duration-300 flex items-center gap-3 shadow-2xl shadow-accent/30 hover:shadow-black/30 group">
                Обсудить проект
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-10 py-5 bg-white text-industrial-black border-2 border-industrial-black/5 font-black text-sm uppercase tracking-widest rounded-2xl hover:bg-gray-50 transition-all duration-300 flex items-center gap-3">
                <Download className="w-5 h-5" />
                Презентация
              </button>
            </div>

            <div className="flex items-center gap-12">
              <div className="flex flex-col">
                <span className="text-4xl font-black text-industrial-black">5+</span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Лет опыта</span>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div className="flex flex-col">
                <span className="text-4xl font-black text-industrial-black">250+</span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Проектов</span>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div className="flex flex-col">
                <span className="text-4xl font-black text-industrial-black">3 дня</span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Расчет КП</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format,compress&fit=crop&q=60&w=1200&fm=webp" 
                alt="Industrial Engineering Design" 
                className="w-full aspect-[4/5] object-cover scale-110 hover:scale-100 transition-transform duration-700"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-industrial-black/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-10 left-10 right-10">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center">
                      <ShieldCheck className="text-white w-6 h-6" />
                    </div>
                    <span className="text-white font-bold">Гарантия качества</span>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Комплексные испытания на собственной площадке перед каждой отгрузкой.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border-[20px] border-accent/10 rounded-full -z-10" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-accent/5 rounded-full -z-10 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Проектные работы",
      desc: "Разработка 3D-моделей, КД по требованиям ЕСКД и изготовление опытных прототипов.",
      icon: <Layers className="w-10 h-10" />,
      items: ["3D-моделирование", "Разработка КД", "Прототипирование"]
    },
    {
      title: "Производство",
      desc: "Изготовление оборудования в строгом соответствии с техническими требованиями.",
      icon: <Factory className="w-10 h-10" />,
      items: ["Собственный цех", "Контроль качества", "Отчетность"]
    },
    {
      title: "Монтаж и ПНР",
      desc: "Профессиональный монтаж, пуско-наладка и обучение персонала заказчика.",
      icon: <Wrench className="w-10 h-10" />,
      items: ["Шеф-монтаж", "Пуско-наладка", "Обучение"]
    },
    {
      title: "Сервис",
      desc: "Гарантийное и постгарантийное обслуживание, оперативная поставка запчастей.",
      icon: <ShieldCheck className="w-10 h-10" />,
      items: ["Гарантия", "Техподдержка", "Запчасти"]
    }
  ];

  return (
    <section id="solutions" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="text-accent text-xs font-black uppercase tracking-[0.3em] mb-4">Услуги</div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter text-industrial-black">Наши решения</h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Мы специализируемся на решении нетиповых инженерных задач, обеспечивая полный цикл от идеи до запуска.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group p-10 rounded-[40px] border border-gray-100 bg-industrial-gray/50 hover:bg-white hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] transition-all duration-500"
            >
              <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-accent mb-8 shadow-xl shadow-gray-200/50 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                {s.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">{s.title}</h3>
              <p className="text-gray-500 text-sm mb-8 leading-relaxed">{s.desc}</p>
              <ul className="space-y-3">
                {s.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-[10px] font-black text-industrial-black uppercase tracking-widest">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Cases = () => {
  const cases = [
    { title: "Автоматизированная линия упаковки", category: "Пищевая промышленность", img: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format,compress&fit=crop&q=60&w=800&fm=webp" },
    { title: "Система очистки сточных вод", category: "Экология", img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format,compress&fit=crop&q=60&w=800&fm=webp" },
    { title: "Конвейерная система для склада", category: "Логистика", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format,compress&fit=crop&q=60&w=800&fm=webp" },
    { title: "Нестандартный пресс для металла", category: "Машиностроение", img: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format,compress&fit=crop&q=60&w=800&fm=webp" },
  ];

  return (
    <section id="cases" className="py-32 bg-industrial-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="text-accent text-xs font-black uppercase tracking-[0.3em] mb-4">Портфолио</div>
            <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">Реализованные <br /> проекты</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Мы гордимся каждым проектом. Здесь представлены примеры наших работ по разработке и внедрению нестандартного технологического оборудования.
            </p>
          </div>
          <button className="group flex items-center gap-4 px-8 py-4 border border-white/10 rounded-2xl hover:bg-white hover:text-industrial-black transition-all duration-500">
            <span className="font-bold uppercase text-xs tracking-widest">Все проекты</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {cases.map((c, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-[32px] overflow-hidden aspect-[16/10] mb-8 border border-white/5">
                <img 
                  src={c.img} 
                  alt={c.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industrial-black via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                
                <div className="absolute top-6 right-6">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                    <ArrowRight className="w-5 h-5 text-white -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                  </div>
                </div>
              </div>
              
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-accent text-[10px] font-black uppercase tracking-[0.2em] mb-2">{c.category}</div>
                  <h3 className="text-3xl font-bold group-hover:text-accent transition-colors duration-300 tracking-tight">{c.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Workflow = () => {
  const steps = [
    { title: "Предпроектная работа", desc: "Анализ задачи, выезд на объект, замеры и сбор данных.", icon: <Clock className="w-6 h-6" /> },
    { title: "Разработка ТЗ и КП", desc: "Подготовка детального техзадания и коммерческого предложения за 3 дня.", icon: <Layers className="w-6 h-6" /> },
    { title: "Проектирование", desc: "Создание 3D-модели и разработка конструкторской документации.", icon: <Settings className="w-6 h-6" /> },
    { title: "Производство и Тесты", desc: "Изготовление и комплексные испытания на нашей площадке.", icon: <Factory className="w-6 h-6" /> },
    { title: "Запуск", desc: "Доставка, монтаж, пуско-наладка и сдача оборудования.", icon: <CheckCircle2 className="w-6 h-6" /> },
  ];

  return (
    <section id="workflow" className="py-32 bg-industrial-gray/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4 sticky top-32">
            <div className="text-accent text-xs font-black uppercase tracking-[0.3em] mb-4">Процесс</div>
            <h2 className="text-5xl font-black mb-6 tracking-tighter text-industrial-black">Как мы <br /> работаем</h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Мы выстроили прозрачный процесс взаимодействия, который позволяет минимизировать риски и гарантировать результат на каждом этапе.
            </p>
            <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center">
                  <ShieldCheck className="text-green-600 w-6 h-6" />
                </div>
                <div className="font-bold">Фиксированные сроки</div>
              </div>
              <p className="text-sm text-gray-500">
                Закрепляем сроки и стоимость в договоре. Никаких скрытых платежей и задержек.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 bg-white rounded-[32px] border border-gray-100 hover:border-accent/20 hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500 flex flex-col md:flex-row gap-8 items-start md:items-center"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-industrial-gray rounded-2xl flex items-center justify-center text-industrial-black group-hover:bg-accent group-hover:text-white transition-all duration-500">
                  <span className="text-2xl font-black">{i + 1}</span>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-accent">{step.icon}</div>
                    <h3 className="text-xl font-bold tracking-tight">{step.title}</h3>
                  </div>
                  <p className="text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
                <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <ChevronRight className="w-6 h-6 text-accent" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="footer" className="py-24 bg-industrial-gray">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-bold mb-8">Свяжитесь с нами</h2>
          <p className="text-gray-600 mb-12">
            Готовы обсудить ваш проект? Оставьте заявку, и наши инженеры свяжутся с вами для уточнения деталей.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white rounded-xl shadow-sm">
                <Phone className="text-accent w-6 h-6" />
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Телефон</div>
                <a href="tel:+78432103630" className="text-xl font-bold hover:text-accent transition-colors">+7 (843) 210-36-30</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-white rounded-xl shadow-sm">
                <Mail className="text-accent w-6 h-6" />
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Email</div>
                <a href="mailto:comdir@proteiros.ru" className="text-xl font-bold hover:text-accent transition-colors">comdir@proteiros.ru</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-white rounded-xl shadow-sm">
                <MapPin className="text-accent w-6 h-6" />
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Адрес</div>
                <div className="text-xl font-bold">119121, г. Москва, Земледельческий пер, д. 11, помещ. 1/2</div>
              </div>
            </div>
            <div className="flex items-start gap-4 mt-4">
              <div className="p-3 bg-white rounded-xl shadow-sm">
                <ShieldCheck className="text-accent w-6 h-6" />
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Реквизиты</div>
                <div className="text-sm font-medium">
                  ИНН: 9702012878<br />
                  ОГРН: 1197746757900<br />
                  Генеральный директор: Будюгин Р. Н.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold mb-2 uppercase tracking-wider text-gray-400">Имя</label>
                <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-accent transition-colors" placeholder="Иван Иванов" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 uppercase tracking-wider text-gray-400">Телефон</label>
                <input type="tel" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-accent transition-colors" placeholder="+7 (___) ___-__-__" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 uppercase tracking-wider text-gray-400">Сообщение</label>
              <textarea rows={4} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-accent transition-colors" placeholder="Опишите вашу задачу..." />
            </div>
            <button className="w-full py-4 bg-accent text-white font-bold rounded-lg hover:bg-accent/90 transition-all shadow-lg shadow-accent/20">
              Отправить заявку
            </button>
            <p className="text-[10px] text-gray-400 text-center">
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности и обработкой персональных данных.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent flex items-center justify-center rounded-lg">
            <Settings className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tighter">РОМИОН ГРУПП</span>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
          <a href="#" className="hover:text-accent">Политика конфиденциальности</a>
          <a href="#" className="hover:text-accent">Согласие на обработку данных</a>
          <a href="#" className="hover:text-accent">Реквизиты</a>
        </div>

        <div className="text-sm text-gray-400">
          © {new Date().getFullYear()} ООО «Ромион Групп». Все права защищены.
        </div>
      </div>
    </footer>
  );
};

const Production = () => {
  return (
    <section id="production" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-accent text-xs font-black uppercase tracking-[0.3em] mb-4">О компании</div>
            <h2 className="text-5xl font-black mb-8 tracking-tighter text-industrial-black">Инжиниринг и производство</h2>
            <p className="text-gray-500 mb-10 leading-relaxed text-lg">
              ООО «Ромион Групп» — это современное предприятие, объединяющее конструкторское бюро и производственные мощности. Мы специализируемся на создании уникального технологического оборудования, которое решает специфические задачи вашего бизнеса.
            </p>
            
            <div className="grid grid-cols-2 gap-10">
              <div className="flex items-start gap-4">
                <div className="p-4 bg-accent/5 rounded-2xl text-accent">
                  <Factory className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-industrial-black">Прямые поставки</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-widest mt-1 font-bold">От производителей</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-4 bg-accent/5 rounded-2xl text-accent">
                  <Settings className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-industrial-black">Широкий выбор</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-widest mt-1 font-bold">Оборудование</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-4 bg-accent/5 rounded-2xl text-accent">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-industrial-black">Надежность</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-widest mt-1 font-bold">Гарантия качества</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-4 bg-accent/5 rounded-2xl text-accent">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-industrial-black">С 2019 года</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-widest mt-1 font-bold">Опыт работы</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="space-y-6">
              <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format,compress&fit=crop&q=60&w=600&fm=webp" alt="Logistics 1" className="rounded-[32px] w-full h-80 object-cover shadow-2xl" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
              <img src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format,compress&fit=crop&q=60&w=600&fm=webp" alt="Logistics 2" className="rounded-[32px] w-full h-60 object-cover shadow-2xl" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
            </div>
            <div className="space-y-6 pt-12">
              <img src="https://images.unsplash.com/photo-1566933293069-b55c7f326dd4?auto=format,compress&fit=crop&q=60&w=600&fm=webp" alt="Logistics 3" className="rounded-[32px] w-full h-60 object-cover shadow-2xl" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
              <img src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format,compress&fit=crop&q=60&w=600&fm=webp" alt="Logistics 4" className="rounded-[32px] w-full h-80 object-cover shadow-2xl" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-16 bg-accent">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-white">
        <div>
          <h2 className="text-3xl font-bold mb-2">Нужен расчет стоимости оборудования?</h2>
          <p className="text-white/80">Оставьте заявку, и мы подготовим КП за 5 рабочих дней.</p>
        </div>
        <button className="px-10 py-4 bg-white text-accent font-bold rounded-xl hover:bg-gray-100 transition-all shadow-xl">
          Получить КП
        </button>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="antialiased selection:bg-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Cases />
        <Workflow />
        <Production />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
