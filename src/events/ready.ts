import { Client } from 'discord.js';
import { Interactions } from '../config';

export default {
    name: 'ready',
    once: true,
    run: async (client: Client) => {
        await client.application?.commands.set(Interactions)

        console.log(client.user?.username)
    }
}