import readLineSync from "readline-sync";
import { ModelTerminalController } from "./app/controllers/modelControllers/ModelTerminalController";
import { ModelRepository } from "./app/repositories/model/modelRepository";

const modelRepository = new ModelRepository();
const modelTerminalController = new ModelTerminalController(modelRepository);

export const startTerminal = async () => {
  let userResponse;
  // Mockup
  await modelTerminalController.createModel("A3", "Audi");
  await modelTerminalController.createModel("Juke", "Nissan");
  await modelTerminalController.createModel("DS3", "Citroen");
  // ------
  while (userResponse !== "Q") {
    console.log("\x1b[0m", "Main Menu");
    console.log("M - Model");
    console.log("Q - Quit the application");
    userResponse = readLineSync.question("Command => ");
    switch (userResponse) {
      case "M":
        await model();
        break;
      case "Q":
        console.log("Exiting ...");
        break;
      default:
        console.error("\x1b[31m", "Unknown command.");
    }
  }
};

const model = async () => {
  let modelUserResponse;
  while (modelUserResponse !== "Q") {
    console.log("\x1b[0m", "MODEL");
    console.log("C - Create");
    console.log("A - Get All");
    console.log("B - Back to main menu.");
    modelUserResponse = readLineSync.question("Model command => ");
    switch (modelUserResponse) {
      case "C":
        const name = readLineSync.question("Name ? ");
        const brand = readLineSync.question("Brand ? ");
        await modelTerminalController.createModel(name, brand);
        break;
      case "A":
        await modelTerminalController.getAll();
        break;
      case "B":
        return;
      default:
        console.error("\x1b[31m", "Unknown command.");
    }
  }
};

startTerminal();
