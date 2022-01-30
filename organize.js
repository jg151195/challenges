const obj = [{
    itsMe: true,
    admin: true,
    name: "Leonardo"
},
{
    itsMe: true,
    admin: false,
    name: "Nicolly"
},
{
    itsMe: false,
    admin: true,
    name: "Jucelino"
}]

const organize = (objArray) =>{
    objArray.sort((a,b) => b.itsMe - a.itsMe || b.admin - a.admin)
    return objArray;
}
console.log(organize(obj));