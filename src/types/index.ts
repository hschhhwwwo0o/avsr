import { FunctionComponent } from "react";

export type Page = FunctionComponent;

export interface IUser {
  email: string;
  name: string;
  image: string;
}

export interface IPoster {
  title: string;
  userId: string;
  image: string;
}
