import { Metadata } from "next";
import Menu from "@/app/components/menu/menu/menu";

export const metadata: Metadata = {
  title: "Menu"
};

export default function MenuPage() {
  return (
    <Menu />
  )
}