import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputPath = path.join(__dirname, '../public/logo.png');
const outputPath = path.join(__dirname, '../public/logo-small.png');

async function createMarker() {
  try {
    await sharp(inputPath)
      .resize(64)
      .png({ quality: 90 })
      .toFile(outputPath);
    console.log('Created logo-small.png');
  } catch (error) {
    console.error(error);
  }
}

createMarker();
