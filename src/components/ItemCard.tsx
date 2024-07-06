import { Badge } from "@/components/ui/badge"
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {
    children: React.ReactNode
    image: string;
    title: string;
    description: string;
    tags: string[];
    href: string;
};

export default function ItemCard({ children, image, title, description, tags, href }: Props) {
    return (
        <Link className="flex justify-center items-center w-full h-full flex-1 gap-4 p-2 pr-8" href={href}>
            {children}
            <div className="flex flex-col justify-center items-center h-full">
                <img src={image} alt={title} className="w-16 h-16 object-cover rounded-lg" />
            </div>
            <div className="flex flex-col justify-start items-center w-full h-full gap-2 flex-1">
                <span className="text-sm">
                    <span className="text-base font-semibold">{title}</span>
                    {" - "}
                    <span className="text-xs">{description}</span>
                </span>
                <div className="flex justify-start items-center">
                    <span className="flex justify-center items-center gap-2">
                        {tags.map((tag, index) => (
                            <Badge
                                key={tag + index}
                                variant={"outline"}
                                className="text-xs font-semibold bg-primary-background"
                            >
                                {tag}
                            </Badge>
                        ))}
                    </span>
                </div>
            </div >
        </Link >
    );
}