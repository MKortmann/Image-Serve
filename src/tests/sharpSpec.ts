import sharp from 'sharp';
import path from 'path';
import fs from 'fs';
import generateThumbnail from '../routes/utilities/sharp';

describe('convert image into thumb image', () => {
  let imagePath: string;
  let thumbPath: string;
  let width: number;
  let height: number;

  beforeEach(() => {
    const filename = 'fjord';
    imagePath = path.join(__dirname, '../../assets/images/', `${filename}.jpg`);
    width = 200;
    height = 200;
    thumbPath = path.join(
      __dirname,
      '../../assets/thumbs/',
      `${filename}-w${width}-h${height}.jpg`
    );
  });

  it('should create thumbnail with expected dimensions', async () => {
    await generateThumbnail(imagePath, width, height, thumbPath);
    expect(fs.existsSync(thumbPath)).toBeTrue();

    const metadata = await sharp(thumbPath).metadata();
    expect(metadata.width).toBe(width);
    expect(metadata.height).toBe(height);
  });
});
