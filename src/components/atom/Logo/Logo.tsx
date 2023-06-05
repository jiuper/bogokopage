import Link from "next/link";
import Logotip from '../../../public/logo.svg'
import cnBind from "classnames/bind";
import styles from './Logo.module.scss'
import Image from "next/image";

const cx = cnBind.bind(styles)
export const Logo = () => {
    return (
            <Link href={'/'}>
                <Image priority className={cx('logo')} src={Logotip} alt={'Bogoko'}/>
            </Link>
    );
};