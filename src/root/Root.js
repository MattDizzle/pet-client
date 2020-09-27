import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LandingPage from '../components/LandingPage/LandingPage'
import './Root.css'
import Main from '../components/Main/Main'

function Root() {
	return (
		<div className='app'>
			<h1>Petful</h1>
			<Switch>
				<Route
					path='/pets'
					render={(renderProps) => (
						<Main {...renderProps} />
					)}
				/>
				<Route
					path='/'
					exact
					render={(renderProps) => (
						<LandingPage {...renderProps} />
					)}
				/>
			</Switch>
		</div>
	)
}

export default Root
