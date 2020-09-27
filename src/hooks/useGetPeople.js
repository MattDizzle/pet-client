import { useState, useEffect } from 'react'
import config from '../config'

export default function useGetPeople() {
	const [people, setPeople] = useState([])
	const [newPerson, setNewPerson] = useState('')
	const [user, setUser] = useState(null)
	const [error, setError] = useState(null)

	useEffect(() => {
		const getPeople = async () => {
			try {
				const data = await fetch(
					`${config.REACT_APP_API_BASE}/people`,
					{ method: 'GET' }
				)
				if (data.error) throw data.error
				const people = await data.json()
				setPeople(people)
			} catch (err) {
				setError(err)
			}
		}

		getPeople()

		return () => people
	}, [people])
	const addPerson = async (e) => {
		try {
			e.preventDefault()
			if (!newPerson.length) {
				setError('Must be not be blank')
			}
			const person = { person: newPerson }
			const postUser = await fetch(
				`${config.REACT_APP_API_BASE}/people`,
				{
					method: 'POST',
					headers: { 'content-type': 'application/json' },
					body: JSON.stringify(person),
				}
			)
			if (postUser.error) throw postUser.error
			setUser(newPerson)
			setNewPerson('')
		} catch (error) {
			console.error(error)
		}
	}

	return {
		people,
		setPeople,
		error,
		addPerson,
		newPerson,
		setNewPerson,
		user,
	}
}
