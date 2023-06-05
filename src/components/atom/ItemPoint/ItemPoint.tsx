import cnBind from "classnames/bind";
import styles from './ItemPoint.module.scss'
import {Button} from "@mui/base";

const cx = cnBind.bind(styles)

interface IItemPoint {
    number: number;
    text: string;
    handleAction: (id:number) => void
}

export const ItemPoint = ({number, text, handleAction}: IItemPoint) => {
    return (
        <Button className={cx('item')} onClick={() => handleAction(number - 1)}>
            <span>{number < 10 ? '0' + number : number}</span>
            <span>{text}</span>
        </Button>
    );
};