import { words } from "./../shared/words";

export default function getId() {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}

export function createFlatListItems(items, addItem) {
    let rep = [];
    let rowKey = 0;
    let colKey = 0;
    var row = { key: rowKey.toString(), cols: [] }
    if (addItem) {
        row.cols.push({
            key: colKey,
            ...addItem
        });
        colKey++;
    }
    items.forEach(item => {
        if (row.cols.length == 2) {
            rowKey++;
            colKey = 0;
            rep.push({ ...row });
            row = { key: rowKey.toString(), cols: [] }
        }
        row.cols.push({
            key: colKey,
            ...item
        });
        colKey++;
    });
    if (row.cols.length > 0) rep.push({ ...row });
    return rep;
}

export const commaThousondSeperator = (num) => { return num.replace(/\B(?=(\d{3})+(?!\d))/g, ","); };

export const convertToJalali = (gy, gm, gd) => {
    g_d_m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    if (gy > 1600) {
        jy = 979;
        gy -= 1600;
    } else {
        jy = 0;
        gy -= 621;
    }
    gy2 = (gm > 2) ? (gy + 1) : gy;
    days = (365 * gy) + (parseInt((gy2 + 3) / 4)) - (parseInt((gy2 + 99) / 100)) + (parseInt((gy2 + 399) / 400)) - 80 + gd + g_d_m[gm - 1];
    jy += 33 * (parseInt(days / 12053));
    days %= 12053;
    jy += 4 * (parseInt(days / 1461));
    days %= 1461;
    if (days > 365) {
        jy += parseInt((days - 1) / 365);
        days = (days - 1) % 365;
    }
    jm = (days < 186) ? 1 + parseInt(days / 31) : 7 + parseInt((days - 186) / 30);
    jd = 1 + ((days < 186) ? (days % 31) : ((days - 186) % 30));
    return [jy, jm, jd];
}