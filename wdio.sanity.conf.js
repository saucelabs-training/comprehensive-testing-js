const sauceOptions = {
    extendedDebugging: true,
	capturePerformance: true,
};

exports.config = {
    runner: 'local',
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    region: process.env.REGION || 'us',
    services: [
        ['sauce', {
            sauceConnect: true,
            sauceConnectOpts: {
                noSslBumpDomains: 'all',
            },
        }]
    ],
    specs: [
        './test/specs/**/sanity.spec.js'
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
    capabilities: [
        //Desktop A 28%: https://www.w3schools.com/browsers/browsers_display.asp
        {
            browserName: 'chrome',
            platformName: 'windows 10',
            browserVersion: 'latest',
            'sauce:options': {
                ...sauceOptions,
            }
        }
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
