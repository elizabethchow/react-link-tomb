import React from 'react'

export default function Card(props) {
	return (
		<div className="card-wrapper boxshadow">
			{(props.url.length > 0) &&
				(<a href={props.url} className="links">{props.title}</a>)
			}

		</div>
	)
}
