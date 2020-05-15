import { NamedLanguage } from 'react-localize-redux';
import * as en from './json/en.json';
import * as fr from './json/fr.json';

export const languageTypes: string[] | NamedLanguage[] = ['en', 'fr'];

export const translations = {
	deviceGallery: {
		x: 'y',
		addToCartButton: [en.deviceGallery.addToCartButton, fr.deviceGallery.addToCartButton],
		priceTitle: [en.deviceGallery.priceTitle, fr.deviceGallery.priceTitle]
	}
};
