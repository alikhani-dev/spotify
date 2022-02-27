import Image from 'next/image'
import { Col, Row } from 'react-bootstrap'
import classes from './Card.module.scss'

const Card = ({ data }) => {
	const { artist, image } = data
	return (
		<Col xs={12} md={6} lg={4}>
			<Row className={`${classes.card} my-2 mx-1 rounded-1 overflow-hidden`}>
				<Col xs={3} className='p-0'>
					<Image src={`/image/${image}.jpg`} alt={artist} layout='fixed' width={80} height={80} />
				</Col>
				<Col xs={6} className='m-1 d-flex align-items-center'>
					<p className='fw-bold text-light user-select-none'>{artist}</p>
				</Col>
			</Row>
		</Col>
	)
}

export default Card
