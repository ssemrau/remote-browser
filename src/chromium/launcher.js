const { chromium } = require('playwright');

var launcher = async () => {
    try {
        const browserServer = await chromium.launchServer({
            headless: false            
        });
        const browserWSEndpoint = browserServer.wsEndpoint();        
        const userAgent = 'temp-user-agent';
        return { browserWSEndpoint, userAgent, browser: 'chrome1' };
    } catch (e) {
        console.log(e);    
        process.exit(1);     
    }

    return null;
};

module.exports = launcher;
