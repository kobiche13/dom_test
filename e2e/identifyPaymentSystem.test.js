import puppeteer from 'puppeteer'


describe('payment system', () => {
    let browser;
    let page;
    beforeEach(async ()=>{
        browser = await puppeteer.launch({
            headless: false,
            slowMo: 100,
            devtools: true,
        })

        page = await browser.newPage();
    })

    test('testing identify paument system', async ()=> {
        await page.goto('http://localhost:9000')
        await page.waitForSelector('.form-group')

        const form = await page.$('.form-group')
        const input = await form.$('.form-group__field')

        await input.type('22')

        let checkFilter = await page.$eval('.mir',
            element=> element.style.filter ==  'grayscale(0)'
        )
        expect(checkFilter).toBe(true)
    })

    afterEach(async () => {
        await browser.close();
    })
})
