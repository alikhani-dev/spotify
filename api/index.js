import axios from 'axios'

const instance = axios.create({
	baseURL: 'http://localhost:5000/'
})

export const get = async (url, params) => await instance.get(url, { params })

// ----------- Home page -----------

export const getHome = async () => {
	const { data } = await get('home')
	return data
}

// ----------- Search page -----------

export const getSearch = async () => {
	const { data } = await get('search')
	return data
}
