// scripts/copy-vendor-js.js
import fs from 'fs';
import path from 'path';

const sources = [
  'node_modules/jquery/dist/jquery.min.js',
];
const destinationDir = 'public/vendor/js';

fs.mkdirSync(destinationDir, { recursive: true });

sources.forEach(sourcePath => {
  const fileName = path.basename(sourcePath);
  const destinationPath = path.join(destinationDir, fileName);
  fs.copyFileSync(sourcePath, destinationPath);
  console.log(`Copied ${fileName} to ${destinationDir}`);
});
