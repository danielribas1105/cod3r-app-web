import useCart from "@/data/hooks/useCart"
import Produto from "@/data/model/Produto"
import Image from "next/image"

export interface CardProductProps {
    produto: Produto
}

export default function CardProduct(props: CardProductProps) {
    const {adicionar} = useCart()
    const { nome, preco, descricao, imagem } = props.produto
    return (
        <div className="flex flex-col w-72 bg-zinc-900">
            <div className="relative w-72 h-52">
                <Image src={imagem} alt={`Imagem do produto ${nome}`} fill className="object-cover"/>
            </div>
            <div className="flex-1 flex flex-col gap-4 p-5">
                <h2 className="text-xl font-bold">{nome}</h2>
                <p className="flex-1 text-sm text-justify text-zinc-400">{descricao}</p>
                <div className="flex justify-between items-center mt-2">
                    <span className="text-lg font-semibold text-right">R$ {preco.toFixed(2)}</span>
                    <button className="border rounded-full px-5 py-1 text-sm hover:bg-zinc-700" 
                        onClick={() => adicionar(props.produto)}>
                        Adicionar
                    </button>
                </div>
            </div>
        </div>
    )
}