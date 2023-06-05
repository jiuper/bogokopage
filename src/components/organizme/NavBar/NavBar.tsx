import {ROUTES, ROUTES_CHILDREN} from "@/const/routes";
import Link from "next/link";
import {Dropdown} from "@/components/molecule/Dropdown";
import styles from './NavBar.module.scss';
import cnBind from 'classnames/bind';
const cx = cnBind.bind(styles);

export const NavBar = () => {

    return (
        <nav className={cx('menu')}>
            {
                ROUTES.map((el,i) =>
                    !el.context
                        ? <Link
                            key={i}
                            href={el.href}
                            className={cx('menu-point')}>
                            {el.title}
                        </Link>
                        : <Dropdown ROUTES_CHILDREN={ROUTES_CHILDREN} key={i} href={el.href} title={el.title}/>)
            }
        </nav>
    );
};