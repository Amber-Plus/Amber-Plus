
import handleNavigation from "./handleNavigation";

const examplePage = {
    page: "person-alert",
    name: "Rebecca Smith",
    index: "2",

};

describe("handleNavigation", () => {
    test("handle the navigation", () => {
        const expected = "/person-alert/2/Rebecca-Smith";
        const actual = handleNavigation("person-alert", "Rebecca Smith", "2");

        expect(actual).toEqual(expected);
    });
});

