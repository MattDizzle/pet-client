import React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'

export default function LandingPage() {
	return (
		<div className='landing__page__container'>
			<p>
				Find cats and dogs available for adoption here on
				Petful! You will be able to see the next available
				animal ready for adoption. We have a First-Come-First
				-Serve policy, because we don't like to keep out pets
				waiting for their new home for too long!
			</p>
			<p>
				Submit your name on our waiting list to adopt the next
				either the next available cat or a dog, once you are
				next you can select your favorite pet!
			</p>
			<div>
				<button type='button'>
					<Link to='/pets'>ADOPT</Link>
				</button>
			</div>
		</div>
	)
}
