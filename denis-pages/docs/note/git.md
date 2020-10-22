**从git仓库中拷贝项目**
> git clone git@git.zjcs.com:denis.huang/denis-test.git

**添加文件到git缓存**
> git add <filename>

**查看项目当前状态**
> git status -s (-s 参数是显示简要信息)   
> ??是未纳入版本管理，A是新增加文件， M有改动文件

**将缓存内容添加到本地仓库中**
> git commit -m '提交信息' (-m是备注信息，-a参数可以省略git add)

**从缓存区中移除文件**
> git rm <filename> (--cached 参数表示工作区中不删除)

**创建分支**
> git branch <branch_name>

**切换分支**
> git checkout <branch_name>

**删除分支**
> git branch -D <branch_name>

**合并分支**
> git merge <branch_name>

**列出分支**
> git branch -a

**查看提交历史**
> git log (--oneline 查看简洁信息，--graph以拓扑图形式展示，--reverse逆向展示，--author=denis查看指定用户)

**查看当前远程库**

> git branch -vv

**查看远程仓库地址**

> git remote -v

**推送到远程仓库**
> git push -u origin <branch>

**从远程仓库下载新分支与数据**
> git fetch origin

**从远程仓库提取数据并尝试合并到当前分支**
> git pull (相当于先fetch后merge)

**删除远程仓库**
> git remote rm origin

**删除远程分支**
> git push origin --delete <branch>

**清理远程分支指针**
> git remote prune origin

**本地分支与远程分支关联**
> git branch --set-upstream-to=origin/<branch>

**在本地目录下关联远程repository**
> git remote add origin git@github.com:git_username/repository_name.git

**取消本地目录下关联的远程库**
> git remote remove origin

**修改远程仓库地址**
> git remote rm origin(先删除原关联)  
> git remote add origin [url]  

**打tag**
> git tag -a <version> -m "备注"  
> git push origin --tags  

**删除tag**
> git tag -d <tag_name>

**git submodule项目**
> git submodule init  
> git submodule update

---

#### 远程覆盖本地修改
```
git fetch --all
git reset --hard origin/<branch>
git fetch 只是下载远程的库的内容，不做任何的合并git reset 把HEAD指向刚刚下载的最新的版本
```

#### 撤消commit(回退到某个版本)
```
git reset --hard <commitId>

强推到远程上面
git push -f
```

#### 设置：
> 设置对文件名大小写敏感  
> git config --global core.ignorecase false  

> 设置提交检出时更换换行符  
> git config --global core.autocrlf true  

> 设置提交大小限制  
> git config --global http.postBuffer 524288000  

> 已在版本控制，修改后不需要提交  
> git update-index --assume-unchanged <文件名>   #忽略跟踪  
> git update-index --no-assume-unchanged <文件名>  #恢复跟踪  

> 设置编码格式  
> git config --global i18n.commitencoding utf-8  
> git config --global i18n.logoutputencoding utf-8  
> git config --global gui.encoding utf-8  

---

#### git配置备份
```
[user]
    name = huangwenguang
    email = amwyyyy@qq.com
[alias]
    st = status
    cm = commit
    co = checkout
    br = branch -a
    last = log -1 HEAD
    del-origin = push origin --delete
    del = branch -D
    logg = log --graph
    logline = log --oneline
    assume = update-index --assume-unchanged
    no-assume = update-index --no-assume-unchanged
[pull]
    rebase = true
[core]
    excludesfile = C:/Users/zjq/.gitignore_global
```

#### 添加已有文件到仓库

```
git init
git add .
git commit -m "init"
git remote add origin https://gitee.com/amwyyyy/test.git
git push -u origin master
```

