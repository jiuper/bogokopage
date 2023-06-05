import {atom, selector} from "recoil";
import {ITEM_POINTS, ITEM_POINTS_ONE_DESC} from "@/const/variables";

export const isRouter = atom<string>({
    key: 'isRouter',
    default: ''
})

export const isId = atom<number>({
    key: 'isId',
    default: 0
})

export const filterListItems = selector<{label:string, list:string[]}[]>({
    key: 'filterListItems',
    get: ({get}) =>{
        const router = get(isRouter)
        return ITEM_POINTS.filter(el => el.label === router)
    }
})

export const filterListItemsDesc = selector<{ label: string, desc: string; icon: string }[]>({
    key: 'filterListItemsDesc',
    get: ({get}) =>{
        const id = get(isId)
        return ITEM_POINTS_ONE_DESC.filter((el, i) => i === id)
    }
})