import styles from './Block.module.scss';
import cnBind from 'classnames/bind';

const cx = cnBind.bind(styles);

export const BlockOne = () => {
    return (
        <div className={cx('home-caption')}>
            <div className={cx('caption-right')}>
                <span>Территория красоты</span>
                <span>BOGOKO</span>
            </div>
        </div>
    );
};