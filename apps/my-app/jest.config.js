module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: [
    '<rootDir>/../../packages/test-utils/src/lib/setup.ts'
  ],
  moduleNameMapper: {
    '^lodash-es$': 'lodash',
    '^@my/components/(.*)$': '<rootDir>/node_modules/@my/components/$1'
  },
  modulePathIgnorePatterns: ['dist']
};
