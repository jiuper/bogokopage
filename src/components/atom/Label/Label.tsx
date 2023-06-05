import cnBind from "classnames/bind";
import styles from "@/components/atom/Label/Label.module.scss";

const cx = cnBind.bind(styles)

interface ILabel {
    text: string;
}

export const Label = ({text}: ILabel) => {
    return (
        <div className={cx('sm-label')}>
            <h1>{text}</h1>
        </div>
    );
};