const { webkit } = require('playwright');

const connectWebkit = async (url) => {
    var browser = await webkit.connect({ 
        wsEndpoint: url });
    
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://github.com/microsoft/playwright');
    await browser.close();  
}

module.exports = connectWebkit;