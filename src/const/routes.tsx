import {IROUTES} from "@/types";
import VK from "@/public/1486147202-social-media-circled-network10_79475.svg";
import INSTAGRAM from "@/public/instagram_social_media_network_icon_193321.svg";
import INSTAGRAM_TWO from '../public/Group_5.svg'
import VK_TWO from '../public/Group_6.svg'
import TG from '../public/Group_7.svg'
import WT from '../public/Group_8.png'


export const ROUTES: IROUTES[] = [
    {title: "Главная", href: "/"},
    {title: "О нас", href: "/#about"},
    {title: "Услуги", href: "", context: true},
    {title: "Дисконтная программа", href: "/"},
    {title: "Контакты", href: "/#contacts"},
];

export const ROUTES_CHILDREN: IROUTES[] = [
    {title: "Экспресс услуги в 4 руки", href: "/simultaneously", label: 'salonHeir'},
    {title: "Маникюр/Педикюр", href: "/salonmanicure", label: 'salonManicure'},
    {title: "Ресницы/Брови/Макияж", href: "/saloneyes", label: 'salonEyes'},
    {title: "Парикмахерские услуги", href: "/hairdressingservices", label: 'salonHeir'},
    {title: "Перманентный макияж", href: "/permanentmakeup", label: 'salonPermanent'},
    {title: "Массаж", href: "/salonmassage", label: 'salonMassage'},
    {title: "Косметолог", href: "/saloncosmetologist", label: 'salonCosmetologist'},
    {title: "Депиляция", href: "/salondepilation", label: 'salonDepilation'},
];

export const SOCIAL_NETWORK: { title: string, href: string, icon: string }[] = [
    {title: 'instagram', href: 'https://instagram.com/bog_oko_salon?igshid=NTc4MTIwNjQ2YQ==', icon: INSTAGRAM},
    {title: 'vk', href: '/', icon: VK},
]
export const SOCIAL_NETWORK_CONTACT: { title: string, href: string, icon: string }[] = [
    {title: 'instagram', href: 'https://instagram.com/bog_oko_salon?igshid=NTc4MTIwNjQ2YQ==', icon: INSTAGRAM_TWO},
    {title: 'vk', href: '/', icon: VK_TWO},
    {title: 'tg', href: '/', icon: TG},
    {title: 'wt', href: '/', icon: WT},
]

export const ROUTES_FOOTER: IROUTES[] = [
    {title: "Догов оферты", href: "/"},
    {title: "Политика конфиденциальности", href: "/"},
    {title: "Условия оплаты картой и возврат", href: "/"},

];

