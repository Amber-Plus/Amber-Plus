import getProfileObject from "./getProfileObject";

const examplePerson = {
  name: "the child yoda",
  age: 50,
  hair: "black",
  height: "4'1",
  eyes: "blue",
  location: {
    line1: "123 street",
    line2: "",
    city: "NY",
    state: "NY",
    zipcode: "12345",
  },
  details: "small green dude",
  image: "img.png",
};

describe("getProfileObject", () => {
  test("correctly returns profile object", () => {
    const expected = [
      { title: "Name:", value: "the child yoda" },
      { title: "Age:", value: 50 },
      { title: "Location:", value: "123 street" },
    ];
    const actual = getProfileObject(examplePerson, "card");

    expect(actual).toEqual(expected);
  });
});
