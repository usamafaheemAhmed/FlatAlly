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

export const LoggedInUserTokenJwt = atom({
  key: "LoggedInUserTokenJwt",
  default: {},
});

export const PreferenceState = atom({
  key: "PreferenceState",
  default: {},
});

export const WhatUserWantToSearch = atom({
  key: "WhatUserWantToSearch",
  default: {},
});





