# discord.js TypeScript Example

### Installing
In order to use this example, please download [node.js](https://nodejs.org) with a minimum version of `v18`. <br>
After this is done, please install [`yarn`](https://yarnpkg.com/) (package manager) and [`tsc`](https://www.typescriptlang.org/docs/handbook/compiler-options.html) (typescript compiler) using
```bash
npm install -g yarn tsc
```

In order to install this project and getting all packages, please run 
```bash
git clone https://github.com/Luna-devv/discord.ts-example
yarn install
```

**Note!** <br>
You always should run this command in a second terminal when working on this project
```bash
yarn tsc --watch
```

### Starting Bot
Before you can start the bot and go online, you have to follow some steps.

1. [Create a discord bot](https://discord.com/developers/applications) application in the developer portal. [How to?](https://discord.com/developers/docs/getting-started#creating-an-app)
2. Copy the token in the bot tab. **DON"T SHARE IT**
3. Put the token into the [`src/config.ts`](src/config.ts) file
4. Check `yarn tsc --watch` is running and use `node dist/app.js`

🎉 Done, use `. test` or `/help` to test :)

### Editing
Learn js and ts before and use brain, thanks
