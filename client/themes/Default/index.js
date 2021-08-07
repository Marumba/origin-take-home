const typography = {
	families: {
		primary: "'Work Sans', sans-serif;",
		secondary: "'Rubik', sans-serif;"
	},
	sizes: {
		lg: '24px',
		xs: '20px'
	},
	urls: [
		'https://fonts.googleapis.com/css2?family=Rubik:wght@500&family=Work+Sans:wght@400;600&display=swap'
	],
	weights: {
		primary: {
			regular: 400,
			semibold: 600
		},
		secondary: {
			regular: 500
		}
	}
};

const medias = {
	smallPhone: 'screen and (max-width : 480px)',
	phone: 'screen and (max-width: 767px)',
	tablet: 'screen and (min-width: 768px) and (max-width: 991px)',
	regularMobile: 'screen and (min-width : 480px) and (max-width: 991px)',
	mobile: 'screen and (max-width: 991px)',
	desktop: 'screen and (min-width: 992px)'
};

const colors = {
	blueGray100: '#CBD5DC',
	blueGray10: '#F4F8FA',
	blueGray300: '#8A9CA9',
	blueGray400: '#708797',
	blueGray50: '#E9EEF2',
	blueGray600: '#4D6475',
	blueGray900: '#1E2A32',
	brandColorPrimary: '#1B31A8',
	brandColorSecondary: '#0079FF',
	hr: '#F4F8FA',
	htmlBackground: '#E5E5E5',
	neutralWhite: '#FFFFFF',
	primaryText: '#708797'
};

export default {
	name: 'Default',
	colors,
	medias,
	typography
};
