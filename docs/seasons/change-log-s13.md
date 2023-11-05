---
title: 13周目更新日志
---

## 05/11/2023 版本更新

### 更新ManaMetalMod版本至7.0.7

::: info 模组更新注意事项
请根据您的情况选择更新的方式。
如果您**刚加入游戏**。 请删除客户端mods文件夹中版本号为`7.0.5`的ManaMetalMod的`.jar`文件，并在内群名为 **13周目 模组更新** 的文件夹中下载文件名为`manametalmod-7.0.7.jar`以及`Aroma1997Core-1.7.10-1.0.2.16.jar`的文件放入mods文件夹。

如果您**已更新过模组**。请删除客户端mods文件夹中版本号为`7.0.6-1`的ManaMetalMod的`.jar`文件，并在内群名为 **13周目 模组更新** 的文件夹中下载文件名为`manametalmod-7.0.7.jar`的文件放入mods文件夹。
:::

1. **综合修复**：

    - 修正一些职业技能可能有错误升级时长问题
    - 修正黑雾技能伤害错误问题
    - 修正兽魔无极技能伤害错误问题
    - 修正剑气不同步问题
    - 修正沼气毒火技能效果错误问题
    - 修正式神斩给予的纸式神时长错误问题
    - 修正沼气毒火技能升级资料错误问题
    - 修正中秋节奖励箱的错误奖品内容问题
    - 修正满月祈福卷轴出现在地下城奖励箱错误问题
    - 修正齐心协力技能不医疗玩家错误问题
    - 修正齐心协力技能处于骑乘状况时，契约雪狼不失去生命问题
    - 修正齐心协力技能的描述错误，此技能无法免疫重力造成的出血效果
    - 修正齐心协力技能的效果时长错误问题
    - 修正孤注一掷技能的描述错误
    - 修正蒐集水晶、移物水晶的配方错误问题
    - 修正铁壁祈福和满月祈福卷轴描述错误问题
    - 修正末日要塞地下城入口不在基础入口生成表裡错误问题
    - 修正死亡失去属性道具系统失效问题
    - 修正失落的蔷薇协议给与错误属性问题
    - 修正六壬神域技能伤害错误问题
    - 修正六壬神域技能描述错误问题
    - 修正拉普达战锤触发双倍的自我复原技能错误问题
    - 修正自我复原技能恢复血量错误问题
    - 移除末日黑龙圣器中的宝藏
    - 非玩家的玩家实例(如假玩家)现在不可获得NBT标签
    - 现在若玩家在地下城世界跌落虚空时，将会传回至出生点
    - 变更天空石砖的材质
    - 现在使用建筑法杖时并且处于创造模式下将不会消耗魔力
    - 为千岛樱花树叶新增落叶颗粒效果
    - 为一转固有技能的技能介绍新增使用方法，并且可自动对应绑定的按键
    - 为瞬身术技能的技能介绍新增使用方法，并且可自动对应绑定的按键
    - 为地下城展是介面UI的刷新时间文字新增颜色，红色为未刷新，绿色为已刷新
    - 变更重生点方尖碑的材质
    - 变更重生点方尖碑，现在会立即杀死附近怪物，但不会掉落物品，攻击距离降低为 16 格
    - 重新调整各种颜色的金属箱子材质
    - 变更时间机器的模型动画效果
    - 为时间机器新增颗粒效果
    - 移除机关神庙的预设地下城入口生成
    - 变更英安岩的材质
    - 为地下城入口传送门方块新增特性，使用选取方块功能时会获得该地下城的创建工具
    - 为传奇英雄传新增使用等级说明
    - 变更紫罗兰树叶落叶的材质
    - 为大山樱树叶新增落叶花朵颗粒效果
    - 为剑类武器新增怒气驱动说明
 
 <br>
 
2. **平衡调整**：

    1. **职业**：

        1. **驯兽师**：

            - **契约召唤调整**：
                冷却时间，**60秒 > 90秒**
                契约雪狼的基础生命值倍率 **50倍 > 30倍**
                契约雪狼的基础生命值倍率可随著技能等级提升而增加
            - **齐心协力**削弱医疗值 **400点 > 200点**
            - **契约雪狼调整**：
                风压效果新增设定，每波风压最多一次对**4个目标**发动
                灼烧效果新增设定，每波灼烧最多一次对**4个目标**发动
                雷霆一击效果新增设定，每波雷霆一击最多一次对5个目标发动
                光明之翼效果新增设定，每波光明之翼最多一次对5个目标发动
            - **红旗指导**削弱攻击范围**8单位 > 7单位**
            - **蓝旗指导**削弱攻击范围**8单位 > 7单位**
            - **野性领导**削弱攻击范围**8单位 > 7单位**
            - **野性呐喊**削弱攻击范围**8单位 > 7单位**
    <br>

        1. **追猎者**：

            - **荒野备战**调整冷却时间**16秒 > 14秒**
            - **捕捉网**技能伤害提升**100% > 120%**
            - **捕捉网**技能增强缓速与麻痺效果时长**20秒 > 25秒**
            - **猎者追踪**效果增强每层提高 **5%最终伤害/50%造成伤害 > 每层提高6%最终伤害/60%造成伤害**
            - **银枪**技能伤害增强**340% > 375%**
            - **爆裂标枪**伤害增强**300% > 330%**
            - **螺旋标枪**伤害增强**165% > 180%**
            - **荆棘标枪**伤害增强**50% > 55%**
    <br>

        1. **大法师**：

            - **冰柱连击**增加持续时间**15秒 > 18秒**
 <br>


    1. **其他**：

        - 末日黑龙稀有掉落物机率 1% > 2%
        - 黑暗力量冷却时间 1200秒 > 600秒
        - 调降120后的经验需求
 
 <br>

3. **更新**：

    1. 新增地下城四季圣殿，115等级地下城

        - 新增属性道具无限翡翠，使用后可提升最大等级，最多到130级
        - 新增水之附魔石、草之附魔石、火之附魔石、白金之星
        - 使用上述道具与无限之环、绿宝石制作无限翡翠
        - 新增四季圣殿奖励箱
        - 新增饰品注魔元素髮夹、自然元素袜子、海蓝元素斗篷、烈焰元素护符
        - 新增地下城怪物元素魔灵、海之守卫、海之魔灵、木之守卫、木之魔灵、火之守卫、火之魔灵、进阶海洋领主、进阶自然领主、进阶火之领主
 

    1. 物品捡取相关系统优先度变更

        - 捡取系统优先度将会影响物品的自动收集情况，如雪球若在黑名单背包中，就无法自动收纳到雪袋
        1. 触发目标系统的捡取物品目标
        2. 物品被黑名单背包摧毁
        3. 金币类物品加入到持有金钱中
        4. 魔法粉或魔法收纳到魔法粉袋中
        5. 雪球收纳到雪袋中
        6. 灵力碎片加入持有灵力点数中
        7. 战利品收纳到战利品柜中
        8. 箭矢类物品收纳到箭袋中
        9. 魔王材料收纳到魔王材料包中
        10. 驯兽师战利品捡起后立即作用
        11. 矿石物品收纳到矿物背包中
 

    1. 石材切割机重制

        - 重新设计介面，现在可快速制作石材方块，并且提供更多可制作方块
        - 移除石材切割机实体
        - 为石材切割机新增模型外观
 

    1. 新增创造更多模式胶囊

        - 20倍圣器掉落胶囊，携带此胶囊打败魔王掉落圣器时，非稀有掉落物品将会是原先的20倍
        - 20倍圣器稀有掉落胶囊，携带此胶囊打败魔王掉落圣器时，稀有掉落物品将会是原先的20倍
        - 升级胶囊，使用后给予当前职业等级所需的全部经验
        - 地下城修补胶囊，携带此胶囊进入任何地下城，将会使该地下城重新生成所有结构
        - 地下城修补胶囊也可由一些简单材料在生存模式合成制作，目的是让生存玩家也能修复错误副本，消耗品
        - 地下城修补胶囊仍会受到冷却时间的影响，并且应只在地下城出现错误时使用


    1. 新增创造模式工具

        - 方块堆叠工具，可快速在方块上方、下方或侧面堆叠相同的方块
        - 创造模式建筑法杖，不会消耗魔力的建筑法杖
        - 方块填满之斧，使用右键标记一个位置，再次右键一个位置可在两点间填满第二次点击的方块
        - 范围破坏之鎚，左键破坏方块时一併破坏附近所有相同的方块
        - 地下城入口冷却时间刷新工具，使用此工具右键地下城入口方块时，可刷新该地下城
 

    1. 其他
        - 新增神兽芙木瑞尔，具有与阿尔西斯相同的效果，自然出生在针叶林中


::: info 
[点击这里](https://www.curseforge.com/minecraft/mc-mods/manametal/files/4805745)查看新版本ManaMetalMod完整更新日志
:::


## 15/10/2023 版本更新

### 更新ManaMetalMod版本至7.0.6-1

::: info 模组更新注意事项
请删除客户端mods文件夹中版本号为`7.0.5`的ManaMetalMod的`.jar`文件，并在内群名为 **13周目 模组更新** 的文件夹中下载文件名为`manametalmod-7.0.6-1.jar`以及`Aroma1997Core-1.7.10-1.0.2.16.jar`的文件放入mods文件夹。
:::


1. **综合修复**：

    - 修正鸡可能被无限获得上品鸡腿错误问题
    - 修正背包可以複制物品错误
    - 修正专精分裂射击、轻盈弓法可以被非游侠触发错误问题
    - 修正蜂箱工作时间错误问题
    - 修正魔王硬币不随著地下城难度增加错误问题
    - 修正属性道具缺少失落的蔷薇协议错误问题
    - 修正人形怪物可能在使用药水后手持错误武器问题
    - 修正武士技能面板显示资讯错误问题
    - 修正衣物成型桌小游戏积分过高会重置问题
    - 修正石笋、钟乳石可能造成意外错误问题
    - 修正蔷薇高塔地下城入口材质错误问题
    - 变更各式奖励箱的最大堆叠数量，现在为**40个一组**
    - 修正大量bug，并加入了未知的bug
 <br>
 
2. **平衡调整**：

    1. **职业**：


        1. **咒术师**：

            - 变更**式神斩**技能效果，对**非魔王目标**造成**额外20%伤害**
            - 变更**闪雷符**的伤害**125% > 145%**
            - 变更**风速符**的伤害**100% > 110%**
            - 变更**烈性毒箭**的伤害**50% > 65%**
  <br>

        1. **追猎者**：

            - 变更**银枪**的伤害**325% > 340%**
            - 变更**螺旋标枪**的伤害**150% > 165%**
  <br>

        1. **大法师**：

            - 变更**冰柱连击**的持续时间 **10秒 > 15秒**
  <br>

        1. **神射手**：

            - 变更**分裂射击专精**效果，**降低伤害50% > 40%**
            - 变更**穿空箭**技能效果，对**非魔王目标**造成**额外15%伤害**
  <br>

        1. **剑斗士**：

            - 变更剑斗士**基础怒气值最大上限为 20 点**
            - 变更**剑术大师**技能效果，最大上限增加提升为 **20 点**
            - 变更剑斗士**怒气值基础效果血性恢复效果**，每点怒气**恢复2%** **>** 每点怒气**恢复1%**
            - 变更**剑气波**技能效果：使用怒气值驱动时伤害**增加25%**
            - 变更**剑气波**技能效果：**消耗的怒气值1点 > 消耗的怒气值2点**
            - 变更**战斗防守**技能效果：**消耗的怒气值5点 > 消耗的怒气值10点**
            - 变更**玄月斩**技能效果：**使用怒气值驱动时，伤害增加20% > 伤害增加40%**
            - 变更**玄月斩**技能效果：**消耗的怒气值3点 > 消耗的怒气值5点**
            - 变更**幻影剑**技能效果：对**非魔王目标**造成**额外20%伤害**
            - 变更**幻影剑**技能效果：**消耗的怒气值3点 > 消耗的怒气值5点**
            - 变更**怒气爆发**技能效果：**消耗的怒气值10点 > 消耗的怒气值20点**
            - 变更**怒气爆发**技能效果：**消耗的生命值30% > 消耗的生命值15%**
            - 变更**狂暴剑斩**技能效果：**消耗的怒气值10点 > 消耗的怒气值15点**
            - 变更**狂暴剑斩**技能效果：**使用怒气值驱动时，伤害增加30% > 伤害增加50%**
            - 变更**血战誓约**技能效果：**消耗的怒气值10点 > 消耗的怒气值20点**
            - 变更**血战誓约**技能效果：血战狂怒每秒**减少生命值3%** > 血战狂怒每秒**减少生命值2%**
            - 变更**龙卷剑斩**技能效果：**消耗的怒气值20点 > 消耗的怒气值40点**
            - 变更**龙卷剑斩**技能效果：**使用怒气值驱动时，伤害35% > 伤害60%**
  <br>

        1. **驯兽师**：
            - 驯兽师战利品
                - 物品的存在为 **20** 秒
                - **基础治疗效果 800 > 400**
                - 效果更改：**每个额外的战利品都将恢复200点生命与魔力。**
                - 效果追加：**任何玩家都可以捡起战利品，并且战利品现在会腐坏**
 <br>


    1. **其他**：

        - 移除天空守护龙瞬移的效果
        - 提高副本专用武器的伤害
        - 降低增幅宝物魔法给予的魔王硬币数量为原先的60%
        
 <br>

3. **更新**：
    1. **中秋节活动重制**

        - 主世界处于白天时，将会在副本随机出现满月宝箱怪
        - 打败满月宝箱怪将会掉落特级鲑鱼或特级培根与中秋烤肉竹籤
        - 使用特级鲑鱼、特级培根、中秋烤肉竹籤可烹饪/合成并制作为串烤
        - 主世界处于晚上时，食用串烤将会获得短暂失明并召唤月兔在附近
        - 月兔会往玩家的反方向跑，若玩家右键点击月兔，将会获得中秋节奖励箱
        - 在中秋节奖励箱可有机率获得满月祈福卷轴获各式物品、月兔宠物蛋等
 <br>

    1. **配件附魔台**

        - 新增配件附魔台，可用来附魔大法师的专属法杖配件
        - 使用与普通附魔台相同的摆法来放置书柜，可接受普通书柜、老旧书柜与以下书柜
        - 新增黑魔法书柜，使用远古铥遗迹的黑暗书柜制作，附魔力量两点
        - 新增附魔书柜，使用附魔书与木板制作，附魔力量两点
        - 右键配件附魔台可以知道目前的附魔力量总和值
        - 总和附魔力量最高为100点，附魔力量越高，对于法杖配件就会附魔到更好的效果
        - 每次附魔都将有机会破坏附近的书柜
        - 新增法杖咒语碎片物品，在地下城或通用奖池中找到
        - 可使用法杖咒语碎片制作基础法杖配件，并且可用以升级法杖配件
        - 新增法杖配件青铜杖端、白银杖端、黄金杖端、玛瑙杖柄、红玉杖柄、蓝玉杖柄、青铜杖芯、白银芯、黄金杖芯、法杖咒语辞典、法杖咒语卷轴、法杖魔导水晶
        - 蹲下右键法杖可以打开配件/咒语设定UI
        - 法杖配件只会影响普通攻击的伤害

::: info 
[点击这里](https://www.curseforge.com/minecraft/mc-mods/manametal/files/4757274)查看新版本ManaMetalMod完整更新日志
:::

### 服务器增加自动备份模组

::: warning 注意
如果自动备份模组导致服务器发生卡顿，请立刻联系夏至/黑月！
:::