# DDNS Webcaller (Node.js App)
Application to update a _Dynamic DNS via Webcall_ using Node.js, axios, among other minor libraries. This app sends a Web request (_GET method_) to a URL by which it updates a DDNS, all configured in the configuration file. Also, it could be set to run in a cron job or to run only once execution.

## Requirements
The latest stable version of **[Node.js](https://nodejs.org/)** must be installed.

## Installation
Use the package manager **npm** to install the libraries.

```bash
npm install
```

## Usage
On first run, it displays some prompts on console to set the required configuration. All questions must be answered until the end.
```bash
npm run start
```

When we need to reset the configuration just add the _reset_ parameter in the command argvs:
```bash
npm run start reset
```

### Binary Compilation using [pkg](https://github.com/vercel/pkg)
Also, if it's necessary to package and deploy the app into an executable that can be run even on devices without Node.js installed, just run the following commands:
```bash
npm install -g pkg
pkg .
```
After executing the above command, there should be the execution files for linux/win in the dist folder.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. Please make sure to update tests as appropriate.

## License
[GPL-3.0](https://choosealicense.com/licenses/gpl-3.0/)