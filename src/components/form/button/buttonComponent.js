import React from 'react';
import PropTypes from 'prop-types';
import './../button/less/buttonComponent.less';
import CssUtils from "../../../utils/cssUtils";
import {Link} from "react-router-dom";

class Button extends React.Component {

    onClickHandler = event => {
        event.preventDefault();
        this.props.onClick(event);
    };

    render() {
        const {
            className,
            color,
            size,
            disabled,
            onClick,
            text,
            children,
            isBlock,
            link,
        } = this.props;

        const buttonClass = CssUtils.mergeClasses(
          className,
          color && `${className}-${color}`,
          size && `${className}-${size}`,
          isBlock && `${className}-block`,
        );

        if (link) {
            return (
              <Link
                to={link} className={buttonClass}
              >
                {text || children}
              </Link>
            );
        }

        return (
            <button
                className={buttonClass}
                onClick={onClick && this.onClickHandler}
                disabled={disabled}
            >
                {text || children}
            </button>
        );
    }
}

Button.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string,
    type: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.string,
    link: PropTypes.string,
    isBlock: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    className: 'btn',

};

export default Button;