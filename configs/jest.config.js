const isTerminalViewer = process.env.TERMINAL_VIEWER;

module.exports = {
	name: 'origin',
	rootDir: '../',
	verbose: false,
	testEnvironment: 'jsdom',
	moduleFileExtensions: ['js', 'jsx'],
	moduleNameMapper: {
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/configs/jest.fileMock.js',
		'\\.svg': '<rootDir>/configs/jest.svgrMock.js',
		'\\.(css|less|sass|scss)$': '<rootDir>/configs/jest.styleMock.js',
		'^~$': '<rootDir>/client'
	},
	transform: {
		'\\.(js|jsx)$': ['babel-jest', { configFile: './configs/babel.config.dev.js' }]
	},
	setupFilesAfterEnv: ['<rootDir>/configs/jest.setup.js'],
	snapshotSerializers: ['@emotion/jest/serializer'],
	coverageDirectory: 'coverage',
	collectCoverageFrom: isTerminalViewer ? [] : ['client/**/*.{js,jsx}'],
	coverageReporters: isTerminalViewer ? ['text'] : ['json-summary', 'text', 'html', 'lcov'],
	coveragePathIgnorePatterns: ['/$.*/', '/node_modules/', '/public/', '/themes/'],
	testPathIgnorePatterns: ['/$.*/', '/node_modules/', '/themes/'],
	unmockedModulePathPatterns: ['react', 'react-dom', 'react-addons-test-utils', 'promise', 'source-map']
};
