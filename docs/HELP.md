# HELP
This document will help you to set up the project:

1) Clone Repository
> open git bash (if you have it on your machine) and type this
```git clone https://github.com/em9836/web-template.git <directoy>```
 (replace `<directory>` with a directory name of **your** choosing, recommend using a *project name*).
 This will clone the contents of the repositiory into the local directory.
2) Set the git configurations - open the "config" file in the .git directory (I did this using File Explorer). It should look something like this:
   ```git
    [core]
	    repositoryformatversion = 0
	    filemode = false
	    bare = false
	    logallrefupdates = true
    [remote "origin"]
        url = https://github.com/em9836/web-template.git
        fetch = +refs/heads/*:refs/remotes/origin/*
   ```
   Replace the origin url with your own remote repository url.
4) set the user name and email configurations using the following:   
   - ```git config --add --local user.name=<Username> ```
   - ```git config --add --local user.email=<UserEmail> ```
5) Push the local repository to your  remote repository


Now you can set up your own project configurations.

---
[Choose a License][licenses]
[Type Script Documentation][typescript]
[Webpack Configurations](https://webpack.js.org/configuration)

[typescript]: typescriptlang.org/docs/
[licenses]: https://choosealicense.com/

