import React from 'react';
import classNames from 'classnames/bind';
import styles from './FAQ.module.scss';
import { FaQuestion } from 'react-icons/fa';
import Title from '../Title/Title';
import { faqs } from '../../assets/data';
import Question from '../Question/Question';

const cx = classNames.bind(styles);

const FAQ = () => {
    return (
        <div>
            <Title icon={<FaQuestion />} title='FAQs' />
            <div className={cx('faqs')}>
                {faqs.map((faq) => (
                    <Question data={faq} key={faq.id} />
                ))}
            </div>
        </div>
    );
};

export default FAQ;
