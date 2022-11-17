import { TencentImSDKPlugin } from 'react-native-tim-js';

//设置当前登录用户在线状态
const setSelfStatusRes = await TencentImSDKPlugin.v2TIMManager.setSelfStatus(
    '' // 用户在线状态描述
);
if (setSelfStatusRes.code === 0) {
    //设置成功
}
