module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,vue}",
    "!src/main.js",
    "!**/node_modules/**",
    "!src/router/*.js"
  ],
  coverageThreshold: {
    global: {
      branches: 20,
      functions: 20,
      lines: 20,
      statements: 20
    }
  },
  verbose: true,
  moduleFileExtensions: ["js", "json", "vue"],
  transform: {
    ".*\\.(vue)$": "vue-jest",
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest"
  },
  coverageReporters: ["html", "text-summary", "json"],
  automock: false,
  setupFiles: ["./setupJest.js"]
};
