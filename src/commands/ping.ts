import { Client, Message } from "discord.js";

export default {
    name: 'ping',
    run: async (client: Client, message: Message, args: string[]) => {
        message.channel.send({ content: '🏓 pong' })
    }
};