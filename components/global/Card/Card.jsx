import Image from 'next/image'
import { Col } from 'react-bootstrap'
import Link from 'next/link'
import classes from './Card.module.scss'

const Card = ({ data, imageSize, children }) => {
	const { name, artist, link, rounded, time, description, image } = data

	let links = null
	if (description) {
		links = description.map((data, index) => (
			<Link href={data.link} key={index}>
				<a>{data.name}</a>
			</Link>
		))
	}

	return (
		<Col xs='12' sm='6' md='4' lg='3' xl>
			<div className={`${classes.card} p-2 user-select-none mb-3 rounded-2 align-items-center`}>
				<div className='position-relative p-1'>
					<Image
						className={rounded ? 'rounded-circle' : 'rounded-2'}
						alt={`${artist || name} preview`}
						src={`/image/${image}.jpg`}
						width={imageSize}
						height={imageSize}
					/>
				</div>
				{(artist || name) && <h2 className='text-light h6'>{artist || name}</h2>}
				{links && <p>{links}</p>}
				{time && <p className={classes.time}>{time}</p>}
				{children && <p className={classes.children}>{children}</p>}
				{!time && !links && !children && <p className={classes.artist}>Artist</p>}
			</div>
		</Col>
	)
}

export default Card
