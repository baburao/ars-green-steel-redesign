"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, BadgeCheck, Calculator, Check, ChevronDown, House, MapPin, Menu, Search, ShieldCheck, X } from "lucide-react";

type MenuLink = {
  label: string;
  href: string;
};

type MenuGroup = {
  label: string;
  links: MenuLink[];
};

type MegaMenuDefinition = {
  eyebrow: string;
  title: string;
  visual: string;
  visualSrc: string;
  links: MenuLink[];
  groups?: MenuGroup[];
  proof: string[];
};

type MenuKey = "about" | "products" | "sustainability" | "solutions" | "resources" | "pressMedia" | "contact";

const routeLinks: { label: string; href: string; menu?: MenuKey }[] = [
  { label: "About", href: "/about-us", menu: "about" },
  { label: "Products", href: "/products", menu: "products" },
  { label: "Sustainability", href: "/green-steel", menu: "sustainability" },
  { label: "Solutions", href: "/industries", menu: "solutions" },
  { label: "Resources", href: "/blog", menu: "resources" },
  { label: "Press Media", href: "/press-media", menu: "pressMedia" },
  { label: "Careers", href: "/careers" },
];

const megaMenus: Record<MenuKey, MegaMenuDefinition> = {
  about: {
    eyebrow: "Company trust",
    title: "Everything You Need to Know About ARS Group",
    visual: "ARS Group",
    visualSrc: "/ars-assets/navmenu/about.jpg",
    links: [
      { label: "ARS Group", href: "/about-us" },
      { label: "Vision & Mission", href: "/vision-mission" },
      { label: "Leadership", href: "/our-team" },
      { label: "Manufacturing", href: "/manufacturing" },
      { label: "Quality Policy", href: "/our-quality" },
      { label: "Certifications", href: "/our-certification" },
      { label: "Clients", href: "/clients" },
    ],
    proof: ["Since 1992", "Leadership proof", "Manufacturing strength"],
  },
  products: {
    eyebrow: "Product proof",
    title: "Explore ARS Products by Grade and Application",
    visual: "Products",
    visualSrc: "/ars-assets/navmenu/products.jpg",
    links: [
      { label: "ARS CRS Fe 550D", href: "/product-crs-550d" },
      { label: "ARS Fe 550D", href: "/product-550d" },
      { label: "ARS Binders", href: "/ars-binders" },
      { label: "550D Vs CRS 550D", href: "/products#comparison" },
      { label: "Steel Testing", href: "/steel-testing" },
    ],
    proof: ["550D ductility", "CRS corrosion resistance", "Residential to infrastructure use"],
  },
  sustainability: {
    eyebrow: "Sustainability",
    title: "Understand ARS Green Steel, Carbon & Certifications",
    visual: "Green steel",
    visualSrc: "/ars-assets/navmenu/sustainability.jpg",
    links: [
      { label: "ARS Green Steel", href: "/ars-green-steel" },
      { label: "Embodied Carbon", href: "/embodied-carbon" },
      { label: "Green Certifications", href: "/green-certifications" },
      { label: "Green Guide", href: "/green-steel#what-is-green-steel" },
      { label: "SGBC", href: "/sgbc" },
    ],
    proof: ["Green steel story", "EPD / GRIHA / LEED readiness", "Downloadable proof"],
  },
  solutions: {
    eyebrow: "Solutions",
    title: "Find the Right Solution for Your Construction Project",
    visual: "Audience paths",
    visualSrc: "/ars-assets/navmenu/Solutions.jpg",
    links: [
      { label: "For Home Owners", href: "/tmt-steel-bar-guide-homeowners" },
      { label: "For Engineers & Architects", href: "/tmt-steel-bar-guide-engineers-architects" },
      { label: "For Contractors", href: "/tmt-steel-bar-guide-civil-contractors" },
      { label: "For Dealers", href: "/steel-distributors-dealers" },
      { label: "Road Projects", href: "/road-projects-tmt-steel-bars" },
      { label: "Bridges & Flyovers", href: "/bridges-projects-tmt-steel-bars" },
      { label: "Institutional Projects", href: "/institutions-projects-tmt-steel-bars" },
    ],
    groups: [
      {
        label: "Audience",
        links: [
          { label: "For Home Owners", href: "/tmt-steel-bar-guide-homeowners" },
          { label: "For Engineers & Architects", href: "/tmt-steel-bar-guide-engineers-architects" },
          { label: "For Contractors", href: "/tmt-steel-bar-guide-civil-contractors" },
          { label: "For Dealers", href: "/steel-distributors-dealers" },
        ],
      },
      {
        label: "Project Types",
        links: [
          { label: "Institutions", href: "/institutions-projects-tmt-steel-bars" },
          { label: "Bridges & Flyovers", href: "/bridges-projects-tmt-steel-bars" },
          { label: "Road Projects", href: "/road-projects-tmt-steel-bars" },
        ],
      },
    ],
    proof: ["Home builds", "Technical specification", "Dealer support"],
  },
  resources: {
    eyebrow: "Resources",
    title: "Everything You Need to Choose, Compare & Buy Steel",
    visual: "Knowledge center",
    visualSrc: "/ars-assets/navmenu/resources.jpg",
    links: [
      { label: "Steel Price Today", href: "/tmt-steel-price-today" },
      { label: "TMT Bar Calculator", href: "/tmt-steel-calculator" },
      { label: "Become A Dealer", href: "/become-a-steel-distributor" },
      { label: "Blogs", href: "/blog" },
      { label: "Downloads", href: "/download-product-brochure" },
    ],
    proof: ["Price clarity", "Calculator journey", "Construction education"],
  },
  pressMedia: {
    eyebrow: "Press Media",
    title: "Latest News, Updates & Stories from ARS Steel",
    visual: "Press Media",
    visualSrc: "/ars-assets/navmenu/pressandmedia.jpg",
    links: [
      { label: "TV Commercials", href: "/tv-commercials" },
      { label: "News & Press Releases", href: "/news-press-releases" },
      { label: "Events", href: "/events" },
      { label: "Gallery", href: "/gallery" },
      { label: "Videos", href: "/video" },
      { label: "Success Stories", href: "/success-stories" },
    ],
    proof: ["TV Commercials", "News & Press Releases", "Success Stories"],
  },
  contact: {
    eyebrow: "Next step",
    title: "Reach sales, request a quote, or find a dealer.",
    visual: "Sales support",
    visualSrc: "/ars-assets/Contact_banner.png",
    links: [
      { label: "Contact ARS", href: "/contact" },
      { label: "Request Quote", href: "/request-quote" },
      { label: "Become a Dealer", href: "/steel-distributors-dealers" },
    ],
    proof: ["Customer helpline", "Project enquiry", "Office and plant"],
  },
};

const menuPaths: Record<MenuKey, string[]> = {
  about: ["/about-us", "/vision-mission", "/our-team", "/manufacturing", "/our-quality", "/our-certification"],
  products: ["/products", "/steel-testing"],
  solutions: [
    "/industries",
    "/projects",
    "/tmt-steel-bar-guide-homeowners",
    "/tmt-steel-bar-guide-engineers-architects",
    "/tmt-steel-bar-guide-civil-contractors",
    "/steel-distributors-dealers",
    "/road-projects-tmt-steel-bars",
    "/bridges-projects-tmt-steel-bars",
    "/institutions-projects-tmt-steel-bars",
  ],
  sustainability: ["/green-steel", "/ars-green-steel", "/green-certifications"],
  resources: [
    "/blog",
    "/tmt-steel-price-today",
    "/guides-articles",
    "/tmt-steel-calculator",
    "/faqs",
  ],
  pressMedia: ["/press-media", "/tv-commercials", "/news-press-releases", "/events", "/gallery", "/video", "/success-stories"],
  contact: ["/contact", "/request-quote", "/steel-distributors-dealers"],
};

function pathMatches(pathname: string, route: string) {
  return pathname === route || pathname.startsWith(`${route}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const links = routeLinks;
  const mobileMenuId = "site-mobile-navigation";
  const headerRef = useRef<HTMLElement>(null);
  const triggerRefs = useRef<Partial<Record<keyof typeof megaMenus, HTMLButtonElement | null>>>({});
  const [openMenu, setOpenMenu] = useState<keyof typeof megaMenus | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<keyof typeof megaMenus | null>(null);

  useEffect(() => {
    if (!mobileOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  useEffect(() => {
    function closeOnOutsidePointer(event: PointerEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key !== "Escape") {
        return;
      }

      if (mobileOpen) {
        setMobileOpen(false);
        return;
      }

      if (openMenu) {
        const trigger = triggerRefs.current[openMenu];
        setOpenMenu(null);
        trigger?.focus();
      }
    }

    document.addEventListener("pointerdown", closeOnOutsidePointer);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("pointerdown", closeOnOutsidePointer);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [mobileOpen, openMenu]);

  return (
    <header
      ref={headerRef}
      className={`site-header inset-x-0 top-0 z-50 w-full bg-white text-ink-900 ${mobileOpen ? "fixed" : "sticky"}`}
      data-menu-open={openMenu ? "true" : "false"}
    >
      <div className="site-header-shell border-b border-ink-900/10 bg-white shadow-[0_8px_28px_rgba(13,43,110,0.08)]">
      <div className="ars-container flex h-[76px] items-center justify-between">
        <Link href="/" className="focus-ring flex cursor-pointer items-center gap-3">
          <span className="flex h-[55px] w-[117px] items-center justify-center">
            <Image src="/ars-green-steel.svg" alt="ARS Green Steel" width={117} height={55} priority />
          </span>
        </Link>

        <nav className="hidden items-center gap-4 text-[14px] font-semibold text-steel-700 xl:flex">
          <Link
            href="/"
            aria-label="Home"
            aria-current={pathname === "/" ? "page" : undefined}
            className={`focus-ring relative inline-flex h-[76px] w-10 cursor-pointer items-center justify-center bg-transparent text-brand-blue transition hover:text-ink-900 before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:origin-left before:bg-brand-red before:transition-transform before:duration-300 focus-visible:text-ink-900 focus-visible:before:scale-x-100 ${
              pathname === "/"
                ? "text-ink-900 before:scale-x-100"
                : "before:scale-x-0 hover:before:scale-x-100"
            }`}
          >
            <House size={17} />
          </Link>
          {links.map((link) => {
            const menuKey = link.menu as keyof typeof megaMenus | undefined;
            const menu = menuKey ? megaMenus[menuKey] : null;
            const isActive = menuKey ? menuPaths[menuKey].some((route) => pathMatches(pathname, route)) : pathMatches(pathname, link.href);
            const menuId = menuKey ? `desktop-${menuKey}-menu` : undefined;
            const navigationClassName = `focus-ring relative inline-flex h-[76px] cursor-pointer items-center gap-1.5 bg-transparent transition hover:text-ink-900 before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:origin-left before:bg-brand-red before:transition-transform before:duration-300 focus-visible:text-ink-900 focus-visible:before:scale-x-100 ${
              isActive ? "text-ink-900 before:scale-x-100" : "before:scale-x-0 hover:before:scale-x-100"
            }`;

            return (
              <div
                key={link.label}
                className="site-nav-item group/menu"
                onPointerEnter={() => menuKey && setOpenMenu(menuKey)}
                onPointerLeave={() => menuKey && setOpenMenu((current) => current === menuKey ? null : current)}
              >
                {menuKey && menu ? (
                  <button
                    ref={(node) => {
                      triggerRefs.current[menuKey] = node;
                    }}
                    type="button"
                    className={navigationClassName}
                    aria-haspopup="true"
                    aria-expanded={openMenu === menuKey}
                    aria-controls={menuId}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => setOpenMenu(menuKey)}
                    onFocus={() => setOpenMenu(menuKey)}
                  >
                    {link.label}
                    <ChevronDown size={14} className="text-brand-blue transition group-hover/menu:rotate-180 group-focus-within/menu:rotate-180" />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className={navigationClassName}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                )}
                {menu ? (
                  <div
                    id={menuId}
                    className={`site-mega-menu absolute left-0 right-0 top-[calc(100%-1px)] border-b border-ink-900/10 bg-white shadow-[0_32px_80px_rgba(15,23,42,0.14)] ${
                      openMenu === menuKey ? "is-open" : ""
                    }`}
                    role="region"
                    aria-label={`${menu.eyebrow} menu`}
                  >
                    <MegaMenuContent menu={menu} />
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            className="focus-ring hidden h-11 cursor-pointer items-center gap-2 rounded-full bg-brand-red px-5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(222,18,26,0.24)] transition hover:bg-brand-red-dark md:inline-flex"
            href="/our-network"
          >
            <MapPin size={16} /> Find Dealer
          </Link>
          <Link className="focus-ring inline-flex h-11 cursor-pointer items-center gap-2 rounded-full border border-ink-900/12 bg-white/60 px-5 text-sm font-bold text-ink-900 transition hover:border-brand-blue hover:text-brand-blue" href="/request-quote">
            Get quote <ArrowRight size={16} />
          </Link>
          <div className="relative z-[110] xl:hidden">
            <button
              type="button"
              className="focus-ring inline-flex size-11 cursor-pointer items-center justify-center rounded-full border border-ink-900/12 bg-white/60 text-ink-900"
              aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={mobileOpen}
              aria-controls={mobileMenuId}
              onClick={() => {
                setOpenMenu(null);
                setMobileOpen((current) => !current);
              }}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            {mobileOpen ? <div id={mobileMenuId} className="fixed inset-x-0 top-[76px] z-[100] max-h-[calc(100dvh-76px)] overflow-y-auto border-t border-ink-900/10 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.16)]">
              <div className="ars-container grid gap-5 py-5">
                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    { label: "Steel Price", href: "/tmt-steel-price-today", icon: Search },
                    { label: "Calculator", href: "/tmt-steel-calculator", icon: Calculator },
                    { label: "Dealer Locator", href: "/our-network", icon: ShieldCheck },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <a key={item.label} className="flex items-center gap-3 rounded-[14px] bg-white px-4 py-3 text-sm font-bold text-ink-900 shadow-[0_10px_28px_rgba(15,23,42,0.06)]" href={item.href}>
                        <Icon size={17} className="text-brand-blue" />
                        {item.label}
                      </a>
                    );
                  })}
                </div>
                <nav className="grid gap-2">
                  <Link className="flex items-center justify-between border-t border-ink-900/10 py-3 text-base font-bold text-ink-900" href="/" aria-current={pathname === "/" ? "page" : undefined} onClick={() => setMobileOpen(false)}>
                    Home
                    <ArrowRight size={16} className="text-brand-blue" />
                  </Link>
                  {routeLinks.map((link) => {
                    if (!link.menu) {
                      return <Link key={link.label} className="flex cursor-pointer items-center justify-between border-t border-ink-900/10 py-3 text-base font-bold text-ink-900" href={link.href} aria-current={pathMatches(pathname, link.href) ? "page" : undefined} onClick={() => setMobileOpen(false)}>
                        {link.label}
                        <ArrowRight size={16} className="text-brand-blue" />
                      </Link>;
                    }

                    const menuKey = link.menu as keyof typeof megaMenus;
                    const isExpanded = mobileSection === menuKey;
                    const isActive = menuPaths[menuKey].some((route) => pathMatches(pathname, route));

                    return (
                      <div key={link.label} className="border-t border-ink-900/10 py-3">
                        <button
                          type="button"
                          className={`flex w-full cursor-pointer items-center justify-between text-left text-base font-bold ${
                            isActive ? "text-brand-blue" : "text-ink-900"
                          }`}
                          aria-expanded={isExpanded}
                          aria-controls={`mobile-${menuKey}-menu`}
                          onClick={() => setMobileSection((current) => current === menuKey ? null : menuKey)}
                        >
                          {link.label}
                          <ChevronDown size={16} className={`text-brand-blue transition ${isExpanded ? "rotate-180" : ""}`} />
                        </button>
                        {isExpanded ? <div id={`mobile-${menuKey}-menu`} className="mt-4 grid gap-3 pl-3">
                          {megaMenus[menuKey].groups
                            ? megaMenus[menuKey].groups.map((group) => (
                                <div key={group.label} className="border-l border-brand-blue/20 pl-4">
                                  <p className="mb-2 text-[11px] font-black uppercase tracking-[0.14em] text-brand-red">
                                    {group.label}
                                  </p>
                                  <div className="grid gap-2">
                                    {group.links.map((item) => (
                                      <Link key={item.label} className="flex min-h-11 items-center justify-between text-sm font-semibold text-steel-700" href={item.href} onClick={() => setMobileOpen(false)}>
                                        {item.label}
                                        <ArrowRight size={14} className="text-brand-blue" />
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))
                            : megaMenus[menuKey].links.map((item) => (
                                <Link key={item.label} className="flex min-h-11 items-center justify-between text-sm font-semibold text-steel-700" href={item.href} onClick={() => setMobileOpen(false)}>
                                  {item.label}
                                  <ArrowRight size={14} className="text-brand-blue" />
                                </Link>
                              ))}
                        </div> : null}
                      </div>
                    );
                  })}
                </nav>
              </div>
            </div> : null}
          </div>
        </div>
      </div>
      </div>
    </header>
  );
}

type MegaMenu = (typeof megaMenus)[keyof typeof megaMenus];

function MegaMenuContent({ menu }: { menu: MegaMenu }) {
  return (
    <div className="ars-container grid gap-12 py-9 lg:grid-cols-[360px_1fr_280px] lg:items-center">
      <Link className="group relative min-h-[190px] overflow-hidden rounded-[22px] bg-ink-900 p-6 text-white shadow-[0_20px_55px_rgba(15,23,42,0.18)] lg:self-stretch" href={menu.links[0]?.href ?? "/products"}>
        <Image
          src={menu.visualSrc}
          alt={`${menu.visual} ARS`}
          fill
          sizes="360px"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,.08),rgba(15,23,42,.82))]" />
        <div className="absolute -right-10 -top-10 size-36 rounded-full border border-white/24" />
        <div className="absolute bottom-5 right-5 inline-flex size-12 items-center justify-center rounded-full bg-white text-brand-blue transition group-hover:translate-x-1">
          <ArrowRight size={20} />
        </div>
        <div className="absolute bottom-5 left-6 right-20">
          <p className="font-technical text-xs font-bold uppercase tracking-[0.28em] text-white/70">{menu.eyebrow}</p>
          <p className="mt-2 font-display text-2xl font-black uppercase leading-tight">{menu.visual}</p>
        </div>
      </Link>

      <div>
        <p className="font-technical text-xs font-bold uppercase tracking-[0.28em] text-brand-blue">{menu.eyebrow}</p>
        <p className="mt-2 max-w-2xl font-display text-lg font-normal leading-relaxed text-steel-600">
          {menu.title}
        </p>
        {menu.groups ? (
          <div className="mt-6 grid gap-8 sm:grid-cols-2">
            {menu.groups.map((group) => (
              <div key={group.label} className="border-l border-brand-blue/20 pl-5">
                <p className="mb-4 font-technical text-[11px] font-black uppercase tracking-[0.18em] text-brand-red">
                  {group.label}
                </p>
                <div className="grid gap-4">
                  {group.links.map((item) => (
                    <a key={item.label} className="focus-ring group flex items-center gap-4 text-base font-semibold text-steel-700 transition hover:text-brand-blue" href={item.href}>
                      <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-white text-brand-blue ring-1 ring-ink-900/10 transition group-hover:bg-brand-blue group-hover:text-white">
                        <ArrowRight size={16} />
                      </span>
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-6 grid gap-x-12 gap-y-5 sm:grid-cols-2">
            {menu.links.map((item) => (
              <a key={item.label} className={`focus-ring group flex items-center gap-4 text-lg font-semibold transition ${menu.eyebrow === "Sustainability" && item.label === "ARS Green Steel" ? "text-green-steel hover:text-green-steel" : "text-steel-700 hover:text-brand-blue"}`} href={item.href}>
                <span className={`inline-flex size-10 aspect-square shrink-0 items-center justify-center rounded-full bg-white ring-1 transition ${menu.eyebrow === "Sustainability" && item.label === "ARS Green Steel" ? "text-green-steel ring-green-steel group-hover:bg-green-steel group-hover:text-white" : "text-brand-blue ring-ink-900/10 group-hover:bg-brand-blue group-hover:text-white"}`}>
                  {menu.eyebrow === "Sustainability" && item.label === "ARS Green Steel" ? <><ArrowRight size={17} className="group-hover:hidden" /><Check size={17} className="hidden group-hover:block" /></> : <ArrowRight size={17} />}
                </span>
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>

      <div className="rounded-[22px] border border-ink-900/10 bg-white/62 p-6">
        <div className="mb-5 flex items-center gap-2 text-sm font-bold text-ink-900">
          <ShieldCheck size={18} className="text-brand-blue" />
          Proof points
        </div>
        <div className="grid gap-4">
          {menu.proof.map((item) => (
            <div key={item} className="flex items-center gap-3 text-sm font-semibold text-steel-700">
              <BadgeCheck size={16} className="shrink-0 text-green-steel" />
              {item}
            </div>
          ))}
        </div>
        <Link className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-brand-blue" href="/request-quote">
          Start enquiry <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
