import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MenuSelectors from '../../selectors/menuSelectors';
import LayoutConstants from '../../redux/constants/layoutConstants';
import HeaderComponent from "../header";

class LayoutComponent extends React.Component {
  render() {
    const { children, currentRoute } = this.props;
    if (!children) return null;

    const pageType = currentRoute && currentRoute.type;

    switch (pageType) {
      case LayoutConstants.LOGIN:
        return (
          <div className="login-page">
            {children}
          </div>
        );
      case LayoutConstants.MAIN_PAGE: {
        return (
          <div className="a">
            <HeaderComponent user={this.props.user}/>
            <div className="container">
              {children}
            </div>

          </div>
        );
      }
      case LayoutConstants.EMPTY:
        return (
          <div className="a">
                <div className="as">{children}</div>
          </div>
        );
      case LayoutConstants.APP_COMPONENTS:
        return (
          <div className="a">
            <div className="as">{children}</div>
          </div>
        );
      default:
        return (
          <div className="a">
            <div className="as">{children}</div>
          </div>
        );
    }
  }
}

function mapStateToProps(state) {
  return {
    currentRoute: MenuSelectors.currentRoute(state),
    user: state.user,
  };
}

export default withRouter(connect(mapStateToProps)(LayoutComponent));
