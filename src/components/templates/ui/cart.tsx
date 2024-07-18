import { IconShoppingCart } from "@tabler/icons-react";
import Link from "next/link";

export default function Cart() {
    return (
        <Link href="/cart">
            <div className="relative">
                <IconShoppingCart size={32} stroke={1}/>
                <div className="flex justify-center items-center absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-600 text-xs">
                    99
                </div>
            </div>
        </Link>
    )
}