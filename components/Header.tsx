import React, { useState } from 'react';
import { Menu, X, LogIn } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: '計畫簡介', href: '#introduction' },
    { name: '最新消息', href: '#news-training' },
    { name: '防災士培訓', href: '#news-training' },
    { name: '關於我們', href: '#about' },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      // 關閉手機版選單
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <img
              src={`${import.meta.env.BASE_URL}logo.svg`}
              alt="內政部消防署徽"
              className="w-12 h-12 object-contain drop-shadow-sm"
            />
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 font-medium tracking-wider">內政部消防署</span>
              <span className="text-xl font-bold text-gray-900 tracking-tight">強韌臺灣計畫資訊網</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="text-gray-600 hover:text-teal-600 font-medium transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <button className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              <LogIn size={18} />
              登入
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-teal-600 p-2"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#"
              className="block w-full text-center mt-4 px-5 py-3 rounded-lg font-medium text-white bg-teal-600 hover:bg-teal-700"
            >
              業務人員登入
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;