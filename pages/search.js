import Top from '@/components/search/Top/Top'
import Head from 'next/head'
import { Container } from 'react-bootstrap'
import Browse from '@/components/search/Browse/Browse'
import { getSearch } from '../api'

const search = ({ data }) => {
	const page = Object.entries(data).map(([key, value]) => {
		if (key === 'Your top genres') {
			return <Top data={value} name={key} />
		}
		return <Browse key={key} data={value} name={key} />
	})

	return (
		<>
			<Head>
				<title>Spotify - Search</title>
			</Head>
			<Container>{page}</Container>
		</>
	)
}

export const getStaticProps = async () => {
	const data = await getSearch()
	return {
		props: {
			data
		}
	}
}

export default search
