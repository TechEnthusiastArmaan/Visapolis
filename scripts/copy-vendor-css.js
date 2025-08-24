// scripts/copy-vendor-css.js
import fs from 'fs';
import path from 'path';

const sources = [
  'node_modules/bootstrap/dist/css/bootstrap.min.css',
  'node_modules/@fortawesome/fontawesome-free/css/all.min.css',
  'node_modules/admin-lte/dist/css/adminlte.min.css',
];
const destinationDir = 'public/vendor/css';

fs.mkdirSync(destinationDir, { recursive: true });

sources.forEach(sourcePath => {
  const fileName = path.basename(sourcePath);
  const destinationPath = path.join(destinationDir, fileName);
  fs.copyFileSync(sourcePath, destinationPath);
  console.log(`Copied ${fileName} to ${destinationDir}`);
});
