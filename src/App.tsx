import { useEffect, useState } from 'react';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { PageKey } from './data/academicData';
import { CoursesPage } from './pages/CoursesPage';
import { CvPage } from './pages/CvPage';
import { HomePage } from './pages/HomePage';
import { ResearchPage } from './pages/ResearchPage';
import { WorkingPapersPage } from './pages/WorkingPapersPage';

const HASH_TO_PAGE: Record<string, PageKey> = {
  '': 'home',
  '#/': 'home',
  '#/home': 'home',
  '#/courses': 'courses',
  '#/cv': 'cv',
  '#/working-papers': 'working-papers',
  '#/research': 'research',
};

const PAGE_TO_HASH: Record<PageKey, string> = {
  home: '#/',
  courses: '#/courses',
  cv: '#/cv',
  'working-papers': '#/working-papers',
  research: '#/research',
};

const PAGE_TITLES: Record<PageKey, string> = {
  home: 'Hossain Al Rashed Badol — Political Science',
  courses: 'Courses — Hossain Al Rashed Badol',
  cv: 'Curriculum Vitae — Hossain Al Rashed Badol',
  'working-papers': 'Working Papers — Hossain Al Rashed Badol',
  research: 'Research — Hossain Al Rashed Badol',
};

function getPageFromHash(): PageKey {
  const hash = window.location.hash.toLowerCase();
  return HASH_TO_PAGE[hash] ?? 'home';
}

export default function App() {
  const [activePage, setActivePage] = useState<PageKey>(getPageFromHash);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const onHashChange = () => {
      setActivePage(getPageFromHash());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    document.title = PAGE_TITLES[activePage];
  }, [activePage]);

  const handleNavigate = (nextPage: PageKey) => {
    if (nextPage === activePage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    setIsTransitioning(true);
    window.history.pushState(null, '', PAGE_TO_HASH[nextPage]);
    setTimeout(() => {
      setActivePage(nextPage);
      setIsTransitioning(false);
      window.scrollTo({ top: 0, behavior: 'auto' });
    }, 110);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-stone-900">
      <Navbar activePage={activePage} onNavigate={handleNavigate} />

      <main
        className={`flex-1 w-full max-w-5xl mx-auto px-6 sm:px-8 py-10 sm:py-14 transition-opacity duration-150 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {activePage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {activePage === 'courses' && <CoursesPage />}
        {activePage === 'cv' && <CvPage />}
        {activePage === 'working-papers' && <WorkingPapersPage />}
        {activePage === 'research' && <ResearchPage />}
      </main>

      <Footer />
    </div>
  );
}
