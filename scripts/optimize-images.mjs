import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, '../public');

async function processImage(filePath, options = {}) {
  const ext = path.extname(filePath);
  const newFilePath = filePath.replace(ext, '.webp');
  
  try {
    console.log(`Processing: ${filePath} -> ${newFilePath}`);
    let pipeline = sharp(filePath);
    
    if (options.resize) {
      pipeline = pipeline.resize(options.resize);
    }
    
    await pipeline
      .webp({ quality: options.quality || 80 })
      .toFile(newFilePath);
      
    console.log(`Saved: ${newFilePath}`);
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
}

async function walkDir(dir) {
  const files = await fs.readdir(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = await fs.stat(filePath);
    
    if (stat.isDirectory()) {
      await walkDir(filePath);
    } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
      // Logic for specific files
      if (filePath.endsWith('logo.png')) {
        await processImage(filePath, { resize: { width: 400 }, quality: 80 });
      } else if (filePath.includes('hero') && filePath.includes('main.jpg')) {
        await processImage(filePath, { resize: { width: 1280 }, quality: 75 });
      } else {
        // General gallery images
        await processImage(filePath, { resize: { width: 800, withoutEnlargement: true }, quality: 70 });
      }
    }
  }
}

console.log('Starting image optimization...');
await walkDir(PUBLIC_DIR);
console.log('Done!');
