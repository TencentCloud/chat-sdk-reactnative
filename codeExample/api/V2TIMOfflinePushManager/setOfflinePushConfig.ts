import { TencentImSDKPlugin } from 'react-native-tim-js';

//设置离线推送配置信息
const setOfflinePushConfigRes = await TencentImSDKPlugin.v2TIMManager
    .getOfflinePushManager()
    .setOfflinePushConfig(
        0, //businessID 为对应厂商的证书 ID
        '', //应合规要求，在用户同意隐私协议登录成功后，分别初始化注册各个厂商推送服务，并在注册结果回调处保存注册成功后的 token
        false
    ); //传false即可。
if (setOfflinePushConfigRes.code === 0) {
    // 设置成功
}
