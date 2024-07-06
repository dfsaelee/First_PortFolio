import ItemCard from "@/components/ItemCard";
import Section from "@/components/sections";
import { Folder } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Section title="Projects" icon={<Folder />}>
        <ItemCard children={""} image={"./nextjs.jpg"} title={"Portfolio using NextJS"} description={"Showcasing my career in programming, using NextJS"} tags={["Nextjs", "shadcn/ui", "TailWind", "React"]} href={"/projects/portfolio"} />
      </Section>
    </main >
  );
}
