/**
 * Date formatting options.
 */
export const dateOptions = {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
};

/**
 * Function to return a formatted date from a timestamp string.
 * @param {string} timestamp;
 * @param {Object} dateOptions;
 */
const formatDate = (timestamp, options) => {
  let date = new Date(timestamp);
  return date.toLocaleDateString("en-us", options);
};

export { formatDate };
