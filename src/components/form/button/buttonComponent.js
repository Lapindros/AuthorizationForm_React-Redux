import React from 'react';
import PropTypes from 'prop-types';

import './../button/less/buttonComponent.less';

class ButtonComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <button className='button'>Регистрация</button>
            </div>
        );
    }
}

export default ButtonComponent;