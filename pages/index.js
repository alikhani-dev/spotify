import Card from '@/components/home/Cards/Cards'
import Top from '@/components/home/Top/Top'
import Head from 'next/head'
import { Container } from 'react-bootstrap'
import { getHome } from '../api'

export default function Home({ data }) {
	const page = Object.entries(data).map(([key, value]) => {
		if (key === 'Good afternoon') {
			return <Top data={value} name={key} />
		}
		return <Card data={value} name={key} key={key} />
	})

	return (
		<>
			<Head>
				<title>Spotify - Web Player: Music for everyone</title>
				<meta name='description' content='Spotify is a digital music service that gives you access to millions of songs.' />
				<link rel='icon' sizes='32x32' type='image/png' href='https://open.scdn.co/cdn/images/favicon32.8e66b099.png' />
				<link rel='icon' sizes='16x16' type='image/png' href='https://open.scdn.co/cdn/images/favicon16.c498a969.png' />
				<link rel='icon' href='https://open.scdn.co/cdn/images/favicon.5cb2bd30.ico' />
			</Head>
			<Container>{page}</Container>
		</>
	)
}

export const getStaticProps = async () => {
	const data = await getHome()
	return {
		props: {
			data
		}
	}
}
