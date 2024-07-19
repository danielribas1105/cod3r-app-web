import { createContext, useEffect, useState } from "react"
import ItemCarrinho from "../model/ItemCarrinho"
import Produto from "../model/Produto"
import UseLocalStorage from "../hooks/useLocalStorage"

export interface CartContextProps {
    itens: ItemCarrinho[]
    quantItens: number
    adicionar: (item: Produto) => void
    remover: (item: Produto) => void
}

const CartContext = createContext<CartContextProps>({} as any)

export function ProviderCart(props: any) {
    const [ itens, setItens ] = useState<ItemCarrinho[]>([])
    const { set, get } = UseLocalStorage() 

    useEffect(() => {
        const carrinho = get('carrinho')
        if(carrinho) {
            setItens(carrinho)
        }
    }, [get])

    function adicionar(produto: Produto) {
        const indiceProduto = itens.findIndex((i) => i.produto.id === produto.id)
        if(indiceProduto === -1) {
            alterarItens([...itens, { produto, quantidade: 1 }])
        }else {
            const novosItens = [...itens]
            novosItens[indiceProduto].quantidade++
            alterarItens(novosItens)
        }
    }

    function remover(produto: Produto) {
        const novosItens = itens.map((i) => {
            if(i.produto.id === produto.id) {
                i.quantidade--
            }
            return i
        }).filter((i) => i.quantidade > 0)

        alterarItens(novosItens)
    }

    function alterarItens(novosItens: ItemCarrinho[]) {
        setItens(novosItens)
        set('carrinho', novosItens)
    }
    
    return (
        <CartContext.Provider 
            value={{
                itens,
                adicionar,
                remover,
                get quantItens() {
                    return itens.reduce((total, item) => total + item.quantidade, 0)
                }
            }}
        >
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContext