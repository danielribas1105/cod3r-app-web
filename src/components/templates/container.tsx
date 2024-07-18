import React from "react"

export interface ContainerProps {
    children: React.ReactNode
    className?: string
}

export default function Container(props: ContainerProps) {
    return (
        <div>
            {props.children}
        </div>
    )
}