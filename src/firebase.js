import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  databaseURL: "https://rsbl-spot-gold-silver-prices.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
