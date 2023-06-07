import { motion } from 'framer-motion'
import Link from 'next/link'
import classes from './Navigation.module.scss'

export default function Navigation() {
	return (
		<motion.div className={classes.inner_nav}>
			<ul>
				{links.map((link) => {
					return(
						<li key={link.id}>
							<Link href={link.href}>{link.name}</Link>
						</li>
					)
				})}
			</ul>
		</motion.div>
	)
}

const links: {id: number, href: string, name: string}[] = [
	{'id': 1, 'href': '/', 'name': 'Página Principal'},
	{'id': 2, 'href': '/about', 'name': 'Quem somos'},
	{'id': 3, 'href': '/work', 'name': 'Nosso trabalho'},
	{'id': 4, 'href': '/contact', 'name': 'Contate-nos'}
]
