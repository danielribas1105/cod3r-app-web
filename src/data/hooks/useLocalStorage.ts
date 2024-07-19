import { useCallback } from "react";

export default function UseLocalStorage() {

    const get = useCallback((key: string) => {
        const value = localStorage.getItem(key)
        return value ? JSON.parse(value) : null
    }, [])

    const set = useCallback((key: string, value: any) => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [])

    const remove = useCallback((key: string) => {
        localStorage.removeItem(key)
    }, [])

    return { get, set, remove }
}