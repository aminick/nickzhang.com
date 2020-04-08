import moment from "moment";

export const formatDate = (date) => moment.utc(date).format("MMM Do YYYY");
