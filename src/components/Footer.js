import React from 'react'
import Instagram from '../images/instagram-brands.svg';
import LinkedIn from '../images/linkedin-brands.svg';
import GitHub from '../images/github-square-brands.svg';

export default function Footer(props) {
	return (
		<div className="footer-wrapper">

			{(props.social_media.length > 0) &&
				props.social_media.map((item, index) => {
					switch (item.type) {
						case "Instagram":
							return (<a id="instagram" key={index} href={`https://www.instagram.com/${item.username}`}><Instagram /></a>);
							break;
						case "LinkedIn":
							return (<a id="linkedin" key={index} href={`https://www.linkedin.com/in/${item.username}`}><LinkedIn /></a>);
							break;
						case "GitHub":
							return (<a id="github" key={index} href={`https://www.github.com/${item.username}`}><GitHub /></a>);
							break;
					}
				})
			}

		</div>
	)
}
