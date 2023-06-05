import classes from './NavBar.module.scss'
import Logo from '@/components/Logo/Logo'
import Sidebar from './components/Sidebar'

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
			<Sidebar />
		</div>
	</nav>
}