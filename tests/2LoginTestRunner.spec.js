import { test, expect } from "@playwright/test";
import jsonData from "../utils/userData.json";
import LoginPage from "../pages/LoginPage";
import { logoutUser } from "../utils/utils";

test("User Can Login Successfully", async ({ page }) => {

    const latestUser = jsonData[jsonData.length - 1];

    await page.goto("/");
    await expect(page.getByText("Welcome to our store")).toBeVisible({ timeout: 5000 });

    const login = new LoginPage(page);
    await login.loginUser(latestUser.email, latestUser.password);
    //await expect(page.getByText("Welcome to our store")).toBeVisible({ timeout: 5000 });
    await expect(page.getByText("My account - Customer info")).toBeVisible({ timeout: 5000 });
    
    //await login.logoutUser();
    await logoutUser(page);
    await page.waitForTimeout(2000);

})