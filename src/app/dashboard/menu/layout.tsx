import type { Metadata } from "next";
import { MenuProvider } from "@/app/components/menu/menu/menu-provider";

export const metadata: Metadata = {
  title: "Menu"
};

export default function MenuLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <MenuProvider>{children}</MenuProvider>
    </div>
  );
}