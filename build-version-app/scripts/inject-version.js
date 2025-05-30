const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get version from package.json
const packageJson = require('../package.json');
const version = packageJson.version;

// Get git information
let gitHash = 'unknown';
let gitBranch = 'unknown';
try {
  gitHash = execSync('git rev-parse --short HEAD').toString().trim();
  gitBranch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
} catch (error) {
  console.warn('Git information not available');
}

// Get build date
const buildDate = new Date().toISOString();

// Create environment variables
const envContent = `# Auto-generated build information
REACT_APP_VERSION=${version}
REACT_APP_BUILD_DATE=${buildDate}
REACT_APP_GIT_HASH=${gitHash}
REACT_APP_GIT_BRANCH=${gitBranch}
REACT_APP_BUILD_NUMBER=${process.env.BUILD_NUMBER || 'local'}
`;

// Write to .env.local (takes precedence over .env)
fs.writeFileSync('.env.local', envContent);

console.log('✅ Build information injected:');
console.log(`   Version: ${version}`);
console.log(`   Build Date: ${buildDate}`);
console.log(`   Git Hash: ${gitHash}`);
console.log(`   Git Branch: ${gitBranch}`);