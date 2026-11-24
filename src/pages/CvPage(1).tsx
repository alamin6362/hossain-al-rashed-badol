import { Download, ExternalLink } from 'lucide-react';
import { CV_DATA, CV_PDF_URL, PUBLICATIONS } from '../data/academicData';

export function CvPage() {
  const academicResearch = PUBLICATIONS.filter(
    (item) => item.category === 'Journal & Academic'
  );
  const publicAffairsWriting = PUBLICATIONS.filter(
    (item) => item.category === 'Legal & Public Affairs'
  );

  return (
    <section aria-labelledby="cv-heading" className="pt-2 sm:pt-4 max-w-4xl">
      <header className="mb-10 pb-6 border-b border-stone-200/90">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h1
              id="cv-heading"
              className="font-serif text-3xl sm:text-4xl font-normal text-stone-950 [text-wrap:balance]"
            >
              Curriculum Vitae
            </h1>
            <p className="mt-2 text-base font-medium text-stone-800">
              {CV_DATA.fullName}
            </p>
            <p className="mt-1 text-sm text-stone-600">
              <a
                href={`mailto:${CV_DATA.email}`}
                className="academic-link text-stone-700"
              >
                {CV_DATA.email}
              </a>
              <span className="mx-2" aria-hidden="true">
                ·
              </span>
              <span className="tabular-nums">{CV_DATA.phone}</span>
              <span className="mx-2" aria-hidden="true">
                ·
              </span>
              <span>{CV_DATA.location}</span>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={CV_PDF_URL}
              download="Md_Hossain_Al_Rashed_Badol_CV.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 bg-stone-900 text-[#FAF9F6] text-xs sm:text-sm font-medium tracking-wide hover:bg-stone-800 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900"
            >
              <Download className="w-4 h-4" aria-hidden="true" />
              <span>Download Full CV (PDF)</span>
            </a>

            <a
              href={CV_PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-stone-300 text-stone-800 text-xs sm:text-sm font-medium hover:border-stone-500 hover:text-stone-950 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900"
            >
              <span>Open PDF</span>
              <ExternalLink className="w-3.5 h-3.5 text-stone-500" aria-hidden="true" />
            </a>
          </div>
        </div>
      </header>

      <div className="space-y-12">
        <div>
          <h2 className="text-xs font-semibold tracking-[0.14em] uppercase text-stone-500 mb-4">
            Academic Qualification
          </h2>
          <dl className="divide-y divide-stone-200/80 border-t border-stone-200/80">
            {CV_DATA.education.map((edu) => (
              <div
                key={edu.degree + edu.period}
                className="py-4 flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-6"
              >
                <div>
                  <dt className="font-medium text-stone-900 text-[16px]">
                    {edu.degree}
                  </dt>
                  <dd className="text-sm text-stone-600 mt-0.5">{edu.institution}</dd>
                </div>
                <dd className="text-sm text-stone-500 whitespace-nowrap tabular-nums shrink-0">
                  {edu.period}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <h2 className="text-xs font-semibold tracking-[0.14em] uppercase text-stone-500 mb-4">
            Legal, Teaching &amp; Professional Experience
          </h2>
          <dl className="divide-y divide-stone-200/80 border-t border-stone-200/80">
            {CV_DATA.experience.map((exp) => (
              <div
                key={exp.role + exp.organization}
                className="py-3.5 flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-6"
              >
                <div>
                  <dt className="font-medium text-stone-900 text-[15.5px]">
                    {exp.role}
                  </dt>
                  <dd className="text-sm text-stone-600 mt-0.5">{exp.organization}</dd>
                </div>
                <dd className="text-sm text-stone-500 whitespace-nowrap tabular-nums shrink-0">
                  {exp.period}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <h2 className="text-xs font-semibold tracking-[0.14em] uppercase text-stone-500 mb-4">
            Research &amp; Publications
          </h2>
          <ul className="divide-y divide-stone-200/80 border-t border-stone-200/80">
            {academicResearch.map((pub) => (
              <li key={pub.id} className="py-3.5 text-[15.5px] leading-relaxed text-stone-800">
                <span>{pub.authors} ({pub.year}). </span>
                <span>&ldquo;{pub.title}.&rdquo; </span>
                <em className="font-serif italic">{pub.journal}</em>
                {pub.note ? ` (${pub.note})` : ''}.
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold tracking-[0.14em] uppercase text-stone-500 mb-4">
            Selected Awards &amp; Scholarships
          </h2>
          <ul className="space-y-2.5 text-[15.5px] leading-relaxed text-stone-800 border-t border-stone-200/80 pt-4">
            {CV_DATA.awards.map((award) => (
              <li key={award}>{award}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold tracking-[0.14em] uppercase text-stone-500 mb-4">
            Selected Legal &amp; Public Affairs Writing
          </h2>
          <ul className="divide-y divide-stone-200/80 border-t border-stone-200/80">
            {publicAffairsWriting.map((essay) => (
              <li key={essay.id} className="py-3 text-[15px] leading-relaxed text-stone-800">
                <span>&ldquo;{essay.title},&rdquo; </span>
                <em className="font-serif italic">{essay.journal}</em>, {essay.year}.
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold tracking-[0.14em] uppercase text-stone-500 mb-4">
            Special Training Courses &amp; Sessions
          </h2>
          <ul className="divide-y divide-stone-200/80 border-t border-stone-200/80">
            {CV_DATA.training.map((item) => (
              <li key={item.title} className="py-3 text-[15px] leading-relaxed text-stone-800">
                <span className="font-medium text-stone-900">{item.title}</span>
                <span className="text-stone-600"> — {item.institution}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold tracking-[0.14em] uppercase text-stone-500 mb-4">
            Digital Skills
          </h2>
          <dl className="divide-y divide-stone-200/80 border-t border-stone-200/80">
            {CV_DATA.skills.map((skill) => (
              <div
                key={skill.label}
                className="py-3 flex flex-col sm:flex-row sm:gap-6 text-[15px]"
              >
                <dt className="font-medium text-stone-900 sm:w-40 shrink-0">
                  {skill.label}
                </dt>
                <dd className="text-stone-700">{skill.items}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <h2 className="text-xs font-semibold tracking-[0.14em] uppercase text-stone-500 mb-4">
            Leadership, Service &amp; Extracurricular Activities
          </h2>
          <ul className="space-y-2.5 text-[15px] leading-relaxed text-stone-800 border-t border-stone-200/80 pt-4">
            {CV_DATA.leadership.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold tracking-[0.14em] uppercase text-stone-500 mb-4">
            Additional Honors
          </h2>
          <ul className="space-y-2 text-[15px] leading-relaxed text-stone-800 border-t border-stone-200/80 pt-4">
            {CV_DATA.additionalHonors.map((honor) => (
              <li key={honor}>{honor}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold tracking-[0.14em] uppercase text-stone-500 mb-4">
            References
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-stone-200/80 pt-5">
            {CV_DATA.references.map((ref) => (
              <div key={ref.name} className="space-y-1 text-[15px]">
                <p className="font-medium text-stone-900">{ref.name}</p>
                <p className="text-stone-700">{ref.title}</p>
                <p className="text-stone-600">{ref.institution}</p>
                <p className="text-sm text-stone-600 tabular-nums pt-0.5">{ref.contact}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
