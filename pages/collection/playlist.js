import Liked from '@/components/collection/playlists/Liked/Liked'
import Card from '@/components/global/Card/Card'
import { Col, Container, Row } from 'react-bootstrap'

const playlist = ({ data }) => {
	return (
		<Container>
			<Col xs={12} className='h4 text-light fw-bolder mb-3 user-select-none'>
				Playlists
			</Col>
			<Row>
				<Liked />
				<Card data={{ name: 'My Playlist #1', image: '' }} imageSize={220}>
					By Alikhani
				</Card>
				<Card data={{ name: 'My Playlist #2', image: '' }} imageSize={220}>
					By Alikhani
				</Card>
				<Card data={{ name: 'My Playlist #3', image: '' }} imageSize={220}>
					By Alikhani
				</Card>
				<Card data={{ name: 'My Playlist #4', image: '' }} imageSize={220}>
					By Alikhani
				</Card>
			</Row>
		</Container>
	)
}

export default playlist
