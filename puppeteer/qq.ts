import * as puppeteer from 'puppeteer';
import * as fs from 'fs';

// const ws = fs.createWriteStream('b.html');

async function createBrowser() {
    const browser = await puppeteer.launch({
        defaultViewport: {
            width: 1390,
            height: 876,
        },
    });

    return browser;
}

async function createPage(browser: puppeteer.Browser, url: string) {
    const page = await browser.newPage();
    await page.goto(url);
    page.setDefaultTimeout(10000);

    return page;
}

async function firstTimeLogin(page: puppeteer.Page) {
    const qqLoginBtn = await page.waitForSelector('.ptlogin-wrap .login-tab.mod-tab .content-btns .btns-enter-qq');
    await qqLoginBtn.click();

    return qqLoginBtn;
}

async function login(page: puppeteer.Page, user) {
    const loginBtn = await page.waitForSelector('#js_login');
    await loginBtn.click();

    await firstTimeLogin(page);

    await page.waitFor(1000);

    const loginFrame = await new Promise<puppeteer.Frame>((resolve, reject) => {
        page
            .on('requestfinished', (request) => {
                request.frame().name() === 'login_frame_qq' && resolve(request.frame());
            });
    });

    try {
        const switchLoginMethodBtn = await loginFrame.waitForSelector('#switcher_plogin');
        await switchLoginMethodBtn.click();
    } catch (e) {
        console.log(e);
    }

    const u = await loginFrame.waitForSelector('#u');
    const p = await loginFrame.waitForSelector('#p');
    const l = await loginFrame.waitForSelector('#login_button');

    await u.type(user.u);
    await p.type(user.p);
    await l.click();
}

async function register(page) {
    const registerBtn = await page.waitForSelector('section.section-feature.section--course-banner .js-apply-btn.btn-join');
    await registerBtn.click();
}

(async (user) => {
    const browser = await createBrowser();

    const page = await createPage(browser, 'https://ke.qq.com/course/111347?flowToken=1005530');

    try {
        await login(page, user);
        
        const skipBtn = await page.waitForSelector('section.mobile-verify .js-skip-btn.btn-weak.btn-m.btn-skip');
        await skipBtn.click();

        await register(page);
    } catch (e) {
        await page.screenshot({
            path: `${'x'}.png`,
        });
        console.log(e);
    }

    await page.waitFor(1000);

    // await page.screenshot({
    //     path: 'g.png',
    // });

    // ws.close();

    await browser.close();
})({
    u: '962927921',
    p: '52parents',
});
