'use client';
import Menu from "@/app/components/menu/menu/menu";
import { useRouter } from "next/navigation";
import { routing } from "@/app/routing/routing";

export default function MenuPage() {
  const router = useRouter();
  return (
      <Menu parentId={null} onAddMenuItem={()=> router.push(routing["/dashboard/menu/create"])}/>
  )
}