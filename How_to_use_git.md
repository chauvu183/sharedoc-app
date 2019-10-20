## How to use Git


**Repository Status**
```bash
git status
```

**Add and Commit**
```bash
git add .
git commit -m "<commit message>"
git push -u origin master
```

**Create and change a branch**

Before creating a new branch, pull the changes from upstream. 
```bash
git pull
```
Create the branch on your local machine and switch in this branch. 
```bash
git branch new_branch
git checkout new_branch
```

Push the branch on github
```bash
git push origin new_branch
```

See all branches

```bash
git branch -a
```

**Update and Merge**
```bash
git pull
git merge <branch>

```
