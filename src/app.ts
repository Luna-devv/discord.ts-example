import { Client } from 'discord.js';
import { Config } from './config';

const client = new Client({
    allowedMentions: {
        parse: ['users', 'roles']
    },
    presence: {
        status: 'online',
        activities: [
            {
                name: 'EA sports'
            }
        ]
    },
    intents: 131071
});

//------------------------------- handlers

const names = ['interactions', 'commands', 'events']
names.forEach(name => {
    try {
        require(`./handlers/${name}`).default(client);
    } catch (e) {
        console.error('Error whilst trying to load handler', name, e);
    }
});

client.login(Config.token);