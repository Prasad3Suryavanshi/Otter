const { execSync } = require('child_process');

console.log('🦦 Building OTTER Framework...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✨ Build successful! Check the /dist folder.');
} catch (error) {
  console.error('❌ Build failed.', error);
}