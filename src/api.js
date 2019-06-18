import { useState, useEffect } from 'react';

function getRepos() {
	return( fetch(`https://api.github.com/users/aaronmyers112/repos`, {
		method: "GET",
		headers: {
			'Accept': 'application/vnd.github.v3+json',
			}
		})
		.then((response) => response.json())
		.then((data) =>		
			data.map((results) => ({
				name: results.name,
				des: results.description,
				url: results.html_url,
			})),
	)
	)
}

export function useRepos () {
	const [loading, setLoading] = useState(true);
	const [repos, setRepos] = useState([]);
	useEffect(() => {
		getRepos()
			.then((data) => {
				setRepos(data);
				setLoading(false);
			})
			.catch((e) => {
				setLoading(false);
			})
	}, [repos]);
	return {
		loading,
		repos,
	}
}