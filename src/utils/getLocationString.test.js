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
        const expected =[
            { title: "line1:", value: "123 street" },
            { title: "line2:", value: ""},
            { title: "city:", value: "NY"},
            { title: "state:", value: "NY"},
            { title: "zipcode:", value: "12345"},
        ];
        
    });
});

