import { atom } from "recoil";


export const userInputAtom = atom({
    key: "userInputAtom",
    default: ""
})

export const messagesAtom = atom({
    key: "messagesAtom",
    default: []
})