import Image from "next/image";
import ABOUT_ME from '../../../public/photo_2023-06-03_00-43-38Ylia.jpg'
import {LIST_DESCRIPTIONS} from "@/const/variables";
import cnBind from "classnames/bind";
import styles from "@/components/molecule/Blocks/Block.module.scss";


const cx = cnBind.bind(styles);

export const BlockThree = () => {
    return (
        <div className={cx('about-me-bgr')}>
            <div className={cx('about-me', 'width-container')}>
                <div className={cx('am-img')}>
                    <Image src={ABOUT_ME} alt={'ABOUT_ME'}/>
                </div>
                <div className={cx('am-body')}>
                    <div className={cx('am-caption')}>
                        <h1 id={'about'}>
                            Привет, я Юля.
                        </h1>
                        <span>
                        Основательница территории красоты BOG OKO
                    </span>
                        <div className={cx('caption_line')}></div>
                    </div>
                    <div className={cx('am-items')}>
                        {
                            LIST_DESCRIPTIONS.map((el, i) => <p key={i}>{el.label}</p>)
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};