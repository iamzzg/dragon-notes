# Linux 常用命令

> 首先明确一点,shell 中第一个输入的数据一定是命令或者可执行文件的名称,后面加选项和参数

Linux 中一切皆文件,所以要学好一系列管理文件的操作

## 查看某条命令的参数

> 命令 --help

## 快捷键

1. tab 键 补全指令或文件,连按两次可以显示符合当前输入的所有指令
2. ctrl+a 光标跳到第一个字符的位置
3. ctrl+e 光标跳到最后一个字符的位置
4. ctrl+d 退出终端,相当于 quit 命令
5. ctrl+c 终止进程
6. ctrl+l 清屏,相当于 clear 命令

## 基础命令

```bash
# 查看日期
date
# 调用计算器,basic calculator
bc
# 显示当前日历
cal

```

## 常用文件操作

1. cd, 全称 change directory ,切换目录
2. pwd, 全称 print working directory ,显示当前工作目录
3. mkdir, 全称 make directory ,创建新目录
4. ls, 全称 list , 显示当前目录下文件
5. touch, 创建新文件
6. cp, 全称 copy , 复制文件或目录
7. mv, 全称 move , 移动文件或目录
8. rm, 全称 remove , 删除文件或目录
9. chown / chgrp / chmod, 分别对应全称 change ower / change group / change / model,分别用于改变用户,同组,其他人对文件的权限
10. find 根据文件名查找文件

```bash
find / -name "password"
```

11. grep 根据文件内容查找文件

```bash
# 语法
# grep -参数 要查找的目录范围
# -参数 : -n 显示查找结果所在行号, -R 递归查找目录下的所有文件
grep aries /etc
```

## 网络

1. ifconfig, network interfaces configuration,查看网络端口信息
2. ping, packet Internet groper,用于确定本地主机是否能与另一台主机成功发送与接收数据包

## 用户操作

1. useradd, 添加用户
2. userdel, 删除用户
3. su, switch user,切换用户
4. sudo, superuser do, 升级为 root 权限进行操作

## 进程操作

1. ps, process status ,查看进程状态
2. kill, 杀死进程
3. poweroff, 关机
