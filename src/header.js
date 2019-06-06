import React from 'react';

export function CreateHeader() {
    return (
        <div className = 'header'>
        <div className = 'circle'></div>
        	<div className = 'header__logo'>
        		<div>
					<h1>Aaron Myers</h1>
					<h4>Junior Front-End Web Developer</h4>
				</div>
			</div>
			<span />
			<div className = 'header__info'>
				<div>
					<p>This website was created to show my deign skills,<br/> as well as my understanding of React</p>
				</div>
			</div>
		</div>
    );
}