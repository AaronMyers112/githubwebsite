import React from 'react';

export function Repos(props) {
    return (
        <div className = 'container'>
            <a href={props.url}>
            	<div className = 'container_project' onClick={() => props.onSubmit(props.name)}>
            		<h1>
    	        			{props.name}
            		</h1>
            		<p>{props.des}</p>
            	</div>
            </a>
        </div>
    );
}