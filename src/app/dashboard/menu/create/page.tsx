import { Metadata } from "next";
import { CreateMenu } from "@/app/components/menu/create-menu/create-menu";

export const metadata: Metadata = {
  title: "Create Menu"
};

export default function MenuPage() {
  return (
    <div>
        <CreateMenu />
    </div>
  )
}