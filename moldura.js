const moldura = (linha, colunas) => {
    let line = "";
    for (let i = 0; i < linha; i++) {
        if (i == 0) {
            for (let c = 0; c < colunas; c++) {
                if (c == 0) {
                    line += "+";
                } else if (c == colunas - 1) {
                    line += "+\n";
                } else {
                    line += "-";
                }
            }
        } else if (i == linha - 1) {
            for (let c = 0; c < colunas; c++) {
                if (c == 0) {
                    line += "+";
                } else if (c == colunas - 1) {
                    line += "+\n";
                } else {
                    line += "-";
                }
            }
        } else {
            for (let c = 0; c < colunas; c++) {
                if (c == 0) {
                    line += "-";
                } else if (c == colunas - 1) {
                    line += "- \n";
                } else {
                    line += ' ';
                }
            }
        }
    }

    return line;
}
console.log(moldura(7, 5));