'use client'
import CardProduct from "@/components/produto/cardProduct";
import PageApp from "@/components/templates/pageApp";
import produtos from "@/data/constants/produtos";

export default function Home() {
  return (
    <PageApp>
      <div className="flex gap-5 flex-wrap justify-center">
        {produtos.map((produto) => (
          <CardProduct key={produto.id} produto={produto}/>
        ))}
      </div>
    </PageApp>
  )
}
