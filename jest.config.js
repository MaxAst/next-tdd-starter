module.exports = {
    collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect', './jest.setup.js'],
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
};
