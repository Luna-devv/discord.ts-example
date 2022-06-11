import { Collection } from 'discord.js';

export default {
    token: '',
    data: {
        interactions: new Collection(),
        commands: new Collection(),
        events: new Collection()
    }
};