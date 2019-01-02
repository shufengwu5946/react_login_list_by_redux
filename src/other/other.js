export const getMaxId = (data) =>{
    let id = 0;
    data.forEach(element => {
        id = element.id > id ? element.id : id;
    });
    return id;
}