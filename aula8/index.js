const todoMundoVe = 'Todo mundo vê esta variável de escopo global'

function executaEscopoGlobal(){
    console.log(todoMundoVe)
}

function executaEscopoLocal() {
    const visivelEmEscopoLocal = 'Só quem está dentro do bloco da função vê esta variável de escopo local'
    console.log(visivelEmEscopoLocal)

    function chamaDentroDoEscopo(){
        console.log('dentro do escopo =>', visivelEmEscopoLocal)
        const dentroDoLocal = false;
        console.log(dentroDoLocal)
    }

    chamaDentroDoEscopo()
}

executaEscopoGlobal();

executaEscopoLocal();

executaEscopoLocal();
