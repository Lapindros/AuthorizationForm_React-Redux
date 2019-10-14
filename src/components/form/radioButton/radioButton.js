import React from "react";
import PropTypes from "prop-types";
import './less/radioButton.less';

class RadioButton extends React.Component {

    onChange = (event) => {
        const value = event.target.value;
        this.props.onPick && this.props.onPick(value);
    };

    render() {
        const {name, labelText, value} = this.props;
        return (
            <div className="radio-button">
                <input type="radio" name={name} value={value} id={value} onChange={this.onChange}/>
                <label htmlFor={value}>{labelText}</label>
            </div>
        );
    }
}

class RadioButtonsGroup extends React.Component {

    _onPick = value => {
        this.props.input.onChange(value);
    };

    render() {
        return (
            <div className='radio-buttons'>
                {this.props.items.map(item => {
                    return (
                        <RadioButton
                            name={this.props.input.name}
                            key={item.value}
                            value={item.value}
                            onPick={this._onPick}
                            labelText={item.text}
                        />
                    );
                })}
            </div>
        );
    }
}

RadioButton.propTypes = {
    items: PropTypes.array,
};

export default RadioButtonsGroup;