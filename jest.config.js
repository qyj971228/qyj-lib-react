/** @type {import('jest').Config} */
const config = {
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  collectCoverageFrom: [
    'src/lib/**/*.{tsx, }',
    '!**/node_modules/**'
  ],
  moduleNameMapper: {
    "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/jest-css-modules"
  }
};

module.exports = config;