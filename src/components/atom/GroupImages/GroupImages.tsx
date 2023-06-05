import Image from "next/image";
import cnBind from "classnames/bind";
import styles from "@/components/atom/GroupImages/GroupImages.module.scss";
import {IGroupImages} from "@/types";

const cx = cnBind.bind(styles)

interface IIGroupImages {
    listImages: IGroupImages[]
}

export const GroupImages = ({listImages}: IIGroupImages) => {
    return (
        <>
            {
                listImages.map((el, i) =>
                    <Image
                        className={cx('sm-img')}
                        key={i}
                        src={el.icon}
                        alt={''}
                    />)
            }
        </>
    );
};