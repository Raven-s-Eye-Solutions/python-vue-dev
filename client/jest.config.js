module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,vue}'],
  coveragePathIgnorePatterns: ['/node_modules/', 'src/main.js', 'src/router.js'],
  coverageThreshold: {
    global: {
      branches: 20,
      functions: 20,
      lines: 20,
      statements: 20,
    },
  },
  verbose: true,
  moduleFileExtensions: ['js', 'json', 'vue'],
  transform: {
    '.*\\.(vue)$': 'vue-jest',
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
  },
  coverageReporters: ['html', 'text', 'text-summary', 'json', 'lcov', 'clover'],
  automock: false,
  setupFiles: ['./setupJest.js'],
};
