const DEFAULT_EXCERPT_LIMIT = 35;
const AVERAGE_WORDS_PER_MINUTE = 200;

/**
 *
 * @param {String} text
 * @param {Number} limit - how many words should the new text have
 */

export const getExcerpt = (
  text = "",
  limit = DEFAULT_EXCERPT_LIMIT,
) => {
  return text.split(" ").slice(0, limit).join(" ") + "...";
};

/**
 *
 * @param {String} text
 * @param {Number} wordsPerMinute
 */
export const getReadingTime = (
  text = "",
  wordsPerMinute = AVERAGE_WORDS_PER_MINUTE,
) => {
  const textLength = text && text.split(" ").length;

  return Math.ceil(textLength / wordsPerMinute);
};
