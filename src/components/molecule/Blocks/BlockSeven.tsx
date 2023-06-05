import cnBind from "classnames/bind";
import styles from "@/components/molecule/Blocks/Block.module.scss";
import {BlockInfoItem} from "@/components/atom/BlockInfoItem/BlockInfoItem";


const cx = cnBind.bind(styles);

export const BlockSeven = () => {

    const listItems: { label: string, description: string }[] = [
        {
            label: '01.',
            description: 'Широкий диапазон предоставляемых услуг. Вы получаете всё и сразу в одном месте: шикарные волосы, отличный маникюр и педикюр, здоровую и сияющую кожу, массаж и полноценный отдых, гладкие ножки и многое другое'
        },
        {
            label: '02.',
            description: 'Постоянные скидки и акции, подарочные сертификаты.'
        },
        {
            label: '03.',
            description: 'Доступные цены на услуги салона красоты. Наши цены - лучшие в городе, поэтому мы их не скрываем',
        },
        {
            label: '04.',
            description: 'Удобное расположение салона в Витебске – нас очень легко найти'
        },
        {
            label: '05.',
            description: 'Индивидуальный подход к каждому гостю. Придя однажды на территорию  красоты "BOG OKO" в Витебске, вы становитесь частью большой дружной семьи, в которой вас любят, уважают и понимают с полуслова.',
        },
        {
            label: '06.',
            description: 'Бесплатная консультация Вы можете задать специалисту актуальные для вас вопросы, а также получить полезные советы и рекомендации.'
        },

    ]

    return (
        <div className={cx('our-advantages', 'width-container')}>
            <div className={cx('info-caption')}>
                Мы уверены в качестве своего обслуживания и даем абсолютную гарантию на результат.
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
};