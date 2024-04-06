---
title: 包管理器
description: 使用包管理安装和卸载软件以及配置环境
data: 2023/10/13
author: Lovir
developer: 
---

# {{ $frontmatter.title }}

::: info
本文发布于 {{ $frontmatter.data }}，由 {{ $frontmatter.author }} 撰写<span v-if=" $frontmatter.developer != null">，由 {{$frontmatter.developer}} 改进</span>
:::

对于使用过 macOS 以及 Linux 的同学都知道，这两种系统上安装卸载软件或者配置环境都是十分方便，直接在终端中输入一行命令就能轻松搞定，而 Windows 系统则要通过设置环境变量等一系列繁琐的操作，对新手来说有那么一点不友好。以java配置为例：

Linux：终端输入 `sudo apt install openjdk-11-jdk`，完成

Windows：先去注册一个 oracle 帐号，然后找到对应的版本，下载安装，然后设置环境变量，最后还要通过指令测试一下安装是否完成等

那么对比之下，至少Windows在软件安装环境配置这一块是要落后不少的。不过其实 Windows 上也有类似于 Ubuntu 上的 **Apt-Get**  和MacOS上的 **Homebrew** 之类的包管理器，本文将着重进行介绍。

在此之前，先来简单谈谈关于硬盘分区的事情。

一般来说绝大多数人电脑拿到手都会对硬盘进行分区，各类软件分门别类，而 C 盘一般不会存放很多资料。但是基于现在的笔记本电脑已经全部都是固态硬盘这一事实，如果不是经常重装系统，分区倒也显得不是那么必要

