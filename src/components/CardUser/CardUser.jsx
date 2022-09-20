import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './CardUser.module.scss';

const cx = classNames.bind(styles);

const CardUser = ({ data }) => {
    const { name, info, job, avatar } = data;
    return (
        <div className={cx('cardUser')}>
            <div className={cx('avatar')}>
                <img src={avatar} alt='avatar' />
            </div>
            <p className={cx('info')}>
                <i>"{info}"</i>
            </p>
            <h4 className={cx('name')}>{name}</h4>
            <p className={cx('job')}>{job}</p>
        </div>
    );
};

CardUser.propTypes = {
    data: PropTypes.object.isRequired,
};

export default CardUser;
