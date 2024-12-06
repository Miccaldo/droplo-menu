import { Metadata } from "next";
import { CreateMenu } from "@/app/components/menu/create-menu/create-menu";

export const metadata: Metadata = {
  title: "Create Menu"
};

export default async function MenuPage({
    params,
  }: {
    params: Promise<{ menuId: string }>
  }) {
  const menuId = (await params).menuId;

  return (
    <div>
        <CreateMenu menuId={menuId} />
    </div>
  )
}