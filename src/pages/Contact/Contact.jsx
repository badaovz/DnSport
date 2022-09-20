import classNames from 'classnames/bind';
import { FaEnvelope, FaFacebookMessenger, FaViber } from 'react-icons/fa';
import imageAbout from '../../assets/images/header_bg_2.jpg';
import CommonHero from '../../components/CommonHero';
import styles from './Contact.module.scss';
import { phoneNumber, supportMail } from '../../constant';

const cx = classNames.bind(styles);

const headerData = {
    image: imageAbout,
    title: 'Get In Touch',
    info: 'Fruga itaque ducimus, ad amet praesentium suscipit sit, assumenda nihil officia totam, animi culpa nobis nemo natus doloremque?',
};

const Contact = () => {
    return (
        <>
            <CommonHero data={headerData} />
            <div className={cx('container')}>
                <a href={`mailto:${supportMail}`} className={cx('item')} target="_blank" rel="noreferrer noopener" >
                    <FaEnvelope />
                </a>
                <a href='http://m.me/ernest_achiever' className={cx('item')} target="_blank" rel="noreferrer noopener" >
                    <FaFacebookMessenger />
                </a>
                <a href={`https://wa.me/${phoneNumber}`} className={cx('item')} target="_blank" rel="noreferrer noopener" >
                    <FaViber />
                </a>
            </div>
        </>
    );
};

export default Contact;
