"use client"

import * as React from "react"
import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"
import { Leaf } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "../ui/button"

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Classic Teas",
        href: "/menu/classic-teas",
        description:
            "Discover timeless blends like Earl Grey, English Breakfast, and Darjeeling — brewed to perfection.",
    },
    {
        title: "Milk Teas",
        href: "/menu/milk-teas",
        description:
            "Smooth, creamy, and comforting milk teas crafted with premium leaves and fresh milk.",
    },
    {
        title: "Fruit Teas",
        href: "/menu/fruit-teas",
        description:
            "Refreshing and vibrant fruit-infused teas — from passionfruit green tea to mango oolong.",
    },
    {
        title: "Herbal & Wellness",
        href: "/menu/herbal-teas",
        description:
            "Caffeine-free and soothing herbal infusions made from flowers, roots, and herbs.",
    },
    {
        title: "Seasonal Specials",
        href: "/menu/seasonal",
        description:
            "Limited-edition teas inspired by the season — warm in winter, cool in summer.",
    },
    {
        title: "Build Your Own",
        href: "/menu/custom-tea",
        description:
            "Customize your perfect cup — choose your base, flavor, toppings, and sweetness level.",
    },
]

export default function Header() {
    const isMobile = useIsMobile()

    return (
        <div className="flex justify-between w-full py-8 px-18">
            <Link href="/" className="flex items-center gap-2">
                <Leaf className="text-amber-700" size={28} />
                <span className="font-semibold text-xl text-amber-900">Tea Talk</span>
            </Link>
            <NavigationMenu viewport={isMobile}>
                <NavigationMenuList className="flex-wrap">
                    <NavigationMenuItem ><Link href="/">
                        Home
                    </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                {components.map((component) => (
                                    <ListItem
                                        key={component.title}
                                        title={component.title}
                                        href={component.href}
                                    >
                                        {component.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                            <Link href="/cakes">Our Cakes</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="hidden md:block">
                        <NavigationMenuTrigger>Make your Own</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[300px] gap-4">
                                <li>
                                    <NavigationMenuLink asChild>
                                        <Link href="#">
                                            <div className="font-medium">Design your cake</div>
                                            <div className="text-muted-foreground">
                                                Go through our list of options to create your own cake.
                                            </div>
                                        </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                        <Link href="#">
                                            <div className="font-medium">Ingredients</div>
                                            <div className="text-muted-foreground">
                                                Learn what ingredients we use.
                                            </div>
                                        </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                        <Link href="#">
                                            <div className="font-medium">Blog</div>
                                            <div className="text-muted-foreground">
                                                Read our latest blog posts.
                                            </div>
                                        </Link>
                                    </NavigationMenuLink>
                                </li>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="hidden md:block">
                        <NavigationMenuTrigger>Careers</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[200px] gap-4">
                                <li>
                                    <NavigationMenuLink asChild>
                                        <Link href="#">
                                            <div className="font-medium">Work with Us</div>

                                        </Link>
                                    </NavigationMenuLink>
                                </li>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                </NavigationMenuList>
            </NavigationMenu>
            <div className="flex items-center gap-4">
                <Link href="/cart">
                    <Button className="rounded-full p-2" variant="outline" size="lg">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 7h13m-9-7v7m4-7v7"
                            />
                        </svg>
                    </Button>
                </Link>

                <Link href="/login">
                    <Button className="rounded-full" size="lg">
                        Login
                    </Button>
                </Link>
            </div>

        </div>
    )
}

function ListItem({
    title,
    children,
    href,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link href={href}>
                    <div className="text-sm leading-none font-medium">{title}</div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}
