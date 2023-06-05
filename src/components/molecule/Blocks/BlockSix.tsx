import cnBind from "classnames/bind";
import styles from "@/components/molecule/Blocks/Block.module.scss";
import {Map, Placemark, TypeSelector, YMaps, ZoomControl} from "@pbe/react-yandex-maps";
import Link from "next/link";
import {SOCIAL_NETWORK_CONTACT} from "@/const/routes";
import MAP from '../../../public/Layer_1_3.svg'
import OCLOCK from '../../../public/Layer_1_4.svg'
import MOBILE from '../../../public/Layer_1_5.svg'
import MAIL from '../../../public/Layer_1_6.svg'
import Image from "next/image";

const cx = cnBind.bind(styles);

export const BlockSix = () => {


    return (
        <div className={cx('contact')}>
            <YMaps enterprise query={{apikey: 'afef66c1-8caa-48c3-b88d-a01c82578b02'}}>
                <Map onLoad={() => {
                }} instanceRef={ref => {
                    ref && ref.behaviors.disable('scrollZoom');
                }} className={cx('cn-left')} defaultState={{center: [55.175797, 30.213703], zoom: 17}}>
                    <Placemark geometry={[55.175797, 30.213703]}/>
                    <ZoomControl/>
                    <TypeSelector/>
                </Map>
            </YMaps>
            <div className={cx('cn-right')}>
                <div id={'contacts'} className={cx('t-caption')}>КОНТАКТЫ:</div>
                <div className={cx('t-block', 't-mobile')}>
                    <Image src={MOBILE} alt={'MOBILE'}/>
                    <a href={'tel:+375 33 693 3428'}>+375 33 693 3428 </a>
                </div>
                <div className={cx('t-block', 't-address')}>
                    <Image src={MAP} alt={'MAP'}/>
                    <span>г. Витебск, ул.Чкалова, 11к1</span>
                </div>
                <div className={cx('t-block', 't-oclock')}>
                    <Image src={OCLOCK} alt={'OCLOCK'}/>
                    <div className={cx('t-oclock-span')}>
                        <span>Ежедневно</span>
                        <span>С 09:00 до 21:00</span>
                    </div>

                </div>
                <div className={cx('t-block', 't-mail')}>
                    <Image src={MAIL} alt={'MAIL'}/>
                    <a href={'mail:expample@gmail.com'}>expample@gmail.com</a>
                </div>
                <div className={cx('social')}>
                    {
                        SOCIAL_NETWORK_CONTACT.map((net, i) =>
                            <Link
                                key={i}
                                href={net.href}
                            >
                                <Image src={net.icon}
                                       alt={net.title}
                                />
                            </Link>)
                    }
                </div>
            </div>
        </div>
    );
};