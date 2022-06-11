import { readdirSync } from 'fs';
import Config from '../config';

export default function () {
    const commands = readdirSync('./dist/interactions/commands/').filter(file => file.endsWith('.js'));

    for (let file of commands) {
        let pull = require(`../interactions/commands/${file}`);
        if (pull.name) Config.data.interactions.set(pull.name, pull);
    };
};