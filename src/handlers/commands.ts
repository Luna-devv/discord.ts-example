import { readdirSync } from 'fs';
import { Config } from '../config';

export default function () {
    try {
        const commands = readdirSync('./dist/commands/').filter((file) =>
            file.endsWith('.js')
        );

        for (let file of commands) {
            try {
                let pull = require(`../commands/${file}`).default;
                if (pull.name) Config.data.commands.set(pull.name, pull);
            } catch (e) {
                console.error(
                    'Error while strying to load command in',
                    file,
                    e
                );
            }
        }
    } catch (e) {
        return;
    }
}
