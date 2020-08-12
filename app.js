const puppeteer = require('puppeteer')



async function start() {

    async function loadMore(page, selector) {
        const moreButton = await page.$(selector)
        if (moreButton) {
            console.log("Botão clicado")
            await moreButton.click()
            await page.waitFor(selector, { timeout: 3000 }).catch(() => {console.log("timeout")})
            await loadMore(page, selector)
        }
    }

    async function getComments(page, selector) {
        const comments = await page.$$eval(
            selector, links => links.map(
                link => link.innerText))
        return comments
    }


    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    page.goto('//aqui colocar  o link do post do Instagram')

    
    await loadMore(page, 'Nome da classe do Botão de carregamento do instagram');
    const comments = await getComments(page, 'nome da classe do arroba do comentario')
    const counted = count(comments)
    const sorted = sort(counted)
    sorted.forEach(arroba => { console.log(arroba)})

    await browser.close()
}



function count(arrobas) {
    const count = {}
    arrobas.forEach(arroba => { count[arroba] = (count[arroba] || 0) + 1 })
    return count
}



function sort(counted) {
    const entries = Object.entries(counted)
    const sorted = entries.sort((a, b) => b[1] - a[1])
    return sorted

}


start()

