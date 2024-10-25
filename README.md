# Travel Center of America Dashboard

This [Next.js](https://nextjs.org) and [FastAPI](https://fastapi.tiangolo.com) project is a dashboard that will display important statistics along with actionable items for the Travel Centers in each district.

## Table of Contents

1. [General Setup](#general-setup)
2. [Front End](#front-end)
    1. [Setup](#fe-setup)
    2. [Getting Started](#fe-getting-started)
    3. [Additional Resources/Documentation](#fe-additional-resourcesdocumentation)
3. [Back End](#back-end)
    1. [Setup](#be-setup)
    2. [Getting Started](#be-getting-started)
    3. [Additional Resources/Documentation](#be-additional-resourcesdocumentation)

## General Setup

1. Must also have [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) installed to clone the repository.
2. Create a folder (anywhere that you can store the code) and run `git clone https://github.com/nickgwinsen/tdm-dashboard.git`

## Front End

### FE Setup

1. You must have [Node.js](https://nodejs.org/en/download/prebuilt-installer) installed on your machine.
2. Change directory (cd) to tdm-dashboard > dashboard folder
3. In terminal, run command `npm install` to install all dependencies

### FE Getting Started

1. Change directory to tdm-dashboard > dashboard
2. Run the development server with `npm run dev`
3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
    1. Any changes that are made are reflected to this web app every time you save a file.

### FE Additional Resources/Documentation

-   [Material UI](https://mui.com/material-ui/getting-started/) is a react library that we used in order to keep styling consistent across the entire web app.
-   [React](https://react.dev) is a JavaScript library that we used in conjunction with the Next.js framework for the front end or user interface.
-   [Next.js](https://nextjs.org/docs) is the React framework that we used for our front end.
-   [Node.js](https://nodejs.org/en) is needed to run the project

## Back End

### BE Setup

1. Since our back end is built with FastAPI, you will need to install [Python](https://www.python.org/downloads/) to your local machine.
2. Change directory to tdm-dashboard > backend and enter the command `pip install -r requirements.txt`
3. You will also need to add a file to tdm-dashboard > backend with the name `.env`. Here is stored all of the secrets that are used to connect to the database. You may need to ask Dr. Kerns where to find the values to insert into this file.
4. It's also recommended to create a virtual environment in python with the following command `python -m venv .venv` in tdm-dashboard > backend.

### BE Getting Started

1. Change directory to tdm-dashboard > backend
2. Run the development server with `fastapi dev app/main`
3. To use the built in Swagger UI Documentation, open [http://localhost:8000/docs](http://localhost:8000/docs) to be able to see the endpoints and test them.

### BE Additional Resources/Documentation

-   [Python](https://www.python.org) the language used for our back end.
-   [FastAPI](https://fastapi.tiangolo.com) our python framework for the back end.
-   [Swagger UI](https://swagger.io/tools/swagger-ui/) used to test our API endpoints.
-   [MongoDB](https://www.mongodb.com) the database used to store our data.
