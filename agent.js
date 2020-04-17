const createServer =  require('./src/create-agent-server');
const getIp = require('./src/get-ip');
const connectFirefox = require('./connect-firefox');
const connectChromium = require('./connect-chromium');

const host = '0.0.0.0';
const port = process.argv[2] | 8001;
const driver = process.argv[3] ? process.argv[3] : 'chromium';
const mode = process.argv[4] ? process.argv[4] : 'localhost';

var socket = null;

const startBrowser = async () => {
    var ip = await getIp();
    var browser = await require(`./src/${driver}/launcher`)();
    const customWSEndpoint = await createServer(browser.browserWSEndpoint, host, port, startBrowser, reconnectAll);    
    var setup = { ip, browser, customWSEndpoint, port };        
    return setup;
};

const reconnectAll = async () => {
    socket.close();
    await start();
}

const start = async () => {
    var setup = await startBrowser();    
    console.log(setup);
    var url = mode === 'localhost' ? setup.browser.browserWSEndpoint : `ws://${setup.ip}:${setup.port}`;
    console.log(`Connecting to ${driver} on ${url}`);
    if(driver === 'chromium') {
        connectChromium(url);
    } else {
        connectFirefox(url);
    }
}

start();