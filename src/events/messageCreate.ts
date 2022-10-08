import { Message } from "discord.js";
import { Config } from "../config";
import { Command } from "../typings";

export default {
    name: 'messageCreate',
    run: async (message: Message) => {
        if (!message.guild || !message.channel || !message.member || message.author.bot) return;

        if (
            !message.content.toLowerCase().startsWith(Config.prefix) &&
            !message.content.startsWith(`<@!${message.client.user?.id}>`) &&
            !message.content.startsWith(`<@${message.client.user?.id}>`)
        ) return;
        let args: string[] = message.content.split(/ +/).slice(1);

        const commandName = args.shift()?.toLowerCase();
        const command: Command | undefined = Config.data.commands.get(commandName || '');
        if (!command) return;

        if (command.developers && !Config.developers.includes(message.member.id)) return;
        command.run(message.client, message, args).catch(console.log);
    }
};