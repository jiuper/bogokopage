import cnBind from "classnames/bind";
import styles from "@/components/molecule/Blocks/Block.module.scss";
import btn1 from '../../../public/photo_2022-09-05_19-.jpg'
import btn2 from '../../../public/photo_22321.jpg'
import btn3 from '../../../public/IMG-e130ba6606507a38.jpg'
import btn4 from '../../../public/IMG_7340.png'
import btn5 from '../../../public/IMG_9286-32.jpg'
import {StaticImageData} from "next/image";
import {BlockDrcItem} from "@/components/atom/BlockDrcItem/BlockDrcItem";

const cx = cnBind.bind(styles);

export const BlockFour = () => {

    const listDirection: { label: string, icon: StaticImageData, href:string }[] = [
        {label: 'Маникюр/Педикюр', icon: btn1, href:'/salonmanicure'},
        {label: 'Ресницы/Брови/Макияж', icon: btn4, href:'/saloneyes'},
        {label: 'Парикмахерские услуги', icon: btn2, href:'/hairdressingservices'},
        {label: 'Перманентный макияж', icon: btn3, href:'/permanentmakeup'},
        {label: 'Экспресс услуги в 4 руки', icon: btn5, href:'/simultaneously'},
    ]
    return (
        <div className={cx('direction', 'width-container')}>
            <div className={cx('drc-caption')}>
                <h1>
                    Наши направления
                </h1>
            </div>
            <div className={cx('drc-items')}>
                {
                    listDirection.map((el, i) =>
                        <BlockDrcItem
                            key={i}
                            label={el.label}
                            icon={el.icon}
                            href={el.href}
                        />)
                }
            </div>
        </div>
    );
};