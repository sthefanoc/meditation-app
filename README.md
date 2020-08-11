# Meditation React App

A medition website in which the user can choose for how long he will meditatate and what kind of background he wants (beach sounds or rain sounds).

## Getting Started

To get this running on another machine, just clone the repo and run the command to start the server:
```
npm start
```


### Prerequisites

No external libraries were used. The media files for the project are inside the "assets" page, inside "src".



### Styles

The website is responsive. Using media-queries the app can be used on desktop or smaller screens.


## Deployment

The app is deployed on gh-pages. To make this work, it's necessary to install the npm package and add two scripts on "package.json" file.
### Install gh-pages
```
npm install gh-pages --save-dev
```
### Scritps to add to package.json
```
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

## Built With

* [Visual Studio Code](https://code.visualstudio.com/) - The editor
* [Create React App](https://github.com/facebook/create-react-app) - The framework


## Authors

* **Sthefano Carvalho** - [SthefanoC](https://github.com/sthefanoc)


## Acknowledgments

* This project is the **nº02** commit of my [#100DaysOfCode](https://www.100daysofcode.com/) journey to improve my ReactJS abilities
* The Meditation App is an adaptation of a [video](https://youtu.be/oMBXdZzYqEk) made by [DevEd](https://github.com/developedbyed)
* Follow me on twitter and see my other projects: [Sthefano_C](https://twitter.com/Sthefano_C)