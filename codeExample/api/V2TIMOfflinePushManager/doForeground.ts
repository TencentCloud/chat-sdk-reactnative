import { TencentImSDKPlugin } from 'react-native-tim-js';

//doForeground
const doForegroundRes = await TencentImSDKPlugin.v2TIMManager
    .getOfflinePushManager()
    .doForeground();
if (doForegroundRes.code === 0) {
    //调用成功后的逻辑
}
