import { Col, Row } from 'react-bootstrap'
import Card from '../Card'

const Browse = ({ data, name }) => {
	return (
		<Row>
			<Col xs={12} className='h2 text-light mb-3 user-select-none'>
				{name}
			</Col>
			{data.map(data => (
				<Col key={data.id} xs={12} sm={6} md={4} lg={3} xl={2}>
					<Card data={data} height='150px' fontSize='1.3rem' sizeImage='100' />
				</Col>
			))}
		</Row>
	)
}

export default Browse
