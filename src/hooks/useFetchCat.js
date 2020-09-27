import config from '../config'
import { useState, useEffect } from 'react'
const useFetchCat = (people) => {
	const [nextCat, setnextCat] = useState(null)
	const [error, setError] = useState(null)

	useEffect(() => {
		const handleFetch = async () => {
			try {
				const data = await fetch(
					'https://agile-earth-54183.herokuapp.com/api/pets/cat',
					// `${config.REACT_APP_API_BASE}/pets/cat`,
					{ method: 'GET' }
				)

				const cat = await data.json()
				// if (cat.error) throw cat.error
				if (cat.error) { console.log(cat.error)}
				if (cat) {
					setnextCat(cat)
				}
			} catch (error) {
				setError(error)
			}
		}
		if (!error) {
			handleFetch()
		}

		return () => {
			//
		}
	}, [people, nextCat, error])

	return { nextCat, error }
}
export default useFetchCat
