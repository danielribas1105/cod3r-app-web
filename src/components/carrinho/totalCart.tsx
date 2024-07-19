import ItemCarrinho from "@/data/model/ItemCarrinho"

export interface TotalChartProps {
    itens: ItemCarrinho[]
}

export default function TotalChart(props: TotalChartProps) {
    const total = props.itens.reduce((acc, item) => acc + item.produto.preco * item.quantidade, 0)
    return (
        <div className="flex items-center justify-between gap-4 bg-zinc-900 rounded-md p-7">
            <div className="flex flex-1 items-center justify-between">
                <span className="text-3xl font-bold text-zinc-500">Total</span>
                <span className="text-3xl font-bold text-yellow-500">R$ {total.toFixed(2)}</span>
            </div>
            <button 
                className="bg-green-600 text-xl px-4 py-2 rounded-md hover:bg-green-900">
                Finalizar
            </button>
        </div>
    )
}