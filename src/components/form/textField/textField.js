import React from 'react';
import PropTypes from 'prop-types';
import './../textField/less/textField.less';

class TextField extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    _onChange = event => {
        const value = event.target.value;
        this.props.input.onChange(value);
    };

    render() {
        const {labeltext} = this.props;
        const {meta: {touched, error, warning}} = this.props;
        return (
            <div>
                {touched && ((error && <label htmlFor='input' className='error'>{error}</label>) || (warning &&
                    <span className='warning'>{warning}</span>))}
                <input
                    name={this.props.name}
                    onChange={this._onChange}
                    type={this.props.type}
                    className={touched && error ? 'input--error' : 'input'}
                    placeholder={labeltext}
                    id='input'
                />
            </div>
        );
    }
}

TextField.propTypes = {
    labeltext: PropTypes.string,
};

TextField.DefaultProps = {
    type: "text",
};

export default TextField;