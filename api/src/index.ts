import "reflect-metadata";
import { AppDataSource } from "./database/data-sourcer";

const main = async () => {
  try {
    await AppDataSource.initialize();
    console.log("database started successfully");
  }catch (error) {
    console.log("erro no sistema.")
  }};


 main();