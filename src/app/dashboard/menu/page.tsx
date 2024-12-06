'use client';
import Menu from "@/app/components/menu/menu/menu";
import { redirect } from "next/navigation";
import { routing } from "@/app/routing/routing";

export default function MenuPage() {
  return (
    <div className="px-3">
        <h1 className="mt-6 mb-4 text-xl">Moja lista menu</h1>
        <Menu parentId={null} onAddMenuItem={()=> redirect(routing["/dashboard/menu/create"])}/>
    </div>
      
  )
}