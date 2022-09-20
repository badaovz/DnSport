import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Question.module.scss';
import { FaPlus, FaMinus } from 'react-icons/fa';

const cx = classNames.bind(styles);

const Question = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { question, answer } = data;
    return (
        <div className={cx('question')} onClick={() => setIsOpen(!isOpen)}>
            <div className={cx('header')}>
                <h4 className={cx('question')}> {question}</h4>
                <button className={cx('btn')}>
                    {isOpen ? <FaMinus /> : <FaPlus />}
                </button>
            </div>
            {isOpen && <p className={cx('answer')}>{answer}</p>}
        </div>
    );
};

export default Question;
