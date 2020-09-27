import React from 'react'

export default function CatImage({ imageURL }) {
	return (
		<div>
			{imageURL ? (
				<img
					className='cat__image'
					alt='kitty'
					src={imageURL}
				></img>
			) : (
				'No Image Available'
			)}
		</div>
	)
}
