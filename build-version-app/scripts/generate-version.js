const fs = require('fs');
const path = require('path');

// Get version from environment variables or package.json
const buildNumber = process.env.BUILD_NUMBER || '0';
const gitCommit = process.env.GIT_COMMIT || 'unknown';
const gitBranch = process.env.GIT_BRANCH || 'unknown';
const buildTimestamp = process.env.BUILD_TIMESTAMP || new Date().toISOString();

// Get base version from package.json
const packageJson = require('../package.json');
const baseVersion = packageJson.version;

// Generate version string
const version = `${baseVersion}.${buildNumber}`;
const shortCommit = gitCommit.substring(0, 7);

// Create version info object
const versionInfo = {
  version: version,
  buildNumber: buildNumber,
  gitCommit: gitCommit,
  shortCommit: shortCommit,
  gitBranch: gitBranch,
  buildTimestamp: buildTimestamp,
  buildDate: new Date(buildTimestamp).toLocaleDateString(),
  buildTime: new Date(buildTimestamp).toLocaleTimeString()
};

// Create public directory if it doesn't exist
const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Write version info to public directory (accessible at runtime)
fs.writeFileSync(
  path.join(publicDir, 'version.json'),
  JSON.stringify(versionInfo, null, 2)
);

// Write version info to src directory (for build-time usage)
const srcDir = path.join(__dirname, '..', 'src');
fs.writeFileSync(
  path.join(srcDir, 'version.json'),
  JSON.stringify(versionInfo, null, 2)
);

console.log('Version information generated:');
console.log(JSON.stringify(versionInfo, null, 2));