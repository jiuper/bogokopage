import Link from "next/link";
import styles from './Dropdown.module.scss';
import cnBind from 'classnames/bind';
import {IROUTES} from "@/types";
import {useRouter} from "next/router";
import {useSetRecoilState} from "recoil";
import {isRouter} from "@/store/state";
import {useEffect} from "react";

const cx = cnBind.bind(styles);

interface IDropdown {
    title: string;
    href: string;
    ROUTES_CHILDREN: IROUTES[];
}

export const Dropdown = ({title, href, ROUTES_CHILDREN}: IDropdown) => {

    const router = useRouter()

    const setIsRouter = useSetRecoilState(isRouter)

    const handleIsTime = (label: string) => {
        setTimeout(() => {
            setIsRouter(label)
        },1000)
        localStorage.setItem('route', label)
    }

    useEffect(() => {
        const ls = localStorage.getItem('route')
        if(ls) setIsRouter(ls)
    }, [setIsRouter])

    return (
        <div className={cx('menu')}>
            <span className={cx('menu-point')} key={href}>
                {title}
                <div className={cx('t-menusub__arrow')}></div>
            </span>
            <div className={cx('dropdown')}>
                {
                    ROUTES_CHILDREN.map((elem, i) =>
                        <Link
                            key={i}
                            href={elem.href}
                            className={cx('option', router.asPath === elem.href ? 'activeClass' : '')}
                            onClick={() => elem.label && handleIsTime(elem.label)}
                        >
                            {elem.title}
                        </Link>)
                }
            </div>
        </div>
    );
};