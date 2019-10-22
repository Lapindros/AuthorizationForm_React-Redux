import LoginPage from '../pages/loginPage';
import MainPage from  '../pages/mainPage';
import Utils from "../services/utils";
import LayoutConstants from "../redux/constants/layoutConstants";

const Login = {
  path: '',
  noAuth: true,
  title: "Вход",
  type: LayoutConstants.LOGIN,
  component: LoginPage,
  isIndex: true,
};

const Main = {
  path: 'main',
  title: "Главная",
  noAuth: false,
  type: LayoutConstants.MAIN_PAGE,
  component: MainPage,
  isIndex: false,
};

const Profile = {
  path: 'profile',
  title: "Мой профиль",
  noAuth: false,
  type: LayoutConstants.MAIN_PAGE,
  component: MainPage,
  isIndex: false,
};

const RoutesTree = [
  Login,
  Main,
  Profile,
];

const routes = [];
const routeConfigs = {};

const getLink = route => route && (route.link || `/${route.path}`);

const addIfUnic = route => {
  if (routes.indexOf(route) < 0) {
    routes.push(route);
  }

  if (!routeConfigs[getLink(route)]) {
    routeConfigs[getLink(route)] = {
      title: route.title,
      component: route.component,
    };
  }
};

RoutesTree.forEach(el => {
  let routeConf;

  if (typeof el.path === 'string') {
    routeConf = el;
    addIfUnic(routeConf);
  }

});

const isRouteEnabled = (route, state) =>
  (state.user.auth || route.noAuth) &&
  (Utils.isNull(route.isEnabled) ||
    route.isEnabled === true ||
    (typeof route.isEnabled === 'function' && route.isEnabled(state) === true));

const mapRouteState = (route, state) => ({
    path: route.path,
    pathRedirect: route.pathRedirect,
    link: getLink(route),
    title: route.title,
    type: route.type,
    noAuth: route.noAuth,
    isIndex: route.isIndex,
    isMain: route.isMain,
    hidden: route.hidden,

});

const getRoutes = state =>
  routes.map(route => mapRouteState(route, state));

export default {
  getRoutes,
  routeConfigs,
};