export function Footer() {
  return (
    <footer className="border-t border-stone-200/90 mt-20">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-stone-600">
        <p className="text-stone-600">
          &copy; {new Date().getFullYear()} Hossain Al Rashed Badol
        </p>

        <div className="flex flex-wrap items-center gap-6">
          <a
            href="mailto:rashedbadol@arizona.edu"
            className="academic-link text-stone-600 hover:text-stone-900 whitespace-nowrap"
          >
            Email
          </a>
          <a
            href="https://bsky.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="academic-link text-stone-600 hover:text-stone-900 whitespace-nowrap"
          >
            Bluesky
          </a>
          <a
            href="https://x.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="academic-link text-stone-600 hover:text-stone-900 whitespace-nowrap"
          >
            Twitter / X
          </a>
          <a
            href="https://scholar.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="academic-link text-stone-600 hover:text-stone-900 whitespace-nowrap"
          >
            Google Scholar
          </a>
        </div>
      </div>
    </footer>
  );
}
