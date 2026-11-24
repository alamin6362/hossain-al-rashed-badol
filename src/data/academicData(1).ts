export type PageKey = 'home' | 'courses' | 'cv' | 'working-papers' | 'research';

export interface NavItem {
  key: PageKey;
  label: string;
  hash: string;
}

export const NAV_ITEMS: NavItem[] = [
  { key: 'home', label: 'HOME', hash: '#/' },
  { key: 'courses', label: 'COURSES', hash: '#/courses' },
  { key: 'cv', label: 'CV', hash: '#/cv' },
  { key: 'working-papers', label: 'WORKING PAPERS', hash: '#/working-papers' },
  { key: 'research', label: 'RESEARCH', hash: '#/research' },
];

export const CV_PDF_URL = '/assets/aistudio/Md_Hossain_Al_Rashed_Badol_CV_ad7975ba.pdf';

export interface CourseItem {
  id: string;
  code: string;
  title: string;
  level: string;
  term: string;
  syllabusUrl: string;
  summary: string;
}

export const COURSES: CourseItem[] = [
  {
    id: 'business-trade-law',
    code: 'LAW',
    title: 'Business & International Trade Law',
    level: 'Instructor',
    term: 'Pundra University of Science and Technology (Sep 2022–Jul 2024)',
    syllabusUrl: '/syllabus-dictatorship.pdf',
    summary:
      'Covers the legal framework of international commerce, WTO rules and dispute settlement, cross-border commercial transactions, trade remedies, and regulatory governance in global markets.',
  },
  {
    id: 'foundations-of-law',
    code: 'LAW',
    title: 'Comparative & International Law Seminars',
    level: 'Instructor of Law',
    term: 'North East University (Dec 2021–Aug 2022)',
    syllabusUrl: '/syllabus-east-asia.pdf',
    summary:
      'Focuses on public international law, constitutional governance, human rights protections, environmental justice, and institutional accountability across domestic and international legal systems.',
  },
];

export interface WorkingPaperItem {
  id: string;
  authors: string;
  title: string;
  status: string;
  pdfUrl: string;
  abstract: string;
}

export const WORKING_PAPERS: WorkingPaperItem[] = [
  {
    id: 'wto-dsm-hegemony',
    authors: 'Md Hossain Al Rashed Badol',
    title: 'The WTO Dispute Settlement Mechanism and Its Role in Economic Hegemony',
    status: 'Selected for publication, Current Law Journal',
    pdfUrl: '/papers/wto-dispute-settlement-hegemony.pdf',
    abstract:
      'Analyzes how asymmetric legal capacity, retaliatory leverage, and compliance politics within the WTO Dispute Settlement Mechanism reproduce structural economic hierarchy while shaping coalition bargaining among emerging economies.',
  },
];

export interface PublicationItem {
  id: string;
  authors: string;
  year: number | string;
  title: string;
  journal: string;
  url: string;
  category: 'Journal & Academic' | 'Legal & Public Affairs';
  note?: string;
}

export const PUBLICATIONS: PublicationItem[] = [
  {
    id: 'pub-2025-intl-courts-hegemony',
    authors: 'Badol, H. A. R., & Dewan, R.',
    year: 2025,
    title:
      'Governance of global peace and security through the international courts: Serving a holistic purpose or maintaining hegemony?',
    journal: 'International Journal of Law, 11(3), 132–138',
    url: 'https://www.researchgate.net/publication/394107719_Governance_of_global_peace_and_security_through_the_international_courts_Serving_a_holistic_purpose_or_maintaining_hegemony',
    category: 'Journal & Academic',
  },
  {
    id: 'pub-wto-dsm-current-law',
    authors: 'Badol, H. A. R.',
    year: 'Forthcoming',
    title: 'The WTO Dispute Settlement Mechanism and Its Role in Economic Hegemony',
    journal: 'Current Law Journal',
    url: '/papers/wto-dispute-settlement-hegemony.pdf',
    category: 'Journal & Academic',
    note: 'Selected for publication',
  },
  {
    id: 'pub-2019-llb-thesis',
    authors: 'Badol, H. A. R.',
    year: 2019,
    title:
      'Violation of Land Rights and Human Rights of Religious Minority and Indigenous People of Bangladesh',
    journal: 'LL.B. Thesis, Faculty of Law, Jahangirnagar University',
    url: CV_PDF_URL,
    category: 'Journal & Academic',
  },
  {
    id: 'essay-2025-shaw-v-reno-gerrymandering',
    authors: 'Badol, M. H. A. R.',
    year: 2025,
    title:
      'What the U.S. Gerrymandering Debate Can Teach Bangladesh about Fair Political Representation and Democratic Accountability',
    journal: 'The Insight',
    url: 'https://theinsighta.com/p/a-case-analysis-of-shaw-v-reno-509',
    category: 'Legal & Public Affairs',
  },
  {
    id: 'essay-2025-yunus-obama',
    authors: 'Badol, M. H. A. R.',
    year: '23 Aug 2025',
    title: "Yunus's Predicament and the 'Obama Phenomenon' in Bangladesh",
    journal: 'The Insight',
    url: 'https://theinsighta.com/p/yunuss-predicament-and-the-obama',
    category: 'Legal & Public Affairs',
  },
  {
    id: 'essay-2025-pr-system',
    authors: 'Badol, M. H. A. R.',
    year: '18 Aug 2025',
    title: 'Why the Proportional Representation (PR) System Is Not Suitable for Bangladesh?',
    journal: 'Daily Shilpo Bangla',
    url: 'https://scholar.google.com/scholar?q=Why+Proportional+Representation+System+Not+Suitable+Bangladesh',
    category: 'Legal & Public Affairs',
  },
  {
    id: 'essay-2025-bangladesh-after-july',
    authors: 'Badol, M. H. A. R.',
    year: '2 Aug 2025',
    title: 'Bangladesh after July: Justice, Accountability, and State Responsibility',
    journal: 'Daily Shilpo Bangla',
    url: 'https://scholar.google.com/scholar?q=Bangladesh+after+July+Justice+Accountability+State+Responsibility',
    category: 'Legal & Public Affairs',
  },
  {
    id: 'essay-2025-climate-security',
    authors: 'Badol, M. H. A. R.',
    year: '18 Jun 2025',
    title: 'Climate Security and Geopolitics in the Context of Bangladesh',
    journal: 'AB News 24 BD',
    url: 'https://scholar.google.com/scholar?q=Climate+Security+and+Geopolitics+Bangladesh',
    category: 'Legal & Public Affairs',
  },
  {
    id: 'essay-2025-deep-state',
    authors: 'Badol, M. H. A. R.',
    year: '1 May 2025',
    title:
      "The Deep State in Bangladesh's Politics: Reality, Influence, and the Inevitability of Reform",
    journal: 'Daily Sorejomin Barta',
    url: 'https://scholar.google.com/scholar?q=Deep+State+Bangladesh+Politics+Reform',
    category: 'Legal & Public Affairs',
  },
  {
    id: 'essay-2025-constitutional-reform',
    authors: 'Badol, M. H. A. R.',
    year: '27 Jan 2025',
    title:
      'The Question of Constitutional Reform and a New Constitution in the Context of Present-Day Bangladesh',
    journal: 'Barta 24',
    url: 'https://scholar.google.com/scholar?q=Question+Constitutional+Reform+New+Constitution+Bangladesh',
    category: 'Legal & Public Affairs',
  },
  {
    id: 'essay-2025-money-laundering',
    authors: 'Badol, M. H. A. R.',
    year: '15 Jan 2025',
    title:
      "Allegations of Money Laundering against Tulip Siddiq: International Context and Government's Responsibilities",
    journal: 'The Daily Campus',
    url: 'https://scholar.google.com/scholar?q=Allegations+Money+Laundering+Tulip+Siddiq+International+Context',
    category: 'Legal & Public Affairs',
  },
];

export interface ActivityPost {
  id: string;
  date: string;
  platform: string;
  text: string;
  linkLabel?: string;
  linkUrl?: string;
}

export const RECENT_ACTIVITY: ActivityPost[] = [
  {
    id: 'act-1',
    date: 'Aug 2026',
    platform: 'Appointment',
    text: 'Began serving as Law Clerk (Intermittent) for Hon. Justice Soo Chang Conatser at the Pima County Justice Court in Tucson, Arizona.',
  },
  {
    id: 'act-2',
    date: '2025–2026',
    platform: 'Honor',
    text: 'Named Munger Prize Scholar in International and Business Law at the James E. Rogers College of Law, University of Arizona, following the CALI Excellence for the Future Award in International Trade Law.',
  },
  {
    id: 'act-3',
    date: '2025',
    platform: 'Publication',
    text: 'Published "Governance of global peace and security through the international courts: Serving a holistic purpose or maintaining hegemony?" with R. Dewan in the International Journal of Law, 11(3), 132–138.',
  },
  {
    id: 'act-4',
    date: 'Forthcoming',
    platform: 'Working Paper',
    text: 'Selected for publication in Current Law Journal: "The WTO Dispute Settlement Mechanism and Its Role in Economic Hegemony."',
  },
];

export const CV_DATA = {
  fullName: 'Md Hossain Al Rashed Badol',
  email: 'rashedbadol@arizona.edu',
  phone: '+1 (520) 250-0926',
  location: 'Tucson, Arizona, USA',
  education: [
    {
      degree: 'Master of Legal Research and Professional Legal Studies (LL.M.)',
      institution: 'James E. Rogers College of Law, University of Arizona, Tucson, USA',
      period: 'August 2024–December 2026',
    },
    {
      degree: 'Master of International Laws (LL.M.)',
      institution: 'Faculty of Law, Jahangirnagar University, Savar, Dhaka, Bangladesh',
      period: 'October 2019–September 2021',
    },
    {
      degree: 'Bachelor of Laws (LL.B.)',
      institution: 'Faculty of Law, Jahangirnagar University, Savar, Dhaka, Bangladesh',
      period: 'March 2015–September 2019',
    },
  ],
  experience: [
    {
      role: 'Law Clerk (Intermittent)',
      organization: 'Hon. Justice Soo Chang Conatser, Pima County Justice Court',
      period: 'August 2026–Present',
    },
    {
      role: 'Law Clerk (Intermittent)',
      organization: 'Jury Commission Office, Arizona Superior Court, Pima County, Tucson',
      period: 'May–Aug 2026',
    },
    {
      role: 'Law Clerk Intern',
      organization: 'Hon. Judge Alan Goodwin, Arizona Superior Court, Pima County, Tucson',
      period: 'Jan–May 2026',
    },
    {
      role: 'Research Assistant',
      organization: 'Ecological Rights Project, James E. Rogers College of Law, University of Arizona',
      period: "Aug '24–Jan '26",
    },
    {
      role: 'Spring 2025 Fellow',
      organization: "Arizona Students' Association, University of Arizona",
      period: 'Spring 2025',
    },
    {
      role: 'Assistant Event Manager',
      organization: 'University of Arizona, Special Events',
      period: 'August 2024–Present',
    },
    {
      role: 'Instructor, Business & International Trade Law',
      organization: 'Pundra University of Science and Technology',
      period: 'Sep 2022–Jul 2024',
    },
    {
      role: 'Instructor of Law',
      organization: 'North East University',
      period: 'Dec 2021–Aug 2022',
    },
    {
      role: 'Research Assistant',
      organization: 'Child-Friendly Case Management Guideline Project, Baul and Associates',
      period: 'May 2022',
    },
    {
      role: 'Legal Aid',
      organization: 'Bangladesh Environmental Lawyers Association (BELA)',
      period: 'Jun–Nov 2021',
    },
    {
      role: 'Research Assistant',
      organization: 'Forbes Project Empowerment through Law of Common People (ELCOP)',
      period: 'Nov 2020–Jun 2021',
    },
    {
      role: 'Intern',
      organization: 'Anti-Corruption Commission, Bogura',
      period: 'May–Oct 2020',
    },
    {
      role: 'Researcher / Client Consultant',
      organization: 'Pioneer Law Firm',
      period: 'Jun 2016–Aug 2019',
    },
  ],
  awards: [
    'Munger Prize for Scholar in International and Business Law (2025–2026). James E. Rogers College of Law.',
    'CALI Excellence for the Future Award, International Trade Law (Fall 2024). James E. Rogers College of Law.',
    'Jahangirnagar University Law Faculty Scholarships: LL.M. results (2022, 3rd position), fourth year (2019), and third year (2018); University scholarship for 5th position in admission test (2015).',
  ],
  training: [
    {
      title: 'Legal Writing Center Workshop “How to Craft a Good Writing Sample”',
      institution: 'James E. Rogers College of Law, University of Arizona',
    },
    {
      title: 'Workshop on Mooting and Advocacy Skills',
      institution: 'Network for International Law Students (NILS), Department of Law, East West University, Bangladesh',
    },
    {
      title: 'Migration Studies: “South Asian Perspectives on International Migration”',
      institution: 'Center for Migration Studies, SIPG, North South University, Bangladesh',
    },
    {
      title: 'Digital Marketing & Basic Computer Application Courses',
      institution: 'National Academy for Computer Training and Research (NACTAR), Bangladesh',
    },
    {
      title: 'Computer Course on Office Management',
      institution: 'Institute of Information Technology, Jahangirnagar University, Bangladesh',
    },
  ],
  skills: [
    {
      label: 'Legal Research',
      items: 'Westlaw, LexisNexis, OSCOLA',
    },
    {
      label: 'Productivity',
      items: 'Microsoft Office, Python, SPSS, EndNote',
    },
    {
      label: 'Additional',
      items: 'Digital marketing and office management',
    },
  ],
  leadership: [
    'Former General Secretary, Bogura District Public University Student Association; Joint Secretary, Jahangirnagar University Apprentice Lawyers Association.',
    'Memberships: Jahangirnagar University Law Society, Law & Politics Society, Ethics Club Bangladesh, Red Crescent Society, and Bogura District Swimming Federation.',
    'Former captain of Bogura Under-19 cricket team; swimming competition champion; winner of essay competition on ethical and human values.',
    'Volunteer and organizational service with the Physically Disable Foundation and BADHON blood donation organization.',
  ],
  additionalHonors: [
    'Bogura District Commissioner Merit Fellowship for academic excellence in SSC and HSC; Inter-Cantonment School & College Swimming Championship medal and certificate.',
  ],
  references: [
    {
      name: 'Sylvia J. Lett',
      title: 'Associate Professor of Legal Writing',
      institution: 'James E. Rogers College of Law, University of Arizona',
      contact: 'slett@arizona.edu | +1 (520) 626-1508',
    },
    {
      name: 'Hon. Judge Alan Goodwin',
      title: 'Arizona Superior Court',
      institution: 'Pima County, Tucson',
      contact: 'AGoodwin@sc.pima.gov | +1 (520) 724-8169',
    },
  ],
};
