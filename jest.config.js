export default {
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest", // Transforms .js/.jsx/.ts/.tsx files using Babel
  },
  extensionsToTreatAsEsm: [".jsx"], // Only add .jsx here (if needed)
};
