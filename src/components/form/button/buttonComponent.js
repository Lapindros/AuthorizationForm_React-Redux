import React from 'react';
import PropTypes from 'prop-types';

import './../button/less/buttonComponent.less';


class Button extends React.Component {

    onClickHandler = event => {
        event.preventDefault();
        this.props.onClick(event);
    };

    render() {
        const {
            className,
            classModifiers,
            classDisabled,
            disabled,
            onClick,
            textButton,
            children,
        } = this.props;

        return (
            <button
                className='button'
                onClick={onClick && this.onClickHandler}
                disabled={disabled}
            >
                {textButton || children}
            </button>
        );
    }
}


Button.PropTypes = {
    buttonText: PropTypes.string,
    classModify: PropTypes.array,
    disabled: PropTypes.bool,
    onPick: PropTypes.func,
};

Button.defaultProps = {
    className: 'button',
};

export default Button;