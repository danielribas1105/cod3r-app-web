import { useContext } from "react";
import CartContext from "../contexts/contextCart";

const useCart = () => useContext(CartContext)

export default useCart