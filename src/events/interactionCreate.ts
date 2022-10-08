import { ButtonInteraction, CommandInteraction, ContextMenuCommandInteraction } from "discord.js";
import { Config } from "../config";
import { Command } from "../typings";

export default {
    name: 'interactionCreate',
    run: async (interaction: CommandInteraction | ButtonInteraction | ContextMenuCommandInteraction) => {
        if (!interaction.client.isReady()) return;

        if (interaction.isChatInputCommand()) {
            const command: Command | undefined = Config.data.interactions.commands.get(interaction.commandName);
            if (!command) return console.log('A command has been created but not coded');

            command.run(interaction.client, interaction).catch(console.log);
        };

    }
};