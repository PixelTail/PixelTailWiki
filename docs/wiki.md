# 帮助我们完善PixelTail Wiki

如果你对Wik内容有更好的建议，又正好想要参与到Wik的编写工作中去，那么下面这些Wiki的编写技巧一定可以给你提供一些帮助。

## Wiki使用的编写语言介绍

>**Markdown**是一种轻量级标记语言，排版语法简洁，让人们更多地关注内容本身而非排版。它使用易读易写的纯文本格式编写文档，可与HTML混编，可导出 HTML、PDF 以及本身的 .md 格式的文件。因简洁、高效、易读、易写，Markdown被大量使用，如Github、Wikipedia等网站，各大博客平台：WordPress、Drupal、简书等。

想试试？

那么，你可以体验一下[在线Markdown编辑器](https://markdown.com.cn/editor)以熟悉Markdown语言。
当然，我们更推荐你使用Visual Studio Code或者其他支持markdown的本地编辑器对PixelTail Wiki进行编辑。

Markdown的语法十分简单，常用的标记符号不超过十个，用于日常写作记录绰绰有余，不到半小时就能完全掌握。

就是这十个不到的标记符号，却能让人优雅地沉浸式记录，专注内容而不是纠结排版， 达到「心中无尘，码字入神」的境界。

## Markdown 基本语法

首先，我们应当学习Markdown中最基础的四种表达方式：

|原文本|渲染后|
| :----------------: | :----------------: |
|`**粗体**`|**粗体**|
|`*斜体*`|*斜体*|
|`<u>下划线</u>`|<u>下划线</u>|
|`~~删除线~~`|~~删除线~~|

在Wiki的源文件(.md)中，你只要按照上述的「原文本」写在文档中的任意一处，都可以得到「渲染后」一列的结果。比如，你在「XZNB」前后都加上两个`*`变成「`**XZNB**`」，那么在网页中就会显示为「**XZNB**」.

当你慢慢熟悉了这四种基本的格式后，让我们来学习一下如何编写一段文字。

### 标题

要创建标题，请在单词或短语前面添加井号 (`#`) 。`#`的数量代表了标题的级别。例如，添加三个 `#`表示创建一个三级标题 (`<h3>`) (例如：`### My Header`)。

请注意，在使用标题的时候，请在井字符号(`#`)后加上一个空格，这是因为不同的 Markdown 应用程序处理`#`和标题之间的空格方式并不一致。因此，为了兼容考虑，请用一个空格在`#`和标题之间进行分隔。
  
根据我们对VuePress的设置，侧边栏会自动显示当前页面中所有二级标题的链接，嵌套在页面本身的链接下。

举例:
|原文本|渲染后|
| :----------------: | :----------------: |
|`# 一级标题`|# 一级标题|
|`## 二级标题`|## 二级标题|
|`### 三级标题`|### 三级标题|
|`#### 四级标题`|#### 四级标题|
|`##### 五级标题`|##### 五级标题|
|`###### 六级标题`|###### 六级标题|

### 段落

要创建段落，请使用空白行将一行或多行文本进行分隔。

举例:
|原文本|渲染后|
| :----------------: | :----------------: |
|`This is a paragraph`<br><br>`XD`|This is a paragraph<br>XD|

### 换行

想要换行，为了兼容考虑建议使用每个Markdown都支持的HTML`<br>`标签。但是如果嫌麻烦，一个简单的回车在VuePress上也是会被认定为换行的。在只能单行输入，但是需要换行效果时，就必须使用`<br>`标签进行换行了。

举例:
|原文本|渲染后|
| :----------------: | :----------------: |
|`澜羽<br>nb`|澜羽<br>nb|
|`澜羽`<br>`nb`|澜羽<br>nb|

## Markdown 进阶语法

### 列表

#### 有序列表
|原文本|渲染后|
| :----------------: | :----------------: |
|`1. First item`<br>`2. Second item`<br>`3. Third item`<br>`4. Fourth item`|<ol><li>First item</li><li>Second item</li><li>Third item</li><li>Fourth item</li></ol>|
|`1. First item`<br>`1. Second item`<br>`1. Third item`<br>`1. Fourth item`|<ol><li>First item</li><li>Second item</li><li>Third item</li><li>Fourth item</li></ol>|
|`1. First item`<br>`8. Second item`<br>`3. Third item`<br>`5. Fourth item`|<ol><li>First item</li><li>Second item</li><li>Third item</li><li>Fourth item</li></ol>|
|`1. First item`<br>`2. Second item`<br>`3. Third item`<br>`    1. Indented item`<br>`    2. Indented item`<br>`4. Fourth item`|<ol><li>First item</li><li>Second item</li><li>Third item<ol><li>Indented item</li><li>Indented item</li></ol></li><li>Fourth item</li></ol>|

当然，有时候，当Markdown语法不能很好实现的时候（比如必须把所有内容放在一行），最好的办法就是使用HTML：

前三种：
```HTML
<ol>
<li>First item</li>
<li>Second item</li>
<li>Third item</li>
<li>Fourth item</li>
</ol>
```
最后一种：
```HTML
<ol>
<li>First item</li>
<li>Second item</li>
<li>Third item
<ol>
<li>Indented item</li>
<li>Indented item</li>
</ol>
</li>
<li>Fourth item</li>
</ol>
```

#### 无序列表

要创建无序列表，只要在每个列表项前面添加破折号 (-)、星号 (*) 或加号 (+) 即可。缩进一个或多个列表项可创建嵌套列表。
|原文本|渲染后|
| :----------------: | :----------------: |
|`- First item`<br>`- Second item`<br>`- Third item`<br>`- Fourth item`|<ul><li>First item</li><li>Second item</li><li>Third item</li><li>Fourth item</li></ul>|
|`* First item`<br>`* Second item`<br>`* Third item`<br>`* Fourth item`|<ul><li>First item</li><li>Second item</li><li>Third item</li><li>Fourth item</li></ul>|
|`+ First item`<br>`+ Second item`<br>`+ Third item`<br>`+ Fourth item`|<ul><li>First item</li><li>Second item</li><li>Third item</li><li>Fourth item</li></ul>|
|`- First item`<br>`- Second item`<br>`- Third item`<br>`    - Indented item`<br>`    - Indented item`<br>`- Fourth item`|<ul><li>First item</li><li>Second item</li><li>Third item<ul><li>Indented item</li><li>Indented item</li></ul></li><li>Fourth item</li></ul>|

同样，无序列表在很多情况下也可以使用HTML代码进行实现：

前三种：
```HTML
<ul>
<li>First item</li>
<li>Second item</li>
<li>Third item</li>
<li>Fourth item</li>
</ul>
```
最后一种：
```HTML
<ul>
<li>First item</li>
<li>Second item</li>
<li>Third item
<ul>
<li>Indented item</li>
<li>Indented item</li>
</ul>
</li>
<li>Fourth item</li>
</ul>
```

#### 在列表中嵌套其他元素

##### 段落
要在保留列表连续性的同时在列表中添加另一种元素，请将该元素缩进四个空格(space)或一个制表符(Tab)，如下例所示： 
```Markdown
*   This is the first list item.
*   Here's the second list item.

    I need to add another paragraph below the second list item.

*   And here's the third list item.
```
渲染效果如下：
*   This is the first list item.
*   Here's the second list item.

    I need to add another paragraph below the second list item.

*   And here's the third list item.

##### 引用块
```Markdown
*   This is the first list item.
*   Here's the second list item.

    > A blockquote would look great below the second list item.

*   And here's the third list item.
```
渲染效果如下：

*   This is the first list item.
*   Here's the second list item.

    > A blockquote would look great below the second list item.

*   And here's the third list item.

##### 代码块
代码块通常采用四个空格或一个制表符缩进。当它们被放在列表中时，请将它们缩进八个空格或两个制表符。
```Markdown
1.  Open the file.
2.  Find the following code block on line 21:

        <html>
          <head>
            <title>Test</title>
          </head>

3.  Update the title to match the name of your website.
```
渲染效果如下：

1.  Open the file.
2.  Find the following code block on line 21:

        <html>
          <head>
            <title>Test</title>
          </head>

3.  Update the title to match the name of your website.

##### 图片
```Markdown
1.  Open the file containing the Linux mascot.
2.  Marvel at its beauty.

    ![Tux, the Linux mascot](https://www.linux.org/images/logo.png)

3.  Close the file.
```
渲染效果如下：
1.  Open the file containing the Linux mascot.
2.  Marvel at its beauty.

    ![Tux, the Linux mascot](https://www.linux.org/images/logo.png)

3.  Close the file.

##### 列表
```Markdown
1. First item
2. Second item
3. Third item
    - Indented item
    - Indented item
4. Fourth item
```
渲染效果如下：
1. First item
2. Second item
3. Third item
    - Indented item
    - Indented item
4. Fourth item

### 引用

引用块有很多不同的创建方式。

最常见的单行引用只需要将`>`符号加在需要引用的句子之前。

#### 多行引用
在渲染后，从`>`开始，到下一个段落之间，不需要加入`>`符号就会被自动渲染为一个引用块。
``` Markdown
>夏至nb！
呜呜呜
太强了吧
```
渲染效果如下：
>夏至nb！
呜呜呜
太强了吧

#### 多段引用
引用块可以包含多个段落。为段落之间的空白行添加一个 > 符号。
```Markdown
> 夏至菜鸡！
> 
> 呜呜呜
>
> 阿巴阿巴
```
渲染效果如下:
> 夏至菜鸡！
> 
> 呜呜呜
>
> 阿巴阿巴

#### 嵌套引用
引用块可以嵌套。只要在嵌套的段落前添加一个 `>>` 符号即可。
```Markdown
>别骂了别骂了
>> ——夏至
```
渲染结果如下：
>别骂了别骂了
>> ——夏至

#### 包含其他Markdown语法的应用
块引用可以包含其他 Markdown 格式的元素。并非所有元素都可以使用，你需要进行实验以查看哪些元素有效。
```Markdown
> #### 后记
> - 澜羽也nb！
> - 虹哥<br>德法都nb！
> ——某*管理组*的**商业互吹**
```
渲染结果如下:
> #### 后记
> - 澜羽也nb！
> - 虹哥<br>德法都nb！
> ——某*管理组*的**商业互吹**



——本文部分内容引用&改编自[Markdown语法教程](https://markdown.com.cn/)