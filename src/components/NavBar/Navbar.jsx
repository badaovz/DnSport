import classNames from 'classnames/bind';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { links } from '../../assets/data';
import config from '../../config';
import styles from './Navbar.module.scss';

const cx = classNames.bind(styles);

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState(0);

    const handleClick = (i) => {
        setIsOpen(false);
        setValue(i);
    };

    return (
        <div className={cx('container')}>
            <section className={cx('wrapper')}>
                <Link className={cx('logo')} to={config.routes.home}>
                    <h3>
                        Dn<span>.Sport</span>
                    </h3>
                </Link>
                <ul
                    className={cx('nav', {
                        active: isOpen,
                    })}
                >
                    {links.map((link, index) => (
                        <li
                            key={link.name}
                            onClick={() => handleClick(index)}
                            className={cx('nav_link', {
                                active: index === value,
                            })}
                        >
                            <Link to={link.path}>{link.name}</Link>
                        </li>
                    ))}
                </ul>
                <button
                    className={cx('navBtn')}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </section>
        </div>
    );
};

export default Navbar;
