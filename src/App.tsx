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

const Navbar = ({ onOpenContact }: { onOpenContact: (title: string) => void }) => {
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white shadow-md py-0' : 'bg-white shadow-sm py-0'}`}>
      <div className="max-w-7xl mx-auto px-3 flex items-center justify-between">
        <div className="flex items-center group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img 
            src="/logo.png" 
            alt="РОМИОН ГРУПП" 
            className={`transition-all duration-500 object-contain ${isScrolled ? 'h-12' : 'h-24'}`}
            referrerPolicy="no-referrer"
          />
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
              <a href="tel:+74997118084" className="text-sm font-bold text-industrial-black hover:text-accent transition-colors">+7 (499) 711-80-84</a>
              <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">Пн-Пт 9:00 - 18:00</span>
            </div>
            <button 
              onClick={() => onOpenContact('Связаться с нами')}
              className="px-5 py-2.5 bg-industrial-black text-white text-xs font-bold rounded-lg hover:bg-accent transition-all shadow-lg shadow-black/10"
            >
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
              <a href="tel:+74997118084" className="text-lg font-bold">+7 (499) 711-80-84</a>
              <a href="mailto:info@romiongroup.ru" className="text-sm text-gray-500">info@romiongroup.ru</a>
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenContact('Связаться с нами');
                }}
                className="mt-2 w-full py-3 bg-accent text-white font-bold rounded-lg"
              >
                Связаться
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onOpenContact }: { onOpenContact: (title: string) => void }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 pb-20 overflow-hidden bg-white">
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
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-accent/5 border border-accent/10 text-accent text-[10px] font-black uppercase tracking-[0.2em] mb-8 mt-12">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Инжиниринг полного цикла
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] text-industrial-black mb-8 tracking-tighter">
              Разработка <br />
              <span className="text-accent">нестандартного</span> <br />
              оборудования
            </h1>
            
            <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-xl leading-relaxed font-medium">
              ООО "РГ" — эксперты в создании уникальных технологических решений: от идеи и ТЗ до запуска готовых линий.
            </p>
            
            <div className="flex flex-wrap gap-5 mb-16">
              <button 
                onClick={() => onOpenContact('Обсудить проект')}
                className="px-10 py-5 bg-accent text-white font-black text-sm uppercase tracking-widest rounded-2xl hover:bg-industrial-black transition-all duration-300 flex items-center gap-3 shadow-2xl shadow-accent/30 hover:shadow-black/30 group"
              >
                Обсудить проект
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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

const Cases = ({ onSelectCase }: { onSelectCase: (c: any) => void }) => {
  const cases = [
    { 
      id: 1,
      title: "Автоматизированная линия упаковки", 
      category: "Пищевая промышленность", 
      img: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format,compress&fit=crop&q=60&w=800&fm=webp",
      problem: "Ускорение процесса упаковки готовой продукции в 3 раза.",
      solution: "Разработка конвейерной системы с автоматическим весовым дозатором и термоусадочным тоннелем.",
      results: "Снижение брака на 15%, увеличение производительности на 200%.",
      specs: ["Производительность: 1200 ед/час", "Энергопотребление: 12 кВт", "Занимаемая площадь: 45 м²"]
    },
    { 
      id: 2,
      title: "Система очистки сточных вод", 
      category: "Экология", 
      img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format,compress&fit=crop&q=60&w=800&fm=webp",
      problem: "Очистка промышленных стоков до норм ПДК для сброса в городскую сеть.",
      solution: "Проектирование модульной станции физико-химической очистки с автоматическим контролем параметров.",
      results: "Полное соответствие экологическим нормам, экономия на штрафах.",
      specs: ["Объем очистки: 50 м³/сутки", "Степень очистки: 99.8%", "Автоматизация: Полная (SCADA)"]
    },
    { 
      id: 3,
      title: "Конвейерная система для склада", 
      category: "Логистика", 
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format,compress&fit=crop&q=60&w=800&fm=webp",
      problem: "Оптимизация перемещения грузов между 3 этажами склада.",
      solution: "Вертикальные подъемники и роликовые конвейеры с системой штрих-кодирования.",
      results: "Сокращение времени обработки заказов на 40%.",
      specs: ["Грузоподъемность: до 500 кг", "Скорость: 0.5 м/с", "Длина трассы: 120 м"]
    },
    { 
      id: 4,
      title: "Нестандартный пресс для металла", 
      category: "Машиностроение", 
      img: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format,compress&fit=crop&q=60&w=800&fm=webp",
      problem: "Прессование специфических деталей сложной формы из тугоплавких сплавов.",
      solution: "Гидравлический пресс с усилием 500 тонн и ЧПУ управлением.",
      results: "Возможность производства уникальных деталей, ранее закупаемых за рубежом.",
      specs: ["Усилие: 5000 кН", "Точность позиционирования: 0.01 мм", "Рабочая зона: 1200x1200x800 мм"]
    },
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
              onClick={() => onSelectCase(c)}
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

const CaseDetail = ({ caseItem, onClose, onOpenContact }: { caseItem: any, onClose: () => void, onOpenContact: (title: string) => void }) => {
  if (!caseItem) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-industrial-black/95 backdrop-blur-xl overflow-y-auto pt-20 pb-10"
    >
      <div className="max-w-5xl mx-auto px-6">
        <button 
          onClick={onClose}
          className="fixed top-8 right-8 w-14 h-14 bg-white/10 hover:bg-accent text-white rounded-full flex items-center justify-center transition-all duration-300 z-[110]"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="text-accent text-xs font-black uppercase tracking-[0.3em] mb-6">{caseItem.category}</div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-10 tracking-tighter leading-tight">
              {caseItem.title}
            </h2>
            
            <div className="space-y-12">
              <div>
                <h3 className="text-accent text-[10px] font-black uppercase tracking-widest mb-4">Задача</h3>
                <p className="text-xl text-gray-300 leading-relaxed font-medium">
                  {caseItem.problem}
                </p>
              </div>
              
              <div>
                <h3 className="text-accent text-[10px] font-black uppercase tracking-widest mb-4">Решение</h3>
                <p className="text-lg text-gray-400 leading-relaxed">
                  {caseItem.solution}
                </p>
              </div>

              <div>
                <h3 className="text-accent text-[10px] font-black uppercase tracking-widest mb-4">Результат</h3>
                <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
                  <p className="text-lg text-white font-bold leading-relaxed">
                    {caseItem.results}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-10"
          >
            <div className="rounded-[40px] overflow-hidden shadow-2xl border border-white/10">
              <img 
                src={caseItem.img} 
                alt={caseItem.title} 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="bg-white/5 p-10 rounded-[40px] border border-white/10">
              <h3 className="text-white font-bold text-xl mb-6">Технические характеристики</h3>
              <ul className="space-y-4">
                {caseItem.specs.map((spec: string, i: number) => (
                  <li key={i} className="flex items-center gap-4 text-gray-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-sm font-medium">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button 
              onClick={() => {
                onClose();
                onOpenContact(`Обсудить проект: ${caseItem.title}`);
              }}
              className="w-full py-6 bg-accent text-white font-black uppercase tracking-widest rounded-3xl hover:bg-white hover:text-industrial-black transition-all duration-500 shadow-2xl shadow-accent/20"
            >
              Хочу такой же проект
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
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
    <section id="workflow" className="pt-32 pb-16 bg-industrial-gray/30">
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
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

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
                <a href="tel:+74997118084" className="text-xl font-bold hover:text-accent transition-colors">+7 (499) 711-80-84</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-white rounded-xl shadow-sm">
                <Mail className="text-accent w-6 h-6" />
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Email</div>
                <a href="mailto:info@romiongroup.ru" className="text-xl font-bold hover:text-accent transition-colors">info@romiongroup.ru</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-white rounded-xl shadow-sm">
                <Settings className="text-accent w-6 h-6" />
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Тендерный отдел</div>
                <div className="text-lg font-bold">Смирнов Никита Сергеевич</div>
                <a href="tel:+74997118084,320" className="text-lg font-bold hover:text-accent transition-colors">+7 (499) 711-80-84 (доб. 320)</a>
                <div className="mt-1">
                  <a href="mailto:n.smirnov@romion.ru" className="text-sm font-medium text-gray-500 hover:text-accent">n.smirnov@romion.ru</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="text-3xl font-black mb-4 tracking-tight text-industrial-black">Заявка отправлена!</h2>
              <p className="text-gray-500 mb-8">Спасибо за обращение. Наши специалисты свяжутся с вами в ближайшее время.</p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="px-8 py-3 bg-industrial-black text-white font-bold rounded-xl hover:bg-accent transition-all"
              >
                Отправить еще раз
              </button>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2 uppercase tracking-wider text-gray-400">Имя</label>
                  <input required type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-accent transition-colors" placeholder="Иван Иванов" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 uppercase tracking-wider text-gray-400">Телефон</label>
                  <input required type="tel" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-accent transition-colors" placeholder="+7 (___) ___-__-__" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 uppercase tracking-wider text-gray-400">Сообщение</label>
                <textarea rows={4} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-accent transition-colors" placeholder="Опишите вашу задачу..." />
              </div>
              <button type="submit" className="w-full py-4 bg-accent text-white font-bold rounded-lg hover:bg-accent/90 transition-all shadow-lg shadow-accent/20">
                Отправить заявку
              </button>
              <p className="text-[10px] text-gray-400 text-center">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности и обработкой персональных данных.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

const Footer = ({ onOpenLegal }: { onOpenLegal: (type: 'privacy' | 'consent' | 'requisites') => void }) => {
  return (
    <footer className="bg-white border-t border-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex items-center">
          <img 
            src="/logo.png" 
            alt="РОМИОН ГРУПП" 
            className="h-32 object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
          <button onClick={() => onOpenLegal('privacy')} className="hover:text-accent transition-colors">Политика конфиденциальности</button>
          <button onClick={() => onOpenLegal('consent')} className="hover:text-accent transition-colors">Согласие на обработку данных</button>
          <button onClick={() => onOpenLegal('requisites')} className="hover:text-accent transition-colors">Реквизиты</button>
        </div>

        <div className="text-sm text-gray-400">
          © {new Date().getFullYear()} ООО "РГ". Все права защищены.
        </div>
      </div>
    </footer>
  );
};

const LegalModal = ({ type, onClose }: { type: 'privacy' | 'consent' | 'requisites', onClose: () => void }) => {
  const content = {
    privacy: {
      title: "Политика конфиденциальности",
      body: `
        <h3>1. Общие положения</h3>
        <p>Настоящая политика обработки персональных данных составлена в соответствии с требованиями Федерального закона от 27.07.2006. №152-ФЗ «О персональных данных» и определяет порядок обработки персональных данных и меры по обеспечению безопасности персональных данных ООО "РГ" (далее — Оператор).</p>
        <p>Оператор ставит своей важнейшей целью и условием осуществления своей деятельности соблюдение прав и свобод человека и гражданина при обработке его персональных данных, в том числе защиты прав на неприкосновенность частной жизни, личную и семейную тайну.</p>
        
        <h3>2. Основные понятия, используемые в Политике</h3>
        <p>Персональные данные — любая информация, относящаяся прямо или косвенно к определенному или определяемому Пользователю веб-сайта.</p>
        <p>Обработка персональных данных — любое действие (операция) или совокупность действий (операций), совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными.</p>
        
        <h3>3. Оператор может обрабатывать следующие персональные данные Пользователя</h3>
        <ul>
          <li>Фамилия, имя, отчество;</li>
          <li>Номер телефона;</li>
          <li>Адрес электронной почты.</li>
        </ul>
        
        <h3>4. Цели обработки персональных данных</h3>
        <p>Цель обработки персональных данных Пользователя — информирование Пользователя посредством отправки электронных писем; предоставление доступа Пользователю к сервисам, информации и/или материалам, содержащимся на веб-сайте; уточнение деталей заказа.</p>
        
        <h3>5. Правовые основания обработки персональных данных</h3>
        <p>Оператор обрабатывает персональные данные Пользователя только в случае их заполнения и/или отправки Пользователем самостоятельно через специальные формы, расположенные на сайте. Заполняя соответствующие формы и/или отправляя свои персональные данные Оператору, Пользователь выражает свое согласие с данной Политикой.</p>
        
        <h3>6. Порядок сбора, хранения, передачи и других видов обработки персональных данных</h3>
        <p>Безопасность персональных данных, которые обрабатываются Оператором, обеспечивается путем реализации правовых, организационных и технических мер, необходимых для выполнения в полном объеме требований действующего законодательства в области защиты персональных данных.</p>
      `
    },
    consent: {
      title: "Согласие на обработку персональных данных",
      body: `
        <p>Пользователь, оставляя заявку на интернет-сайте, принимает настоящее Согласие на обработку персональных данных (далее — Согласие).</p>
        <p>Действуя свободно, своей волей и в своем интересе, а также подтверждая свою дееспособность, Пользователь дает свое согласие ООО "РГ", которое расположено по адресу: 119121, г. Москва, Земледельческий пер, д. 11, помещ. 1/2, на обработку своих персональных данных со следующими условиями:</p>
        
        <ul>
          <li>Данное Согласие дается на обработку персональных данных, как без использования средств автоматизации, так и с их использованием.</li>
          <li>Согласие дается на обработку следующих персональных данных: имя, номера контактных телефонов, адреса электронной почты.</li>
          <li>Цель обработки персональных данных: ответ на запросы Пользователя, предоставление коммерческих предложений, информирование об услугах.</li>
          <li>Основанием для обработки персональных данных является: Ст. 24 Конституции Российской Федерации; ст.6 Федерального закона №152-ФЗ «О персональных данных».</li>
        </ul>
        
        <p>Персональные данные обрабатываются до отписки физического лица от рекламных и информационных рассылок. Также обработка персональных данных может быть прекращена по запросу субъекта персональных данных.</p>
      `
    },
    requisites: {
      title: "Реквизиты компании",
      body: `
        <p><strong>Полное наименование:</strong> Общество с ограниченной ответственностью "РГ"</p>
        <p><strong>Сокращенное наименование:</strong> ООО "РГ"</p>
        <p><strong>ИНН:</strong> 9702012878</p>
        <p><strong>ОГРН:</strong> 1197746757900</p>
        <p><strong>Юридический адрес:</strong> 119121, г. Москва, Земледельческий пер, д. 11, помещ. 1/2</p>
        <p><strong>Генеральный директор:</strong> Будюгин Р. Н.</p>
      `
    }
  };

  const current = content[type];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-industrial-black/90 backdrop-blur-md flex items-center justify-center p-6"
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-[32px] w-full max-w-3xl max-h-[80vh] overflow-y-auto p-10 relative shadow-2xl"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-6 h-6 text-gray-400" />
        </button>
        
        <h2 className="text-3xl font-black mb-8 tracking-tight text-industrial-black">{current.title}</h2>
        <div 
          className="prose prose-sm max-w-none text-gray-600 space-y-4"
          dangerouslySetInnerHTML={{ __html: current.body }}
        />
      </motion.div>
    </motion.div>
  );
};

const Production = () => {
  return (
    <section id="production" className="pt-16 pb-32 bg-white">
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
              ООО "РГ" — это современное предприятие, объединяющее конструкторское бюро и производственные мощности. Мы специализируемся на создании уникального технологического оборудования, которое решает специфические задачи вашего бизнеса.
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
              <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format,compress&fit=crop&q=60&w=600&fm=webp" alt="Engineering 1" className="rounded-[32px] w-full h-80 object-cover shadow-2xl" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
              <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format,compress&fit=crop&q=60&w=600&fm=webp" alt="Engineering 2" className="rounded-[32px] w-full h-60 object-cover shadow-2xl" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
            </div>
            <div className="space-y-6 pt-12">
              <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format,compress&fit=crop&q=60&w=600&fm=webp" alt="Engineering 3" className="rounded-[32px] w-full h-60 object-cover shadow-2xl" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format,compress&fit=crop&q=60&w=600&fm=webp" alt="Engineering 4" className="rounded-[32px] w-full h-80 object-cover shadow-2xl" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CTA = ({ onOpenContact }: { onOpenContact: (title: string) => void }) => {
  return (
    <section className="py-16 bg-accent">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-white">
        <div>
          <h2 className="text-3xl font-bold mb-2">Нужен расчет стоимости оборудования?</h2>
          <p className="text-white/80">Оставьте заявку, и мы подготовим КП за 5 рабочих дней.</p>
        </div>
        <button 
          onClick={() => onOpenContact('Получить коммерческое предложение')}
          className="px-10 py-4 bg-white text-accent font-bold rounded-xl hover:bg-gray-100 transition-all shadow-xl"
        >
          Получить КП
        </button>
      </div>
    </section>
  );
};

const ContactModal = ({ title, onClose }: { title: string, onClose: () => void }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[150] bg-industrial-black/90 backdrop-blur-md flex items-center justify-center p-6"
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-[32px] w-full max-w-xl p-10 relative shadow-2xl"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-6 h-6 text-gray-400" />
        </button>
        
        {isSubmitted ? (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-black mb-4 tracking-tight text-industrial-black">Заявка отправлена!</h2>
            <p className="text-gray-500 mb-8">Спасибо за обращение. Наши специалисты свяжутся с вами в ближайшее время.</p>
            <button 
              onClick={onClose}
              className="px-8 py-3 bg-industrial-black text-white font-bold rounded-xl hover:bg-accent transition-all"
            >
              Закрыть
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-3xl font-black mb-2 tracking-tight text-industrial-black">{title}</h2>
            <p className="text-gray-500 mb-8">Заполните форму, и мы свяжемся с вами в ближайшее время.</p>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-bold mb-2 uppercase tracking-wider text-gray-400">Имя</label>
                <input required type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-accent transition-colors" placeholder="Иван Иванов" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 uppercase tracking-wider text-gray-400">Телефон</label>
                <input required type="tel" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-accent transition-colors" placeholder="+7 (___) ___-__-__" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 uppercase tracking-wider text-gray-400">Сообщение</label>
                <textarea rows={3} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-accent transition-colors" placeholder="Опишите вашу задачу..." />
              </div>
              <button type="submit" className="w-full py-4 bg-accent text-white font-bold rounded-lg hover:bg-accent/90 transition-all shadow-lg shadow-accent/20">
                Отправить заявку
              </button>
              <p className="text-[10px] text-gray-400 text-center">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности и обработкой персональных данных.
              </p>
            </form>
          </>
        )}
      </motion.div>
    </motion.div>
  );
};

export default function App() {
  const [selectedCase, setSelectedCase] = useState<any>(null);
  const [activeLegalDoc, setActiveLegalDoc] = useState<'privacy' | 'consent' | 'requisites' | null>(null);
  const [contactModalData, setContactModalData] = useState<{ isOpen: boolean, title: string }>({ isOpen: false, title: '' });

  useEffect(() => {
    if (selectedCase || activeLegalDoc || contactModalData.isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedCase, activeLegalDoc, contactModalData.isOpen]);

  const openContactModal = (title: string) => {
    setContactModalData({ isOpen: true, title });
  };

  return (
    <div className="antialiased selection:bg-accent selection:text-white">
      <Navbar onOpenContact={openContactModal} />
      <main>
        <Hero onOpenContact={openContactModal} />
        <Services />
        <Cases onSelectCase={setSelectedCase} />
        <Workflow />
        <Production />
        <CTA onOpenContact={openContactModal} />
        <Contact />
      </main>
      <Footer onOpenLegal={setActiveLegalDoc} />

      <AnimatePresence>
        {selectedCase && (
          <CaseDetail 
            caseItem={selectedCase} 
            onClose={() => setSelectedCase(null)} 
            onOpenContact={openContactModal}
          />
        )}
        {activeLegalDoc && (
          <LegalModal type={activeLegalDoc} onClose={() => setActiveLegalDoc(null)} />
        )}
        {contactModalData.isOpen && (
          <ContactModal 
            title={contactModalData.title} 
            onClose={() => setContactModalData({ ...contactModalData, isOpen: false })} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
