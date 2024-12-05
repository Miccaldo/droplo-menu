'use client';
import Menu from "@/app/components/menu/menu/menu";
import { useRouter } from "next/navigation";
import { routing } from "@/app/routing/routing";

export default function MenuPage() {
  const router = useRouter();
  return (
    <div className="px-3 md:px-0">
        <h1 className="mt-6 mb-4 text-xl">Moja lista menu</h1>
        <Menu parentId={null} onAddMenuItem={()=> router.push(routing["/dashboard/menu/create"])}/>
    </div>
      
  )
}