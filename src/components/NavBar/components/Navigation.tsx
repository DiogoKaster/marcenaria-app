import { motion } from 'framer-motion'
import Link from 'next/link'
import classes from './Navigation.module.scss'

export default function Navigation() {
	return (
		<motion.div className={classes.inner_nav}>
			<ul>
				<li>
					<Link href="/">Home</Link>
				</li>
			</ul>
		</motion.div>
	)
}
