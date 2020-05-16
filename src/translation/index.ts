import { NamedLanguage } from 'react-localize-redux';
import * as en from './json/en.json';
import * as fr from './json/fr.json';

export const languageTypes: string[] | NamedLanguage[] = ['en', 'fr'];

export const translations = {
	deviceGallery: {
		pageTitle: [en.deviceGallery.pageTitle, fr.deviceGallery.pageTitle],
		addToCartButton: [en.deviceGallery.addToCartButton, fr.deviceGallery.addToCartButton],
		removeFromCartButton: [en.deviceGallery.removeFromCartButton, fr.deviceGallery.removeFromCartButton],
		priceTitle: [en.deviceGallery.priceTitle, fr.deviceGallery.priceTitle]
	},
	checkout: {
		pageTitle: [en.checkout.pageTitle, fr.checkout.pageTitle],
		totalPriceTitle: [en.checkout.totalPriceTitle, fr.checkout.totalPriceTitle]
	}
};
