import styles from './Block.module.scss';
import cnBind from 'classnames/bind';
import {BlockInfoItem} from "@/components/atom/BlockInfoItem/BlockInfoItem";


const cx = cnBind.bind(styles);

export const BlockTwo = () => {

        const listItems: { label: string, description: string }[] = [
            {
                label: '01.',
                description: 'Один из важнейших наших приоритетов - безопасность.'
            },
            {
                label: '02.',
                description: 'Оплачивать услуги можно наличными, картой а так же работают карты рассрочек: Халва, карта покупок Кашалот.'
            },
            {
                label: '03.',
                description: 'Комфортная система лояльности для каждого гостя. Получайте кэшбэк с первого посещения.',
            },
            {
                label: '04.',
                description: 'Высокий уровень сервиса.\n' +
                    'Экономим ваше время - умеем работать в 4 руки.'
            },
            {
                label: '05.',
                description: 'Узнать стоимость, наличие свободных мест и записаться можно 24/7 самостоятельно через ссылку онлайн записи.',
            },
            {
                label: '06.',
                description: 'Мастера - высококвалифицированные специалисты.'
            },

        ]

        return (
            <div className={cx('info-page', 'width-container')}>
                <div className={cx('info-caption')}>
                    ПОЧЕМУ МЫ?
                </div>
                <hr className={cx('info-line')}/>
                <div className={cx('info-items')}>
                    {
                        listItems.map((el, i) => <BlockInfoItem
                            key={i}
                            label={el.label}
                            description={el.description}
                        />)
                    }
                </div>
            </div>
        );
    }
;