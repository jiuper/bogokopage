import cnBind from "classnames/bind";
import styles from "@/components/molecule/Blocks/Block.module.scss";
import MASTER from '../../../public/12312s112s12.jpg'
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Carousel} from "@/components/molecule/Carousel/Carousel";
import {ICAROUSELCHILDREN} from "@/types";


const cx = cnBind.bind(styles);

export const BlockFive = () => {

    const listImages: ICAROUSELCHILDREN[] = [
        {
            label: 'Врач-косметолог',
            icon: MASTER,
            alt: 'MASTER',
            desc: 'Приволжский исследовательский медицинский университет',
            title: 'Мария Алексеевна ИВАНОВА',
            age: '10 лет'
        },
        {
            label: 'Врач-косметолог',
            icon: MASTER,
            alt: 'MASTER',
            desc: 'Приволжский исследовательский медицинский университет',
            title: 'Мария Алексеевна ИВАНОВА',
            age: '10 лет'
        }, {
            label: 'Врач-косметолог',
            icon: MASTER,
            alt: 'MASTER',
            desc: 'Приволжский исследовательский медицинский университет',
            title: 'Мария Алексеевна ИВАНОВА',
            age: '10 лет'
        },

    ]

    return (
        <div className={cx('our-masters', 'width-container')}>
            <div className={cx('or-caption')}>
                <h1>
                    Наши мастера
                </h1>
            </div>
            <Carousel width={280} length={listImages.length} initValue={0}>
                {
                    listImages.map((el, i) =>
                        <div className={cx('list-images')} key={i}>
                            <Image src={el.icon} alt={el.alt}/>
                            <div className={cx('list-item')}>
                                <span>{el.label}</span>
                                <span className={cx('title-bold')}>{el.title}</span>
                                <span>{el.desc}</span>
                                <span>Стаж: {el.age}</span>
                            </div>
                        </div>
                    )
                }
            </Carousel>
        </div>
    );
};