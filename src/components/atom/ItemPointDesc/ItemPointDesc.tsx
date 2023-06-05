import cnBind from "classnames/bind";
import styles from "@/components/atom/ItemPointDesc/ItemPointDesc.module.scss";
import {Button} from "@mui/base";

const cx = cnBind.bind(styles)

interface IItemPointDesc {
    label: string;
    desc: string;
}

export function ItemPointDesc({label, desc}: IItemPointDesc) {
    return (
        <div className={cx('item-desc')}>
            <span className={cx('ds-caption')}>{label}</span>
            <div className={cx('ds-desc')}>
                {desc}
            </div>
            <Button className={cx('ds-btn')}>
                Записаться
            </Button>
        </div>
    );
}