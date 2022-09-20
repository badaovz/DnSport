import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './TrainerCard.module.scss';

const cx = classNames.bind(styles);

const TrainerCard = ({ data }) => {
    const { image, name, job, socials } = data;
    return (
        <div className={cx('trainerCard')}>
            <div className={cx('header')}>
                <div className={cx('image')}>
                    <img src={image} alt='avatar' />
                </div>
                <div className={cx('header')}>
                    <h3>{name}</h3>
                    <p>{job}</p>
                </div>
            </div>
            <div className={cx('socials')}>
                {socials.map((social, index) => {
                    return (
                        <a href={social.link} key={index}>
                            {social.icon}
                        </a>
                    );
                })}
            </div>
        </div>
    );
};

TrainerCard.propTypes = {
    data: PropTypes.object.isRequired,
};

export default TrainerCard;
