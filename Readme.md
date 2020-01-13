
# .Net Core - React - PostgresDB - Heroku

This is an home assignment given to me on an interview 
the purpose of this is to make a simple search application for Ituens API

## Let's talk about the tech stuff
 - :heart: ASP.NET Core 2.2 Web application 
 - React 16.6  (without hooks and functional components)
 - PostgresDB database with *Heroku Hosting* when in production
 - Local DB when in Development
 - Hosting with [Heroku Hosting](https://www.heroku.com/home)
 - :whale: The app is fully Dockerized with [Docker](https://www.docker.com/)(Linux)!
 - :musical_note: [ITunes API](https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/)
 - :books: SwaggerUI (SwashBuckle)


## Live Demo
you can see the application live [right here!](https://net-react-postgres.herokuapp.com/)
The *loading* would probably be a little slow for you because I don't pay for Heroku Hosting (I use the free and slow one)

## Description

the usage of the app is simple:
- insert a query, search it, and show up to 25 results in a page.
- add a button for top ten searches (meaning you need to keep track of searches - thats where the database steps in)
- each item that is shown is clickable and would lead you to another page that would show more information about the item
- If it’s a video the screen should display the video in the page
- If it’s a audio the should display the audio player in the page


## Run it!

in order to run this app locally you will need to follow these steps:
 - Download and install [Git](https://git-scm.com/downloads)
 - open your cli of choice and run `git clone https://github.com/dorlugasigal/net-react-postgres-heroku.git`
 - open the .csproj file in [Visual Studio](https://visualstudio.microsoft.com/downloads/).
 - press F5

## Contributing

PRs accepted!

## License

MIT © Richard McRichface

## Develop it yourself!
### React App with Net Core 2.2.105

- Simple App creating using React / Redux with NetCore 2.2 (you can use the same technique for .net core 3)
- Config for make deploy on Heroku

### Steps to reproduce process of development

1. Install NetCore 2.2.105 (or whatever)
2. Create new React/Redux NetCore Project using `dotnet`
3. Add `.dockerignore`, `Dockerfile` and `package.json` files 
4. Create a Repo for this new project in Github
5. Init git repo local for this project
6. **dotnet restore**
7. **dotnet build**
8. **git remote add origin `REPO_URL`.git**
9. **git push -u origin master**
10. Create new app for this project on heroku
11. **heroku login**
12. **heroku git:remote -a `HEROKU_APP`**
13. **heroku buildpacks:set jincod/dotnetcore**
14. **heroku buildpacks:add --index 1 heroku/nodejs**
15. **git push heroku master** \ sync heroku with github repository for automatic deploying
16  *now you have yourself a fully dockerized asp.NET Core React App, Yay*
17. *start coding your Client app and your server*
18. if needed: you can add a [heroku postgresDB ](https://www.heroku.com/postgres)
