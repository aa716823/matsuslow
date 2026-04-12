import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Waves, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const menuItems = [
    { id: 1, label: '慢島時間收集・鷗霸拼圖行動', href: '/collection', route: '/collection' },
    { id: 2, label: '芹壁慢慢走・鷗霸夥伴行動', href: '/chinbi', route: '/chinbi' },
    { id: 3, label: '慢島夜行・追星追淚體驗', href: '/nightexplore', route: '/nightexplore' },
    { id: 4, label: '藍調時光市集－慢語時光', href: '#market', route: null },
    { id: 5, label: '藍調手作體驗所', href: '#workshop', route: null },
    { id: 6, label: '影音專區', href: '#media', route: null },
  ];

  const getItemClass = (item: typeof menuItems[0]) => {
    const isActive = item.route && location.pathname === item.route;
    if (isActive) {
      return isScrolled || isMobileMenuOpen
        ? 'text-blue-600 font-semibold border-b-2 border-blue-500 pb-0.5'
        : 'text-[#fff6c8] font-semibold border-b-2 border-[#fff6c8] pb-0.5';
    }
    return isScrolled || isMobileMenuOpen
      ? 'text-gray-700 hover:text-blue-500'
      : 'text-white hover:text-[#fff6c8]';
  };

  const getMobileItemClass = (item: typeof menuItems[0]) => {
    const isActive = item.route && location.pathname === item.route;
    if (isActive) {
      return isScrolled || isMobileMenuOpen ? 'text-blue-600 font-semibold' : 'text-[#fff6c8] font-semibold';
    }
    return isScrolled || isMobileMenuOpen ? 'text-gray-700 hover:text-blue-500' : 'text-white hover:text-[#fff6c8]';
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[95rem] mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <Waves
              className={`w-8 h-8 transition-colors ${
                isScrolled || isMobileMenuOpen ? 'text-blue-600' : 'text-white'
              }`}
              strokeWidth={1.5}
            />
            <span
              className={`text-xl font-bold transition-colors ${
                isScrolled || isMobileMenuOpen ? 'text-gray-900' : 'text-white'
              }`}
            >
              慢島時間收集所
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`transition-colors ${getItemClass(item)}`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden transition-colors ${
              isScrolled || isMobileMenuOpen ? 'text-gray-900' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4 pb-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`transition-colors ${getMobileItemClass(item)}`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
