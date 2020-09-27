import React from 'react'
import CatImage from './CatImage'
import CatInfo from './CatInfo'
import './Cat.css'
import useFetchCat from '../../../../hooks/useFetchCat'
import useAdoptCat from '../../../../hooks/useAdoptCat'
import ErrorBoundary from '../../ErrorBoundary'

export default function Cat({ people, user }) {
	const { nextCat, error } = useFetchCat(people)
	const {
		handleAdopt,
		adoptError,
		adopted,
		setAdopted,
	} = useAdoptCat()
	let message
	if (adopted) {
		message = (
			<>
				<p>YAY Congrats!</p>
				<button
					className='adopt__button'
					onClick={() => handleAdopt('cat')}
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
		<div className='cat__container'>
			<div className='flex__container'>
				{adoptError || error ? (
					<ErrorBoundary />
				) : (
					<>
						<CatImage {...nextCat} />
						<CatInfo {...nextCat} />
						{message}
						<div>
							<div>{button}</div>
						</div>
					</>
				)}
			</div>
		</div>
	)
}
