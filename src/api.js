import { useState, useEffect } from 'react';

function getRepos() {
	return fetch(`https://api.github.com/users/aaronmyers112/repos?callback=result`, {
		method: "GET",
		headers: {
			'Accept': 'application/vnd.github.v3+json',
		}
	})
	.then((res) => res.json())
	.then((res) => res.data)
	.then((data) => 
		data.map((result) => ({
			url: result.url,
			description: result.description,
			name: result.name,
		})),
	);
}

export function useRepos () {
	const [loading, setLoading] = useState(true);
	const [repos, setRepos] = useState([]);
	useEffect(() => {
		getRepos()
			.then((repos) => {
				setRepos(repos);
				setLoading(false);
			})
			.catch((e) => {
				setLoading(false);
			})
	}, []);
	return {
		loading,
		repos,
	}
}