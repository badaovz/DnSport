import classNames from 'classnames/bind';
import styles from './Hero.module.scss';
import heroImage from '../../assets/images/main_header.png';
import Button from '../Button/Button';

const cx = classNames.bind(styles);

const Hero = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <p className={cx('dayWorks')}>#100DaysOfWorkOut</p>
                <h1 className={cx('title')}>
                    Join The Legends Of The Fitness World
                </h1>
                <p className={cx('desc')}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aliquam excepturi similique eius optio. Dolorum, quaerat.
                </p>
                <Button large>Get Started</Button>
            </div>
            <div className={cx('imageHero')}>
                <div className={cx('heroCircle')}></div>
                <img src={heroImage} alt='heroImage' />
            </div>
        </div>
    );
};

export default Hero;
