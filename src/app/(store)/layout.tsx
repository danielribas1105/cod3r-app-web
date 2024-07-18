'use client'
import { ProviderCart } from "@/data/contexts/contextCart";

export default function Layout(props: any) {
    return (
        <ProviderCart>
            {props.children}
        </ProviderCart>
    )
}