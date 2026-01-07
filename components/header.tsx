'use client'
import Link from 'next/link'
import { Logo } from '@/components/logo'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'
import { useScroll, motion } from 'motion/react'
import { cn } from '@/lib/utils'

type NavItem = {
    name: string
    href: string
    children?: { name: string; href: string }[]
}

const menuItems: NavItem[] = [
    {
        name: 'About Us',
        href: '#about',
        children: [
            { name: 'Profile', href: '#profile' },
            { name: 'Awards', href: '#awards' },
            { name: 'Memberships', href: '#memberships' },
            { name: 'Certifications', href: '#certifications' },
            { name: 'Quality Policy', href: '#quality-policy' },
        ],
    },
    {
        name: 'Our Services',
        href: '#services',
        children: [
            { name: 'Air Freight', href: '#air-freight' },
            { name: 'Ocean Freight', href: '#ocean-freight' },
            { name: 'Cargo Consolidation', href: '#cargo-consolidation' },
            { name: 'Warehousing', href: '#warehousing' },
            { name: 'Contract Logistics', href: '#contract-logistics' },
            { name: 'Land Transport', href: '#land-transport' },
            { name: 'Ship Spares', href: '#ship-spares' },
        ],
    },
    {
        name: 'Industry Verticals',
        href: '#verticals',
        children: [
            { name: 'Building Materials', href: '#building-materials' },
            { name: 'Commodities', href: '#commodities' },
            { name: 'Industrial', href: '#industrial' },
            { name: 'Fashion', href: '#fashion' },
            { name: 'Consumer', href: '#consumer' },
            { name: 'Pharmaceuticals', href: '#pharmaceuticals' },
            { name: 'Chemicals', href: '#chemicals' },
            { name: 'Oil and Gas', href: '#oil-and-gas' },
            { name: 'Automotive', href: '#automotive' },
        ],
    },
    {
        name: 'Contact',
        href: '#contact',
    },
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [scrolled, setScrolled] = React.useState(false)
    const { scrollYProgress } = useScroll()

    React.useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (latest) => {
            setScrolled(latest > 0.05)
        })
        return () => unsubscribe()
    }, [scrollYProgress])

    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="fixed z-20 w-full pt-2">
                <div className={cn('mx-auto max-w-7xl rounded-3xl px-6 transition-all duration-300 lg:px-12', scrolled && 'bg-background/50 backdrop-blur-2xl')}>
                    <motion.div
                        key={1}
                        className={cn('relative flex flex-wrap items-center justify-between gap-6 py-3 duration-200 lg:gap-0 lg:py-6', scrolled && 'lg:py-4')}>
                        <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <Logo />
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>

                            <div className="hidden lg:block">
                                <ul className="flex gap-8 text-sm">
                                    {menuItems.map((item) => {
                                        const hasChildren = item.children && item.children.length > 0

                                        return (
                                            <li
                                                key={item.name}
                                                className={cn('relative group', hasChildren && 'cursor-pointer')}>
                                                <Link
                                                    href={item.href}
                                                    className="flex items-center gap-1 text-muted-foreground hover:text-accent-foreground duration-150">
                                                    <span>{item.name}</span>
                                                    {hasChildren && (
                                                        <ChevronDown className="h-3 w-3 text-red-600" />
                                                    )}
                                                </Link>

                                                {hasChildren && (
                                                    <div className="pointer-events-none absolute left-1/2 top-full z-30 -translate-x-1/2 pt-3 opacity-0 invisible transition-opacity duration-150 group-hover:visible group-hover:opacity-100 group-hover:pointer-events-auto hover:visible hover:opacity-100 hover:pointer-events-auto">
                                                        <div className="inline-flex min-w-[12rem] max-w-sm overflow-hidden rounded-2xl border border-border/70 bg-background/95 px-4 py-3 text-foreground shadow-2xl shadow-black/15 backdrop-blur supports-[backdrop-filter]:bg-background/85">
                                                            <ul className="space-y-1.5 text-sm">
                                                                {item.children?.map((child) => (
                                                                    <li key={child.name}>
                                                                        <Link
                                                                            href={child.href}
                                                                            className="block rounded-md px-2 py-1 hover:bg-accent hover:text-accent-foreground">
                                                                            {child.name}
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                )}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>

                        <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <div className="lg:hidden">
                                <ul className="space-y-4 text-base">
                                    {menuItems.map((item) => {
                                        const hasChildren = item.children && item.children.length > 0

                                        return (
                                            <li key={item.name}>
                                                <Link
                                                    href={item.href}
                                                    className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                                    <span>{item.name}</span>
                                                </Link>
                                                {hasChildren && (
                                                    <ul className="mt-2 space-y-1 pl-4 text-sm text-muted-foreground">
                                                        {item.children?.map((child) => (
                                                            <li key={child.name}>
                                                                <Link
                                                                    href={child.href}
                                                                    className="block">
                                                                    {child.name}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col items-center space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button
                                    asChild
                                    variant="outline"
                                    size="sm">
                                    <Link href="#">
                                        <span>Login</span>
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="sm">
                                    <Link href="#">
                                        <span>Sign Up</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </nav>
        </header>
    )
}
