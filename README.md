This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This application requires Node and Yarn to be installed on the build machine.

## Available Scripts

In the project directory, you can run:

### `yarn install`

Installs all of the relevant packages needed to build the application.

### `yarn start`

Runs the app in the development mode.<br> Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### 'yarn storybook'

Runs the React Storybook app.<br> Open [http://localhost:6006](http://localhost:6006/) to view it in the browser.

## Features

This basic Pokedex was built in the mindset of a player who is going through Pokemon Red or Blue in mind. Currently listed are the first 151 Pokemon (including the normally inaccessible Pokemon, Mew).
Choosing a Pokemon name will show you what the Pokemon looks like, the type, basic statistics when it starts at Level 1, and a moveset that the Pokemon will gain as it gains levels.

## Features that would be nice to Add

Additional information on what Pokemon or type the chosen Pokemon is strong/weak to. A comparison window to see which Pokemon (based on the basic stats) would win in a battle.

### Process of building the Pokedex

Due to the API containing a plethora of information of every single Pokemon that is listed to date, within the time frame, it was prudent to start building the Pokedex starting from the 1st Generation Pokemon, with information about basic statistics and movesets, which a player can find useful before heading into battle.

The first step was to imagine two sections: a selector, and a display window. The display window is a React component which will contain the same structure, however, will change according to a selection on the left hand side, which APIs will be called in turn depending on the selected Pokemon.
