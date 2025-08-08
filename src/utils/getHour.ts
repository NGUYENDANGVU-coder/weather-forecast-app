import { format } from "date-fns";

export const getHourFromTimestamp = (timestamp: number): string =>
  format(new Date(timestamp * 1000), "HH:mm");
