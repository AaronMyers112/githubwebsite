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
				<Repos data={repos} />
			))
		console.log(repos.result);
	}
    return (
        <div className="App">
          <CreateHeader />
          {loaded}
        </div>
    );

}

export default App;
