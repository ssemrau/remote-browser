const httpProxy = require('http-proxy');

async function createServer (wsEndPoint, host, port, onClose, onError) {
    var proxy = await httpProxy
        .createServer({
            target:       wsEndPoint,
            ws:           true,
            localAddress: host,
            ignorePath: true
        }).listen(port);
    
    proxy.on('open', function (proxySocket) {
        console.log('Client connected');                
    });
          
    proxy.on('close', function (res, socket, head) {
        console.log('Client disconnected');
        proxy.close();
        if (onClose)
            onClose();    
    });

    proxy.on('error', (err) => {                
        console.log(`${err.code} to ${err.address}:${port}`);
        proxy.close();
        if (onError)
            onError();
    });

    return `ws://${host}:${port}`;
}

module.exports = createServer;
