// An image imported from src/assets/ (SPEC rule 8: original photography only).
import { z } from 'astro/zod';

/** An image imported from src/assets/, so the build can resize it. */
export const importedImageSchema = z.custom<ImageMetadata>(
  (value) =>
    typeof value === 'object' &&
    value !== null &&
    'src' in value &&
    'width' in value &&
    'height' in value,
  { message: 'must be an imported image from src/assets/' },
);
