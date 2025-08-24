// scripts/copy-vendor-assets.js

import fs from 'fs';
import path from 'path';

const assets = [
  // CSS files
  'node_modules/bootstrap/dist/css/bootstrap.min.css',
  'node_modules/@fortawesome/fontawesome-free/css/all.min.css',
  'node_modules/admin-lte/dist/css/adminlte.min.css',
  // JavaScript files
  'node_modules/jquery/dist/jquery.min.js',
  'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
];

const destDirs = {
    css: 'public/vendor/css',
    js: 'public/vendor/js'
};

// Create destination directories
Object.values(destDirs).forEach(dir => fs.mkdirSync(dir, { recursive: true }));

assets.forEach(assetPath => {
  const fileExt = path.extname(assetPath);
  const destDir = fileExt === '.css' ? destDirs.css : destDirs.js;
  const fileName = path.basename(assetPath);
  const destPath = path.join(destDir, fileName);

  fs.copyFile(assetPath, destPath, (err) => {
    if (err) console.error(`Error copying ${assetPath}:`, err);
    else console.log(`Copied ${fileName} to ${destDir}`);
  });
});