import Link from 'next/link'
import { Col } from 'react-bootstrap'
import classes from './Liked.module.scss'

const Liked = () => {
	return (
		<Col
			className={`${classes.card} text-light p-4 d-flex flex-column justify-content-end rounded-3`}
			xs={12}
			md={8}
			lg={6}
			xl={4}
		>
			<Link href='/'>
				<a className='text-decoration-none link-light h2 fw-bolder mb-2 d-block'>Liked song</a>
			</Link>
			<p className='h6 fw-bold'>0 liked songs</p>
		</Col>
	)
}

export default Liked
