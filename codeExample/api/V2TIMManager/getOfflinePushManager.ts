import { TencentImSDKPlugin } from 'react-native-tim-js';

// 使用getOfflinePushManager设置离线推送配置信息的案例
//设置离线推送配置信息

const businessID = 0; //businessID 为对应厂商的证书 ID
const token = ''; //应合规要求，在用户同意隐私协议登录成功后，分别初始化注册各个厂商推送服务，并在注册结果回调处保存注册成功后的 token
const isTPNSToken = false;

const setOfflinePushConfigRes = await TencentImSDKPlugin.v2TIMManager
    .getOfflinePushManager()
    .setOfflinePushConfig(businessID, token, isTPNSToken);
if (setOfflinePushConfigRes.code === 0) {
    // 设置成功
}
