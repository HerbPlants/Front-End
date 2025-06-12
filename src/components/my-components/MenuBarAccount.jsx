'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, Settings, User } from "lucide-react";
import Image from "next/image";


function getInitials(name) {
  const words = name.trim().split(" ");
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

export default function MenuBarAccount({ fullName = 'John Doe', handleLogout }) {
  const initials = getInitials(fullName);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none focus:ring-[2px] focus:ring-green-shades-70 rounded-full">
        <Avatar>
          {/* <AvatarImage src={profileImage} alt="Profile Image" /> */}
          <AvatarFallback className="bg-green-shades-90 text-sm font-medium">{initials}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-green-shades-97 space-y-1" align="end">
        <DropdownMenuLabel className="flex items-center gap-2">
            <h4>Hai! {fullName} </h4>
            <Image className="aspect-square w-8 h-8" src={'/asset/mascot-hero-square.png'} alt="Profile Image" width={48} height={48} />
          </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="focus:outline-none focus:ring-1 focus:ring-green-shades-70 hover:!bg-green-shades-90 transition-all duration-300 cursor-pointer">
          <User className="h-4 w-4 mr-2" /> Profile
        </DropdownMenuItem>
        <DropdownMenuItem className="focus:outline-none focus:ring-1 focus:ring-green-shades-70 hover:!bg-green-shades-90 transition-all duration-300 cursor-pointer">
          <Settings className="h-4 w-4 mr-2" /> Settings
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleLogout} className="text-destructive hover:!text-destructive focus:outline-none focus:ring-1 focus:ring-green-shades-70 hover:!bg-green-shades-90 transition-all duration-30 cursor-pointer">
          <LogOut className="h-4 w-4 mr-2" /> Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
