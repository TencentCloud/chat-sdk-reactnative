import { TencentImSDKPlugin } from 'react-native-tim-js';

//获取版本号
const getVersionRes = await TencentImSDKPlugin.v2TIMManager.getVersion();
if (getVersionRes.code === 0) {
    //获取成功
    getVersionRes.data; //版本号
}
