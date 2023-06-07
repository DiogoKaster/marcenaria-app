'use client'

import classes from './NavBar.module.scss'
import Logo from '@/components/Logo/Logo'
import Sidebar from './components/Sidebar'
import { useMotionValueEvent, motion, useScroll, useAnimate } from 'framer-motion'

export default function NavBar() {
	const { scrollY } = useScroll()
	const [navbarRef, animate] = useAnimate()

	const animation = async (YValue: number) => {
		await animate(navbarRef.current, { y: YValue }, {
			type: 'keyframes'
		})
	}

	useMotionValueEvent(scrollY, 'change', async (latest) => {
		latest > 0 ? await animation(0) : await animation(-100)
	})
	return (
		<>
			<nav className={classes.navbar_container}>
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
			<motion.div
				ref={navbarRef}
				className={classes.navbar_bg}
				initial={{
					y: -100,
				}}
			></motion.div>
		</>
	)
}
