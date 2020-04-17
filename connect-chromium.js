const { chromium } = require('playwright');

const connectChromium = async (url) => {
    var browser = await chromium.connect({ 
        wsEndpoint: url });
    
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://github.com/microsoft/playwright');
    await browser.close();  
}

module.exports = connectChromium;