/**
 * Date formatting options.
 */
export const dateOptions = {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
};

/**
 * Function to return a formatted date from a timestamp string,
 * based on dateOptions previously specified.
 *
 * @param {string} timestamp;
 * @param {Object} dateOptions;
 */
const formatDate = (timestamp, options) => {
  let date = new Date(timestamp);
  return date.toLocaleDateString("en-us", options);
};

/**
 * Function to return human readable, relative timestamps for comments.
 *
 * @param {timestamp} timestamp
 */
const readableDate = (timestamp) => {
  const timediff = (Date.now() - timestamp) / 10000;

  if (timediff < 1) {
    return "A few seconds ago";
  } else if (timediff < 6) {
    return "Less than a minute ago";
  } else if (timediff < 30) {
    return "A few minutes ago";
  } else if (timediff < 66) {
    return "About ten minutes ago";
  } else if (timediff > 66 && timediff < 360) {
    return "Less than an hour ago";
  } else if (timediff < 8640) {
    return "Today";
  } else if (timediff > 8640 && timediff < 60480) {
    return "This week";
  } else if (timediff < 262800) {
    return "This month";
  } else if (timediff < 788400) {
    return "A few months ago";
  } else if (timediff < 3153600) {
    return "In the last year";
  } else if (timediff < 4730400) {
    return "In the last 18 months";
  } else {
    return "A really long time ago";
  }
};

export { formatDate, readableDate };
