
module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: [
    '<rootDir>/packages/test-utils/src/lib/setup.ts'
  ],
  moduleNameMapper: {
    '^lodash-es$': 'lodash',
    '@my/components/(.*)': '<rootDir>/packages/components/dist/$1',
    '@my/(.*)': '<rootDir>/packages/$1/dist'
  },
  modulePathIgnorePatterns: ['dist'],
  transformIgnorePatterns: [
		'/node_modules/',
		'/dist/'
	]
};
