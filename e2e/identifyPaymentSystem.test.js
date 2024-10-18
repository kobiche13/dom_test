import puppeteer from 'puppeteer'
jest.useFakeTimers()

describe('payment system', () =>{
    let browser;

    beforeEach(()=>{
        browser = puppeteer.launch({
            headless: false,
            slowMo: 100,
            devtools: true,
        })
    })

    test('test', ()=>{})
})