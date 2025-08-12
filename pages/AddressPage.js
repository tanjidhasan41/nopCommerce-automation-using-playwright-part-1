class AddressPage {
    constructor(page) {

        this.page = page;
        this.loginLink = page.getByRole("link", { name: "Log in" });
        this.txtEmail = page.getByRole("textbox", { name: "Email:" });
        this.txtPassword = page.getByRole("textbox", { name: "Password:" });
        this.checkBox = page.getByRole("checkbox", { name: "Remember me?" });
        this.btnLogin = page.getByRole("button", { name: "LOG IN" });
        this.myAccLink = page.locator(".ico-account");
        this.addressLink = page.getByRole("link", { name: "Addresses" });
        this.btnAddNew = page.getByRole("button", { name: "ADD NEW" });
        this.txtFirstName = page.getByRole("textbox", { name: "First name:" });
        this.txtLastName = page.getByRole("textbox", { name: "Last name:" });
        this.dropdownCountry = page.locator("#Address_CountryId");
        this.dropdownState = page.locator("#Address_StateProvinceId");
        this.txtCity = page.getByRole("textbox", { name: "City:" });
        this.txtAddress1 = page.getByRole("textbox", { name: "Address 1:" });
        this.txtZip = page.getByRole("textbox", { name: "Zip / postal code:" });
        this.txtPhoneNumber = page.getByRole("textbox", { name: "Phone number:" });
        this.btnSave = page.getByRole("button", { name: "SAVE" });
        this.btnClose = page.locator(".close");

    }

    async addNewAddress(user) {

        await this.loginLink.click();
        await this.txtEmail.fill(user.email);
        await this.txtPassword.fill(user.password);
        await this.checkBox.click();
        await this.btnLogin.click();
        await this.myAccLink.click();
        await this.addressLink.first().click();
        await this.btnAddNew.click();
        await this.txtFirstName.fill(user.firstName);
        await this.txtLastName.fill(user.lastName);
        await this.txtEmail.fill(user.email);
        await this.dropdownCountry.selectOption({ label: user.country });
        await this.page.waitForTimeout(2500);
        if (await this.dropdownState.count() > 0) {
            await this.dropdownState.waitFor({ state: "visible" });
            await this.dropdownState.selectOption({ label: user.state });
        }
        await this.txtCity.fill(user.city);
        await this.txtAddress1.fill(user.address1);
        await this.txtZip.fill(user.zip);
        await this.txtPhoneNumber.fill(user.phoneNumber);
        await this.btnSave.click();
        await this.btnClose.click();

    }
}

export default AddressPage;