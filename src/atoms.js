import {atom, selector} from "recoil";

export const networkatom = atom({
    key:"networkatom",
    default:104
})
export const jobatom = atom({
    key:"jobatom",
    default:10 
})
export const notifiactionatom = atom({
    key:"notifiactionatom",
    default:12
})
export const messagatom = atom({
    key:"messagatom",
    default:0
})

export const totalNotificationSelector = selector({
    key:"totalNotificationSelector",
    get:({get}) =>{
        const networkatomcount = get(networkatom);
        const jobatomcount = get(jobatom);
        const notificationatomcount = get(notifiactionatom);
        const messagatomcount = get(messagatom);
        return networkatomcount + jobatomcount + notificationatomcount + messagatomcount; 
    }
})
