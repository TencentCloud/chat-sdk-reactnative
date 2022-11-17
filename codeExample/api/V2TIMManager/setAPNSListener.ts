import { TencentImSDKPlugin } from 'react-native-tim-js';

//首先设置苹果系统离线推送专用监听器
TencentImSDKPlugin.v2TIMManager.setAPNSListener();
//APP 检测到应用退后台时可以调用此接口
const doBackgroundRes = await TencentImSDKPlugin.v2TIMManager
    .getOfflinePushManager()
    .doBackground(0);
if (doBackgroundRes.code === 0) {
    //调用成功后的逻辑
}
