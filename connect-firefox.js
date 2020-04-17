const { firefox } = require('playwright');

const connectFirefox = async (url) => {
    var browser = await firefox.connect({ 
        wsEndpoint: url });
    
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://github.com/microsoft/playwright');
    await browser.close();  
}

module.exports = connectFirefox;