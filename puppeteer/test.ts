import * as puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch({
        args: [
            'proxy-server=localhost:6666'
        ]
    });

    const page = await browser.newPage();
    await page.goto('https://ke.qq.com/course/111347?flowToken=1005530', {
        waitUntil: 'domcontentloaded',
        timeout: 60000,
    });

    await page.screenshot({
        path: '0.png'
    })

    await browser.close();
})()
