import { Metadata } from "next";
import { EmptyMenu } from "@/app/components/menu/empty-menu/empty-menu";

export const metadata: Metadata = {
  title: "Menu"
};

export default function Menu() {
    return (
      <section>
        <EmptyMenu />
      </section>
    );
  }