import { createContext } from "react"

const CartContext = createContext<any>(null)

export function ProviderCart(props: any) {
    return (
        <CartContext.Provider value={{numero: 100}}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContext