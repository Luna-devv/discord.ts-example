import type { Collection } from 'discord.js';

export type Command = {
    name?: string;
    developers?: boolean;
    run?: any;
};

export type ConfigType = {
    token: string;
    prefix: string;
    developers: string[];
    data: {
        interactions: Collection<string, Command>;
        commands: Collection<string, Command>;
        events: Collection<string, unknown>;
    }
}