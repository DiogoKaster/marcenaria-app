import classes from './NavBar.module.scss'
import Logo from '@/components/Logo/Logo'
import Sidebar from './components/Sidebar'
import Link from 'next/link'

export default function NavBar() {
	return <nav className={classes.navbar_container}>
		<div className={classes.brandLogo}>
			<Logo />
		</div>
		<div className={classes.brandName}>
			<Link href='/'>Marcenaria Nova Estrela</Link>
			<p>Móveis sob medida</p>
		</div>
		<div>
			<Sidebar />
		</div>
	</nav>
}