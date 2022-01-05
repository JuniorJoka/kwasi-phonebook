const MINUTE_IN_SECONDS = 60;
const HOUR_IN_SECONDS = 3600;
const DAY_IN_SECONDS = 86400;
const WEEK_IN_SECONDS = 604800;

export const timeAgo = (epoch: number) => {
  if (epoch < MINUTE_IN_SECONDS) return "seconds ago";
  if (epoch < HOUR_IN_SECONDS) {
    const time = (epoch / MINUTE_IN_SECONDS).toFixed();
    return `${time} minute${time == "1" && "s"} ago`;
  }
  if (epoch < DAY_IN_SECONDS) {
    const time = (epoch / 1440).toFixed();
    return `${time} hour${time == "1" && "s"} ago`;
  }
  if (epoch < WEEK_IN_SECONDS) {
    const time = (epoch / 10080 / 8.57).toFixed();
    return `${time} day${time == "1" && "s"} ago`;
  }
  return "a long time ago";
};
