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

async function createPage(browser: puppeteer.Browser, url: string) {
    const page = await browser.newPage();
    await page.goto(url, {
        waitUntil: 'domcontentloaded',
        timeout: 100000,
    });
    page.setDefaultTimeout(10000);

    return page;
}

async function firstTimeLogin(page: puppeteer.Page) {
    const qqLoginBtn = await page.waitForSelector('.ptlogin-wrap .login-tab.mod-tab .content-btns .btns-enter-qq');
    await qqLoginBtn.click();

    return qqLoginBtn;
}

export async function findLoginFrame(page, frameNames = [ 'login_frame_qq', 'ptlogin_iframe' ]) {
    if (!Array.isArray(frameNames)) {
        frameNames = [ frameNames ];
    }

    const loginFrame = await new Promise<puppeteer.Frame>((resolve, reject) => {
        page
            .on('requestfinished', (request) => {
                frameNames.includes(request.frame().name())
                && resolve(request.frame());
            });
        
        setTimeout(() => {
            reject('timeout');
        }, 10000);
    });

    return loginFrame;
}

export async function login(loginFrame: puppeteer.Frame, user) {
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

export async function procedure(user) {
    const browser = await createBrowser({
        args: [
            // 'proxy-server=localhost:6665'
        ]
    });

    const page = await createPage(browser, 'https://ke.qq.com/course/111347?flowToken=1005530');

    try {
        const loginBtn = await page.waitForSelector('#js_login');
        await loginBtn.click();

        await firstTimeLogin(page);

        await page.waitFor(10000);

        const loginFrame = await findLoginFrame(page);

        await login(loginFrame, user);
        
        const skipBtn = await page.waitForSelector('section.mobile-verify .js-skip-btn.btn-weak.btn-m.btn-skip');
        await skipBtn.click();

        await register(page);
    } catch (e) {
        await page.waitFor(10000);
        await page.screenshot({
            path: `${'1'}.png`,
        });
        console.log(e);
    }

    await page.waitFor(1000);

    await browser.close();
}

require.main === module && procedure({
    u: '136875815',
    p: 'strive4thelord',
    // u: '962927921',
    // p: '52parents',
});
