import React from 'react';
import { CreateHeader } from './header';
import { useRepos } from './api';
import { Repos } from './body';
import './App.css';
import './body.css';

function App() {
	const { loading, repos } = useRepos();
	let loaded;



	if(loading)
	{
		loaded = <h1>Repos Loading...</h1>
	}
	else{
		loaded = repos.map((data,index) => (
				<Repos key={index} url={data.url} name={data.name} des={data.des} />
		))
	}
    return (
        <div className="App">
        <CreateHeader />
			<div className="body">
				{loaded}
			</div>
        </div>
    );

}

export default App;
