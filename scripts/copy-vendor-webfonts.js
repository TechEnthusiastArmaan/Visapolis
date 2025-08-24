    // scripts/copy-vendor-webfonts.js
    import fs from 'fs';
    import path from 'path';

    // Define source and destination paths for webfonts
    const sourceDir = 'node_modules/@fortawesome/fontawesome-free/webfonts';
    const destinationDir = 'public/vendor/webfonts';

    // Ensure the destination directory exists
    fs.mkdirSync(destinationDir, { recursive: true });

    // Copy all font files
    fs.readdir(sourceDir, (err, files) => {
        if (err) {
            console.error(`Error reading source directory ${sourceDir}:`, err);
            return;
        }

        files.forEach(file => {
            const sourcePath = path.join(sourceDir, file);
            const destinationPath = path.join(destinationDir, file);
            fs.copyFile(sourcePath, destinationPath, (copyErr) => {
                if (copyErr) {
                    console.error(`Error copying ${file}:`, copyErr);
                } else {
                    console.log(`Copied ${file} to ${destinationDir}`);
                }
            });
        });
    });
