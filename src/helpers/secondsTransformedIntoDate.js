/**
 * Seconds transformed into date in dd/mm/yyyy format
 * @param {Number} seconds
 * @returns {String}
 */
export const secondsTransformedIntoDate = (seconds) => {
  let date = new Date(seconds * 1000)
    .toISOString()
    .slice(0, -14)
    .split("-")
    .reverse()
    .join("/");
  return date;
};

export default secondsTransformedIntoDate;
