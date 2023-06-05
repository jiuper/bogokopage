import Link from "next/link";
import styles from './Header.module.scss';
import cnBind from 'classnames/bind';
import {NavBar} from "@/components/organizme/NavBar";
import {GROUP_BUTTON_HEADER} from "@/const/variables";
import {Logo} from "@/components/atom/Logo/Logo";
import {useRouter} from "next/router";
import Image from "next/image";
import {ROUTES_CHILDREN, SOCIAL_NETWORK} from "@/const/routes";

const cx = cnBind.bind(styles);

export const Header = () => {

    const router = useRouter()

    const listBtn = ROUTES_CHILDREN.every(el => el.href !== router.asPath ) ?  GROUP_BUTTON_HEADER : [GROUP_BUTTON_HEADER[0]]

    return (
        <header className={cx('header')}>
            <NavBar/>
            <Logo/>
            <div className={cx('callback')}>
                <div className={cx('social')}>
                    {
                        SOCIAL_NETWORK.map((net, i) =>
                            <Link key={i} href={net.href}>
                                <Image className={cx('social-icon')} src={net.icon} alt={net.title}/>
                            </Link>)
                    }
                </div>
                <div className={cx('t-btn')}>
                    {
                        listBtn.map((el, i) =>
                            <a
                                href={el.href === '+375 33 693 3428' ? `tel:${el.href}` : el.href}
                                className={cx('btn-mod', `${el.classPrefix}`)}
                                key={i}
                            >
                                {el.title}
                            </a>
                        )

                    }
                </div>
            </div>

        </header>
    );
};