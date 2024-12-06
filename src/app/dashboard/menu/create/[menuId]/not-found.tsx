'use client'
import Link from 'next/link'
import { routing } from '@/app/routing/routing'

export default function NotFound() {
    return (
        <div className='text-center h-screen flex flex-col justify-center'>
            <h1>{'Menu nie zostało znalezione! :('}</h1>
            <div>
                <Link className='transition-colors hover:text-text-accent' href={routing['/dashboard/menu']}>Wróć do listy nawigacji</Link>
            </div>
        </div>
    )
}