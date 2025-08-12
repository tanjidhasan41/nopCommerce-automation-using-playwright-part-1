import { test, expect } from "@playwright/test";
import jsonData from "../utils/userData.json";
import AddressPage from "../pages/AddressPage";
import fs from "fs";
import { faker } from '@faker-js/faker';
import { generateRandomId, logoutUser } from "../utils/utils";

test("User Can Add New Address", async ({ page }) => {

    const latestUser = jsonData[jsonData.length - 1];

    await page.goto("/");
    await expect(page.getByText("Welcome to our store")).toBeVisible({ timeout: 5000 });

    const addAddress = new AddressPage(page);

    const userData = {

        email: latestUser.email,
        password: latestUser.password,
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        country: "United States of America",
        state: "Alaska",
        city: faker.location.city(),
        address1: faker.location.streetAddress(),
        zip: faker.location.zipCode(),
        phoneNumber: `0140${generateRandomId(1000000, 9999999)}`

    }

    console.log(userData);

    await addAddress.addNewAddress(userData);
    await expect(page.getByText("The new address has been added successfully.")).toBeVisible({ timeout: 5000 });

    await page.waitForTimeout(2000);

})