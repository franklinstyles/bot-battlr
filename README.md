 # Bot Army Manager
  ==============

## Project Overview
Bot Army Manager is a React application that allows users to manage a collection of bots. Users can view available bots, add them to their personal army, and manage the bots within their army. Each bot has unique characteristics, including a name, catchphrase, class, and stats (health, damage, and armor).It has used vite react app.

## Features
- View Bots: Browse all available bots and see their details.
- Enlist Bots: Add selected bots to your personal bot army.
- Manage Your Army: Detach bots from your army or delete them entirely.
- Responsive Design: The application layout adjusts to different screen sizes for an optimal viewing experience.

## Components
 ### BotsPage
This is the main component of the application that fetches the bot data from the server and manages the state of the bots. It renders two main sections:

- YourBotArmy: Displays the bots that the user has enlisted.
- BotCollection: Displays all available bots that the user can enlist.

 ### YourBotArmy
This component displays the bots that the user has added to their personal army. Each bot is rendered as a BotCard. The component provides options to detach a bot from the army or delete it entirely.

 ### BotCollection
This component displays all bots fetched from the server. Users can enlist these bots into their army. Each bot is also rendered as a BotCard.

 ### BotCard
A reusable component that displays the details of a single bot, including its image, name, class, catchphrase, and stats. The component includes buttons for interacting with the bot (e.g., enlisting, detaching, deleting).

 ### BotSpecs
This component is used to display detailed information about a single bot. It shows the bot's image, name, catchphrase, class, and stats. It also includes buttons for navigating back to the bot list or enlisting the bot into the user's army.

## Use instructions
- if you want to delete press that small X and you can delete the bot.
- if you want to add a bot to your army you must press the bot itself and it will be added on the box.

## Instructions

1. You can use this deployed link
bash
```
 https://bot-battlr-mocha-nine.vercel.app/   
 ```

2. make sure that you have run npm run dev because it uses vite.

## Author
Franklin ndegwa

## Date
11/08/24

 
 
  









