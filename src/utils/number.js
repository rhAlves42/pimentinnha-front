export const money = (value) => {
  let v = value;
  v = v.replace(/\D/g, '');
  v = v.replace(/(\d{1,2})$/, ',$1');
  v = v.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  v = v !== '' ? v : '';
  return v;
};

export const removeMaskMoney = (value) => {
  if (!value) {
    return null;
  }

  if (typeof value !== 'string') {
    return value;
  }

  value = value.replace('.', '');
  value = value.replace(',', '.');
  value = value.replace('R$ ', '');

  return parseFloat(value);
};

export const normalizeMoney = (value) => `R$ ${money(String(value))}`;