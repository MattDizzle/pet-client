import React from 'react'

export default function DogImage({ imageURL = null }) {
	return (
		<div>
			{imageURL ? (
				<img
					className='dog__image'
					alt='doggie'
					src={imageURL}
				></img>
			) : (
				'No Image Available'
			)}
		</div>
	)
}
