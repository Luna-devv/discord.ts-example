import { Collection } from 'discord.js';
import { ConfigType } from './typings';

export const Config: ConfigType = {
    token: 'MTAxNzc2NzcxNDUwMjIzNDE0Mg.GMbyrF.wmGxlj4lLdSqiXX49k6jmRKpC2Rij-WP4ZMboc',
    prefix: '.',
    developers: ['821472922140803112'],
    data: {
        interactions: new Collection(),
        commands: new Collection(),
        events: new Collection()
    }
};