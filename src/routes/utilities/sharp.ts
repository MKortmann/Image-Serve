import sharp from 'sharp';

export async function generateThumbnail(
  imagePath: string,
  width: number,
  height: number,
  thumbPath: string
): Promise<void> {
  await sharp(imagePath).resize(width, height).toFile(thumbPath);
}
