import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const loginStatus = atom({
  key: "loginStatus",
  default: "login",
  effects_UNSTABLE: [persistAtom],
});

export const userStatus = atom({
  key: "loginUser",
  default: {
    username: "",
    password: "",
  },
  effects_UNSTABLE: [persistAtom],
});
