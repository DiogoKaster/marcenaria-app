import classes from "./NavBar.module.scss"
import Link from "next/link"
import Logo from "@/components/Logo/Logo"

export default function NavBar() {
    return <section className={classes.navbar_section}>
        <Logo />
        <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/">Home</Link>
            </li>
        </ul>
    </section>
}