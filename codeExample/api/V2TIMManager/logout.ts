import { TencentImSDKPlugin } from 'react-native-tim-js';
// 在用户登陆成功之后可调用
// 调用logout登出当前用户账号
const logoutRes = await TencentImSDKPlugin.v2TIMManager.logout();
if (logoutRes.code === 0) {
    // 登出成功的逻辑
}
