import getVehicleString from "./getVehicleString";
const exampleVehicle = {
    make: "",
    model: "",
    year: "",
    color: "",
};

describe("getVehicleString", () => {
    test("show the vehicle string", () => {
        const expected = [
            { title: "color:", value: "" },
            { title: "make:", value: "" },
            { title: "model:", value: "" },
            { title: "year:", value: "" },
        ];
    });
});
