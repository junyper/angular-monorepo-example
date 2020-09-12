module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: [
    '<rootDir>/packages/test-utils/src/lib/setup.ts'
  ],
  moduleNameMapper: {
    '^lodash-es$': 'lodash',
    '@my/components/(.*)': '<rootDir>/packages/components/$1',
    '@my/(.*)': '<rootDir>/packages/$1/src/index.ts'
  },
  modulePathIgnorePatterns: ['dist'],
  transformIgnorePatterns: [
		'/node_modules/',
		'/dist/'
	],
  coverageDirectory: '<rootDir>/__coverage__',
  coverageReporters: ['html', 'text', 'lcov', 'json'],
  collectCoverageFrom: [
    '<rootDir>/packages/components/*/**/*.ts',
    '<rootDir>/packages/*/src/**/*.ts',
    '<rootDir>/apps/*/src/**/*.ts'
  ],
  coveragePathIgnorePatterns: [
    '__coverage__',
    '__screenshots__',
    'node_modules',
    'dist',
    'assets',
    '.*(spec|config|mock|fixture|knobs).ts'
  ]
};
