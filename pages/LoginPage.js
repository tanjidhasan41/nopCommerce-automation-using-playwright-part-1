//import { expect } from "@playwright/test";

class LoginPage {
    constructor(page) {

        this.page = page;
        this.loginLink = page.getByRole("link", { name: "Log in" });
        this.txtEmail = page.getByRole("textbox", { name: "Email:" });
        this.txtPassword = page.getByRole("textbox", { name: "Password:" });
        this.checkBox = page.getByRole("checkbox", { name: "Remember me?" });
        this.btnLogin = page.getByRole("button", { name: "LOG IN" });
        this.myAccLink = page.locator(".ico-account");
        //this.btnLogOut = page.getByRole("link", { name: "Log out" });

    }

    async loginUser(email, password) {

        await this.loginLink.click();
        await this.txtEmail.fill(email);
        await this.txtPassword.fill(password);
        await this.checkBox.click();
        await this.btnLogin.click();
        //await expect(this.page.getByText("Welcome to our store")).toBeVisible({ timeout: 5000 });
        await this.myAccLink.click();
        //await expect(this.page.getByText("My account - Customer info")).toBeVisible({ timeout: 5000 });

    }

    // async logoutUser() {

    //     await this.btnLogOut.click();

    // }
}

export default LoginPage;