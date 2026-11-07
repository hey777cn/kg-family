/* 访问统计配置。两项都留空时，站点不加载任何统计脚本，也不发出任何统计请求。
 * 填哪一项、怎么填，见 docs/pwa.md「统计」一节。 */
window.CNM_STATS = {
  // Cloudflare Web Analytics 的 token（站点的统计信标）。填了才会加载 Cloudflare 的信标脚本。
  // 家庭版：置空，不加载任何第三方统计。
  cloudflareToken: '',
  // 自建事件采集地址（https://…）。填了就用 sendBeacon 把事件以 JSON POST 过去。
  // 家庭版：置空，事件只留在本机，不向任何服务器发送。
  endpoint: '',
  // 可选回调：每个事件都会调用一次，参数是 { event, source, path, ts, ... }。
  onEvent: null
};
