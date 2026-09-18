---
title: "[更新中] C 语言学习笔记"
published: 2026-09-18
pinned: false
description: 记录我的第一门正式语言学习历程。包含我遇到的问题，疑难点，解决方案等。
tags: [思考]
category: 存档备份
licenseName: "CC BY-NC-SA 4.0"
draft: false
date: 2026-09-18
pubDate: 2026-09-18
permalink: "c-study"
---

## 初始模板

```
#include <stdio.h>

int main()
{
	[可替换部分]

	return 0;
}
```

**简单文本输出**

```
printf("Hello World!\n");
```

**简单计算**

```
printf("12+34=%d", 12+34);
```

**简单编译**
需要先安装 TDM-GCC 并添加 Path。
`gcc main.c -o main.exe`
若出现中文乱码问题，尝试使用：
`gcc -finput-charset=UTF-8 -fexec-charset=GBK main.c -o main.exe`

**关于编辑器**
可选 DevC++、VSCode 等。DevC++ 编译运行简单，但多文件操作较为不便，多文件场景借助 VSCode 的工作区功能表现更加，但可能出现编译与运行问题。VSCode 需要额外安装 C/C++ 与 Code Runner 扩展。

## 变量

`int price = 0`

- 这一行定义了一个变量
- 变量名：price
- 类型：int
- 初始值：0
- 用途：保存数据供后续计算

**程序示例**

- 涉及 scanf 要为变量名加 &

```
int price = 0;

printf("请输入金额（元）：");
scanf("%d", &price);

int change = 100 - price;

printf("找您%d元。\n", change);
```

**定义一般形式**

- <类型名称><变量名称>;
- 可以在一行内定义多个变量  
  `int price;`  
  `int price, amount;`

**变量的名字：标识符**

- 只能由字母、数字、下划线组成
- 数字不能出现在第一个位置
- C 语言关键字 (保留字) 不用作标识符

**C 语言保留字**

- 无需背诵，凭练习增进理解

```
auto,break,case,char,const,continue,default,do,double,else,enum,extern,float,for,goto,if,int,long,register,return,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile,while,inline,restrict
```

**赋值和初始化**

- 程序设计中 a=b 与 b=a 的意思完全相反。
- a=b 把 b 的值交给 a，b=a 把 a 的值交给 b。
- 变量初始化：在变量定义时发生的赋值，所有变量在第一次被使用前应该被赋值一次。
- 初始化一般形式：<类型名称><变量名称> = <初始值>。
- 表达式：有赋值运算符的式子就叫表达式。
- 赋值不是证明两边相等，而是“算右边，把结果放到左边”。

**变量类型**
`int price = 0;`

- 这一行，定义了一个变量。变量的名字是 price，类型是 int，初始值是 0。
- C 是一种有类型的语言，所有的变量在使用之前必须定义或声明。
- 所有的变量必须具有确定的数据类型。
- 数据类型表示在变量中可以存放什么样的数据，变量中只能存放指定类型的数据，程序运行过程中也不能改变变量的类型。
- C99 可以在代码任意位置定义变量，ANSI C 必须在代码开头定义。

**读整数**
`scanf("&d", &price);`
要求 scanf 这个函数读入下一个整数，读到的结果赋值给变量 price。

**常量与变量**
`int change = 100 - price;`

- 固定不变的数，是常数 (如上方 100)。
- 更好的办法: 定义一个常量 (`const int AMOUNT = 100; int change = AMOUNT - price`)
- const：修饰符，放于 int 之前，表示这个对象之后不能再通过普通赋值修改。普通变量允许覆盖旧值，而 const 限定的对象不允许后续赋新值。
- 变量名全大写：非 C 语法要求，属于命名习惯，用于提醒阅读者该值不会变化。

**plus.c**

- 单 scanf 读取多变量：scanf 两个 %d 用空格隔开
- DEMO：`int a; int b; printf("请输入两个整数:"); scanf("%d %d", &a, &b); printf("%d + %d = %d\n", a, b, a + b); `

## 整数 浮点数

**定义**

- 浮点数：带小数点的数。
- 例：10 是整数，10.0 是浮点数。
- C 语言中带小数点的数与不带小数点的数是完全不同的两个数 (如 10 与 10.0)。

**简单实例**

- 整数运算：`printf("%d\n", 10/3)` 得到 3 (只保留整数部分)
- 采用浮点数：`printf("%f\n", 10.0/3)` 得到 3.33...

**应用：身高转换的问题程序**

- 计量单位不同：中国公制，美国等使用英制 [几尺几寸]。(如：五尺七寸 -> (5 + 7 / 12) \* 0.3048 = 1.7018 m。)
- \"：用于让程序输出双引号本身。

```
printf(
	"请分别输入身高的英尺和英寸, "
    "如输入\"5 7\"表示5英尺7英寸: "
);

int foot;
int inch;

scanf("%d %d", &foot, &inch);

printf("身高是%f米。\n", ((foot + inch / 12) * 0.3048));
```

**问题及原因**

- 执行表现后为英寸部分丢失，实则是小数问题。
- 两个整数的运算的结果只能是整数，若不是，结果会丢失小数部分。

**改进方案**

- 当浮点数和整数放到一起运算时，C 会将整数转换为浮点数进行浮点数的运算。
- 有浮点数参与运算或计算结果不是整数时，%d 需要改为 %f。
- double 是双精度浮点数的缩写，单精度浮点数是用 float 表示。

1. 将 12 替换为 12.0：`printf("身高是%f米。\n", ((foot + inch / 12.0) * 0.3048));`
2. 将 int 这一整型变量替换为 double：`double foot; double inch;`

**数据类型**
整数的变量、输出、输入：

```
int
printf("%d",...)
scanf("%d",...)
```

浮点数的变量、输出、输入：

```
double
printf("%f",...)
scanf("%lf',...)
```

## 表达式

**定义**
一个表达式是一系列算子和运算符的组成，用来计算一个值。

**运算符和算子**

- 运算符：指进行运算的动作。如 ("+", "-")
- 算子：指参与运算的值，可能是常数、变量、或是一个方法的返回值。

**实例：计算时间差问题程序**

```
#include <stdio.h>
int main()
{
    int hour1, minute1;
    int hour2, minute2;

    printf("请输入第一个时间 (小时 分钟): ");
    scanf("%d %d", &hour1, &minute1);
    printf("请输入第二个时间 (小时 分钟): ");
    scanf("%d %d", &hour2, &minute2);

    printf("时间差是: %d 小时 %d 分钟\n", hour2 - hour1, minute2 - minute1);

    return 0;
}
```

**问题**

- 直接分别减，会出现分钟错位的情况 (如 1：40 和 2：10 的差 输出 1 小时 -30 分)

**改进方案**

- 设计更准确的办法计算，将单位统一到小时或分钟:

* 以分钟为单位：小时\*60+分钟
* 以小时为单位：小时+分钟/60
* 以分钟为单位的示例：

```
int hour1, minute1;
int hour2, minute2;

printf("请输入第一个时间 (小时 分钟): ");
scanf("%d %d", &hour1, &minute1);
printf("请输入第二个时间 (小时 分钟): ");
scanf("%d %d", &hour2, &minute2);

printf("时间差是: %d 分钟\n", (hour2 - hour1) * 60 + minute2 - minute1);
```

- 以 x 小时 x 分钟的方式显示 -> 整数除法 + %取余：

```
int hour1, minute1;
int hour2, minute2;

printf("请输入第一个时间 (小时 分钟): ");
scanf("%d %d", &hour1, &minute1);
printf("请输入第二个时间 (小时 分钟): ");
scanf("%d %d", &hour2, &minute2);

int t1 = hourl * 60 + minutel;
int t2 = hour2 * 60 + minute2;
int t = t2-t1;

printf("时间差是 %d 小时 %d 分。", t/60, t%60);
```

**复合赋值**

- 算术运算符可以和赋值运算符"="结合起来，形成复合赋值运算符 "+="、"-="、"\*="、"/="、"%="。
- 两个运算符中间不要有空格。
- 例：`total += 5` 等同于 `total = total + 5`

* `total += (sum+100)/2;` 等同于· `total = total + (sum+100)/2;`
* `total *= sum+12;` 等同于 `total = total * (sum+12);`
* `total /= 12+6;` 等同于 `total=total / (12+6);`

- 递增递减运算符："++" "--"，单目运算符，算子必须是变量，作用是给对应变量 +1 或 -1。

* 示例：`count++` 等同于 `count += 1` 等同于 `count = count + 1`

**前缀后缀**

- "++" "--" 可以放在变量的前面，叫做前缀形式，也可以放在变量的后面，叫做后缀形式。
- a++ 与 ++a 的值不同，a++ 的值是 a+1 以前的值，++a 的值是加了 1 以后的值。
- 示例：`int a = 5; int b = a++;` 最终结果: `a = 6, b = 5`

* `int a = 5; int b = ++a;` 最终结果：`a = 6, b = 6`
* a++：先用后加 ++a：先加后用

- 应用：

```
int a;
a = 10;

printf("a++=%d\n", a++);
printf("a=%d\n", a);

printf("++a=%d\n", ++a);
printf("a=%d\n",a);
```

输出: `a++=10, a=11, ++a=12, a=12`

**交换两个变量**

- 程序是按步执行的，表达的是顺序执行的动作，而不是关系。
- 错误示例: "a = b; b = a" 正确示例："t = a; a = b; b = t"
- 调试：点击对应行号左侧添加断点 (红色小点)，然后按下 F5 启动调试。
