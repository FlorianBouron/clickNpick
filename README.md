# Click & Farm :corn:

## Context:
This repository has been created during the Hackathon [HackYeah](https://hackyeah.pl/) - 03-05.04.20.

Another repository will be created right after the Hackathon to continue this project and make it happen.

## Description:
Clic & Farm is a new mobile app allowing you to select vegetables and fruits directly from your local farmer with a pick & collect system thanks to automatized lockers.

:warning: Note: We made a webpage for the frontend since it was faster to made than two native mobile app or using hybrid solutions like React Native or Flutter.
We decided to use Strapi in order to have a quick backend and admin panel.

## Architecture:
#### Backend
This project is using [strapi](https://strapi.io/documentation/) for the backend

We did use Node.js version `12.16.1` and yarn version `1.22.4`.

We did use [SQLite](https://www.sqlite.org/index.html) for the database in order to go to the code as fast as possible and host the data out of the box on the repository.

For production we will use [PostgreSQL](https://www.postgresql.org/docs/).

Add additional information about the backend are available in the [backend](./backend) folder.

#### Frontend
The frontend is using [ReactJs](https://reactjs.org/docs/getting-started.html)

Add additional libraries that you can read more about in the [ui](./ui) folder.

## How to run the project:
In order to run the project you need have backend and frontend running.
In order to have them running open two terminals, one for backend and one for frontend (be sure `Node.js version 12+` is installed on your computer).

#### Backend

Go tho the `backend` folder and run `npm install` or `yarn`.

Then in the same `backend` folder run `npm run build`.

You can now start the backend by typing `npm run start`.

You can access to the admin panel by opening: [http://localhost:1337/admin/](http://localhost:1337/admin/)

The credentials are:
* Login: `Admin`
* Password: `p@ssword`

#### Frontend
- go to `ui` folder
- Run `npm install` or `yarn`
- Run `npm run start` or `yarn start`
- Open [http://localhost:3000/](http://localhost:3000/)


## Demo links:

:warning: Notes: We are unfortunately hosting on Heroku (FREE), the servers will be then sleeping, please open the admin panel's link first in order to start admin panel + API (to wake up the server :coffee:).

By the way to login:
* Login: `Admin`
* Password: `p@ssword`

Then you can open the frontend (sorry the servers are over-slow).

Admin panel: [https://click-and-pick.herokuapp.com/admin/](https://click-and-pick.herokuapp.com/admin/)

Frontend: [https://click-and-pick-hack.herokuapp.com/](https://click-and-pick-hack.herokuapp.com/)

##### Made with :heart: in Poland