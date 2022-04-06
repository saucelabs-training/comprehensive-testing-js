const visualOptions = {
    apiKey: process.env.SCREENER_API_KEY,
    projectName: 'comprehensive-testing',
    failOnNewStates: false
};
const sauceOptions = {
    // user,key have to be here for visual
    username: process.env.SAUCE_USERNAME,
    accesskey: process.env.SAUCE_ACCESS_KEY,
    extendedDebugging: true,
	capturePerformance: true,
};

exports.config = {
    region: process.env.REGION || 'us',
    runner: 'local',
    services: [
        ['sauce', {
            sauceConnect: true,
            sauceConnectOpts: {
                noSslBumpDomains: 'all',
                region: process.env.REGION || 'us-west'
            },
        }]
    ],
    specs: [
        './test/specs/**/visual*.js'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    //
    // ============
    // Capabilities
    // ============
    maxInstances: 100,
    //Screener config
    hostname: 'hub.screener.io',
    port: 443,
    protocol: 'https',
    path: '/wd/hub',
    capabilities: [
        //Desktop A 28%: https://www.w3schools.com/browsers/browsers_display.asp
        {
            browserName: 'chrome',
            platformName: 'windows 10',
            browserVersion: 'latest',
            'sauce:options': {
                ...sauceOptions,
            },
            'sauce:visual': {
                ...visualOptions,
                viewportSize: '1366x768'
            }
        },
        // {
        //     browserName: 'safari',
        //     platformName: 'macOS 10.15',
        //     browserVersion: 'latest',
        //     'sauce:options': {
        //         ...sauceOptions,
        //     },
        //     'sauce:visual': {
        //         ...visualOptions,
        //         viewportSize: '1366x768'
        //     }
        // },
        // // https://yesviz.com/iphones.php
        // // iphone12
        // {
        //     browserName: 'safari',
        //     platformName: 'macOS 10.15',
        //     browserVersion: 'latest',
        //     'sauce:options': {
        //         ...sauceOptions,
        //     },
        //     'sauce:visual': {
        //         ...visualOptions,
        //         viewportSize: '390x844'
        //     }
        // },
        // //12 pro max
        // {
        //     browserName: 'safari',
        //     platformName: 'macOS 10.15',
        //     browserVersion: 'latest',
        //     'sauce:options': {
        //         ...sauceOptions,
        //     },
        //     'sauce:visual': {
        //         ...visualOptions,
        //         viewportSize: '428x926'
        //     }
        // }
    ],
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'error',
	bail: 0,
	baseUrl: 'http://localhost:3000',
	waitforTimeout: 10000,
	connectionRetryTimeout: 120000,
	connectionRetryCount: 3,
	framework: 'mocha',
	reporters: ['spec'],
	mochaOpts: {
		ui: 'bdd',
		//set at least this timeout since visual snapshots can take up to 45 sec
		//https://docs.saucelabs.com/visual/e2e-testing/setup/#useful-settings
		timeout: 180000,
	},
}
