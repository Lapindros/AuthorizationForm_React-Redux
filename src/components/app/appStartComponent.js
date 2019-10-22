import React from 'react';
import Router from './router';
import '../../content/less/main.less'
import MenuActions from "../../redux/actions/menuActions";

export default class AppStartComponent extends React.Component {

  componentDidMount() {
    MenuActions.initRoutes();
  }

  render() {
    return (
      <Router/>
    );
  }
}
