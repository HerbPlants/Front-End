'use client';
import Link from "next/link";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
  SheetHeader,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

export default function NavbarSection() {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Snap", href: "/snap" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Login", href: "/login" },
  ];

  return (
    <div className="container max-w-screen-2xl flex items-center justify-between px-4 md:px-10 lg:px-20 py-4 shadow mx-auto">
      <Link href="/" className="flex items-center gap-2" prefetch={false}>
        <Image
          src="/images/logo/logo_navbar.png"
          alt="logo"
          width={144}
          height={144}
          className="max-w-20 md:max-w-24"
        />
      </Link>

      {/* Desktop Nav */}
      {isClient && (
        <nav className="ml-auto hidden lg:flex lg:items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`${
                pathname === item.href
                  ? "text-green-shades-70 font-semibold"
                  : "text-white dark:text-white font-medium"
              } ${
                item.name === "Login"
                  ? "bg-green-shades-70 !text-dark-green-shades-15 px-4 py-2 rounded !font-bold"
                  : ""
              } hover:text-green-shades-70 tracking-wider`}
              prefetch={false}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      )}

      {/* Mobile Nav */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            className="h-8 w-8 px-2 py-2 lg:hidden"
            size="icon"
          >
            <Menu className="text-black" size={48} />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>

        <SheetContent side="left"className="text-dark-grey-shades-15 bg-green-shades-95">
          <SheetHeader>
            <SheetTitle className="text-lg text-start font-semibold">HerbPlants</SheetTitle>
            <SheetDescription />
          </SheetHeader>
          
          {isClient && (
            <nav className="grid gap-4 w-[200px] px-4 mt-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-lg font-medium hover:underline underline-offset-4 ${
                    pathname === item.href ? "text-green-600 font-semibold" : "text-black"
                  }`}
                  prefetch={false}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}
