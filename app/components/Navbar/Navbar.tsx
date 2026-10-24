"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Container from "../Container/Container";
import { MenuIcon, XIcon } from "lucide-react";

const navLinks = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Skills", path: "#skills" },
    { name: "Projects", path: "#projects" },
    { name: "Contact", path: "#contact" },
];

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("home");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const sections = navLinks
            .map((link) => document.getElementById(link.path.slice(1)))
            .filter((section) => section !== null);

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSections = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (a, b) =>
                            b.intersectionRatio - a.intersectionRatio,
                    );

                if (visibleSections[0]) {
                    setActiveSection(visibleSections[0].target.id);
                }
            },
            {
                rootMargin: "-20% 0px -60% 0px",
                threshold: [0, 0.25, 0.5, 0.75, 1],
            },
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToSection = (path: string) => {
        const sectionId = path.slice(1);

        setActiveSection(sectionId);

        document.getElementById(sectionId)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);


    useEffect(() => {
        if (!isMobileMenuOpen) return;

        const handleOutsideClick = (event: PointerEvent) => {
            const target = event.target;

            if (!(target instanceof Element)) return;

            if (!target.closest("#mobile-navigation") &&
                !target.closest('[aria-controls="mobile-navigation"]')) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener("pointerdown", handleOutsideClick);

        return () => {
            document.removeEventListener("pointerdown", handleOutsideClick);
        };
    }, [isMobileMenuOpen]);


    return (
        <nav
            className={`sticky top-0 z-50 border-b transition-all duration-300 ease-in-out ${isScrolled
                ? "border-emerald-400/10 bg-[#09090b]/65 backdrop-blur-md shadow-lg shadow-emerald-950/10"
                : "border-transparent bg-transparent shadow-none"
                }`}
        >

            <Container className="relative flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    onClick={(event) => {
                        if (window.location.pathname === "/") {
                            event.preventDefault();
                            scrollToSection("#home");
                        }
                    }}
                    className="text-xl font-semibold tracking-tight text-foreground"
                >
                    Rabin<span className="text-primary">.</span>
                </Link>

                {/* Navigation Links */}
                <ul className="hidden items-center gap-6 md:flex">
                    {navLinks.map((link) => {
                        const sectionId = link.path.slice(1);
                        const isActive = activeSection === sectionId;
                        return (
                            <li key={link.path}>
                                <button
                                    type="button"
                                    onClick={() => scrollToSection(link.path)}
                                    className={`relative cursor-pointer py-2 text-sm transition-colors duration-300 ${isActive
                                        ? "font-semibold text-primary"
                                        : "text-text-muted hover:text-primary"
                                        }`}
                                >
                                    {link.name}

                                    <span
                                        aria-hidden="true"
                                        className={`absolute inset-x-0 -bottom-0.5 mx-auto h-0.5 rounded-full bg-primary transition-all duration-800 ${isActive ? "w-full opacity-100" : "w-0 opacity-0"
                                            }`}
                                    />
                                </button>
                            </li>
                        );
                    })}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMobileMenuOpen}
                    aria-controls="mobile-navigation"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/3 text-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/10 hover:text-primary hover:shadow-lg hover:shadow-emerald-500/10 active:translate-y-0 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary md:hidden"
                >
                    <span
                        className={`transition-transform duration-300 ${isMobileMenuOpen ? "rotate-90" : "rotate-0"
                            }`}
                    >
                        {isMobileMenuOpen ? (
                            <XIcon size={18} strokeWidth={1.5} />
                        ) : (
                            <MenuIcon size={18} strokeWidth={1.5} />
                        )}
                    </span>
                </button>

                {/* Contact Button */}
                <button
                    type="button"
                    onClick={() => scrollToSection("#contact")}
                    className="group hidden min-h-10 items-center gap-2 rounded-full border border-primary/40 bg-primary/5 px-5 py-2 text-sm font-semibold text-primary shadow-sm shadow-primary/5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/70 hover:bg-primary hover:shadow-lg hover:shadow-primary/20 hover:text-background focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary md:inline-flex"
                >
                    Let&apos;s Talk <span aria-hidden="true">↗</span>
                </button>
            </Container>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <div
                    id="mobile-navigation"
                    className="absolute right-4 top-full z-50 w-48 animate-menu-slide-down rounded-xl border border-primary/20 bg-[#09090b]/95 p-2 shadow-xl shadow-black/30 backdrop-blur-xl md:hidden"
                >
                    <ul className="flex flex-col gap-1">
                        {navLinks.map((link) => {
                            const sectionId = link.path.slice(1);
                            const isActive = activeSection === sectionId;

                            return (
                                <li key={link.path}>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            scrollToSection(link.path);
                                            setIsMobileMenuOpen(false);
                                        }}
                                        className={`flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-left text-sm transition-all duration-200 ${isActive
                                            ? "bg-primary/10 font-semibold text-primary"
                                            : "text-text-muted hover:bg-white/5 hover:text-primary"
                                            }`}
                                    >
                                        <span
                                            aria-hidden="true"
                                            className={`h-1.5 w-1.5 shrink-0 rounded-full ${isActive
                                                ? "bg-primary"
                                                : "bg-white/20"
                                                }`}
                                        />
                                        {link.name}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </nav>
    );
}
