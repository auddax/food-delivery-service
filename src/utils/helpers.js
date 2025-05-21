export const keyBy = (rows, key = 'id') => {
  return Object.fromEntries(rows.map((row) => [row[key], row]));
};
