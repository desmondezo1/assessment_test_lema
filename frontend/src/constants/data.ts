import { IPost, IUser } from "@/types";

export const postData: IPost[] = [
  {
    id: "1",
    title: "I Got a Letter",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dol...",
    userId: "",
    createdAt: "",
    user_id: "",
    user: {
      name: "",
    },
  },
  {
    id: "2",
    title: "What a Nice Town",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dol...",
    userId: "",
    createdAt: "",
    user_id: "",
    user: {
      name: "",
    },
  },
  {
    id: "3",
    title: "I Love My Wife, Mary",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dol...",
    userId: "",
    createdAt: "",
    user_id: "",
    user: {
      name: "",
    },
  },
  {
    id: "4",
    title: "How can Anyone Eat Pizza at a Time Like This?",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dol...",
    userId: "",
    createdAt: "",
    user_id: "",
    user: {
      name: "",
    },
  },
];
// Mock data
export const users: IUser[] = [
  {
    id: "1",
    name: "James Sunderland",
    email: "james.sunderland@acme.com",
    address: {
      street: "11 Katz St.",
      state: "Pennsylvania",
      city: "Centralia",
      zipcode: "M4A2T6",
    },
  },
  {
    id: "2",
    name: "Heather Mason",
    email: "h.mayson@acme.com",
    address: {
      street: "24 Lindsey St.",
      state: "British Columbia",
      city: "Vancouver",
      zipcode: "N9M2K8",
    },
  },
  {
    id: "3",
    name: "Henry Townshend",
    email: "henry.townshend@acme.com",
    address: {
      street: "10 Rendell St.",
      state: "Ontario",
      city: "Toronto",
      zipcode: "M2K3B8",
    },
  },
  {
    id: "4",
    name: "Walter Sullivan",
    email: "walter.s@acme.com",
    address: {
      street: "9 Wiltse Road",
      state: "Alberta",
      city: "Canmore",
      zipcode: "N9W4H9",
    },
  },
  // Add more mock users as needed
];
