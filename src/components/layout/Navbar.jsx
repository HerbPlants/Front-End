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

export default function NavbarSection() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Login", href: "/login" }
  ];

  return (
    <div className="contiainer max-w-screen-2xl flex items-center justify-between px-10 lg:px-20 py-4 shadow mx-auto">
      <Link href="#" className="flex items-center gap-2" prefetch={false}>
        <Image
          src="/images/logo/logo_navbar.png"
          alt="logo"
          width={144}
          height={144}
          className="max-w-24"
        />
      </Link>
      <nav className="ml-auto hidden lg:flex lg:items-center gap-4">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`px-4 py-2 rounded  ${
              pathname === item.href
                ? "text-green-600 font-semibold"
                : "text-white dark:text-white"
            } ${item.name === "Login" ? "bg-green-600" : ""}`}
            prefetch={false}
          >
            {item.name}
          </Link>
        ))}
      </nav>
      {/* <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>

        <SheetContent side="left">
          <SheetHeader className={``}>
            <SheetTitle className={"text-lg font-semibold items-center"}>
              Logo
            </SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>

          <nav className="grid gap-4 w-[200px] px-4">
            <Link
              href="#"
              className="text-lg font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-lg font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              About
            </Link>
            <Link
              href="#"
              className="text-lg font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Services
            </Link>
            <Link
              href="#"
              className="text-lg font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Portfolio
            </Link>
            <Link
              href="#"
              className="text-lg font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Contact
            </Link>
          </nav>
        </SheetContent>
      </Sheet> */}
    </div>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
