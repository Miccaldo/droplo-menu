'use client'
import { Button } from "../components/ui/button/button";
import { redirect } from "next/navigation";
import { routing } from "../routing/routing";

export default function Dashboard() {
    return (
      <div className="text-center h-screen flex items-center justify-center">
        <Button onClick={() => { redirect(routing["/dashboard/menu"])}}>{"Przejdź do listy nawigacji ->"}</Button>
      </div>
    );
  }