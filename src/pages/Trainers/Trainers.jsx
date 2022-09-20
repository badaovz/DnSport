import classNames from 'classnames/bind';
import { trainers } from '../../assets/data';
import imageAbout from '../../assets/images/header_bg_5.jpg';
import CommonHero from '../../components/CommonHero';
import TrainerCard from '../../components/TrainerCard';
import styles from './Trainers.module.scss';

const cx = classNames.bind(styles);

const headerData = {
    image: imageAbout,
    title: 'Our Trainers',
    info: 'Facilis, iusto numquam unde laboriosam expedita qui exercitationem? Dicta vero accusantium est aut molestiae fugit doloremque suscipit quod.',
};

const Plants = () => {
    return (
        <>
            <CommonHero data={headerData} />
            <section>
                <div className={cx('container')}>
                    {trainers.map((trainer) => (
                        <TrainerCard data={trainer} key={trainer.id} />
                    ))}
                </div>
            </section>
        </>
    );
};

export default Plants;
