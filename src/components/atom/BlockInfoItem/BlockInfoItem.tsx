import styles from './BlockInfoItem.module.scss';
import cnBind from 'classnames/bind';

const cx = cnBind.bind(styles);

interface IBlockInfoItem {
    label: string;
    description: string;
}

export const BlockInfoItem = ({label, description}: IBlockInfoItem) => {
    return (
        <div className={cx('block-info')}>
            <div className={cx('block-info_description')}>
                <span className={cx('info-label')}>{label}</span>
                <span className={cx('info-description')}>{description}</span>
            </div>
        </div>
    );
};