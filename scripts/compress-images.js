const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'public', 'images');
const MAX_WIDTH = 1200;
const MIN_SIZE_KB = 300;

async function compress() {
  const files = fs.readdirSync(dir).filter(f => /\.(png|jpg|jpeg)$/i.test(f));
  let saved = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
    const sizeBefore = fs.statSync(filePath).size;

    if (sizeBefore < MIN_SIZE_KB * 1024) {
      console.log(`SKIP  ${file} (${Math.round(sizeBefore / 1024)}KB)`);
      continue;
    }

    const ext = path.extname(file).toLowerCase();
    const tmp = filePath + '.tmp';

    try {
      const img = sharp(filePath).resize(MAX_WIDTH, null, { withoutEnlargement: true });

      if (ext === '.png') {
        await img.png({ compressionLevel: 9, effort: 10 }).toFile(tmp);
      } else {
        await img.jpeg({ quality: 82, progressive: true, mozjpeg: true }).toFile(tmp);
      }

      const sizeAfter = fs.statSync(tmp).size;

      if (sizeAfter < sizeBefore) {
        fs.renameSync(tmp, filePath);
        const delta = sizeBefore - sizeAfter;
        saved += delta;
        console.log(
          `OK    ${file}: ${Math.round(sizeBefore / 1024)}KB → ${Math.round(sizeAfter / 1024)}KB  (-${Math.round(delta / 1024)}KB)`
        );
      } else {
        fs.unlinkSync(tmp);
        console.log(`SKIP  ${file}: already optimal (${Math.round(sizeBefore / 1024)}KB)`);
      }
    } catch (e) {
      if (fs.existsSync(tmp)) fs.unlinkSync(tmp);
      console.log(`ERR   ${file}: ${e.message}`);
    }
  }

  console.log(`\nTotal saved: ${Math.round(saved / 1024)}KB (${Math.round(saved / 1024 / 1024 * 10) / 10}MB)`);
}

compress();
