import classNames from 'classnames/bind';
import React, { useState } from 'react';
import { FaChevronCircleLeft, FaChevronCircleRight, FaQuoteLeft } from 'react-icons/fa';
import { testimonials } from '../../assets/data';
import CardUser from '../CardUser';
import Title from '../Title';
import styles from './Testimonials.module.scss';

const cx = classNames.bind(styles);

const Testimonials = () => {
    const [count, setCount] = useState(0);
    const length = testimonials.length;

    const handlePrev = () => {
        let newCount = count - 1;
        if (newCount < 0) {
            newCount = length - 1;
        }
        setCount(newCount);
    };

    const handleNext = () => {
        let newCount = count + 1;
        if (newCount > length - 1) {
            newCount = 0;
        }
        setCount(newCount);
    };

    return (
        <div className={cx('testimonials')}>
            <div className={cx('title')}>
                <Title icon={<FaQuoteLeft />} title='Testimonials' />
            </div>
            <CardUser data={testimonials[count]} position='topMid' />

            <div className={cx('control')}>
                <span onClick={handlePrev}>
                    <FaChevronCircleLeft className={cx('left')} />
                </span>
                <span onClick={handleNext}>
                    <FaChevronCircleRight className={cx('right')} />
                </span>
            </div>
        </div>
    );
};

export default Testimonials;
