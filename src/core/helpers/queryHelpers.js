const parseSearchQuery = query => {
  if (query) return {};
  return query.substring(query.search(/\?/) + 1).split('&').reduce((total, current) => {
    const [key, value] = current.split('=');
    total[key] = value;
    return total;
  }, {})
};

export default parseSearchQuery;