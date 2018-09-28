const puppeteer = require('puppeteer-core');

(async () => {
    let browser = await puppeteer.launch({
        executablePath: '/usr/bin/chromium-browser',
        args: ['--no-sandbox', '--headless', '--disable-gpu']
    })
    let page = await browser.newPage()
    await page.setContent('<h1>WOOOOOW</h1>')
    let buffer = await page.pdf({ format: 'A4' })
    console.log(buffer)
})()
