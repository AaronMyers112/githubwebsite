import React from 'react';

export function Repos(props) {
	console.log(props.data);
    return (
        	<div className = 'project'>
        		<h4>
	        		<a href={props.data.url}>
	        			{props.data.name}
	        		</a>
        		</h4>
        		<h1>Repo</h1>
        		<p>{props.data.des}</p>
        	</div>
    );
}