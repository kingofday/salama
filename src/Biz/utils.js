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
    var row = { key: rowKey, cols: [] }
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
            row = { key: rowKey, cols: [] }
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
