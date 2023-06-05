import {Carousel} from "@/components/molecule/Carousel/Carousel";
import {GroupImages} from "@/components/atom/GroupImages/GroupImages";
import cnBind from "classnames/bind";
import styles from "@/components/organizme/CarouselGroupImages/CarouselGroupImages.module.scss";
import {IGroupImages} from "@/types";

const cx = cnBind.bind(styles)

interface ICarouselGroupImages {
    text: string;
    listImages: IGroupImages[]
}

export const CarouselGroupImages = ({text, listImages}: ICarouselGroupImages) => {
    return (
        <div className={cx('sm-carousel')}>
            <div className={cx('sm-carousel-caption')}>
                {text}
            </div>
            <Carousel width={350} initValue={0} length={listImages.length}>
                <div className={cx('sm-imgs')}>
                    <GroupImages listImages={listImages}/>
                </div>
            </Carousel>
        </div>
    );
};