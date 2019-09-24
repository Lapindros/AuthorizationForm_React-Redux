import React from 'react';
import PropTypes from 'prop-types';

import './../textField/less/textField.less';

class TextField extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <input className='input' placeholder='Введите текст'></input>
            </div>
        );
    }
}

export default TextField;