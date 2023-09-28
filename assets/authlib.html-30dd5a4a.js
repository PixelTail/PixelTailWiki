import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as f,o,c as g,a,b as i,d as e,e as c}from"./app-e4bedb17.js";const r={},p=a("p",null,"PixelTail 像素尾巴为了保证玩家的账号安全与服务的稳定，采用了自建皮肤站的方式来提供本服务器的玩家账号验证与皮肤托管服务，因此服务器仅支持外置登录（authlib-injector），本文将详细介绍外置登录的配置方法，包括皮肤站的配置以及多种启动器的配置，可以点击本文右侧的目录跳转到对应的章节。",-1),s=a("h2",{id:"配置皮肤站",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#配置皮肤站","aria-hidden":"true"},"#"),i(" 配置皮肤站")],-1),d=a("h3",{id:"注册账号",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#注册账号","aria-hidden":"true"},"#"),i(" 注册账号")],-1),l={href:"https://skin.pixeltail.cn",target:"_blank",rel:"noopener noreferrer"},b=c('<figure><img src="https://ice.frostsky.com/2023/09/18/12f26b79aa5bcbb468579029983bcc5b.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在账号注册页面，输入要用于注册的账号的电子邮箱、密码以及游戏内角色名（即游戏 ID）后，点击人机身份验证的方框来进行人机身份验证，完成后点击“注册”来注册一个新账号。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>为避免游戏出现难以预料的 Bug，游戏 ID 必须符合正版 Minecraft 取名规范，不可使用除了大小写英文字母、数字与下划线以外的字符，<strong>不可使用中文字符</strong>，长度最少要求 3 个字符，最多不超过 16 个字符。</p></div><div class="hint-container info"><p class="hint-container-title">提示</p><p>后续如需绑定 Minecraft 正版账号，建议此处填写与正版账号一致的的邮箱和游戏 ID。</p></div><figure><img src="https://ice.frostsky.com/2023/09/18/041d1167097f507dbd078f47ed35ad35.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://ice.frostsky.com/2023/09/18/c4ea1aa5109b9b5b066dbc9e74d6e702.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="验证邮箱" tabindex="-1"><a class="header-anchor" href="#验证邮箱" aria-hidden="true">#</a> 验证邮箱</h3><p>注册完成后，会跳转到用户中心的仪表盘，此时账号还处于未验证状态，需要验证邮箱之后才能正常使用皮肤站的所有功能。</p><figure><img src="https://ice.frostsky.com/2023/09/18/752e30e8f4f44df2eb4910587e4b4e3b.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>登录注册皮肤站时使用的邮箱，在收件箱内会有一封验证邮件，点击邮件中的链接来验证邮箱。</p><div class="hint-container info"><p class="hint-container-title">提示</p><p>如果收件箱中没有找到验证邮件，请检查垃圾箱内是否被拦截，或者点击再次发送验证邮件，如果依然无法收到则请尝试更换邮箱。</p></div><figure><img src="https://ice.frostsky.com/2023/09/18/9289c6961fd4506c0f02b5ab2111eea8.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>输入注册皮肤站时使用的邮箱，点击“提交”后即可完成邮箱验证。</p><figure><img src="https://ice.frostsky.com/2023/09/18/d0c0ff756810156be2aefc5c2a155843.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>完成邮箱验证后，将跳转到用户中心仪表盘。</p><figure><img src="https://ice.frostsky.com/2023/09/18/11bb4fa390ae169dc636a80b167547cd.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="绑定正版账号-可选" tabindex="-1"><a class="header-anchor" href="#绑定正版账号-可选" aria-hidden="true">#</a> 绑定正版账号（可选）</h3>',17),h={class:"hint-container info"},u=a("p",{class:"hint-container-title"},"信息",-1),m=a("strong",null,"跳过此步骤",-1),y={href:"https://www.minecraft.net/",target:"_blank",rel:"noopener noreferrer"},x=c('<p>如果您拥有 Minecraft 正版账号并且想要绑定到皮肤站，可点击右下角的“验证”进行正版账号绑定。</p><figure><img src="https://ice.frostsky.com/2023/09/18/74c9a491c6c999cb11e8f569b15b4cb5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>登录您的 Minecraft 正版账号所在的微软账号，输入邮箱后点击“下一步”，输入密码后点击“登录”。</p><figure><img src="https://ice.frostsky.com/2023/09/18/dbfc82ed205303dfca3b151eb06945d4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>点击“接受”后即可完成 Minecraft 正版账号的绑定。</p><figure><img src="https://ice.frostsky.com/2023/09/19/d32d146ce73ce17013d792de51cb24b3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="添加角色" tabindex="-1"><a class="header-anchor" href="#添加角色" aria-hidden="true">#</a> 添加角色</h3><p>点击皮肤站用户中心左侧的“角色管理”，可以查看当前账号的所有角色。</p><figure><img src="https://ice.frostsky.com/2023/09/19/97646fc9445d14ae8e7fb1ea97491608.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>正常情况下，此时已经自动创建好了角色，则<strong>可以跳过此步骤</strong>。</p><p>如果没有角色，则需要手动添加一个角色，点击“添加新角色”来添加一个新角色。</p><figure><img src="https://ice.frostsky.com/2023/09/19/c997eeac679bf51fe9467a2ac69e1a14.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在图中的文本框内输入角色名（即游戏 ID），点击确定即可添加一个新角色。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>为避免游戏出现难以预料的 Bug，游戏 ID 必须符合正版 Minecraft 取名规范，不可使用除了大小写英文字母、数字与下划线以外的字符，<strong>不可使用中文字符</strong>，长度最少要求 3 个字符，最多不超过 16 个字符。</p></div><figure><img src="https://ice.frostsky.com/2023/09/19/ebb3b1288bd020e31d26e02aa89f7b52.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="设置皮肤或披风" tabindex="-1"><a class="header-anchor" href="#设置皮肤或披风" aria-hidden="true">#</a> 设置皮肤或披风</h3><p>点击皮肤站用户中心左侧的“我的衣柜”，可以查看当前账号的所有皮肤与披风。</p><p>此时衣柜内为空，您可以选择皮肤库内的皮肤或者上传自己的皮肤或披风。</p><p>本文将演示如何上传自己的皮肤或披风，点击箭头所指的“上传材质”来上传。</p><figure><img src="https://ice.frostsky.com/2023/09/19/0c380088405625e044725db21a370905.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>点击“选择文件”来选择需要上传的材质文件。</p><figure><img src="https://ice.frostsky.com/2023/09/19/21de5550129692ea171e7b10ea73006e.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>将“材质名称”改成想要的名称，选择正确的材质类型，若材质为皮肤，则选择“Steve”或“Alex”；若材质为披风，则选择“披风”，选择是否勾选“设置为私密材质”，确定后点击“确认上传”。</p><figure><img src="https://ice.frostsky.com/2023/09/19/72d85d3a4f3c9db1bebd408ed4e7aa87.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>点击下方的“立即使用”。</p><figure><img src="https://ice.frostsky.com/2023/09/19/f61453390f81263db7e67c9a9f405877.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>点击需要使用这个材质的角色，即可将材质应用到该角色。</p><figure><img src="https://ice.frostsky.com/2023/09/19/986c25ec8462014f5473b783c0849d95.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>点击皮肤站用户中心左侧的“角色管理”，即可看到角色已经成功设置了皮肤。</p><figure><img src="https://ice.frostsky.com/2023/09/19/41d1d81eb5c43ec59c3d536a2139ae11.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="配置启动器" tabindex="-1"><a class="header-anchor" href="#配置启动器" aria-hidden="true">#</a> 配置启动器</h2><p>在用户中心仪表盘下方，显示了皮肤站的认证服务器地址为： <code>https://skin.pixeltail.cn/api/yggdrasil</code>，复制这段地址。</p><div class="hint-container info"><p class="hint-container-title">信息</p><p>如果本文所示的认证服务器地址与皮肤站显示的地址不一致，则请以皮肤站的地址为准。</p></div><figure><img src="https://ice.frostsky.com/2023/09/19/64ca702bf18a9cbc23f92233aa71784d.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',34),k={href:"https://hmcl.huangyuhui.net/download",target:"_blank",rel:"noopener noreferrer"},_={href:"https://afdian.net/p/0164034c016c11ebafcb52540025c377",target:"_blank",rel:"noopener noreferrer"},z={href:"https://www.bakaxl.com/",target:"_blank",rel:"noopener noreferrer"},v=c('<h3 id="hmcl" tabindex="-1"><a class="header-anchor" href="#hmcl" aria-hidden="true">#</a> HMCL</h3><p>打开 HMCL 启动器，点击下图中箭头所指的位置添加账户。</p><figure><img src="https://ice.frostsky.com/2023/09/19/4d10ad45d3cd77388a4b07aea3a772a6.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>点击左下角的“添加认证服务器”。</p><figure><img src="https://ice.frostsky.com/2023/09/19/a91ae6f7b418d8bb4a25c69b5928a17e.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>将地址粘贴到文本框内，点击“下一步”。</p><figure><img src="https://ice.frostsky.com/2023/09/19/705e13567677778027ace037ba8487f3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://ice.frostsky.com/2023/09/19/8b357c8441185405a53dd58d7e07337f.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>点击“完成”，即可完成添加认证服务器。</p><figure><img src="https://ice.frostsky.com/2023/09/19/5c95a87dd7800e5be206bde873aa2dbb.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>点击左侧的“像素尾巴用户中心”，添加一个新账号。</p><figure><img src="https://ice.frostsky.com/2023/09/19/9b3a26f026d852bbc2ddea34ba71a1ad.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>用户名和密码请填写注册皮肤站时使用的邮箱和密码，填写完成后点击“登录”。</p><figure><img src="https://ice.frostsky.com/2023/09/19/7976f9b3a81e7bd8ed09438d6e9e346a.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://ice.frostsky.com/2023/09/19/572defaf15fda934f90ef137b137dc6d.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>登录成功后就可以在账户列表看到刚刚添加的账号，点击这个账号使其被选中。</p><figure><img src="https://ice.frostsky.com/2023/09/19/d9f966c49199f94eb96e1c06a4f620de.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>点击左上角箭头返回主界面，点击启动游戏即可使用外置登录启动游戏。</p><figure><img src="https://ice.frostsky.com/2023/09/19/e8b2edb92f18bed890affd8878539b70.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>至此，HMCL 启动器的外置登录配置完成。</p><h3 id="pcl2" tabindex="-1"><a class="header-anchor" href="#pcl2" aria-hidden="true">#</a> PCL2</h3><p>打开 PCL2 启动器，点击下方的“版本设置”。</p><figure><img src="https://ice.frostsky.com/2023/09/19/b5687ea13f0426c63299acb2426ff141.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>点击左侧的“设置”选项卡，滚动到最下方，将“登录方式”更改为“第三方登录：Authlib Injector 或 LittleSkin”。</p><figure><img src="https://ice.frostsky.com/2023/09/19/3086fefe2b8caa14895ac39a277d63fb.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>将地址粘贴到“认证服务器（必填）”的文本框内。</p><p>“注册链接”与“服务器名称”可参照下图中设置（可选）。</p><figure><img src="https://ice.frostsky.com/2023/09/19/1c4b45acaabaac0e8a9a70e5c5f97173.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://ice.frostsky.com/2023/09/19/e3a19af9ee475d439bfb6cb52e399721.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>点击左上角箭头返回主界面，邮箱和密码请填写注册皮肤站时使用的邮箱和密码，填写完成后点击“启动游戏”即可验证账号信息并启动游戏。</p><figure><img src="https://ice.frostsky.com/2023/09/19/2b9894340c96250eb6efd963631f1f8b.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://ice.frostsky.com/2023/09/19/5130689f6c8ff7b25a5df2cb55d7f4c3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>至此，PCL2 启动器的外置登录配置完成。</p><h3 id="bakaxl" tabindex="-1"><a class="header-anchor" href="#bakaxl" aria-hidden="true">#</a> BakaXL</h3><p>打开 BakaXL 启动器，点击图中箭头所指的“账户与档案”。</p><figure><img src="https://ice.frostsky.com/2023/09/19/5422439baa031d29eeda39a32faca420.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在“账户与档案”选项卡，滚动到最下方，点击“新增一个档案”。</p><figure><img src="https://ice.frostsky.com/2023/09/19/7d7ceea8c828eb8aac04fae24acf0e05.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>重复点击“游戏启动模式”，直到切换为“外置登录(authlib-injector)”。</p><figure><img src="https://ice.frostsky.com/2023/09/19/e4b6f9f30dd3cc1bb128cafdfe09ab67.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://ice.frostsky.com/2023/09/19/a8c4e68f4a492aeb0de1fd8008e84d3b.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>将地址粘贴到“验证服务器地址 (API Root)”文本框内。</p><p>邮箱和密码请填写注册皮肤站时使用的邮箱和密码，填写完成后点击左下角的“进行验证并返回”即可验证账号信息。</p><figure><img src="https://ice.frostsky.com/2023/09/19/182ce170b49579f0b6be02be87011651.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://ice.frostsky.com/2023/09/19/6dee9a90aaa4fd89e78ab520895fc261.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>点击左下角“返回”即可返回到主界面。</p><figure><img src="https://ice.frostsky.com/2023/09/19/e488e1a6087ff4dabb0f516d9280dd44.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>点击右下角“启动游戏”即可使用外置登录启动游戏。</p><figure><img src="https://ice.frostsky.com/2023/09/19/a1b1eb4716a5af38438f018af9d13ae7.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>至此，BakaXL 启动器的外置登录配置完成。</p>',50);function L(M,w){const t=f("ExternalLinkIcon");return o(),g("div",null,[p,s,d,a("p",null,[i("首先，请前往"),a("a",l,[i("像素尾巴用户中心"),e(t)]),i("，点击“现在注册”来注册一个新账号。")]),b,a("div",h,[u,a("p",null,[i("此步骤不是必须的，没有正版账号的请"),m,i("，不过如果有能力的话建议还是"),a("a",y,[i("支持一下正版"),e(t)]),i("比较好哦。")])]),x,a("p",null,[i("本文将演示 "),a("a",k,[i("HMCL"),e(t)]),i("、"),a("a",_,[i("PCL2"),e(t)]),i(" 和 "),a("a",z,[i("BakaXL"),e(t)]),i(" 三款启动器配置外置登录的方法，其他启动器的配置方法类似，本文不再赘述，可以点击本文右侧的目录跳转到对应的启动器。")]),v])}const I=n(r,[["render",L],["__file","authlib.html.vue"]]);export{I as default};
