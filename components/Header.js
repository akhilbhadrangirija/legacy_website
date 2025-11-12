"use client"

import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "./ui/sheet";

export default function Header() {
  return (
    <header className="bg-beige px-6 py-4 flex justify-between items-center">
      {/* <img src="/logo.png" alt="Legacy" width={900} height={620}  className="h-6 w-10" /> */}
      <Link href="/" className="text-3xl font-script text-dark-brown">Legacy.</Link>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6 items-center">
        <Link href="/about" className="text-dark-brown hover:text-light-pink transition-colors">
          About
        </Link>
        <Link href="/contact-us" className="text-dark-brown hover:text-light-pink transition-colors">
          Contact Us
        </Link>
      </nav>

      {/* Mobile Menu */}
      <Sheet>
        <SheetTrigger asChild className="md:hidden">
          <button
            className="text-dark-brown hover:text-light-pink transition-colors"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="bg-beige">
          <nav className="flex flex-col gap-6 mt-8">
            <SheetClose asChild>
              <Link 
                href="/about" 
                className="text-dark-brown hover:text-light-pink transition-colors text-lg font-medium"
              >
                About
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link 
                href="/contact-us" 
                className="text-dark-brown hover:text-light-pink transition-colors text-lg font-medium"
              >
                Contact Us
              </Link>
            </SheetClose>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  )
}

