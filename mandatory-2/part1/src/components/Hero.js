import React from 'react'

import logo from '../assets/logo.svg'

const Hero = () => (
	<div className="text-center hero my-5">
		<img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
		<h1 className="mb-4">Welcome to the index page!</h1>

		<p className="lead">
      Try logging in using the button on the top right!
		</p>
	</div>
)

export default Hero
