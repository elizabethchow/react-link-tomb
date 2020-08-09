import React from 'react'
import Logo from '../images/logo.svg'

export default function Header(props) {
	return (
		<div>
			<div id="header-img">
				{(props.header_image) ?
					(<img src={props.header_image}/>) :
					// (<img src={Logo} />)
					(<Logo />)
				}
			</div>
			<h1 className="name">
				{(props.heading_text) ?
					props.heading_text :
					"edit heading in data.json"
				}

			</h1>
			<div className="description">
				{(props.description) ?
					props.description :
					"edit link tree description in data.json"
				}
			</div>
		</div>
	)
}
