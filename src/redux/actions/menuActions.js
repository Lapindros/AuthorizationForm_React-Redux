import MenuConstants from '../constants/menuConstants';
import MenuConfig from '../../configs/menuConfig';
import { dispatch } from '../../createStore';
import RouterActions from './routerActions';
import MenuSelectors from '../../selectors/menuSelectors';

const initRoutes = (initialRoute = null) =>
  dispatch((dispatcher, getState) => {
    dispatch({
      type: MenuConstants.INIT_ROUTES,
      routes: MenuConfig.getRoutes(getState()),
    });
    const state = getState();
    const currentRoute = MenuSelectors.currentRoute(state);

    if (
      state.user.auth &&
      initialRoute &&
      (!currentRoute || currentRoute.isLogin || currentRoute.isMain)
    ) {
      RouterActions.move(initialRoute);
    }
  });

export default {
  initRoutes,
};
