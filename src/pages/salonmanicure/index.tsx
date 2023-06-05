import cnBind from "classnames/bind";
import styles from '../simultaneously/simultaneously.module.scss';
import {PageLayout} from "@/layouts/PageLayout";
import ONE from '../../public/1.jpg'
import TWO from '../../public/2.jpg'
import THREE from '../../public/3.jpg'
import FOUR from '../../public/4.jpg'
import {StaticImageData} from "next/image";
import {Price} from "@/components/organizme/Price";
import {LinkButton} from "@/components/atom/Link/Link";
import {Label} from "@/components/atom/Label/Label";
import {CarouselGroupImages} from "@/components/organizme/CarouselGroupImages/CarouselGroupImages";

const cx = cnBind.bind(styles)


export default function Index() {

    const listImages: { icon: StaticImageData, alt: string }[] = [
        {icon: ONE, alt: 'ONE'},
        {icon: TWO, alt: 'TWO'},
        {icon: THREE, alt: 'THREE'},
        {icon: FOUR, alt: 'FOUR'},
    ]


    return (

        <>
            <PageLayout>
                <div className={cx('simultaneously')}>

                    <div className={cx('sm-caption', 'salonmanicure-img')}>
                        <Label text='Маникюр и педикюр'/>
                    </div>

                    <div className={cx('sm-btn')}>
                        <LinkButton/>
                    </div>

                    <Price text='В нашей студии мы оказываем следующие услуги по маникюру и педикюру'/>

                    <CarouselGroupImages
                        text='Работы наших мастеров'
                        listImages={listImages}
                    />

                </div>
            </PageLayout>
        </>

    );
};