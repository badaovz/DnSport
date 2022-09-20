import classNames from 'classnames/bind';
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import config from '../../config';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

const Footer = () => {
    return (
        <footer>
            <section>
                <div className={cx('footer')}>
                    <article>
                        <Link className={cx('logo')} to={config.routes.home}>
                            <h3>
                                Dn<span>.Sport</span>
                            </h3>
                        </Link>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Qui tenetur harum pariatur! Iusto animi
                            cupiditate, provident dolore porro eum obcaecati.
                        </p>
                        <div className={cx('socials')}>
                            <a href='https://linkedin.com'>
                                <FaLinkedinIn />
                            </a>
                            <a href='https://facebook.com'>
                                <FaFacebookF />
                            </a>
                            <a href='https://twitter.com'>
                                <FaTwitter />
                            </a>
                            <a href='https://instagram.com'>
                                <FaInstagram />
                            </a>
                        </div>
                    </article>

                    <article>
                        <h4>Permalinks</h4>
                        <a href={config.routes.about}>About</a>
                        <a href={config.routes.plans}>Plans</a>
                        <a href={config.routes.trainers}>Trainers</a>
                        <a href={config.routes.gallery}>Gallery</a>
                        <a href={config.routes.contact}>Contact</a>
                    </article>

                    <article>
                        <h4>Insights</h4>
                        <a href='#'>Blog</a>
                        <a href='#'>Case Studies</a>
                        <a href='#'>Events</a>
                        <a href='#'>Communities</a>
                        <a href='#'>FAQs</a>
                    </article>

                    <article>
                        <h4>Get In Touch</h4>
                        <a href='#'>Contact Us</a>
                        <a href='#'>Support</a>
                    </article>
                </div>
            </section>
            <div className={cx('copyRight')}>
                <p>2022 Dn.Sport Website © All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
