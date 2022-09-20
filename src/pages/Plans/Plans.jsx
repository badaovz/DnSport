import classNames from 'classnames/bind';
import { plans } from '../../assets/data';
import imageAbout from '../../assets/images/header_bg_4.jpg';
import CommonHero from '../../components/CommonHero';
import PlansPackage from '../../components/PlansPackage/PlansPackage';
import styles from './Plans.module.scss';

const cx = classNames.bind(styles);

const headerData = {
    image: imageAbout,
    title: 'Membership Plans',
    info: 'Assumenda perspiciatis asperiores deserunt quisquam, sit iusto consectetur vero similique aliquam.',
};

const Plans = () => {
    return (
        <>
            <CommonHero data={headerData} />
            <section>
                <div className={cx('plans')}>
                    {plans.map((plan) => (
                        <PlansPackage data={plan} key={plan.id} />
                    ))}
                </div>
            </section>
        </>
    );
};

export default Plans;
