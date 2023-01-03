# Week 11 - Assignment [Total Time ~ 6 hrs]

In this Assignment, you will need to deploy your URL shortener to a web server 
Deploy a production build to web server of your choice. 
You can choose any free deployment solution 
The web application should be accessible by a hostname. 
Example: Netlify 
All the workflows should work as expected.


## How to Deploy with Netlify

- Push Week-10/urlShortner to new Github Repo
```
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:devatsrs/url-shortner.git
git push -u origin main

```
- Signup with Netlify
- Create a New site
- Connect with github
- Install a netlify cli tool
- Run netlify deploy command
 

```
$ npm install netlify-cli -g
...
added 1436 packages in 27s

$ netlify deploy
Logging into your Netlify account...
Opening https://app.netlify.com/authorize?response_type=ticket&ticket=a21a1b45754719fa405bb6ef215ad4ff

You are now logged into your Netlify account!

Run netlify status for account details

To see all available commands run: netlify help

This folder isn't linked to a site yet
? What would you like to do? Link this directory to an existing site                                                                               
                                                                                                                                                   
Adding local .netlify folder to .gitignore file...

netlify link will connect this folder to a site on Netlify

? How do you want to link this folder to a site? Use current git remote origin (https://github.com/devatsrs/url-shortner)

Looking for sites connected to 'https://github.com/devatsrs/url-shortner'...

✔ Deploy is live!

Logs:              https://app.netlify.com/sites/pesto-url-shortner/deploys/63b43d9dd043e66fcb132dd5
Website Draft URL: https://63b43d9dd043e66fcb132dd5--pesto-url-shortner.netlify.app

If everything looks good on your draft URL, deploy it to your main site URL with the --prod flag.
netlify deploy --prod

```