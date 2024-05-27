import { atom } from "recoil";
import { Message } from '../../type';


export const userInputAtom = atom({
    key: "userInputAtom",
    default: ""
})

export const loadingAtom = atom({
    key: "loadingAtom",
    default: false
})