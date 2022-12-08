import { readdirSync } from 'fs';
import { Config } from '../config';

export default function () {
    try {
        const commands = readdirSync('./dist/interactions/commands/').filter(
            (file) => file.endsWith('.js')
        );

        for (let file of commands) {
            try {
                let pull = require(`../interactions/commands/${file}`).default;
                if (pull.name)
                    Config.data.interactions.commands.set(pull.name, pull);
            } catch (e) {
                console.error(
                    'Error whilst trying to load slash commands (/interactions/commands) in',
                    file,
                    e
                );
            }
        }
    } catch (e) {
        return;
    }
}
