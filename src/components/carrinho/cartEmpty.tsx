import { IconShoppingCartOff } from "@tabler/icons-react";
import Link from "next/link";

export default function CartEmpty() {
    return (
        <div className="flex flex-col items-center gap-4 text-zinc-500">
            <IconShoppingCartOff size={150} stroke={0.5}/>
            <div>
                <h2 className="text-3xl">Seu carrinho está vazio !!!</h2>
                <p>Adicione produtos clicando no botão adicionar.</p>
            </div>
            <Link 
                href={"/"} 
                className="bg-green-600 text-white rounded-md px-4 py-2 hover:bg-green-900">
                Ver produtos
            </Link>
        </div>
    )
}