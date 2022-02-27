import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Card from '../Card'

const Top = ({ data, name }) => {
	return (
		<Row>
			<Col xs={12} className='h2 text-light mb-3 user-select-none'>
				{name}
			</Col>
			{data.map(data => (
				<Col key={data.id} xs={12} md={6} lg={4}>
					<Card data={data} sizeImage='130' fontSize='2.5rem' height='200px' />
				</Col>
			))}
		</Row>
	)
}

export default Top
