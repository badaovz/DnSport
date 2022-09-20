import { aboutData } from '../../assets/data';
import imageAbout from '../../assets/images/header_bg_1.jpg';
import CommonHero from '../../components/CommonHero';

import classNames from 'classnames/bind';
import styles from './About.module.scss';

const cx = classNames.bind(styles);

const headerData = {
    image: imageAbout,
    title: 'About Us',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et maiores doloribus, eligendi incidunt modi rerum debitis consequatur molestias?',
};

const About = () => {
    return (
        <>
            <CommonHero data={headerData} />
            <section>
                <div className={cx('container')}>
                    {aboutData.map((about) => {
                        const { image, id, info, title } = about;
                        return (
                            <div className={cx('item')} key={id}>
                                <div className={cx('image')}>
                                    <img src={image} alt='itemImg' />
                                </div>
                                <div className={cx('content')}>
                                    <h2 className={cx('title')}>{title}</h2>
                                    <p className={cx('info')}>{info}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    );
};

export default About;
