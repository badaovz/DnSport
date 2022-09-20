import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const Button = ({
    to,
    href,
    children,
    text = false,
    square = false,
    circle = false,
    outline = false,
    small = false,
    large = false,
    disabled = false,
    leftIcon = false,
    rightIcon = false,
    avatar,
    className,
    onClick,
    ...passProps
}) => {
    let Com = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    //remove even when button is disable ssss sss sss sss ssss ss
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    // decided type of button
    if (to) {
        props.to = to;
        Com = Link;
    } else if (href) {
        props.href = href;
        Com = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        text,
        square,
        circle,
        outline,
        small,
        large,
        disabled,
    });
    return (
        <Com className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            {avatar && <img src={avatar} alt="avatar" className={cx('avatar')}/>}
            {children && <span className={cx('title')}>{children}</span>}
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Com>
    );
};

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    children: PropTypes.node,
    text: PropTypes.bool,
    primary: PropTypes.bool,
    rounded: PropTypes.bool,
    outline: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    disabled: PropTypes.bool,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    avatar: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
