import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import CssUtils from "../../utils/cssUtils";

class MenuComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      menuCollapse: true,
    }
  }

  handleToggle = () => {
    this.setState(prevState => ({
      menuCollapse: !prevState.menuCollapse
    }))
  }

  renderItem(item) {
    const classItem = CssUtils.mergeClasses(
      'nav-item nav-link',
      item.active && 'active',
      item.disabled && 'disabled'
    );

    return(
      <Link className={classItem} to={item.link}>{item.title}</Link>
    );
  }

  render() {
    const {items} = this.props;
    return (
      <React.Fragment>
        <button className="navbar-toggler" type="button" onClick={this.handleToggle}>
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`${this.state.menuCollapse && 'collapse'} navbar-collapse`}>
          <div className="navbar-nav">
            {items.map(item => this.renderItem(item))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

MenuComponent.propTypes = {
  items: PropTypes.array.isRequired,
};


export default MenuComponent;