function cacaPalavras(letra,frase){
    let cont = 0;
    if(letra == letra.toUpperCase()){
        frase = frase.toUpperCase();
    }
    else{
        frase = frase.toLowerCase();
    }
    fraseDividida = frase.split("");
    for(let i=0; i<=fraseDividida.length; i++){
        if(letra == fraseDividida[i]){
            cont++;
        }
    }
    return "Resultado: " + cont;
}
console.log(cacaPalavras("A", "atalanta"));