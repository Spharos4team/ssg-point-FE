import { NextResponse } from "next/server";
import { API_URL, LS_KEY_TOKEN } from "./commons";

export const userApi = {
  postRegister: async ({
    regObj,
  }: {
    regObj: {
      uuid: string;
      email: string;
      password: string;
      name: string;
      phone: number;
      address_home: string;
      address_comp: string;
      state: 1 | 2 | 3;
      point_password: string;
      barcode: number;
      reg_date: Date;
      mod_date: Date;
    };
  }) => {
    const res = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(regObj),
    });
    return NextResponse.json({ responseDate: Date.now() });
  },
  postLogin: async ({
    regObj,
  }: {
    regObj: { email: string; password: string };
  }) => {
    const res = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(regObj),
    });
  },
  getUserData: async ({ userId }: { userId: number }) => {
    const TOKEN = localStorage.getItem(LS_KEY_TOKEN);
    const res = await fetch(`${API_URL}/users/${userId}}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
    });
  },
};
