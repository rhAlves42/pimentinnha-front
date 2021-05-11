export const phoneMask = v => {
  v = v.replace(/[^0-9]/g, '');
  return v
    .replace(/^(\d{11})(\d+)/g, '$1')
    .replace(/^0/, '')
    .replace(/^(\d{2})(\d+)$/, '$1 $2')
    .replace(/^(\d{2})\s(\d{4})(\d{4})$/, '($1) $2-$3')
    .replace(/^(\d{2})\s(\d)(\d{4})(\d{4})$/, '($1) $2 $3-$4')
    .replace(/^(\d{2})(.+)$/, '($1)$2');
};
