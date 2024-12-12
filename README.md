
# 🚀 Appium Tests with WebdriverIO for Swag Labs 🧪

Welcome to the **Appium + WebdriverIO** automated testing repository for the **Sauce Labs Swag Labs** application! This project demonstrates clean, maintainable, and scalable test automation practices using modern tools.

---

## 🗂️ Project Structure

```plaintext
📁 appium-wdio-test
├── 📁 app               # Contains the Swag Labs APK
│   └── swagLabs.apk
├── 📁 pageobjects       # Page Object Model implementation
│   ├── 📁 pages         # Page classes for each app screen
│   ├── 📁 tests         # Test files
├── 📁 reports           # Test execution reports (JSON, HTML, Screenshots)
├── 📄 package.json      # Node.js dependencies and scripts
```

---

## ⚙️ Prerequisites

Before running the tests, make sure you have the following installed:

- **Node.js**: LTS version recommended.
- **Java JDK**: Required to run the Appium server.
- **Android Emulator or Device**: To execute tests on an Android platform.
- **Appium Server**: Install Appium globally using npm:
  ```bash
  npm install -g appium
  ```

---

## 🚦 Quick Start

Follow these two simple steps to set up and run the tests:

### 1️⃣ Install Dependencies
Run the following command in the root directory of the project:
```bash
npm install
```

### 2️⃣ Run the Tests
Start your Appium server and execute the tests:
```bash
npm run test
```

---

## 🧪 Features

- **Page Object Model (POM)**: Organized and reusable test logic for easier maintenance.
- **Mochawesome Reports**: Comprehensive HTML reports with screenshots.
- **Cross-Platform Support**: Configure easily for different platforms and devices.
- **Real-World Use Cases**: Tests built around Swag Labs functionalities.

---

## 📋 Tests Included

### ✅ Login Tests
- Valid login.
- Invalid login with incorrect credentials.
- Login without entering credentials.

### ✅ Product Page Tests
- Add a product to the cart.
- Verify product details.

---

### Capabilities
```javascript
capabilities: [{
    platformName: 'Android',
    'appium:deviceName': 'Android Emulator',
    'appium:platformVersion': '12.0',
    'appium:automationName': 'UiAutomator2',
    'appium:app': './app/swagLabs.apk', // Path to the APK file
}],
```

---

## 📊 Reports

After the test execution, a detailed HTML report will be generated in the `./reports` directory. Open `mochawesome-report.html` in your browser to view the results.

---

## 💡 Tips

- Ensure your Android emulator or device is running and visible to Appium.
- If you encounter issues with the APK path, use an absolute path or resolve it dynamically.

---

## ❤️ Contributing

Feel free to fork this repository and add new features, improve the tests, or optimize the setup. Contributions are always welcome!

---

## 📞 Support

If you have any questions or encounter issues, please open an issue in this repository or reach out via email.

---

Enjoy testing 🚀!
