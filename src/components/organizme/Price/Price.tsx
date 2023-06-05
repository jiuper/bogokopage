import {ItemPoint} from "@/components/atom/ItemPoint/ItemPoint";
import {ItemPointDesc} from "@/components/atom/ItemPointDesc/ItemPointDesc";
import cnBind from "classnames/bind";
import styles from './Price.module.scss'
import {useRecoilValue, useSetRecoilState} from "recoil";
import {filterListItems, filterListItemsDesc, isId} from "@/store/state";

const cx = cnBind.bind(styles)

interface IPrice {
    text: string;
}

export function Price({text}: IPrice) {

    const countPrice = useRecoilValue(filterListItems)
    const countPriceDesc = useRecoilValue(filterListItemsDesc)
    const setIdPrice = useSetRecoilState(isId)

    return (
        <>
            <div className={cx('sm-table')}>
                <div className={cx('sm-table-block')}>
                            <span className={cx('sm-table-caption')}>
                                {text}
                            </span>
                    <div className={cx('sm-table-items')}>
                        <div className={cx('sm-items-left')}>
                            {
                                countPrice.map(el =>
                                    el.list.map((elem, i) =>
                                        <ItemPoint
                                            key={i}
                                            number={i + 1}
                                            text={elem}
                                            handleAction={setIdPrice}
                                        />))
                            }
                        </div>
                        <div className={cx('sm-items-right')}>
                            {
                                countPriceDesc.map((el, i) =>
                                    <ItemPointDesc
                                        key={i}
                                        label={el.label}
                                        desc={el.desc}
                                    />)
                            }
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};