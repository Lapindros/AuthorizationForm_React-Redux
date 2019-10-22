import React from 'react';
import PropTypes from 'prop-types';

class HeaderComponent extends React.Component {

  render() {
    const {user} = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="navbar-brand">Hello {user.name}</div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link" href="#">Features</a>
            <a className="nav-item nav-link" href="#">Pricing</a>
            <a className="nav-item nav-link disabled" href="#">Disabled</a>
          </div>
        </div>
      </nav>
    );
  }
}

HeaderComponent.propTypes = {
  user: PropTypes.object,

};


export default HeaderComponent;