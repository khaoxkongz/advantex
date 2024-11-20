"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export const SiteHeader = () => {
  const pathname = usePathname()

  const menuItems = [
    { title: "Home", href: "/" },
    { title: "Tours", href: "/tours" },
    { title: "Blog", href: "/blog" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky inset-x-0 top-0 z-50 h-[72px] border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-full items-center justify-between px-4">
        <Link href="/" className="text-2xl font-bold text-primary">
          Wanderlust
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <Link
                    href={item.href}
                    className={`px-4 py-2 transition-colors ${
                      pathname === item.href
                        ? "text-primary"
                        : "hover:text-primary"
                    }`}
                  >
                    {item.title}
                  </Link>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <Button>Book Now</Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="size-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Navigation Menu</SheetTitle>
            </SheetHeader>
            <nav>
              <ul className="mt-8 flex flex-col gap-4">
                {menuItems.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className={`text-lg font-medium transition-colors ${
                        pathname === item.href
                          ? "text-primary"
                          : "hover:text-primary"
                      }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
                <Button className="mt-4">Book Now</Button>
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
