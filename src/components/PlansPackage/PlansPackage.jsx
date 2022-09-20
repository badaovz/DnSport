import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Button from '../../components/Button';
import styles from './PlansPackage.module.scss';

const cx = classNames.bind(styles);

const PlansPackage = ({ data }) => {
    const { name, desc, price, features } = data;

    return (
        <div className={cx('plansPackage')}>
            <div className={cx('content')}>
                <h3 className={cx('title')}>{name}</h3>
                <p className={cx('desc')}>{desc}</p>
                <h2 className={cx('price')}>
                    ${price}
                    <span>/mo</span>{' '}
                </h2>
                <h4 className={cx('features')}>Features</h4>
                {features.map((item, index) => (
                    <p
                        key={index}
                        className={cx('feature', { active: item.available })}
                    >
                        {item.feature}
                    </p>
                ))}
            </div>
            <Button large className={cx('btn')}>
                Choose Plan
            </Button>
        </div>
    );
};

PlansPackage.propTypes = {
    data: PropTypes.object.isRequired,
};

export default PlansPackage;
