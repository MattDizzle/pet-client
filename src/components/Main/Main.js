import React from 'react'
import Dog from './Pets/Dogs/Dog'
import './Main.css'
import Cat from './Pets/Cats/Cat'
import ContactForm from './Form/ContactForm'
import useGetPeople from '../../hooks/useGetPeople'

export default function Main() {
	const {
		error,
		people,
		addPerson,
		newPerson,
		setNewPerson,
		user,
	} = useGetPeople()

	return (
		<div className='main__container'>
			<ContactForm
				error={error}
				people={people}
				addPerson={addPerson}
				newPerson={newPerson}
				user={user}
				setNewPerson={setNewPerson}
			/>
			<div className='main__flex'>
				<Cat user={user} people={people} />
				<Dog user={user} people={people} />
			</div>
		</div>
	)
}
