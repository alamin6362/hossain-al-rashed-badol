import { FileText, ArrowUpRight } from 'lucide-react';
import { COURSES } from '../data/academicData';

export function CoursesPage() {
  return (
    <section aria-labelledby="courses-heading" className="pt-2 sm:pt-4 max-w-3xl">
      <header className="mb-10 pb-6 border-b border-stone-200/90">
        <h1
          id="courses-heading"
          className="font-serif text-3xl sm:text-4xl font-normal text-stone-950 [text-wrap:balance]"
        >
          Courses
        </h1>
        <p className="mt-3 text-base text-stone-600 leading-relaxed">
          Law and international trade courses taught at Pundra University of Science and
          Technology and North East University. Syllabi are available as PDF documents.
        </p>
      </header>

      <ul className="divide-y divide-stone-200/90">
        {COURSES.map((course) => (
          <li key={course.id} className="py-8 first:pt-2">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-2.5">
              <div className="text-xs tracking-[0.12em] uppercase text-stone-500 font-medium">
                <span>{course.code}</span>
                <span className="mx-2" aria-hidden="true">
                  ·
                </span>
                <span>{course.level}</span>
              </div>
              <span className="text-xs text-stone-500">{course.term}</span>
            </div>

            <h2 className="font-serif text-xl sm:text-2xl text-stone-900 leading-snug">
              <a
                href={course.syllabusUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="academic-link inline-flex items-baseline gap-2 group"
              >
                <span>{course.title}</span>
                <ArrowUpRight
                  className="w-4 h-4 text-stone-400 group-hover:text-amber-900 transition-colors shrink-0 translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </h2>

            <p className="mt-3 text-[16px] leading-relaxed text-stone-700">
              {course.summary}
            </p>

            <div className="mt-4">
              <a
                href={course.syllabusUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-stone-800 hover:text-amber-900 transition-colors"
              >
                <FileText className="w-4 h-4 text-stone-500" aria-hidden="true" />
                <span className="underline decoration-stone-300 underline-offset-4 hover:decoration-amber-900">
                  View Syllabus (PDF)
                </span>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
