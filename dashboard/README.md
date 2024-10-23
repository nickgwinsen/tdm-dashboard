# Travel Center of America Dashboard

This [Next.js](https://nextjs.org) and [FastAPI](https://fastapi.tiangolo.com) project is a dashboard that will display important statistics along with actionable items for the Travel Centers in each district.

## Table of Contents

1. [General Setup](#general-setup)
2. [Front End](#front-end)
    1. [Setup](#setup)
    2. [Getting Started](#getting-started)
    3. [Additional Resources/Documentation](#additional-resourcesdocumentation)
3. [Back End](#back-end)

## General Setup

1. Must also have [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) installed to clone the repository.
2. Create a folder (anywhere that you can store the code) and run `git clone https://github.com/nickgwinsen/tdm-dashboard.git`

## Front End

### Setup

1. You must have [Node.js](https://nodejs.org/en/download/prebuilt-installer) installed on your machine.
2. Change directory (cd) to tdm-dashboard > dashboard folder
3. In terminal, run command `npm install` to install all dependencies

### Getting Started

1. Change directory to tdm-dashboard > dashboard
2. Run the development server with `npm run dev`
3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
    1. Any changes that are made are reflected to this web app every time you save a file.

### Additional Resources/Documentation

-   [Material UI](https://mui.com/material-ui/getting-started/) is a react library that we used in order to keep styling consistent across the entire web app.
-   [React](https://react.dev) is a JavaScript library that we used in conjunction with the Next.js framework for the front end or user interface.
-   [Next.js](https://nextjs.org/docs) is the React framework that we used for our front end.
-   [Node.js](https://nodejs.org/en) is needed to run the project

## Back End

### Setup

1. Since our back end is built with FastAPI, you will need to install [Python](https://www.python.org/downloads/) to your local machine.
2. Change directory to tdm-dashboard > backend and enter the command `pip install -r requirements.txt`

### Getting Started

1. Change directory to tdm-dashboard > backend
2. Run the development server with `fastapi dev app/main`
