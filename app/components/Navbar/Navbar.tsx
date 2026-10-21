"use client";

import Link from "next/link";
import { useState } from "react";
import Container from "../Container/Container";

const navLinks = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Skills", path: "#skills" },
    { name: "Projects", path: "#projects" },
    { name: "Contact", path: "#contact" },
];

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("home");

    const scrollToSection = (path: string) => {
        const sectionId = path.slice(1);

        setActiveSection(sectionId);
        
        document.getElementById(sectionId)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <nav className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-xl">
            <Container className="flex items-center justify-between border-2">
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
                                    className={`cursor-pointer text-sm transition-colors duration-200 ${isActive
                                        ? "font-semibold text-primary"
                                        : "text-text-muted hover:text-primary"
                                        }`}
                                >
                                    {link.name}
                                </button>
                            </li>
                        );
                    })}
                </ul>

                {/* Contact Button */}
                <button
                    type="button"
                    onClick={() => scrollToSection("#contact")}
                    className="rounded-full border border-primary/40 px-5 py-2 text-sm font-medium text-primary transition hover:bg-primary hover:text-background"
                >
                    Let&apos;s Talk <span aria-hidden="true">↗</span>
                </button>
            </Container>
        </nav>
    );
}
