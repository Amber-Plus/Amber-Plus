import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import tempUser from "images/tempUser.jpg";

const { persistAtom } = recoilPersist();

export const userData = atom({
  key: "userData",
  default: [
    {
      id: "a1",
      name: "Joahn Jones",
      pass: "123456",
      email: "joahn@test.com",
      posts: [1, 3],
      image: tempUser,
    },
    {
      id: "a2",
      name: "Steve Smith",
      pass: "123456",
      email: "steve@test.com",
      posts: [2],
      image: tempUser,
    },
    {
      id: "a3",
      name: "Amanda Kim",
      pass: "123456",
      email: "amanda@test.com",
      posts: [4, 5],
    },
  ],
  effects_UNSTABLE: [persistAtom],
});
