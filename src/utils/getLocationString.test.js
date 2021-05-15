// import { get } from "../../backend/routes/auth";
import getLocationString from "./getLocationString";

const exampleAddress = {
    line1: "123 street",
    line2: "",
    city: "NY",
    state: "NY",
    zipcode: "12345",
    location:{
        line1: "123 street",
        line2: "",
        city: "NY",
        state: "NY",
        zipcode: "12345",

    },
    details: "small green dude",
    image: "img.png",
};

describe("getlocationString", () => {
    test("correctly show the location", () => {
        const expected ="123 street, NY, NY, 12345";

        const actual = getLocationString(exampleAddress);

        expect(actual).toEqual(expected);
        
    });
});

