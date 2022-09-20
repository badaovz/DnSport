import classNames from 'classnames/bind';
import { GiCutDiamond } from 'react-icons/gi';
import { values } from '../../assets/data';
import valuesImage from '../../assets/images/values.jpg';
import Card from '../Card/Card';
import Title from '../Title';
import styles from './Values.module.scss';

const cx = classNames.bind(styles);

const Values = () => {
    return (
        <div className={cx('wrapper')}>
            <img src={valuesImage} alt='valuesImage' />
            <div className={cx('content')}>
                <Title icon={<GiCutDiamond />} title='Values' />
                <div className={cx('values')}>
                    {values.map((value) => (
                        <Card data={value} position='topRight' key={value.id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Values;
