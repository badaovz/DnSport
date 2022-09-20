import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './CommonHero.module.scss';

const cx = classNames.bind(styles);

const CommonHero = ({ data }) => {
    const { image, title, info } = data;
    return (
        <div className={cx('commonHero')}>
            <img src={image} alt='bgImage' />
            <div className={cx('content')}>
                <h2 className={cx('title')}>{title}</h2>
                <p className={cx('info')}>{info}</p>
            </div>
        </div>
    );
};

CommonHero.propTypes = {
    data: PropTypes.object.isRequired,
};

export default CommonHero;
