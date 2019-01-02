export const getMaxId = (data) => {
    let id = 0;
    data.forEach(element => {
        id = element.id > id ? element.id : id;
    });
    return id;
}

export function getCount(data) {
    let count = 0;
    data.forEach((ele) => {
        if (!ele.completed) {
            count++;
        }
    });
    return count;
}