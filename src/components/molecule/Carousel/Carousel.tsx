import cnBind from "classnames/bind";
import styles from './Carousel.module.scss'
import {ReactNode, useCallback, useEffect, useState} from "react";

const cx = cnBind.bind(styles)

interface ICarousel {
    classPrefix?: string;
    width: number;
    children?: ReactNode;
    initValue: number;
    length: number;
}

export function Carousel({children, classPrefix, width, length, initValue}: ICarousel) {

    const allWidth: number = width * (length - 1)
    const [initional, setInitional] = useState<number>(0)
    const [position, setPosition] = useState<number>(initional)
    const [activeBtnOne, setActiveBtnOne] = useState<boolean>(true)
    const [activeBtnTwo, setActiveBtnTwo] = useState<boolean>(false)

    useEffect(() => {
        setInitional(width * initValue)
        setPosition(initional)

    }, [initValue, initional, width])


    const handlePrev = useCallback(() => {
        if (position === 0) {
            setPosition(0)
            setActiveBtnOne(prev => !prev)
        } else {
            setPosition(position + width)
        }

        setActiveBtnTwo(false)

    }, [position, width])

    const handleNext = useCallback(() => {

        if (position === -allWidth) {
            setPosition(-allWidth)
            setActiveBtnTwo(prev => !prev)
        } else {
            setPosition(position - width)

        }

        setActiveBtnOne(false)

    }, [allWidth, position, width])

    return (
        <div className={cx('carousel', `${classPrefix}`)}>
            <button className={cx('carousel__prev', 'carousel__button', activeBtnOne ? 'btn__noActive' : 'btn__active')}
                    disabled={activeBtnOne}
                    onClick={handlePrev}
            />
            <div className={cx("carousel__window")} style={{width: 327 * length}}>
                <div className={cx("carousel__content")} style={{transform: `translateX(${position}px)`}}>
                    {children}
                </div>
            </div>
            <button className={cx('carousel__next', 'carousel__button', activeBtnTwo ? 'btn__noActive' : 'btn__active')}
                    disabled={activeBtnTwo}
                    onClick={handleNext}
            />
        </div>
    );
};