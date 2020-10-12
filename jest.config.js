const { readdirSync } = require('fs');
const { join } = require('path');

const pkgList = readdirSync(join(__dirname, './src')).filter((pkg) => pkg.charAt(0) !== '.');

const moduleNameMapper = {};

pkgList.forEach((shortName) => {
  const name = `${shortName}`;
  moduleNameMapper[name] = join(__dirname, `./src/${shortName}`);
});

module.exports = {
  // collectCoverageFrom: [
  //   'src/**/*.{ts,tsx}',
  //   '!src/demos/**',
  // ],
  // moduleNameMapper,
  testURL: 'http://localhost',
  verbose: true,
  snapshotSerializers: [require.resolve('enzyme-to-json/serializer')],
  // extraSetupFiles: ['./tests/setupTests.js'],
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: false,
  },
};
