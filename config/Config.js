const appiumCapabilities = {
    protocol: "http",
    hostname: "127.0.0.1",
    port: 4723,
    path: "/",
    capabilities: {
        "appium:deviceName": "Android Emulator",
        "platformName": "Android",
        "appium:automationName": "UiAutomator2",
        "appium:platformVersion": "12.0",
        // "appium:app": "d:\\Code\\appium-wdio-test\\app\\swagLabs.apk",
        "appium:appPackage": "com.swaglabsmobileapp",
        "appium:appActivity": "com.swaglabsmobileapp.MainActivity",
        "appium:ensureWebviewsHavePages": true,
        "appium:nativeWebScreenshot": true,
        "appium:newCommandTimeout": 3600,
        "appium:connectHardwareKeyboard": true
    }
};

export default appiumCapabilities;
