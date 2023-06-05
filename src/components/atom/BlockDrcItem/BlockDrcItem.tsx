import styles from './BlockDrcItem.module.scss';
import cnBind from 'classnames/bind';
import Image, {StaticImageData} from "next/image";
import Link from "next/link";

const cx = cnBind.bind(styles);

interface IBlockDrcItem {
    label: string;
    icon: StaticImageData;
    href: string;
}

export const BlockDrcItem = ({label, icon, href}: IBlockDrcItem) => {
    return (
        <Link href={href} className={cx('item')}>
            <div className={cx('item-title')}>
                <span>{label}</span>
                <div className={cx('arrow')}></div>
            </div>
            <Image src={icon} alt={'icon'}/>
        </Link>
    );
};