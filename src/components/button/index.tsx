import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"
import "./style.css"


interface buttonProps 
extends  DetailedHTMLProps<
ButtonHTMLAttributes<HTMLButtonElement>,
HTMLButtonElement
>{

}

export default function ButtonComponent({}){
    return (
        <button>

        </button>
    )
}