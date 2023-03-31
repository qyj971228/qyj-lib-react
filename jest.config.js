/** @type {import('jest').Config} */
const config = {
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  collectCoverageFrom: [
    'src/lib/**/*.{tsx, }',
    '!**/node_modules/**'
  ],
};

module.exports = config;