import { TencentImSDKPlugin } from 'react-native-tim-js';

// 在用户登陆成功之后可调用
// 调用getLoginUser获取登录成功的用户 UserID
const getLoginUserRes = await TencentImSDKPlugin.v2TIMManager.getLoginUser();
if (getLoginUserRes.code === 0) {
    //获取成功
    getLoginUserRes.data; // getLoginUserRes.data为查询到的登录用户的UserID
}
