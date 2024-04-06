---
title: 编程软件
description: 介绍一些非常好用的编程软件
data: 2023/09/28
author: Lovir
developer: 
---

# {{ $frontmatter.title }}

::: info
本文发布于 {{ $frontmatter.data }}，由 {{ $frontmatter.author }} 撰写<span v-if=" $frontmatter.developer != null">，由 {{$frontmatter.developer}} 改进</span>
:::

你是否还是为不知道使用什么样的编程软件而纠结？你是否想要一款拥有只能补全代码，体积轻巧，拥有强大拓展功能的IDE？而不是使用老掉牙的 Dev C++。本文将推荐一些热门，现代化的编程软件，全部都是经过深度使用得出的结论，希望能够对你有所帮助。

下面几款软件都是我在大学期间使用过的，基本上可以覆盖大学期间的所有编程需求，包括但不限于 C/C++，Java，Python，Web 开发等等。

## Jetbrains 全家桶

![image-20231001202506704](https://cdn.lovir.cn//IMAGE/202404061603872.png)

先提前说明一下：不要下载盗版！Jetbrains 的软件可以通过学生邮箱申请免费的教育授权，这样就可以免费使用了，而且不会有任何限制，具体的教程请参考 [🔗学生福利](https://yzu.lovir.cn/tools/student-welfare)

Jetbrains 全家桶是一款非常优秀的编程软件，Jetbrains 公司出品，拥有强大的代码补全功能，支持多种语言，拥有强大的拓展功能，可以通过插件的形式拓展更多的功能，比如说支持 Git，支持 Markdown，支持 Docker 等等。Jetbrains 全家桶包含了多种语言的 IDE，比如说 C/C++，Java，Python，Web 开发等等，基本涵盖大学所有需求，并且可以跨平台，无脑冲就完事了。

### CLion

[🔗下载地址](https://www.jetbrains.com.cn/clion/download/#section=windows)

主要用来 C/C++ 开发，拥有强大的代码补全功能，我个人从大一用到大三，体验下来还是非常不错的，对于新手来说也比较友好，可以自动配置编译环境，可以自动配置 CMake（改版之后支持编译单个 .c 文件，史诗级升级！），可以自动配置 Git 等等，基本上不需要太多的学习成本就可以直接开始编程了。

### PyCharm

[🔗下载地址](https://www.jetbrains.com.cn/pycharm/download/#section=windows)

Python 开发必备，目前就没见过除了它以外的 Python IDE...缺点是编制索引会很慢，目前好像也没有什么好的解决办法。不过计算机专业也不怎么接触 Python，也就机器学习或者云计算这两门课会用到。

### IDEA

[🔗下载地址](https://www.jetbrains.com.cn/idea/download/#section=windows)

王者，不用过多解释了，基本上所有人都会用到的 IDE，Java 开发必备！

## 微软系列

微软家的东西...嗯，都很难用，这里只推荐一个。

### VSCode

[🔗下载地址](https://code.visualstudio.com/)

强大且轻便的代码编辑器，支持多种语言，支持多种插件，可以通过插件的形式拓展更多的功能，比如说支持 Git，支持 Markdown，支持 Docker 等等。缺点是没有代码补全，但是可以通过插件实现，而且插件的代码补全功能比 Jetbrains 家的还要强大，但是插件的代码补全功能需要自己配置，对于新手来说可能有些难度。

![image-20231001202600672](https://cdn.lovir.cn//IMAGE/202404061604778.png)

VSCode 也是跨平台的，通过插件也可以实现上述编程软件的功能，但是体验上还是有些差距的，毕竟是编辑器，不是 IDE。使用的范围大概是做一些小项目，或者是做一些小功能，比如说写一个爬虫，写一个小网站等等，我第一次接触到它的时候是大三的项目综合实践，用来做前端开发还不错。