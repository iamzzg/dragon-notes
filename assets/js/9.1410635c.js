(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{273:function(t,s,a){"use strict";a.r(s);var e=a(13),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"git"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[t._v("#")]),t._v(" git")]),t._v(" "),s("h2",{attrs:{id:"拉取远程仓库代码覆盖本地分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#拉取远程仓库代码覆盖本地分支"}},[t._v("#")]),t._v(" 拉取远程仓库代码覆盖本地分支")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" fetch --all "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 下载远程仓库最新内容，不做合并")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --hard origin/main "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#指向 main 最新版本")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull\n")])])]),s("h2",{attrs:{id:"修改远程仓库地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改远程仓库地址"}},[t._v("#")]),t._v(" 修改远程仓库地址")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote -v "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看远程仓库地址")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote remove origin "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 移除远程仓库地址")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" origin 远程仓库地址 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加仓库地址")]),t._v("\n")])])]),s("h2",{attrs:{id:"切换其他分支-但不想提交当前分支修改"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#切换其他分支-但不想提交当前分支修改"}},[t._v("#")]),t._v(" 切换其他分支,但不想提交当前分支修改")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash save "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"添加console.log"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# message是自己输入的消息")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash list "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看所有stash的历史")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash apply "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将最后一次修改stash的内容释放,且该历史还存在list中")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash pop "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将最后一次修改stash的内容释放,但该历史不存在list中")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash apply stash@"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将编号x的缓存释放")]),t._v("\n")])])]),s("h2",{attrs:{id:"为-gitee-和-github-配置不同的-ssh-key-链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为-gitee-和-github-配置不同的-ssh-key-链接"}},[t._v("#")]),t._v(" 为 gitee 和 github 配置不同的 SSH-key "),s("a",{attrs:{href:"https://gitee.com/help/articles/4229#article-header1",target:"_blank",rel:"noopener noreferrer"}},[t._v("链接"),s("OutboundLink")],1)]),t._v(" "),s("blockquote",[s("p",[t._v("当有多一个 git 账号,一个 gitee,一个 github 在同一台电脑上进行开发活动")])]),t._v(" "),s("p",[s("strong",[t._v("解决方法")])]),t._v(" "),s("ol",[s("li",[t._v("生成一个 gitee 的 SSH-key")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ ssh-keygen -t rsa -C "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxxxx@company.com'")]),t._v(" -f ~/.ssh/gitee_id_rsa\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("生成一个 github 的 SSH-key")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ ssh-keygen -t rsa -C "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxxxx@qq.com'")]),t._v(" -f ~/.ssh/github_id_rsa\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("在 ~/.ssh 目录下新建一个 config 文件，添加如下内容（其中 Host 和 HostName 填写 git 服务器的域名，IdentityFile 指定私钥的路径）")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# gitee")]),t._v("\nHost gitee.com\nHostName gitee.com\nPreferredAuthentications publickey\nIdentityFile ~/.ssh/gitee_id_rsa\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# github")]),t._v("\nHost github.com\nHostName github.com\nPreferredAuthentications publickey\nIdentityFile ~/.ssh/github_id_rsa\n")])])]),s("ol",{attrs:{start:"4"}},[s("li",[t._v("用 ssh 命令分别测试")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v(" -T git@gitee.com\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v(" -T git@github.com\n")])])]),s("h2",{attrs:{id:"git-提交时跳过-husky-添加的-pre-commit-commit-msg-钩子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-提交时跳过-husky-添加的-pre-commit-commit-msg-钩子"}},[t._v("#")]),t._v(" git 提交时跳过 husky 添加的 pre-commit commit-msg 钩子")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 此时 husky 添加的钩子中的脚本就不会执行了")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit --no-verify -m "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"message"')]),t._v("\n")])])]),s("h2",{attrs:{id:"回退版本-git-revert-或者-git-reset"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#回退版本-git-revert-或者-git-reset"}},[t._v("#")]),t._v(" 回退版本 git revert 或者 git reset")]),t._v(" "),s("blockquote",[s("p",[t._v("区别:git revert 还能保存回退版本后的版本记录,git reset 则是重置了")])]),t._v(" "),s("ol",[s("li",[t._v("git revert")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看版本信息")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 回退版本")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" revert -n 版本hash\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 取消 revert 回退操作")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" revert --abort\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("git reset")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --hard 版本hash\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -f\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);