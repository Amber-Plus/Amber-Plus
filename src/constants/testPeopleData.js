//temporary image
import child1 from "images/child1.png";
import child2 from "images/child2.png";
import child3 from "images/child3.png";
import child4 from "images/child4.png";
import child5 from "images/child5.png";
import tempCar from "images/car.jpg";

export const testPeopleData = [
  {
    id: 1,
    parentId: "a1",
    name: "Sarah Jones",
    age: 12,
    hair: "blonde",
    height: "4'0",
    eyes: "blue",
    location: {
      line1: "454 W 22nd St",
      line2: "",
      city: "NY",
      state: "NY",
      zipcode: "10011",
    },
    position: [40.746572, -74.003593],
    status: "missing",
    details:
      "Sara was last seen December 20th while we were on vacation in New York. She was wearing a pink hoodie with lightup sketchers. She is very shy and kind little girl. Please help us find her.",
    image: child1,
    vehicle: {
      year: "2018",
      make: "toyota",
      model: "tacoma",
      color: "blue",
      image: tempCar,
    },
  },
  {
    id: 2,
    parentId: "a2",
    name: "Rebecca Smith",
    age: 7,
    hair: "black",
    height: "3'1",
    eyes: "brown",
    location: {
      line1: "39 W 37th St",
      line2: "",
      city: "NY",
      state: "NY",
      zipcode: "10018",
    },
    position: [40.751237, -73.98531],
    status: "missing",
    details:
      "She was last seen July 5th. Rebecca was wearing a green dress and she had her favorite pink bag with her at the time. She's a sweet little girl who's probably really afraid and we just want her to come back home...",
    image: child2,
    vehicle: {
      year: "2018",
      make: "toyota",
      model: "tacoma",
      color: "blue",
      image: tempCar,
    },
  },
  {
    id: 3,
    parentId: "a1",
    name: "Janet Jones",
    age: 9,
    hair: "blonde",
    height: "3'11",
    eyes: "brown",
    location: {
      line1: "10 W 138th",
      line2: "",
      city: "NY",
      state: "NY",
      zipcode: "10037",
    },
    position: [40.814863, -73.936673],
    status: "found",
    details:
      "Janet was last seen December 20th while we were on vacation in New York. She was last wearing black pants and a purple sweater with a polkadotted scarf",
    image: child3,
    vehicle: {
      year: "2018",
      make: "toyota",
      model: "tacoma",
      color: "blue",
      image: tempCar,
    },
  },
  {
    id: 4,
    parentId: "a3",
    name: "Elizabeth Kim",
    age: 13,
    hair: "dark brown",
    height: "4'2",
    eyes: "hazel",
    location: {
      line1: "222 E 93rd St",
      line2: "",
      city: "NY",
      state: "NY",
      zipcode: "10128",
    },
    position: [40.783036, -73.950217],
    status: "missing",
    details:
      "Elizabeth went missing on March 3rd. She responds to Lizzie better. We last saw her in a graphic tee that had the quote 'Mommy's Favorite' on it. Please help bring her back home to us!!",
    image: child4,
    vehicle: {
      year: "2018",
      make: "toyota",
      model: "tacoma",
      color: "blue",
      image: tempCar,
    },
  },
  {
    id: 5,
    parentId: "a3",
    name: "Johnathan Kim",
    age: 4,
    hair: "black",
    height: "2'10",
    eyes: "brown",
    location: {
      line1: "200 Park Ave",
      line2: "",
      city: "NY",
      state: "NY",
      zipcode: "10166",
    },
    position: [40.781204, -73.95657],
    status: "found",
    details:
      "Johnny went missing on March 3rd. He was wearing brown cargo pants with red crocs. Please help bring him back home to us!!",
    image: child5,
  },
];

export default testPeopleData;
