import classNames from 'classnames/bind';
import styles from './Programs.module.scss';
import { FaCrown } from 'react-icons/fa';
import Title from '../Title';
import { programs } from '../../assets/data';
import Card from '../Card/Card';

const cx = classNames.bind(styles);

const Programs = () => {
    return (
        <div>
            <Title icon={<FaCrown />} title='Programs' />
            <div className={cx('cards')}>
                {programs.map((program) => (
                    <Card data={program} key={program.id} />
                ))}
            </div>
        </div>
    );
};

export default Programs;
