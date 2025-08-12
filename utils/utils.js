const generateRandomId = (min, max) => {
    let randomId = Math.random() * (max - min) + min;
    return parseInt(randomId);
}

//export { generateRandomId };

const logoutUser = async (page) => {
    const btnLogOut = page.getByRole("link", { name: "Log out" });
    await btnLogOut.click();
}

export { generateRandomId, logoutUser };
