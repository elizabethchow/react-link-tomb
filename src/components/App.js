import React from 'react';
import Header from './Header';
import Card from './Card';
import Footer from './Footer';
import data from '../data/data.json';

export default function App() {
	let root = document.documentElement;

	if (data.colors.body_bg_color) root.style.setProperty('--body-bg-color', data.colors.body_bg_color);
	if(data.colors.heading_text_color) root.style.setProperty('--heading-text-color', data.colors.heading_text_color);
	if(data.colors.description_text_color) root.style.setProperty('--description-text-color', data.colors.description_text_color);
	if(data.colors.card_bg_color) root.style.setProperty('--card-bg-color', data.colors.card_bg_color);
	if(data.colors.card_text_color) root.style.setProperty('--card-text-color', data.colors.card_text_color);
	if(data.colors.logo_svg_fill_color) root.style.setProperty('--logo-svg-fill-color', data.colors.logo_svg_fill_color);

	return (
		<div>
			<Header header_image={data.header_image} heading_text={data.heading_text} description={data.description}/>
			<div id="cards-wrapper">
				{(data.links) ?
					data.links.map((link, index) => (
						<Card key={index} title={link.title} url={link.url} />
					)) :
					(<div>Loading</div>)

				}
			</div>
			<Footer social_media={data.social_media} />

		</div>
	)
}
