import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, PageKey } from '../data/academicData';

interface NavbarProps {
  activePage: PageKey;
  onNavigate: (page: PageKey) => void;
}

export function Navbar({ activePage, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [activePage]);

  const handleLinkClick = (e: React.MouseEvent, page: PageKey) => {
    e.preventDefault();
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-30 bg-[#FAF9F6]/95 backdrop-blur-sm border-b border-stone-200/90">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 h-16 md:h-20 flex items-center justify-between gap-8">
        <a
          href="#/"
          onClick={(e) => handleLinkClick(e, 'home')}
          className="font-serif text-base sm:text-lg font-bold tracking-tight text-stone-900 hover:text-stone-700 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-700"
        >
          Md Hossain Al Rashed
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activePage === item.key;
            return (
              <a
                key={item.key}
                href={item.hash}
                onClick={(e) => handleLinkClick(e, item.key)}
                aria-current={isActive ? 'page' : undefined}
                className={`relative py-1 text-xs font-semibold tracking-[0.14em] uppercase whitespace-nowrap shrink-0 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-700 ${
                  isActive
                    ? 'text-stone-950'
                    : 'text-stone-500 hover:text-stone-900'
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 -bottom-0.5 h-[1.5px] bg-stone-900 transition-opacity duration-200 ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="md:hidden inline-flex items-center justify-center w-11 h-11 -mr-2 text-stone-800 hover:text-stone-950 transition-colors focus-visible:outline-2 focus-visible:outline-stone-700"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="md:hidden border-t border-stone-200 bg-[#FAF9F6] px-6 py-4"
        >
          <ul className="flex flex-col divide-y divide-stone-200/70">
            {NAV_ITEMS.map((item) => {
              const isActive = activePage === item.key;
              return (
                <li key={item.key}>
                  <a
                    href={item.hash}
                    onClick={(e) => handleLinkClick(e, item.key)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`flex items-center justify-between min-h-[44px] py-2.5 text-xs font-semibold tracking-[0.14em] uppercase transition-colors ${
                      isActive ? 'text-stone-950' : 'text-stone-600 hover:text-stone-950'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="text-[11px] font-normal normal-case tracking-normal text-stone-500">
                        Current
                      </span>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
