# imba

### Basic Git Commands

To add changes you have made on local to remote repository, run `git add .`

To stage your changes, run `git commit -m "{your commit message}"`

To push your staged commit to remote, run `git push origin main`

To pull changes from remote to your local repository, navigate to main directory then run `git pull origin main`

### Deployment

Before deploying, first check your changes on local server.

Run `firebase serve` then open http://localhost:5000 on your browser.

To quit, control + C on your keyboard.

To deploy to hosting, run `firebase deploy`
