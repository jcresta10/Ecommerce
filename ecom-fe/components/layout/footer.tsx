import { Separator } from "@/components/ui/separator"
import Link from "next/link"

const footerSections = [
    {
        title: "Menu",
        links: [],
    },
    {
        title: "Shop",
        links: [],
    },
    {
        title: "About",
        links: [
            { title: "Our Story", href: "#" },
            { title: "Sustainability", href: "#" },
            { title: "Careers", href: "#" },
            { title: "Contact Us", href: "#" },
        ],
    },
    {
        title: "Support",
        links: [{ title: "FAQs", href: "#" }],
    },
    {
        title: "Follow Us",
        links: [
            { title: "Instagram", href: "#" },
            { title: "Facebook", href: "#" },
            { title: "TikTok", href: "#" },
            { title: "Twitter", href: "#" },
        ],
    },
]

export default function Footer() {
    return (
        <footer className="mt-24 border-t bg-amber-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Footer Grid */}
                <div className="py-14 grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                    {footerSections.map(({ title, links }) => (
                        <div key={title} className="space-y-5">
                            <h6 className="font-semibold text-amber-900 text-lg tracking-wide">
                                {title}
                            </h6>
                            <ul className="space-y-3">
                                {links.map(({ title, href }) => (
                                    <li key={title}>
                                        <Link
                                            href={href}
                                            className="text-muted-foreground hover:text-amber-800 transition-colors text-sm"
                                        >
                                            {title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <Separator className="bg-amber-200" />

                {/* Bottom Bar */}
                <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <span className="text-3xl">🍵</span>
                        <h1 className="font-bold text-xl text-amber-900 tracking-tight">
                            Tea Haven
                        </h1>
                    </div>

                    {/* Copyright */}
                    <span className="text-muted-foreground text-sm text-center sm:text-right">
                        &copy; {new Date().getFullYear()} Tea Haven. All rights reserved.
                    </span>
                </div>
            </div>
        </footer>
    )
}
