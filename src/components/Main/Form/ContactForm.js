import React from 'react'
import './ContactForm.css'
import People from '../People/People'

export default function ContactForm({
	people,
	addPerson,
	newPerson,
	setNewPerson,
	user,
}) {
	let peopleList
	if (!people || people === null) {
		peopleList = null
	} else if (people[0] === user || people.length === 1) {
		peopleList = <p>You're next! {user}</p>
	} else if (people.length >= 1) {
		peopleList = <People people={people} newPerson={newPerson} />
	}

	return (
		<div className='form__container'>
			<form className='name__form' onSubmit={addPerson}>
				<label htmlFor='name'>GET IN LINE</label>
				<input
					className='input'
					name='name'
					type='text'
					value={newPerson}
					onChange={(e) => setNewPerson(e.target.value)}
					required
				/>
				<button type='submit'>ADD</button>
			</form>
			{peopleList}
		</div>
	)
}
