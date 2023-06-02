import classes from "./NavBar.module.scss"
import Link from "next/link"
import Logo from "@/components/Logo/Logo"

export default function NavBar() {
    return <nav className={classes.navbar_container}>
        <div className={classes.brandLogo}>
        <Logo />
        </div>
        <div className={classes.brandName}>
            <a>Marcenaria Nova Estrela</a>
            <p>Móveis sob medida</p>
        </div>
        <div>
        </div>
    </nav>
}