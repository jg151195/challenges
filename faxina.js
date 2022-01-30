const faxina = (obj)=>{
    for(element in obj){
        if(obj[element] == null){
            delete obj[element];
        }
    }
    return obj;
}

console.log(faxina({name: "João", surname: null, age: 25}));