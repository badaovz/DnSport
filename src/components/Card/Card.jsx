import PropTypes from 'prop-types';
import Button from '../Button';
import classNames from 'classnames/bind';
import styles from './Card.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Card = ({ data, position }) => {
    const { icon, title, info, btnName, btnIcon, path, avatar } = data;
    return (
        <div className={cx('card')}>
            <Button
                avatar={avatar}
                square
                className={cx('btn', `${position}`)}
                leftIcon={icon}
            ></Button>
            <h4 className={cx('title')}>{title}</h4>
            <p className={cx('info')}>{info}</p>
            {btnName && (
                <Button rightIcon={btnIcon} className={cx('btnName')}>
                    <Link to={path}>{btnName}</Link>
                </Button>
            )}
        </div>
    );
};

Card.propTypes = {
    data: PropTypes.object.isRequired,
    position: PropTypes.string,
};

export default Card;
