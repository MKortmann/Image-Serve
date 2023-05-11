import sharp from 'sharp';

async function generateThumbnail(
  imagePath: string,
  width: number,
  height: number,
  thumbPath: string
): Promise<void> {
  await sharp(imagePath).resize(width, height).toFile(thumbPath);
}

export default generateThumbnail;
