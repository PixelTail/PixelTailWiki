---
sidebarDepth: 2
---

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

想要换行，可以使用HTML的`<br>`标签。

举例:
|原文本|渲染后|
| :----------------: | :----------------: |
|`xz<br>nb`|xz<br>nb|

## Markdown 进阶语法

### 图片

要添加图像，请使用感叹号 (`!`), 然后在方括号增加替代文本，图片链接放在圆括号里，括号里的链接后可以增加一个可选的图片标题文本。

插入图片Markdown语法代码：`![图片alt](图片链接 "图片title")`

对应的HTML代码：`<img src="图片链接" alt="图片alt" title="图片title">`

例如：
```Markdown
![logo](https://oss.landnet.cloud/beehive%2F4%2Ffavicon.ico "Logo of PixelTail")
```
会被渲染为：
![logo](https://oss.landnet.cloud/beehive%2F4%2Ffavicon.ico "Logo of PixelTail")

#### 链接图片

给图片增加链接，请将图像的Markdown 括在方括号中，然后将链接添加在圆括号中。

例如：
```Markdown
[![黄金周目](https://oss.landnet.cloud/beehive%2F4%2FGold.PNG)](gold/intr/)
```
[![黄金周目](https://oss.landnet.cloud/beehive%2F4%2FGold.PNG)](gold/intro/)

### 链接

链接文本放在中括号内，链接地址放在后面的括号中。链接title可选，它是是当鼠标悬停在链接上时会出现的文字，它放在圆括号中链接地址后面，跟链接地址之间以空格分隔。

超链接Markdown语法代码：`[超链接显示名](超链接地址 "超链接title")`

对应的HTML代码：`<a href="超链接地址" title="超链接title">超链接显示名</a>`

例如：
```Markdown
[皮肤站链接](skin.2-10.cn "PIXELTAIL X 2-10宣传组")
```
[皮肤站链接](skin.2-10.cn "PIXELTAIL X 2-10宣传组联合呈上")

#### Email地址

使用尖括号可以很方便地把email地址变成可点击的链接。
```Markdown
<billzhu@pixeltail.cn>
```
渲染效果如下：<br>
<billzhu@pixeltail.cn>

#### 带格式化的链接
[强调](#markdown-基本语法) 链接, 在链接语法前后增加星号。 要将链接表示为代码，请在方括号中添加反引号。
```
I love supporting the **[PixelTail](wiki.pixeltail.org)**.
This is the *[How to help us with PixelTail Wiki](wiki.pixeltail.org/wiki)*.
See the section on [`markdown-基本语法`](#markdown-基本语法).
```
渲染效果如下：<br>
I love supporting **[PixelTail](wiki.pixeltail.org)**.<br>
This is the *[How to help us with PixelTail Wiki](wiki.pixeltail.org/wiki)*.<br>
See the section on [`markdown-基本语法`](#markdown-基本语法).

### 列表

#### 有序列表

|原文本|渲染后|
| :----------------: | :----------------: |
|<p align="left">`1. First item`<br>`2. Second item`<br>`3. Third item`<br>`4. Fourth item`</p>|<ol><li>First item</li><li>Second item</li><li>Third item</li><li>Fourth item</li></ol>|
|<p align="left">`1. First item`<br>`1. Second item`<br>`1. Third item`<br>`1. Fourth item`</p>|<ol><li>First item</li><li>Second item</li><li>Third item</li><li>Fourth item</li></ol>|
|<p align="left">`1. First item`<br>`8. Second item`<br>`3. Third item`<br>`5. Fourth item`</p>|<ol><li>First item</li><li>Second item</li><li>Third item</li><li>Fourth item</li></ol>|
|<p align="left">`1. First item`<br>`2. Second item`<br>`3. Third item`<br><code>&nbsp;&nbsp;&nbsp;&nbsp;- Indented item</code><br><code>&nbsp;&nbsp;&nbsp;&nbsp;- Indented item</code></br>`4. Fourth item`</p>|<ol><li>First item</li><li>Second item</li><li>Third item<ol><li>Indented item</li><li>Indented item</li></ol></li><li>Fourth item</li></ol>|

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
|<p align="left">`- First item`<br>`- Second item`<br>`- Third item`<br>`- Fourth item`</p>|<ul><li>First item</li><li>Second item</li><li>Third item</li><li>Fourth item</li></ul>|
|<p align="left">`* First item`<br>`* Second item`<br>`* Third item`<br>`* Fourth item`</p>|<ul><li>First item</li><li>Second item</li><li>Third item</li><li>Fourth item</li></ul>|
|<p align="left">`+ First item`<br>`+ Second item`<br>`+ Third item`<br>`+ Fourth item`</p>|<ul><li>First item</li><li>Second item</li><li>Third item</li><li>Fourth item</li></ul>|
|<p align="left">`- First item`<br>`- Second item`<br>`- Third item`<br><code>&nbsp;&nbsp;&nbsp;&nbsp;- Indented item</code><br><code>&nbsp;&nbsp;&nbsp;&nbsp;- Indented item</code><br>`- Fourth item`</p>|<ul><li>First item</li><li>Second item</li><li>Third item<ul><li>Indented item</li><li>Indented item</li></ul></li><li>Fourth item</li></ul>|

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

### 代码

要将单词或短语表示为代码，请将其包裹在反引号 (<code>`</code>) 中。如果你要表示为代码的单词或短语中包含一个或多个反引号，则可以通过将单词或短语包裹在双反引号(<code>``</code>)中。
|Markdown|HTML|渲染后|
| :----------------: | :----------------: | :----------------: |
|``At the command prompt, type `nano`.``|`At the command prompt, type <code>nano</code>.`|At the command prompt, type `nano`.|
|<code>\`\`Use \`code\` in your Markdown file.\`\`</code>|``<code>Use `code` in your Markdown file.</code>``|``Use `code` in your Markdown file.``|

#### 代码块
要创建代码块，可以将代码块的每一行缩进至少四个空格或一个制表符。

```Markdown
    ### 我的妈
    qwq
    haha
```
渲染效果如下：

    ### 我的妈
    qwq
    haha

::: tip
要创建不用缩进的代码块，请使用 围栏式代码块（fenced code blocks）.
:::

#### 围栏式代码块
~~~Markdown
```Markdown
### 嘿嘿
*w*
``` 
~~~
这样就会渲染为：
```Markdown
### 嘿嘿
*w*
``` 

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
> - 德法也nb！
> - 黑月<br>德法都nb！
>
> ——某*管理组*的**商业互吹**
```
渲染结果如下:
> #### 后记
> - 德法也nb！
> - 黑月<br>德法都nb！
>
> ——某*管理组*的**商业互吹**

### 转义字符

要显示原本用于格式化 Markdown 文档的字符，请在字符前面添加反斜杠字符 (`\`) 。
```Markdown
\* Without the backslash, this would be a bullet in an unordered list.
```
渲染效果如下：

\* Without the backslash, this would be a bullet in an unordered list.

#### 可做转义的字符:
|符号|名称(in English)|
| :----------------: | :----------------: | 
|\\|backslash|
|`|backtick (see also escaping backticks in code)|
|*|asterisk|
|_|underscore|
|{ }|curly braces|
|[ ]|brackets|
|( )|parentheses|
|#|pound sign|
|+|plus sign|
|-|minus sign (hyphen)|
|.|dot|
|!|exclamation mark|
|\||pipe (see also escaping pipe in tables)|

### 特殊字符自动转义
在 HTML 文件中，有两个字符需要特殊处理： `<` 和 `&` 。 `<` 符号用于起始标签，`&` 符号则用于标记 HTML 实体，如果你只是想要使用这些符号，你必须要使用实体的形式，像是 `&lt;` 和 `&amp;`。

`&` 符号其实很容易让写作网页文件的人感到困扰，如果你要打「`AT&T`」 ，你必须要写成「`AT&amp;T`」 ，还得转换网址内的 `&` 符号，如果你要链接到：
```Markdown
http://images.google.com/images?num=30&q=larry+bird
```
你必须要把网址转成：
```Markdown
http://images.google.com/images?num=30&amp;q=larry+bird
```
才能放到链接标签的 href 属性里。不用说也知道这很容易忘记，这也可能是 HTML 标准检查所检查到的错误中，数量最多的。

Markdown 允许你直接使用这些符号，它帮你自动转义字符。如果你使用 `&` 符号的作为 HTML 实体的一部分，那么它不会被转换，而在其它情况下，它则会被转换成 `&amp;`。所以你如果要在文件中插入一个著作权的符号，你可以这样写：
```Markdown
&copy;
```
Markdown 将不会对这段文字做修改，但是如果你这样写：
```Markdown
AT&T
```
Markdown 就会将它转为：
```
AT&amp;T
```
类似的状况也会发生在 `<` 符号上，因为 Markdown 支持 行内 HTML ，如果你使用 `<` 符号作为 HTML 标签的分隔符，那 Markdown 也不会对它做任何转换，但是如果你是写：
```Markdown
4 < 5
```
Markdown 将会把它转换为：
```
4 &lt; 5
```
需要特别注意的是，在 Markdown 的块级元素和内联元素中， `<` 和 `&` 两个符号都会被自动转换成 HTML 实体，这项特性让你可以很容易地用 Markdown 写 HTML。（在 HTML 语法中，你要手动把所有的 `<` 和 `&` 都转换为 HTML 实体。）


### 分隔线

要创建分隔线，请在单独一行上使用三个或多个星号 (***)、破折号 (---) 或下划线 (___) ，并且不能包含其他内容。

```Markdown
***
---
___
```
他们都会被渲染为：
***

### 内嵌 HTML 标签

在上文中，很多部分都提到可以使用HTML标签进行书写。

事实上，对于 Markdown 涵盖范围之外的标签，都可以直接在文件里面用 HTML 本身。如需使用 HTML，不需要额外标注这是 HTML 或是 Markdown，只需 HTML 标签添加到 Markdown 文本中即可。

#### 行级內联标签
HTML 的行级內联标签如 `<span>`、`<cite>`、`<del>` 不受限制，可以在 Markdown 的段落、列表或是标题里任意使用。依照个人习惯，甚至可以不用 Markdown 格式，而采用 HTML 标签来格式化。例如：如果比较喜欢 HTML 的 `<a>` 或 `<img>` 标签，可以直接使用这些标签，而不用 Markdown 提供的链接或是图片语法。当你需要更改元素的属性时（例如为文本指定颜色或更改图像的宽度），使用 HTML 标签更方便些。

HTML 行级內联标签和区块标签不同，在內联标签的范围内， Markdown 的语法是可以解析的。
```Markdown
This **word** is bold. This <em>word</em> is italic.
```
渲染效果如下:
This **word** is bold. This <em>word</em> is italic.

#### 区块标签
区块元素──比如 `<div>`、`<table>`、`<pre>`、`<p>` 等标签，必须在前后加上空行，以便于内容区分。而且这些元素的开始与结尾标签，不可以用 tab 或是空白来缩进。Markdown 会自动识别这区块元素，避免在区块标签前后加上没有必要的 `<p>` 标签。

例如，在 Markdown 文件里加上一段 HTML 表格：
``` Markdown
This is a regular paragraph.

<table>
    <tr>
        <td>Foo</td>
    </tr>
</table>

This is another regular paragraph.
```
请注意，Markdown 语法在 HTML 区块标签中将不会被进行处理。例如，你无法在 HTML 区块内使用 Markdown 形式的`*强调*`。

#### HTML 用法最佳实践
出于安全原因，并非所有 Markdown 应用程序都支持在 Markdown 文档中添加 HTML。如有疑问，请查看相应 Markdown 应用程序的手册。某些应用程序只支持 HTML 标签的子集。

对于 HTML 的块级元素 `<div>`、`<table>`、`<pre>` 和 `<p>`，请在其前后使用空行（blank lines）与其它内容进行分隔。尽量不要使用制表符（tabs）或空格（spaces）对 HTML 标签做缩进，否则将影响格式。

在 HTML 块级标签内不能使用 Markdown 语法。例如 `<p>italic and **bold**</p>` 将不起作用。

——本文部分内容引用&改编自[Markdown语法教程](https://markdown.com.cn/)
