import querystring from 'querystring';

const makeRedirectPathname = (location, pathname) => {
  if (location && location.pathname) {
    let redirect = location.pathname;
    if (location.search) {
      redirect = `${redirect}${location.search}`;
    }
    pathname = `${pathname}?${querystring.stringify({ redirect })}`;
  }
  return pathname;
};

const parseQueryStringFromLocation = location => {
  if (
    location &&
    location.search &&
    location.search.startsWith('?') &&
    location.search.substring(1)
  ) {
    return querystring.parse(location.search.substring(1));
  }
};

const getQueryParamFromLocation = (location, paramName) => {
  if (!location || !location.search) return null;
  const searchResult = new RegExp(`[?&]?${paramName}=([^&]+)`).exec(location.search);
  return searchResult && searchResult.length > 1 ? decodeURIComponent(searchResult[1]) : null;
};

const makeStartPathname = (location, defaultPath) =>
  (parseQueryStringFromLocation(location) || {}).redirect || `/${defaultPath}` || '/main';

export default {
  makeRedirectPathname,
  makeStartPathname,
  parseQueryStringFromLocation,
  getQueryParamFromLocation,
};
