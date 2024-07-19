'use client'
import CartAreaPage from "@/components/carrinho/cartAreaPage";
import CartEmpty from "@/components/carrinho/cartEmpty";
import TotalChart from "@/components/carrinho/totalCart";
import PageApp from "@/components/templates/pageApp";
import useCart from "@/data/hooks/useCart";

export default function CartPage() {
    const { itens, adicionar, remover } = useCart()
    return (
        <PageApp>
            {itens.length === 0 ? (
                <CartEmpty/>
            ) : (
                <div className="flex flex-col gap-4">
                    {itens.map((item) => (
                        <CartAreaPage 
                            key={item.produto.id} 
                            item={item} 
                            adicionar={(item) => adicionar(item.produto)}
                            remover={(item) => remover(item.produto)}
                        />
                    ))}
                    <TotalChart itens={itens}/>
                </div>
            )}
        </PageApp>
    )
}