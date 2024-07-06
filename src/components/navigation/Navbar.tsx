import { BookUser, FolderKanban, GraduationCap, House, Phone, SearchCheck } from "lucide-react";
import React from "react";
import { ModeToggle } from "./ui/ModeToggle";
import { Button } from "../ui/button";
import Link from "next/link";

type Props = {}

export default function Navbar({ }: Props) {
    return (
        <div className="w-full h-full max-w-lg 
        bg-primary-background flex justify-between items-center px-8 py-2 rounded-xl border m-4">
            <div className="flex justify-center items-center gap-4">
                {/* home */}
                <Link href="#home">
                    <Button variant="ghost" size="icon">
                        <House />
                    </Button>
                </Link>
                {/* Project */}
                <Link href="#home">
                    <Button variant="ghost" size="icon">
                        <FolderKanban />
                    </Button>
                </Link>
                { /* Experience */}
                <Link href="#home">
                    <Button variant="ghost" size="icon">
                        <BookUser />
                    </Button>
                </Link>
                { /* Education */}
                <Link href="#home">
                    <Button variant="ghost" size="icon">
                        <GraduationCap />
                    </Button>
                </Link>
                {/* Contact */}
                <Link href="#home">
                    <Button variant="ghost" size="icon">
                        <Phone />
                    </Button>
                </Link>
            </div>

            <div className="flex justify-center items-center gap-4">
                {/*Toggle Theme */}
                <ModeToggle />
                {/* Hiring */}
                <Button className="flex justify-center items-center gap-2"
                    variant="outline">
                    <SearchCheck className="" />
                    Hire Me
                </Button>
            </div>
        </div>
    )
}