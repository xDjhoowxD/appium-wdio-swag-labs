const appiumCapabilitiesIOS = {
    protocol: "http",
    hostname: "127.0.0.1",
    port: 4723,
    path: "/",
    capabilities: {
        "appium:deviceName": "iPhone 16 Pro",
        "platformName": "iOS",
        "appium:automationName": "XCUITest",
        "appium:platformVersion": "18.0",
        "appium:app": "/Users/dtidigital/Documents/appium-wdio-swag-labs-app/app/swagLabs.zip",
        "appium:udid": "989EDA48-B0B7-46B7-9B26-8A6F71C3F0CA",
        //"appium:appPackage": "com.swaglabsmobileapp",
        //"appium:appActivity": "com.swaglabsmobileapp.MainActivity",
        "appium:ensureWebviewsHavePages": true,
        "appium:nativeWebScreenshot": true,
        "appium:newCommandTimeout": 3600,
        "appium:connectHardwareKeyboard": true
    }
};

export default appiumCapabilitiesIOS;
