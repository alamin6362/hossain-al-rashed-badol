import { WORKING_PAPERS } from '../data/academicData';

export function WorkingPapersPage() {
  return (
    <section aria-labelledby="working-papers-heading" className="pt-2 sm:pt-4 max-w-3xl">
      <header className="mb-10 pb-6 border-b border-stone-200/90">
        <h1
          id="working-papers-heading"
          className="font-serif text-3xl sm:text-4xl font-normal text-stone-950 [text-wrap:balance]"
        >
          Working Papers
        </h1>
        <p className="mt-3 text-base text-stone-600 leading-relaxed">
          Manuscripts under review and ongoing research projects. Click any title to
          open the working draft (PDF).
        </p>
      </header>

      <ul className="divide-y divide-stone-200/90">
        {WORKING_PAPERS.map((paper) => (
          <li key={paper.id} className="py-7 first:pt-2">
            <p className="text-[17px] leading-[1.7] text-stone-900">
              <span>{paper.authors}. </span>
              <a
                href={paper.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link font-serif font-normal"
              >
                &ldquo;{paper.title}.&rdquo;
              </a>{' '}
              <span className="text-stone-600 text-[15px]">
                (Status: {paper.status})
              </span>
            </p>
            <p className="mt-2.5 text-[15px] leading-relaxed text-stone-600">
              {paper.abstract}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
