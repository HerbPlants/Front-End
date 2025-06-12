"use client";
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
import { usePathname, useRouter } from "next/navigation";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import NAVIGATION_ITEMS from "@/data/menu-config";
import MenuBarAccount from "../my-components/MenuBarAccount";

const navItems = NAVIGATION_ITEMS;

export default function NavbarSection() {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [token, setToken] = useState("");

  const router = useRouter();

  const handleLogout = () => {
    // localStorage.removeItem("accessToken");
    // localStorage.removeItem("refreshToken");
    // localStorage.removeItem("fullName");
    localStorage.clear();
    router.push("/login");
  };

  useEffect(() => {
    setIsClient(true);
    const token = localStorage.getItem("accessToken");
    const fullName = localStorage.getItem("fullName");
    setFullName(fullName);
    setToken(token);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSheetOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-green-deep dark:bg-green-deep sticky top-0 z-50">
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
            {token ? (
              <MenuBarAccount fullName={fullName || "Jhon Doe"} handleLogout={handleLogout} />
            ) : (
              <Link
                key={"login"}
                href={"/login"}
                className={`bg-green-shades-70 !text-dark-green-shades-15 px-4 py-2 rounded !font-bold hover:text-green-shades-70 tracking-wider`}
                prefetch={false}
              >
                Login
              </Link>
            )}
          </nav>
        )}

        {/* Mobile Nav */}
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button className="h-8 w-8 px-2 py-2 lg:hidden" size="icon">
              <Menu className="text-black" size={48} />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>

          <SheetContent
            side="left"
            className="text-dark-grey-shades-15 bg-green-shades-95"
          >
            <SheetHeader>
              <SheetTitle className="text-lg text-start font-semibold">
                HerbPlants
              </SheetTitle>
              <SheetDescription />
            </SheetHeader>

            {isClient && (
              <nav className="grid gap-4 w-[200px] px-4 mt-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-lg font-medium hover:underline underline-offset-8 ${
                      pathname === item.href
                        ? "text-green-600 font-semibold"
                        : "text-dark-green-shades-20"
                    }`}
                    prefetch={false}
                    onClick={() => setIsSheetOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                {token ? (
                  <div className="flex flex-col gap-4">
                    {/* <Link
                      key={"profile"}
                      href={"#"}
                      // className={`cursor-not-allowed text-lg font-medium hover:underline underline-offset-8 ${
                      //   pathname === "/login"
                      //     ? "text-green-600 font-semibold"
                      //     : "text-black"
                      // }`}
                      
                      prefetch={false}
                      onClick={() => setIsSheetOpen(false)}
                      disabled={true}
                    >
                      Login
                    </Link> */}
                    <p
                  key={"logout"}
                  className={`text-lg font-medium hover:underline underline-offset-8 text-destructive cursor-pointer`}
                  onClick={() => {
                    handleLogout();
                    setIsSheetOpen(false);
                  }}
                >
                  Logout
                </p>
                </div>
                  
                ) : (
                  <Link
                  key={"login"}
                  href={"/login"}
                  className={`text-lg font-medium hover:underline underline-offset-8 ${
                    pathname === "/login"
                      ? "text-green-600 font-semibold"
                      : "text-dark-green-shades-20"
                  }`}
                  prefetch={false}
                  onClick={() => setIsSheetOpen(false)}
                >
                  Login
                </Link>
                )}
                
              </nav>
            )}
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
