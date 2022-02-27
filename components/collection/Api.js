import { get } from 'server'

export const getCollection = async () => {
	const { data } = await get(`collection`)
	return data
}
