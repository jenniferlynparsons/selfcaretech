#!/usr/bin/env node

import { execSync } from 'child_process';
import { existsSync, rmSync } from 'fs';
import path from 'path';

const DIST_DIR = 'dist';
const BRANCH = 'gh-pages';

function run(command, options = {}) {
  console.log(`Running: ${command}`);
  try {
    return execSync(command, { 
      stdio: 'inherit', 
      encoding: 'utf8',
      ...options 
    });
  } catch (error) {
    console.error(`Error running command: ${command}`);
    console.error(error.message);
    process.exit(1);
  }
}

function deploy() {
  console.log('🚀 Starting deployment to gh-pages...');

  // Check if dist directory exists
  if (!existsSync(DIST_DIR)) {
    console.error('❌ dist directory not found. Run "npm run build" first.');
    process.exit(1);
  }

  // Get current branch
  const currentBranch = execSync('git branch --show-current', { encoding: 'utf8' }).trim();
  console.log(`📍 Current branch: ${currentBranch}`);

  // Check if working directory is clean
  try {
    execSync('git diff-index --quiet HEAD --', { stdio: 'pipe' });
  } catch {
    console.error('❌ Working directory is not clean. Please commit your changes first.');
    process.exit(1);
  }

  // Check if gh-pages branch exists
  let branchExists = false;
  try {
    execSync(`git show-ref --verify --quiet refs/heads/${BRANCH}`, { stdio: 'pipe' });
    branchExists = true;
  } catch {
    console.log(`📝 Creating new ${BRANCH} branch...`);
  }

  // Create or switch to gh-pages branch
  if (branchExists) {
    run(`git checkout ${BRANCH}`);
    run('git pull origin gh-pages || true'); // Don't fail if remote doesn't exist
  } else {
    run(`git checkout --orphan ${BRANCH}`);
    run('git rm -rf .');
  }

  // Copy dist contents to root
  console.log('📦 Copying build files...');
  run(`cp -r ${DIST_DIR}/* .`);
  run(`cp ${DIST_DIR}/.nojekyll . || true`); // Copy .nojekyll if it exists

  // Add and commit changes
  run('git add .');
  
  // Check if there are changes to commit
  try {
    execSync('git diff-index --quiet --cached HEAD --', { stdio: 'pipe' });
    console.log('✅ No changes to deploy.');
  } catch {
    run('git commit -m "Deploy to GitHub Pages"');
    
    // Push to remote
    console.log('📤 Pushing to remote...');
    run(`git push origin ${BRANCH}`);
    console.log('✅ Deployment complete!');
  }

  // Switch back to original branch
  run(`git checkout ${currentBranch}`);
  
  console.log(`🎉 Deployment finished! Your site should be available at:`);
  console.log(`   https://jenniferlynparsons.github.io/selfcaretech/`);
}

deploy();