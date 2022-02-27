import classes from './Header.module.scss'
import { useEffect, useRef } from 'react'
import ArrowLeft from '@/public/icon/ArrowLeft.svg'
import ArrowRight from '@/public/icon/ArrowRight.svg'
import EyesSlash from '@/public/icon/EyesSlash.svg'
import Person from '@/public/icon/Person.svg'


const Header = ({ parent }) => {
	const ref = useRef()
	useEffect(() => {
		parent.current.addEventListener('scroll', () => {
			if (parent.current.scrollTop > 200) {
				ref.current.style.backgroundColor = '#212121'
			} else {
				ref.current.style.backgroundColor = 'transparent'
			}
		})
	}, [parent])

	return (
		<header ref={ref} className={classes.header}>
			<div className={classes['wrapper-icon']}>
				<button className={classes.back}>
					<ArrowLeft />
				</button>
				<button className={classes.back}>
					<ArrowRight />
				</button>
			</div>
			<div className={classes['wrapper-icon']}>
				<button className={classes.eyes}>
					<EyesSlash />
				</button>
				<button className={classes.person}>
					<Person />
				</button>
			</div>
		</header>
	)
}

export default Header
