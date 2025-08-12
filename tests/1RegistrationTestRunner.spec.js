import { test, expect } from "@playwright/test";
import jsonData from "../utils/userData.json";
import RegistrationPage from "../pages/RegistrationPage";
import fs from "fs";
import { faker } from '@faker-js/faker';
import { generateRandomId, logoutUser } from "../utils/utils";

test("User Can Register Successfully", async ({ page }) => {

    await page.goto("/");
    await expect(page.getByText("Welcome to our store")).toBeVisible({ timeout: 5000 });

    const registration = new RegistrationPage(page);

    const email = faker.person.firstName().toLowerCase() + `${generateRandomId(1000, 9999)}@gmail.com`;

    const userData = {

        email: email,
        confirmEmail: email,
        zip: faker.location.zipCode(),
        city: faker.location.city(),
        country: "Australia",
        password: "123456",
        confirmPassword: "123456"

    }

    console.log(userData);

    await registration.registerUser(userData);

    await expect(page.getByText("Your registration completed")).toBeVisible({ timeout: 5000 });

    await logoutUser(page);

    jsonData.push(userData);
    fs.writeFileSync("./utils/userData.json", JSON.stringify(jsonData, null, 2));

    await page.waitForTimeout(2000);

})