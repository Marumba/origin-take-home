import mixins from './mixins';

const typography = {
	family: {
		primary: "'Work Sans', sans-serif;",
		secondary: "'Rubik', sans-serif;"
	},
	size: {
		lg: '24px',
		xs: '20px'
	},
	url: 'https://fonts.googleapis.com/css2?family=Rubik:wght@500&family=Work+Sans:wght@400;600&display=swap',
	weight: {
		primary: {
			regular: 400,
			semibold: 600
		},
		secondary: {
			regular: 500
		}
	}
};

const media = {};

const color = {
	bgGray: '#E5E5E5',
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
	neutralWhite: '#FFFFFF',
	primaryText: '#708797'
};

export default {
	name: 'Default',
	color,
	media,
	mixins: mixins({ color, typography, media }),
	typography
};
