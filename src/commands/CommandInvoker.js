import { Command } from "./Command.js";

export class CommandInvoker {
  constructor() {
    this.commands = [];
  }

  addCommand(command) {
    if (!(command instanceof Command)) {
      throw new Error("Command must extend the Command class");
    }
    this.commands.push(command);
  }

  async executeCommands() {
    const results = [];
    for (const command of this.commands) {
      results.push(await command.execute());
    }
    return results;
  }
}
