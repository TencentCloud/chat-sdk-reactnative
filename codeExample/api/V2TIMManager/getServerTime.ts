import { TencentImSDKPlugin } from 'react-native-tim-js';

//获取服务器当前时间
const getServerTimeRes = await TencentImSDKPlugin.v2TIMManager.getServerTime();
if (getServerTimeRes.code === 0) {
    //获取成功
    getServerTimeRes.data; //服务器当前时间
}
