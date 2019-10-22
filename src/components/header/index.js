import React from 'react';
import PropTypes from 'prop-types';
import MenuComponent from "./menuComponent";

class HeaderComponent extends React.Component {

  render() {
    const {user, menu} = this.props;
    console.log(menu);
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="navbar-brand">Hello {user.name}</div>
        <MenuComponent items={menu}/>
      </nav>
    );
  }
}

HeaderComponent.propTypes = {
  user: PropTypes.object,
  menu: PropTypes.array
};


export default HeaderComponent;