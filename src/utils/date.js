import moment from 'moment';

export const normalizeDate = (date) => moment(new Date(date || '')).format('DD/MM/YYYY');