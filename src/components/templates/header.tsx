import Cart from "./ui/cart";
import Logo from "./ui/logo";

export default function Header() {
    return (
        <header className="flex justify-between items-center bg-zinc-900 px-10">
            <Logo/>
            <Cart/>
        </header>
    )
}