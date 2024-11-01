import puppeteer from 'puppeteer'


describe('validate', () =>{
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

    test('testing validate card number', async ()=>{
        await page.goto('http://localhost:9000')
        await page.waitForSelector('.form-group')

        const form = await page.$('.form-group')
        const input = await form.$('.form-group__field')
        const btn = await form.$('.form-group__btn')

        await input.type('2204310142508665')
        await btn.click()
        let checkValidate = await page.$eval('.validate__result-text',
            element=> element.textContent ==  'validate'
        )
        
        await expect(checkValidate).toBe(true)
    }, 10000)

    afterEach(async () => {
        await browser.close();
    })
})
