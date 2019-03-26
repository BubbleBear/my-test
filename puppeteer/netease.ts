import * as puppeteer from 'puppeteer';

async function createBrowser(options = {}) {
    const browser = await puppeteer.launch(Object.assign({
        defaultViewport: {
            width: 1920,
            height: 1200,
        }
    }, options));

    return browser;
}

async function createPage(browser: puppeteer.Browser, url) {
    const page = await browser.newPage();
    await page.goto(url, {
        // waitUntil: 'domcontentloaded',
        waitUntil: 'load',
        timeout: 100000,
    });
    page.setDefaultTimeout(100000);

    return page;
}

async function test(page: puppeteer.Page) {
    const loginBtn = await page.waitForSelector('#j-nav-login');
    await loginBtn.click();

    // await page.waitForSelector('#j-ursContainer-1');

    await page.waitForSelector('.ux-login-set-container');

    console.log('##################')

    await Promise.all(page.frames().map(async frame => {
        console.log(frame.url());

        return true;
    }));

    // await page.waitFor(2000);

    // console.log(await Promise.all(page.frames().map(async frame => await frame.title())));
}

async function procedure(user) {
    const browser = await createBrowser();
    const page = await createPage(browser, 'https://study.163.com/course/introduction/1003550021.htm');

    await Promise.all(page.frames().map(async frame => {
        console.log(frame.url());

        return true;
    }));
    
    try {
        await test(page);
    } catch (e) {
        console.log(e)
    }

    await page.waitFor(1000)

    await page.screenshot({
        path: 'na.png',
    });
    await browser.close();
}

require.main === module && procedure({});
