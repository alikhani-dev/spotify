import Sidebar from './sidebar/Sidebar'
import Header from './Header/Header'
import { Col, Container, Row } from 'react-bootstrap'
import classes from './Layout.module.scss'
import Control from './Control/Control'
import { useRef } from 'react'

const Layout = ({ children }) => {
	const ref = useRef()
	return (
		<Container fluid>
			<Row>
				<Col xs={5} sm={4} md={3} lg={2} className='p-0'>
					<Sidebar />
				</Col>
				<Col className={classes['container']} ref={ref}>
					<Row>
						<Col xs={12} className={`p-0 ${classes['sticky-top']} mb-3`}>
							<Header parent={ref} />
						</Col>
						<Col>{children}</Col>
					</Row>
				</Col>
				<Col xs={12} className='p-0'>
					<Control />
				</Col>
			</Row>
		</Container>
	)
}

export default Layout
