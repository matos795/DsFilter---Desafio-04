import { useContext } from "react"
import "./styles.css"
import { ContextProductsCount } from "../../utils/context-products"

export default function Header() {

    const { contextProductsCount } = useContext(ContextProductsCount);

    return (
        <>
            <header className="dsf-header dsf-mb20">
                <nav className="dsf-container">
                    <h1>DSFilter</h1>
                        <div className="dsf-nav-right">
                            {contextProductsCount} produto(s)
                        </div>
                    
                </nav>
            </header>
        </>
    )
}