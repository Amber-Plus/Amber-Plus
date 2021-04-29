import handleNavigation from "./handleNavigation";

describe("handleNavigation", () => {
  test("correctly returns proper url params for person-alert page", () => {
    const expected = "/person-alert/2/Rebecca-Smith";
    const actual = handleNavigation("person-alert", "Rebecca Smith", "2");

    expect(actual).toEqual(expected);
  });

  test("correctly returns proper url params for profile page", () => {
    const expected = "/profile/2/Rebecca-Smith-Jones";
    const actual = handleNavigation("profile", "Rebecca Smith Jones", "2");

    expect(actual).toEqual(expected);
  });
});
