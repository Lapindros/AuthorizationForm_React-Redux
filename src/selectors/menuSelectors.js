import { createSelector } from 'reselect';
import Utils from '../services/utils';

const allRoutesSelector = state => state.menu.routes;
const currentPathSelector = state => state.routing.location && state.routing.location.pathname;

function isSamePath(link, locationPath) {
  locationPath = locationPath || '/';
  if (link.indexOf(':') < 0) {
    return link === locationPath;
  }
  const linkParts = link.split('/');
  const pathParts = locationPath.split('/');
  return (
    linkParts.length === pathParts.length &&
    Utils.isNull(
      pathParts.find((part, i) => linkParts[i] !== part && linkParts[i].indexOf(':') !== 0),
    )
  );
}

const prepareRoute = (route, currentPath) => {
  const isActive = Boolean(currentPath && (isSamePath(route.link, currentPath)));
  return {
    ...route,
    active: isActive,

  };
};

const mainMenu = createSelector(allRoutesSelector, currentPathSelector, (routes, currentPath) =>
  routes.map(route => prepareRoute(route, currentPath, routes)).filter(item => !item.noAuth),
);

const currentRouteSelector = createSelector(
  allRoutesSelector,
  currentPathSelector,
  (routes, currentPath) =>
    currentPath &&
    (routes.find(route => isSamePath(route.link, currentPath) && route.parent) ||
      routes.find(route => isSamePath(route.link, currentPath))),
);

const isMainPage = createSelector(currentRouteSelector, currentRoute =>
  Boolean(currentRoute && currentRoute.path === 'main'),
);

const isLoginPage = createSelector(currentRouteSelector, currentRoute =>
  Boolean(currentRoute && currentRoute.path === ''),
);

export default {
  isMainPage,
  isLoginPage,
  mainMenu,
  currentRoute: currentRouteSelector,
};
