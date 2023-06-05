import {ReactNode} from "react";
import {Header} from "@/components/template/Header";
import styles from './PageLayout.module.scss';
import cnBind from 'classnames/bind';
import Head from "next/head";
import {Footer} from "@/components/template/Footer/Footer";
import ScrollToTop from "react-scroll-to-top";

const cx = cnBind.bind(styles);

interface PageLayoutProps {
    title?: string,
    children: ReactNode,
}

export const PageLayout = ({children, title}: PageLayoutProps) => {


    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico"/>
                {title && <title>{title}</title>}
            </Head>

            <div className={cx('wrapper')}>
                <Header/>
                <main>
                    {children}
                </main>
                <Footer/>
            </div>
            <ScrollToTop smooth style={{left: 40}} />
        </>
    );
};
