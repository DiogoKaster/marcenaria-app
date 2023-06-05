'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import classes from './Sidebar.module.scss'
import Navigation from './Navigation'

const variants = {
	open: { opacity: 1, x: 0 },
	closed: { opacity: 0, x: '+100%' },
}

export default function Sidebar() {
	const [show, setShow] = useState(false)

	return (
		<>
			<motion.div
				className={classes.sidebar_container}
				initial={{ opacity: 0 }}
				animate={show ? 'open' : 'closed'}
				variants={variants}
				transition={{ duration: 0.5 }}
			>
				<Navigation />
			</motion.div>
			<motion.button
				className={classes.toggle}
				onClick={() => setShow((show) => !show)}
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
			>
				Toggle Button
			</motion.button>
		</>
	)
}
