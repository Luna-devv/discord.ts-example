import { Collection } from 'discord.js';
import { ConfigType } from './typings';

export const Config: ConfigType = {
    token: '',
    prefix: '.',
    developers: ['821472922140803112'],
    data: {
        interactions: {
            commands: new Collection()
        },
        commands: new Collection(),
        events: new Collection()
    }
};

export const Interactions = [
    {
        name: 'help',
        description: 'Get help about me, about my commands or other things related to me',
    }
]