'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	theme: {
		breakpoint: {
			small: '540px',
			medium: '720px',
			large: '960px',
			huge: '1160px',
			full: '100%',
			fullViewport: '100vw'
		},
		gutter: {
			none: '0',
			tiny: '4px',
			small: '8px',
			medium: '16px',
			large: '20px',
			huge: '24px',
			gigantic: '32px',
			humongous: '48px'
		},
		color: {
			text: {
				light: '#8e8e8e',
				normal: '#2b2b2b',
				inverted: 'white'
			},
			inverseText: 'white',
			grey: 'grey',
			iconLight: 'lightgrey', // TODO: refactor
			border: {
				light: '#eaeaea',
				normal: '#c9cacc'
			},
			background: {
				input: 'white',
				inputSelected: '#f0f0f0',
				inputDisabled: '#e9edf1',
				progressBar: '#f1f1f1',
				window: 'white'
			},
			brand: '#028fee',
			modalBackground: 'rgba(0, 0, 0, 0.6)',
			normal: '#f9f9f9',
			primary: '#028fee',
			secondary: '#e1e2e5',
			socialDarkColor: 'rgb(39, 49, 65)', // TODO: refactor
			success: '#00c298',
			danger: '#e52224',
			warning: 'rgb(245, 151, 49)',
			info: '#028fee',
			adjustColor: {
				tiny: 0.05,
				small: 0.2,
				medium: 0.4
			},
			darkenActivePercentage: 0.1, // TODO: refactor
			darkenFocusPercentage: 0.15, // TODO: refactor
			lightenHoverPercentage: 0.1 // TODO: refactor
		},
		borderRadius: {
			small: '3px',
			medium: '5px',
			large: '10px'
		},
		iconWidth: {
			small: '12px',
			medium: '16px',
			large: '24px'
		},
		fontSize: {
			tiny: '12px',
			small: '14px',
			medium: '16px',
			large: '20px',
			huge: '24px',
			gigantic: '32px'
		},
		lineHeightMultiplier: {
			h1: '* 1.5',
			h2: '* 1.5',
			h3: '* 1.25'
		},
		boxShadow: {
			inside: 'inset 0 0 0 1px rgba(0,0,0,.05), inset 0 1px 2px 0 rgba(78,83,90,.1)'
		},
		componentSize: {
			checkbox: '16px',
			radio: '16px',
			dot: '8px',
			toggle: {
				width: '32px',
				height: '24px'
			},
			slider: '16px'
		}
	}
};