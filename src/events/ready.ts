import { Client } from 'discord.js';

export default {
    name: 'ready',
    once: true,
    run: (client: Client) => {
        console.log(client.user.username)
    }
}