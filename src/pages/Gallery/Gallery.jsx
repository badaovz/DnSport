import classNames from 'classnames/bind';
import { galleryData } from '../../assets/data';
import imageAbout from '../../assets/images/header_bg_3.jpg';
import CommonHero from '../../components/CommonHero';
import styles from './Gallery.module.scss';

const cx = classNames.bind(styles);

const headerData = {
    image: imageAbout,
    title: 'Our Gallery',
    info: 'Quisquam id tenetur adipisci nesciunt ipsum amet in quibusdam, architecto nostrum nobis, est, deserunt odio illum perspiciatis.',
};

const Gallery = () => {
    return (
        <>
            <CommonHero data={headerData} />
            <section>
                <div className={cx('container')}>
                    <div className={cx('gallery')}>
                        {galleryData.map((gallery, index) => (
                            <div className={cx('item')} key={index}>
                                <img src={gallery} alt={gallery} />
                            </div>
                        ))}
                    </div>
                    <div className={cx('gallery2')}></div>
                </div>
            </section>
        </>
    );
};

export default Gallery;
