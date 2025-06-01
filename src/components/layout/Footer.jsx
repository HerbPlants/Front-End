'use client';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUp, MapPinIcon, Phone } from "lucide-react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import NAVIGATION_ITEMS from "@/data/menu-config";

const navItems = NAVIGATION_ITEMS;

export default function FooterSection() {

  return (
    <footer className="bg-dark-green-shades-15 px-10 py-6">
      <div className="container max-w-screen-xl space-y-6 mx-auto">
        <div className="flex justify-between items-center px-4">
          <Image
            className="aspect-square max-w-12"
            src="/images/logo/logo_simple.png"
            alt="logo"
            width={40}
            height={40}
          />
          <div className="hidden md:flex gap-4">
            {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:underline underline-offset-4 font-medium"
                  prefetch={false}
                >
                  {item.name}
                </Link>
              ))}
          </div>
          <div className="flex items-center gap-2">
            <p className="text-white">Go To Top</p>
            <Button className="rounded-full w-10 h-10" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <ArrowUp size={64} className="aspect-square w-10 h-10" />
            </Button>
          </div>
        </div>
        <div>
          <Card className="overflow-hidden border-dark-green-shades-25 rounded-md bg-dark-green-shades-20 p-6 md:p-4 flex flex-col md:flex-row md:justify-between md:items-center gap-6">
            <div className="gap-2 flex flex-col w-full md:w-fit md:flex-row">
              <Button
                variant="outline"
                className="text-white font-medium border-dark-green-shades-25 flex items-center gap-1 hover:text-white  hover:bg-dark-green-shades-25"
              >
                <span className="text-green-shades-70 hover:text-dark-green-shades-15">
                  <EmailIcon />
                </span>
                <span>CC25-CF155@devacademy.id</span>
              </Button>
              <Button
                variant="outline"
                className="text-white font-medium border-dark-green-shades-25 flex items-center gap-1 hover:text-white  hover:bg-dark-green-shades-25"
              >
                  <Phone fill="currentColor" className="text-green-shades-70 hover:text-dark-green-shades-15"/>
                <span>+62 858 23 2309</span>
              </Button>
              <Button
                variant="outline"
                className="text-white font-medium border-dark-green-shades-25 flex items-center gap-1 hover:text-white  hover:bg-dark-green-shades-25"
              >
                <MapPinIcon className="text-green-shades-70 hover:text-dark-green-shades-15"/>
                <span>Indonesia</span>
              </Button>
            </div>
            <p className="text-white text-center text-base md:text-xs lg:text-sm">&copy; 2025 HerbPlants. All rights reserved.</p>
          </Card>
        </div>
      </div>
    </footer>
  );
}

function EmailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="17"
      viewBox="0 0 22 17"
      fill="none"
    >
      <path
        d="M0.5 4.92691V13.5078C0.5 15.1647 1.84315 16.5078 3.5 16.5078H18.5C20.1569 16.5078 21.5 15.1647 21.5 13.5078V4.92691L12.5723 10.4209C11.6081 11.0142 10.3919 11.0143 9.42771 10.4209L0.5 4.92691Z"
        fill="currentColor"
      />
      <path
        d="M21.5 3.16564V3.00781C21.5 1.35096 20.1569 0.0078125 18.5 0.0078125H3.5C1.84315 0.0078125 0.5 1.35096 0.5 3.00781V3.16564L10.2139 9.1434C10.696 9.44008 11.304 9.44008 11.7861 9.14339L21.5 3.16564Z"
        fill="currentColor"
      />
    </svg>
  );
}
