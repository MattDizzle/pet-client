import React from 'react'
import DogImage from './DogImage'
import DogInfo from './DogInfo'
import './Dog.css'
import useFetchDog from '../../../../hooks/useFetchDog'

import useAdoptDog from '../../../../hooks/useAdoptDog'
import ErrorBoundary from '../../ErrorBoundary'
export default function Dog({ people, user }) {
	const { nextDog, error } = useFetchDog(people)
	const {
		handleAdopt,
		adoptError,
		adopted,
		setAdopted,
	} = useAdoptDog()
	let message
	if (adopted) {
		message = (
			<>
				<p>YAY Congrats!</p>
				<button
					className='adopt__button'
					onClick={() => handleAdopt('dog')}
				>
					Confirm
				</button>
			</>
		)
	}
	let button
	if (people) {
		button = people[0] === user && (
			<button
				className='adopt__button'
				onClick={() => setAdopted(true)}
			>
				Adopt
			</button>
		)
	}
	return (
		<div className='dog__container'>
			<div className='flex__container'>
				{adoptError || error ? (
					<ErrorBoundary />
				) : (
					<>
						<DogImage {...nextDog} />
						<DogInfo {...nextDog} />
						{message}
						<div>{button}</div>
					</>
				)}
			</div>
		</div>
	)
}
