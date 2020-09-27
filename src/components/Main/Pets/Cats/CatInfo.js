import React from 'react'

export default function CatInfo({
	name = null,
	age = null,
	breed = null,
	description = null,
	gender = null,
}) {
	return (
		<div className='info__container'>
			<div className='pet__stats'>
				{name ? (
					<ul className='stats__list'>
						<li>Name: {name}</li>
						<li>Age: {age}</li>
						<li>Breed: {breed}</li>
						<li>Gender: {gender}</li>
						<li>Description: {description}</li>
					</ul>
				) : (
					'No available animal to adopt'
				)}
			</div>
		</div>
	)
}
