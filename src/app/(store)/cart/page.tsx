'use client'
import { useContext } from "react";
import PageApp from "@/components/templates/pageApp";
import CartContext from "@/data/contexts/contextCart";

export default function CartPage() {
    const { numero } = useContext(CartContext);
    return (
        <PageApp>
            <div>CART PAGE: {numero}</div>
        </PageApp>
    )
}