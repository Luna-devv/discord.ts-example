import { Client, CommandInteraction } from 'discord.js';

export default {
    name: 'help',
    run: async (client: Client, interaction: CommandInteraction) => {

        interaction.reply({
            embeds: [
                {
                    description: 'This is an example bot using **TypeScript** and **Node.js**\nFor more information visit us at https://github.com/Luna-devv/discord.ts-example',
                    thumbnail: {
                        url: `https://cdn.discordapp.com/avatars/${client.user?.id}/${client.user?.avatar}.${client.user?.avatar?.startsWith('a_') ? 'gif' : 'png'}?size=1024`,
                    },
                    color: 0xe79da2,
                },
            ],
            components: [
                {
                    type: 1,
                    components: [
                        {
                            type: 2,
                            style: 5,
                            label: 'Get Help with this example',
                            url: 'https://lunish.nl/support',
                        }
                    ],
                },
            ],
        });
    },
};
