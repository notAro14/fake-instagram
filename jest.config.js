module.exports = {
  moduleFileExtensions: ['js', 'jsx'],
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '^~components(.*)$': '<rootDir>/src/components$1',
    '\\.(css|scss)$': '<rootDir>/src/__mocks__/styleMock.js',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!(@hookform)/)'],
  setupFilesAfterEnv: ['<rootDir>/src/tests/setup.js'],
};
