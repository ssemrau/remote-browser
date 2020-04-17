# launch agent

to connect to ws://127.0.0.1/<giud>
```
node agent.js 8001 firefox localhost
or
node agent.js 8001 chromium localhost
or
node agent.js 8001 webkit localhost
```

to connect to ws://<public_ip>:<port>
```
node agent.js 8001 firefox remote
or
node agent.js 8001 chromium remote
```