import cnBind from "classnames/bind";
import styles from './simultaneously.module.scss'
import {PageLayout} from "@/layouts/PageLayout";
import ONE from '../../public/1.jpg'
import TWO from '../../public/2.jpg'
import THREE from '../../public/3.jpg'
import FOUR from '../../public/4.jpg'
import {Price} from "@/components/organizme/Price";
import {LinkButton} from "@/components/atom/Link/Link";
import {IGroupImages} from "@/types";
import {CarouselGroupImages} from "@/components/organizme/CarouselGroupImages/CarouselGroupImages";
import {Label} from "@/components/atom/Label/Label";

const cx = cnBind.bind(styles)


export default function Index() {

    const listImages: IGroupImages[] = [
        {icon: ONE, alt: 'ONE'},
        {icon: TWO, alt: 'TWO'},
        {icon: THREE, alt: 'THREE'},
        {icon: FOUR, alt: 'FOUR'},
    ]

    return (

        <>
            <PageLayout>
                <div className={cx('simultaneously')}>

                    <div className={cx('sm-caption', 'simultaneously-img')}>
                        <Label text='Экспресс услуги в 4 руки'/>
                    </div>

                    <div className={cx('sm-btn')}>
                        <LinkButton/>
                    </div>

                    <Price
                        text='В нашей студии есть одновременное обслуживание в 4 и 6 рук для экономии Вашего времени!'
                    />

                    <CarouselGroupImages
                        text='Работы наших мастеров'
                        listImages={listImages}
                    />

                </div>
            </PageLayout>
        </>

    );
};