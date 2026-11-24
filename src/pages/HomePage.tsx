import { useState } from 'react';
import { ArrowUpRight, Map } from 'lucide-react';
import { PageKey, RECENT_ACTIVITY } from '../data/academicData';

interface HomePageProps {
  onNavigate: (page: PageKey) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [heroImgFailed, setHeroImgFailed] = useState(false);
  const [avatarFailed, setAvatarFailed] = useState(false);

  return (
    <div className="space-y-16 sm:space-y-20">
      <section aria-labelledby="home-heading" className="pt-2 sm:pt-4">
        <h1
          id="home-heading"
          className="font-serif text-3xl sm:text-4xl lg:text-[2.65rem] font-normal tracking-[0.04em] text-stone-950 uppercase leading-tight [text-wrap:balance] mb-8 sm:mb-10"
        >
          HOSSAIN AL RASHED BADOL
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <figure>
              <div className="aspect-[3/4] w-full overflow-hidden border border-stone-200 bg-[#EDE8DD]">
                {!heroImgFailed ? (
                  <img
                    src="/assets/aistudio/WhatsApp_Image_2026-11-22_at_11.07.06_AM_a9895553.jpeg"
                    alt="Portrait of Md Hossain Al Rashed Badol"
                    referrerPolicy="no-referrer"
                    onError={() => setHeroImgFailed(true)}
                    className="w-full h-full object-cover object-[50%_20%]"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-[#F3EFE6] via-[#E8DFCE] to-[#D8CCB8] text-stone-700">
                    <Map className="w-8 h-8 mb-3 text-stone-500" aria-hidden="true" />
                    <p className="font-serif text-sm italic">
                      Md Hossain Al Rashed Badol
                    </p>
                  </div>
                )}
              </div>
              <figcaption className="mt-2.5 text-xs font-serif italic text-stone-500">
                Md Hossain Al Rashed Badol — Legal Researcher &amp; Law Clerk.
              </figcaption>
            </figure>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-between space-y-8">
            <div className="space-y-5 text-[17px] sm:text-[18px] leading-[1.75] text-stone-800 max-w-prose">
              <p>
                I am a legal researcher and law professional specializing in international
                trade and business law, international law, and environmental rights. I
                currently serve as a Law Clerk at Pima County Justice Court, Arizona,
                and previously worked as a Research Assistant with the Ecological Rights
                Project at the University of Arizona. My research focuses on
                international trade law, global governance, environmental justice, and
                international dispute settlement. I am also a published researcher, a
                Munger Prize Scholar in International and Business Law, and a recipient
                of the CALI Excellence for the Future Award in International Trade Law.
              </p>
            </div>

            <div className="pt-6 border-t border-stone-200/90 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
              <a
                href="#/research"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('research');
                }}
                className="academic-link inline-flex items-center gap-1 font-medium text-stone-900"
              >
                <span>Published Research</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-stone-500" aria-hidden="true" />
              </a>
              <a
                href="#/working-papers"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('working-papers');
                }}
                className="academic-link inline-flex items-center gap-1 font-medium text-stone-900"
              >
                <span>Working Papers</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-stone-500" aria-hidden="true" />
              </a>
              <a
                href="#/cv"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('cv');
                }}
                className="academic-link inline-flex items-center gap-1 font-medium text-stone-900"
              >
                <span>Curriculum Vitae</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-stone-500" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="recent-activity-heading"
        className="pt-12 border-t border-stone-200/90"
      >
        <div className="flex items-baseline justify-between gap-4 mb-8">
          <h2
            id="recent-activity-heading"
            className="font-serif text-xl sm:text-2xl font-normal text-stone-900"
          >
            Recent Activity
          </h2>
          <a
            href="mailto:rashedbadol@arizona.edu"
            className="academic-link text-sm text-stone-600 whitespace-nowrap"
          >
            rashedbadol@arizona.edu
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {RECENT_ACTIVITY.map((post) => (
            <article
              key={post.id}
              className="border border-stone-200/90 bg-white/80 p-5 sm:p-6 transition-colors hover:border-stone-300"
            >
              <div className="flex items-center gap-3 mb-3.5">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-stone-200 bg-stone-100 shrink-0 flex items-center justify-center">
                  {!avatarFailed ? (
                    <img
                      src="/assets/aistudio/WhatsApp_Image_2026-11-22_at_11.07.06_AM_a9895553.jpeg"
                      alt="Md Hossain Al Rashed Badol"
                      referrerPolicy="no-referrer"
                      onError={() => setAvatarFailed(true)}
                      className="w-full h-full object-cover object-[56%_32%]"
                    />
                  ) : (
                    <span className="font-serif text-xs font-semibold text-stone-700">
                      HB
                    </span>
                  )}
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-semibold text-stone-900 truncate">
                    Md Hossain Al Rashed Badol
                  </p>
                  <p className="text-xs text-stone-500">
                    <span>{post.platform}</span>
                    <span className="mx-1.5" aria-hidden="true">
                      ·
                    </span>
                    <time>{post.date}</time>
                  </p>
                </div>
              </div>

              <p className="text-[15px] leading-relaxed text-stone-700">
                {post.text}
                {post.linkUrl && post.linkLabel && (
                  <>
                    {' '}
                    <a
                      href={post.linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="academic-link text-stone-900"
                    >
                      {post.linkLabel}
                    </a>
                  </>
                )}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
