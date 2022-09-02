# git

## 拉取远程仓库代码覆盖本地分支

```bash
git fetch --all # 下载远程仓库最新内容，不做合并
git reset --hard origin/main #指向 main 最新版本
git pull
```

## 修改远程仓库地址

```bash
git remote -v # 查看远程仓库地址
git remote remove origin # 移除远程仓库地址
git remote add origin 远程仓库地址 # 添加仓库地址
```

## 切换其他分支,但不想提交当前分支修改

```bash
git stash save "添加console.log" # message是自己输入的消息
git stash list # 查看所有stash的历史
git stash apply # 将最后一次修改stash的内容释放,且该历史还存在list中
git stash pop # 将最后一次修改stash的内容释放,但该历史不存在list中
git stash apply stash@{x} # 将编号x的缓存释放
```

## 为 gitee 和 github 配置不同的 SSH-key [链接](https://gitee.com/help/articles/4229#article-header1)

> 当有多一个 git 账号,一个 gitee,一个 github 在同一台电脑上进行开发活动

**解决方法**

1. 生成一个 gitee 的 SSH-key

```bash
$ ssh-keygen -t rsa -C 'xxxxx@company.com' -f ~/.ssh/gitee_id_rsa
```

2. 生成一个 github 的 SSH-key

```bash
$ ssh-keygen -t rsa -C 'xxxxx@qq.com' -f ~/.ssh/github_id_rsa
```

3. 在 ~/.ssh 目录下新建一个 config 文件，添加如下内容（其中 Host 和 HostName 填写 git 服务器的域名，IdentityFile 指定私钥的路径）

```bash
# gitee
Host gitee.com
HostName gitee.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/gitee_id_rsa
# github
Host github.com
HostName github.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/github_id_rsa
```

4. 用 ssh 命令分别测试

```bash
ssh -T git@gitee.com
ssh -T git@github.com
```

## git 提交时跳过 husky 添加的 pre-commit commit-msg 钩子

```bash
# 此时 husky 添加的钩子中的脚本就不会执行了
git commit --no-verify -m "message"
```

## 回退版本 git revert 或者 git reset

> 区别:git revert 还能保存回退版本后的版本记录,git reset 则是重置了

1. git revert

```bash
# 查看版本信息
git log
# 回退版本
git revert -n 版本hash
# 取消 revert 回退操作
git revert --abort
```

2. git reset

```bash
git reset --hard 版本hash
git commit -m ""
git push -f
```
