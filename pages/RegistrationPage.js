class RegistrationPage {
    constructor(page) {

        this.page = page;
        this.registrationLink = page.getByRole("link", { name: "Register" });

        this.txtEmail = page.locator("#Email");
        this.txtConfirmEmail = page.locator("#ConfirmEmail");

        this.txtZip = page.getByRole("textbox", { name: "Zip / postal code:" });
        this.txtCity = page.getByRole("textbox", { name: "City:" });
        this.dropdownCountry = page.getByRole("combobox", { name: "Country:" });

        this.txtPassword = page.getByRole("textbox", { name: "Password:", exact: true });
        this.txtConfirmPassword = page.getByRole("textbox", { name: "Confirm password:" });
        this.btnRegister = page.getByRole("button", { name: "REGISTER" });
        //this.btnLogOut = page.getByRole("link", { name: "Log out" });

    }

    async registerUser(user) {

        await this.registrationLink.click();
        await this.txtEmail.fill(user.email);
        await this.txtConfirmEmail.fill(user.confirmEmail);
        await this.txtZip.fill(user.zip);
        await this.txtCity.fill(user.city);
        await this.dropdownCountry.selectOption({ label: user.country });
        await this.page.evaluate(() => {

            window.scrollBy(0, 700);

        })
        await this.txtPassword.fill(user.password);
        await this.txtConfirmPassword.fill(user.confirmPassword);
        await this.btnRegister.click();

    }

    // async logoutUser() {

    //     await this.btnLogOut.click();

    // }
}

export default RegistrationPage;