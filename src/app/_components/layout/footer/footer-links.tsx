'use client'

export default function FooterLinks() {
  const links = [
    {
      title: "Product",
      items: [
        { label: "Features", href: "#" },
        { label: "Pricing", href: "#" },
        { label: "Documentation", href: "#" },
        { label: "Changelog", href: "#" }
      ]
    },
    {
      title: "Resources",
      items: [
        { label: "Blog", href: "#" },
        { label: "Community", href: "#" },
        { label: "Support", href: "#" },
        { label: "API", href: "#" }
      ]
    }
  ];

  return (
    <>
      {links.map((section, i) => (
        <div key={i} className="col-span-1">
          <h3 className="text-white font-semibold mb-4">{section.title}</h3>
          <ul className="space-y-2">
            {section.items.map((link, j) => (
              <li key={j}>
                <a 
                  href={link.href} 
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}