### React App with Net Core 2.2.105

- Simple App creating using React / Redux with NetCore 2.2
- Config for make deploy on Heroku

### Steps to reproduce process

1. Install NetCore 2.2.105
2. Create new React/Redux NetCore Project using `dotnet`
3. Add `.dockerignore`, `Dockerfile` and `package.json` files
4. Create Repo for this new project
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
15. **git push heroku master**
