import { FC, useState, useRef, useEffect } from "react"
import { ActionsMobileType } from "./menu-item.types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { routing } from "@/app/routing/routing";

export const ActionsMobile: FC<ActionsMobileType> = ({id, handleDeleteItem, openForm, menuIncludesMenuItem}) => {
    const [opened, setOpened] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);
    const router = useRouter();

    const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            setOpened(false)
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);

    return (
        <div className="md:hidden relative" ref={ref}>
            <Image src='/images/icons/hamburger.svg' alt="Hamburger" onClick={() => setOpened(!opened)} width={17} height={17}/>
            { opened ? (
                <div className="absolute right-5 top-0 bg-white text-sm text-nowrap border rounded-md z-10">
                    <p className={`py-2 px-4 hover:bg-neutral-50 border-b ${!menuIncludesMenuItem ? 'pointer-events-none grayscale opacity-30' : ''}`} onClick={() =>{
                    router.push(`${routing["/dashboard/menu/create"]}/${id}`)
                } }>Dodaj pozycję menu</p>
                    <p className="py-2 px-4 hover:bg-neutral-50 border-b" onClick={() => {
                        openForm?.(true);
                        setOpened(false);
                    } }>Edytuj</p>
                    <p className="py-2 px-4 hover:bg-neutral-50 border-b" onClick={handleDeleteItem}>Usuń</p>
                </div>
            ) : null}
        </div>
    )
}