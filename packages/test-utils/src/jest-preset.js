module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: [
    '<rootDir>/../../packages/test-utils/src/lib/setup.ts'
  ],
  moduleNameMapper: {
    '^lodash-es$': 'lodash',
    '^@my/components/(.*)$': '<rootDir>/../../packages/components/dist/$1'
  },
  modulePathIgnorePatterns: ['dist'],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: '<rootDir>/__reports__',
      },
    ],
  ],
  coverageDirectory: '<rootDir>/__coverage__',
  coverageReporters: ['html', 'text', 'lcov', 'json'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts'
  ],
  coverageThreshold: {
    global: {
      statements: 0,
      branches: 0,
      functions: 0,
      lines: 0,
    },
  },
  coveragePathIgnorePatterns: [
    'node_modules',
    'dist',
    'assets',
    '.spec.ts'
  ]
};
