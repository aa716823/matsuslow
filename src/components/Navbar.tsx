import { useState, useEffect } from 'react';
import { Waves, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    // { id: 1, label: '慢島時間收集', href: '#collection' },
    // { id: 2, label: '芹壁慢慢走', href: '#chinbi' },
    // { id: 3, label: '追星追淚', href: '#nightexplore' },
    // { id: 4, label: '藍調市集', href: '#market' },
    // { id: 5, label: '手作體驗', href: '#workshop' },
    // { id: 6, label: '影音專區', href: '#media' }

    { id: 1, label: '慢島時間收集・鷗霸拼圖行動', href: '#collection' },
    { id: 2, label: '芹壁慢慢走・鷗霸夥伴行動', href: '#chinbi' },
    { id: 3, label: '慢島夜行・追星追淚體驗', href: '#nightexplore' },
    { id: 4, label: '藍調時光市集－慢語時光', href: '#market' },
    { id: 5, label: '藍調手作體驗所', href: '#workshop' },
    { id: 6, label: '影音專區', href: '#media' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[95rem] mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Waves
              className={`w-8 h-8 transition-colors ${
                isScrolled ? 'text-blue-600' : 'text-white'
              }`}
              strokeWidth={1.5}
            />
            <span
              className={`text-xl font-bold transition-colors ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              慢島時間收集所
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`transition-colors ${
                  isScrolled
                    ? 'text-gray-700 hover:text-blue-500'
                    : 'text-white hover:text-[#fff6c8]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`transition-colors hover:text-blue-500 ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
