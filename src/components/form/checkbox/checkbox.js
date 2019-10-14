import React from "react";
import PropTypes from "prop-types";
import './less/checkbox.less';

class CheckBox extends React.Component {

    constructor(props) {
        super(props);
    }

    _onChange = event => {
        const value = event.target.checked;
        this.props.input.onChange(value);
    };


    render() {
        const {labeltext} = this.props;
        const {meta: {touched, error, warning}} = this.props;
        return (
            <div className='checkbox'>
                <input
                    id='checkbox'
                    type='checkbox'
                    onChange={this._onChange}
                    name='checkbox'/>
                <label htmlFor='checkbox'>{labeltext}</label>
                {touched && ((error && <label htmlFor='input' className='error'>{error}</label>) || (warning &&
                    <span className='warning'>{warning}</span>))}
            </div>
        );
    }
}

export default CheckBox;