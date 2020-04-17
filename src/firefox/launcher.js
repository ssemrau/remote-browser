const { firefox } = require('playwright');

var launcher = async () => {
    try {
        const browserServer = await firefox.launchServer({
            headless: false            
        });
        const browserWSEndpoint = browserServer.wsEndpoint();
        const userAgent = 'temp-user-agent';
        return { browserWSEndpoint, userAgent, browser: 'firefox' };
    } catch (e) {
        console.log(e);    
        process.exit(1);     
    }

    return null;
};

module.exports = launcher;
