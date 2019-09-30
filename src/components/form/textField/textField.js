import React from 'react';
import PropTypes from 'prop-types';

import './../textField/less/textField.less';

class TextField extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        const {labeltext} = this.props;
        return (
            <div>
                <input
                    name={this.props.name}
                    onChange={this.props.change}
                    type="text"
                    className='input'
                    placeholder={labeltext}
                />
            </div>
        );
    }
}

TextField.PropTypes = {
    labeltext: PropTypes.string,
};

export default TextField;