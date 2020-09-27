import React, { useEffect } from 'react'
import config from '../../../config'
import './People.css'

export default function People({ people }) {
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
			console.error(error)
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
			console.error(error)
		}
	}

	useEffect(() => {
		const hello = () => {
			const id = Math.floor(Math.random() * (10 - 1) + 1)
			if (id > 5) {
				servePet('dog')
				serveAdopter()
			} else {
				servePet('cat')
				serveAdopter()
			}
		}
		let intervalID = setInterval((e) => hello(), 5000)
		return () => {
			clearInterval(intervalID)
		}
	}, [])
	return (
		<div>
			<ul className='people__list'>
				{people &&
					people.map((p, i) => (
						<li key={i} className='person'>
							{p}
						</li>
					))}
			</ul>
		</div>
	)
}
