import React from 'react';
import PropTypes from 'prop-types';

import './../select/less/select.less';

class Select extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <select className='select' placeholder='Выберите пол'>
                    <option>Мужской</option>
                    <option>Женский</option>
                </select>
            </div>
        );
    }
}

export default Select;