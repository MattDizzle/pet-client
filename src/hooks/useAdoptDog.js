import { useState } from 'react'
import config from '../config'

export default function useAdoptDog() {
	const [adoptError, setAdoptError] = useState(null)
	const [adopted, setAdopted] = useState(null)
	const servePet = async (pet) => {
		try {
			const data = await fetch(
				`${config.REACT_APP_API_BASE}/pets/${pet}`,
				{
					method: 'DELETE',
				}
			)
			if (data.error) throw data.error
		} catch (error) {
			setAdoptError(error)
		}
	}
	const serveAdopter = async () => {
		try {
			const data = await fetch(
				`${config.REACT_APP_API_BASE}/people`,
				{
					method: 'DELETE',
				}
			)
			if (data.error) throw data.error
		} catch (error) {
			setAdoptError(error)
		}
	}
	const handleAdopt = (pet) => {
		setAdopted(false)
		servePet(pet)
		serveAdopter()
	}
	return { handleAdopt, adoptError, adopted, setAdopted }
}
