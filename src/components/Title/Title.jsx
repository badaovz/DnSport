import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Button from '../Button';
import styles from './Title.module.scss';

const cx = classNames.bind(styles);

const Title = ({ icon, title, text }) => {
    return (
        <div>
            <div className={cx('titleHead')}>
                <Button square leftIcon={icon} className={cx('btn')}></Button>
                <h2 className={cx('title')}>{title}</h2>
            </div>
            <p className={cx('text')}>{text}</p>
        </div>
    );
};

Title.propTypes = {
    icon: PropTypes.node.isRequired,
    title: PropTypes.string,
    text: PropTypes.string,
};

export default Title;
