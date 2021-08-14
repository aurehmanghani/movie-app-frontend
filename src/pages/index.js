import React from 'react';
import SearchBoxContainer from '../conrainer/SearchBoxContainer' 
import SearchResultContainer from '../conrainer/SearchResultContainer'

const Home = () => {
return (
	<div
	style={{
		display: 'flex',
		justifyContent: 'Right',
		alignItems: 'Right',
		height: '100vh'
	}}
	>
	<div className="container">
		<SearchBoxContainer/>
		<SearchResultContainer/>
	</div>
	</div>
);
};

export default Home;
