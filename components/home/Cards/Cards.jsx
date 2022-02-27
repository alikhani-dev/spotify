import Card from '@/components/global/Card/Card'
import Link from 'next/link'
import { Col, Row } from 'react-bootstrap'
import classes from './Cards.module.scss'

const CardSlide = ({ data, name }) => {
	return (
		<Row>
			<Col xs='12' className='mb-3'>
				<Link href='/'>
					<a className={`${classes.title} h4 link-light user-select-none`}>{name}</a>
				</Link>
			</Col>
			{data.map(card => (
				<Card data={card} key={card.id} imageSize={212} />
			))}
		</Row>
	)
}

export default CardSlide
