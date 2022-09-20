
import classNames from 'classnames/bind';
import styles from './PageNotFound.module.scss';

const cx = classNames.bind(styles);

const PageNotFound = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <h4 className={cx('title')}>
                    Sorry, this page doesn't exist. Please check the URL or go
                    back a page.
                </h4>
                <p className={cx('text')}>404 Error. Page Not Found.</p>
            </div>
        </div>
    );
};

export default PageNotFound;
