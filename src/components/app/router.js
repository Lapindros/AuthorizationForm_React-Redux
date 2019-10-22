import React from 'react';
import {connect} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import {Route, Redirect, Switch} from 'react-router-dom';

import LayoutComponent from './layoutComponent';
import MenuConfig from '../../configs/menuConfig';
import RouteUtils from '../../utils/routeUtils';
import History from '../../services/history';
import MenuActions from "../../redux/actions/menuActions";
import '../../content/less/main.less';

class RouterComponent extends React.Component {
  renderRedirect = ({location}) => {
    const {routeRoutes, userIsAuthorized} = this.props;
    const defaultRoute = routeRoutes.find(route => route.isMain);
    const loginRoute = routeRoutes.find(route => route.isLogin);

    const qs = RouteUtils.parseQueryStringFromLocation(location);
    if (!qs || !qs.redirect) {
      if (!userIsAuthorized && loginRoute) {
        return <Redirect to={RouteUtils.makeRedirectPathname(location, `/${loginRoute.path}`)}/>;
      }
      if (userIsAuthorized && defaultRoute) {
        return <Redirect to={`/${defaultRoute.path}`}/>;
      }
    } else {
      const newLocation = routeRoutes.find(
        route =>
          (route.link === qs.redirect || qs.redirect.startsWith(`${route.link}?`)) &&
          !route.isLogin,
      )
        ? location
        : null;
      if (defaultRoute) {
        return <Redirect to={RouteUtils.makeStartPathname(newLocation, defaultRoute.path)}/>;
      }
      if (loginRoute) {
        return <Redirect to={RouteUtils.makeStartPathname(newLocation, loginRoute.path)}/>;
      }
    }
    return null;
  };

  componentDidMount() {
    MenuActions.initRoutes();
  }

  render() {
    const {routeRoutes} = this.props;

    return (
      <ConnectedRouter history={History}>
        <LayoutComponent>
          <Switch>
            {routeRoutes.map((routeConf, index) => {
              routeConf = {...routeConf, ...MenuConfig.routeConfigs[routeConf.link]};

              if (!routeConf.component) {
                return null;
              }

              const Component = routeConf.component;

              return (
                <Route
                  key={index}
                  exact
                  path={`/${routeConf.path}`}
                  render={props =>
                    (
                      <Component {...props} route={routeConf}/>
                    )
                  }
                />
              );
            })}
            {routeRoutes
              .filter(item => item.pathRedirect)
              .map((routeConf, index) => (
                <Redirect
                  key={index}
                  from={`/${routeConf.path}`}
                  to={`/${routeConf.pathRedirect}`}
                />
              ))}
            <Route render={this.renderRedirect}/>
          </Switch>
        </LayoutComponent>
      </ConnectedRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    routeRoutes: state.menu.routes,
    userIsAuthorized: state.user.auth,
  }
};

export default connect(mapStateToProps)(RouterComponent);
