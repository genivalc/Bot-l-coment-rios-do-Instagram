//Ler a página do INsta

//Pegar os comentários / @

const fakeArrobas = [
    '@neto',
    '@neto',
    '@Anderson',
    '@rquel'
]

//contar arrobas repetidas

function count(arrobas) {
    const count = {}
    arrobas.forEach(arroba => { count[arroba] = (count[arroba] || 0) + 1 })
    return count
}

console.log(count(fakeArrobas))

//Ordenar