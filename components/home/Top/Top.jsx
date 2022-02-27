import { Col, Row } from 'react-bootstrap'
import Card from './Card'
import classes from './Top.module.scss'

const Top = ({ data, name }) => {
	return (
		<Row className={`${classes.wrapper} mb-3`}>
			<Col xs={12} className='h2 text-light mb-3 user-select-none'>
				{name}
			</Col>
			{data.map(data => <Card key={data.id} data={data} />)}
		</Row>
	)
}

export default Top
