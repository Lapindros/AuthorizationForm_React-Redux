import React from 'react';
import PropTypes from 'prop-types';
import './less/select.less';

class Option extends React.Component {
    handleClick = () => {
        this.props.onClick && this.props.onClick(this.props.value);
    };

    render() {
        const classOption = this.props.currentValue === this.props.value ? "select__option selected" : "select__option";
        return (
            <div className={classOption} onClick={this.handleClick}>{this.props.text}</div>
        );
    }
}

class Select extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {open: false}
    }

    get text() {
        const {input, items, labeltext} = this.props;
        if (!input.value || input.value.length === 0) {
            return labeltext;
        } else {
            const val = items.find(i => i.value === this.props.input.value);
            return val && val.text;
        }
    }

    handleClick = (value) => {
        this.props.input.onChange(value);
        this.handleToggle();
    };

    handleToggle = () => {
        this.setState(prevState => ({open: !prevState.open}));
    };

    handleClear = () => {
        this.props.input.onChange(null);
        this.handleToggle();
    };

    render() {
        const {labeltext} = this.props;
        // console.log(this.props);
        return (
            <div className={`select ${this.state.open && 'opened'}`}>
                <div
                    className="select__block"
                    onClick={this.handleToggle}
                >
                    {this.text}
                </div>
                <div className="select__list">
                    <div className="select__option" onClick={this.handleClear}>{labeltext}</div>
                    {this.props.items.map(option => {
                        return (
                            <Option
                                key={option.id}
                                onClick={this.handleClick}
                                value={option.value}
                                text={option.text}
                                currentValue={this.props.input.value}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}

Select.propTypes = {
    labeltext: PropTypes.string,
};

Select.DefaultProps = {
    type: "text",
};

export default Select;