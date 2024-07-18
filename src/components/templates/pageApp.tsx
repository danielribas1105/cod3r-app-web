import React from "react"
import Header from "./header"

export interface PageAppProps {
    children: React.ReactNode
    className?: string
}

export default function PageApp(props: PageAppProps) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <main className={`flex-1 w-[1200px] m-auto py-10 ${props.className ?? ''}`}>
                {props.children}
            </main>
        </div>
    )
}