import { TencentImSDKPlugin } from 'react-native-tim-js';

// 在用户登陆成功之后可调用
// 调用getLoginStatus获取登录成功的用户的状态
const getLoginStatusRes =
    await TencentImSDKPlugin.v2TIMManager.getLoginStatus();
if (getLoginStatusRes.code === 0) {
    const status = getLoginStatusRes.data; // getLoginStatusRes.data为用户登录状态值
    if (status === 1) {
        // 已登录
    } else if (status === 2) {
        // 登录中
    } else if (status === 3) {
        // 未登录
    }
}
