"use client"
import {useSession} from 'next-auth/react'

export default function Dashboard() {
    const session = useSession();

    return (
        <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100">
            {session.data?.user?.email}        
            {session.data?.user?.name}        
        </div>
    );
}
