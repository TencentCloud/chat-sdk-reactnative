import { TencentImSDKPlugin } from 'react-native-tim-js';

const userID = 'your user id'; // 用户设置的userID
const userSig = 'userSig from your server'; // 用户计算出的userSig
const loginRes = await TencentImSDKPlugin.v2TIMManager.login(userID, userSig);
if (loginRes.code === 0) {
    // 登录成功逻辑
} else {
    // 登录失败逻辑
}
