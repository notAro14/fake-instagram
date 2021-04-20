module.exports = {
  moduleFileExtensions: ['js', 'jsx'],
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '^Components(.*)$': '<rootDir>/src/components$1',
    '^Public/images/logo.png$': '<rootDir>/src/public/images/logo.png',
    '\\.(css|scss)$': '<rootDir>/src/__mocks__/styleMock.js',
    '\\.(png)$': '<rootDir>/src/__mocks__/fileMock.js',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!(@hookform)/)'],
};
