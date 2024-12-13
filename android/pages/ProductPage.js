class ProductPage {
    // Constructor to inject the driver instance
    constructor(driver) {
        this.driver = driver;
    }

    // Element Mapping
    usernameField() {
        return this.driver.$('accessibility id:test-Username');
    }

    passwordField() {
        return this.driver.$('accessibility id:test-Password');
    }

    loginButton() {
        return this.driver.$('accessibility id:test-LOGIN');
    }

    errorMessage() {
        return this.driver.$('accessibility id:test-Error message').$('android.widget.TextView');
    }

    backpackItem() {
        return this.driver.$("-android uiautomator:new UiSelector().description(\"test-Item\").instance(0)");
    }

    addToCartCtaButton() {
        return this.driver.$("accessibility id:test-ADD TO CART");
    }

    // Methods

    // Navigate to the Login page
    async navigateToLoginPage() {
        await this.driver.url('/login'); // Replace '/login' with the actual login page URL
    }

    // Enter username
    async enterUsername(username) {
        const usernameField = await this.usernameField();
        await usernameField.click();
        await usernameField.setValue(username);
    }

    // Enter password
    async enterPassword(password) {
        const passwordField = await this.passwordField();
        await passwordField.click();
        await passwordField.setValue(password);
    }

    // Perform login
    async performLogin(username, password) {
        const loginButton = await this.loginButton();
        await this.enterUsername(username);
        await this.enterPassword(password);
        await loginButton.click();
    }
}

export default ProductPage;
