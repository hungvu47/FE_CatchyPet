import { slugify } from 'transliteration';

function convertToSlug(text) {
  return slugify(text, { lowercase: true, separator: '-' });

}
export default convertToSlug;