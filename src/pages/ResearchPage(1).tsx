import { useState } from 'react';
import { PUBLICATIONS } from '../data/academicData';

type ResearchFilter = 'All' | 'Journal & Academic' | 'Legal & Public Affairs';

export function ResearchPage() {
  const [selectedCategory, setSelectedCategory] = useState<ResearchFilter>('All');

  const categories: ResearchFilter[] = [
    'All',
    'Journal & Academic',
    'Legal & Public Affairs',
  ];

  const filteredPublications = PUBLICATIONS.filter((pub) => {
    if (selectedCategory === 'All') return true;
    return pub.category === selectedCategory;
  });

  return (
    <section aria-labelledby="research-heading" className="pt-2 sm:pt-4 max-w-3xl">
      <header className="mb-8 pb-6 border-b border-stone-200/90">
        <h1
          id="research-heading"
          className="font-serif text-3xl sm:text-4xl font-normal text-stone-950 [text-wrap:balance]"
        >
          Research
        </h1>
        <p className="mt-3 text-base text-stone-600 leading-relaxed">
          Peer-reviewed legal scholarship, thesis work, and selected legal &amp; public
          affairs writing in reverse chronological order.
        </p>

        <div
          role="group"
          aria-label="Filter publications by category"
          className="mt-6 flex flex-wrap items-center gap-2"
        >
          {categories.map((category) => {
            const active = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1.5 text-xs font-medium tracking-wide transition-colors border whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900 ${
                  active
                    ? 'bg-stone-900 text-[#FAF9F6] border-stone-900'
                    : 'bg-transparent text-stone-600 border-stone-300 hover:border-stone-500 hover:text-stone-900'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </header>

      <ol className="divide-y divide-stone-200/80">
        {filteredPublications.map((pub) => (
          <li key={pub.id} className="py-5 first:pt-2">
            <p className="text-[16.5px] leading-[1.7] text-stone-900 tabular-nums">
              <span>{pub.authors} </span>
              <span>({pub.year}). </span>
              <span>&ldquo;{pub.title}.&rdquo; </span>
              <em className="font-serif italic">{pub.journal}</em>
              {pub.note ? ` (${pub.note})` : ''}.{' '}
              <span className="text-stone-600">
                (
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="academic-link text-stone-800"
                >
                  find paper here
                </a>
                )
              </span>
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
