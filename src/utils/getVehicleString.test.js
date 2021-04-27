import getVehicleString from "./getVehicleString";

const exampleVehicle = {
    make: "Honda",
    model: "Civic",
    year: "2018",
    color: "Black",
};

describe("getVehicleString", () => {
    test("show the vehicle string", () => {
        const expected = "Black Honda Civic 2018";
        
        const actual = getVehicleString(exampleVehicle);

        expect(actual).toEqual(expected);

    });
});
