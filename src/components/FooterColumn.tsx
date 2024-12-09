import Link from "next/link";

export function FooterColumn({ title, links }: any) {
  return (
    <div className="w-full sm:w-auto">
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2rem] text-white text-opacity-40">{title}</h3>
      <ul className="space-y-3">
        {links.map((link: any) => (
          <li key={link.id}>
            <Link
              href={link.link}
              target={link.openNewWindow ? "_blank" : undefined}
              rel={link.openNewWindow ? "noopener noreferrer" : undefined}
              className="text-base font-semibold text-white text-opacity-60 hover:text-opacity-100">
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
