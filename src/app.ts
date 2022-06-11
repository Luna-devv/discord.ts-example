import { Client, Collection } from 'discord.js';
import Config from './config';

const client = new Client({
    allowedMentions: {
        parse: ['users', 'roles']
    },
    presence: {
        status: 'invisible',
        activities: [{
            name: 'Connecting..'
        }]
    },
    intents: 1
});

//------------------------------- handlers

const names = ['interactions', 'commands', 'events']
names.forEach(name => {
    require(`./handlers/${name}`).default(client);
});

client.login(Config.token);