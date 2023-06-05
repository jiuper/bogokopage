import styles from "@/components/template/Footer/Footer.module.scss"
import cnBind from "classnames/bind";
import Link from "next/link";
import {ROUTES_FOOTER} from "@/const/routes";
import {Logo} from "@/components/atom/Logo/Logo";

const cx = cnBind.bind(styles)

export const Footer = () => {
    return (
        <footer className={cx("footer")}>
            <div className={cx("cn-footer", "container")}>
                <Logo/>
                <div className={cx("footer-navigation")}>
                    {
                        ROUTES_FOOTER.map((el, i) => <Link key={i} href={el.href}>{el.title}</Link>)
                    }
                </div>
                <div className={cx("footer-date")}>
                    <span>ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ БОГОКО.</span>
                    <span>Адрес: РБ, г. ВИТЕБСК, УЛ. ЧКАЛОВА, Д. 11/1-71</span>
                    <span>УНП: 391838549</span>
                    <span>
                   Расчетный счет: BY30ALFA30122B32080010270000 в BYN в ЗАО Альфа-Банк, БИК: ALFABY2X
               </span>
                </div>
            </div>

        </footer>
    );
};