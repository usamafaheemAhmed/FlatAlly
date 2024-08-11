import { atom } from "recoil";


export const defaultApiUrl = atom({
  key: "defaultApiUrl",
  default: 'http://localhost:7000',
  // default: 'http://192.168.100.27:7000',
});

export const LoggedInUserData = atom({
  key: "LoggedInUserData",
  default: {},
});

export const PoultryFarmState = atom({
  key: "PoultryFarmState",
  default: {},
});



