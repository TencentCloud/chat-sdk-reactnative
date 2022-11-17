import {
    TencentImSDKPlugin,
    LogLevelEnum,
    V2TimSDKListener,
} from 'react-native-tim-js';
// 1. 从即时通信 IM 控制台获取应用 SDKAppID。
const sdkAppID = 0;
// 2. 添加 V2TimSDKListener 的事件监听器
const sdkListener: V2TimSDKListener = {
    onConnectFailed: (code, error) => {
        // 连接失败的回调函数
        // code 错误码
        // error 错误信息
    },
    onConnectSuccess: () => {
        // SDK 已经成功连接到腾讯云服务器
    },
    onConnecting: () => {
        // SDK 正在连接到腾讯云服务器
    },
    onKickedOffline: () => {
        // 当前用户被踢下线，此时可以 UI 提示用户，并再次调用 V2TIMManager 的 login() 函数重新登录。
    },
    onSelfInfoUpdated: (info) => {
        // 登录用户的资料发生了更新
        // info登录用户的资料
    },
    onUserSigExpired: () => {
        // 在线时票据过期：此时您需要生成新的 userSig 并再次调用 V2TIMManager 的 login() 函数重新登录。
    },
    onUserStatusChanged: (userStatusList) => {
        //用户状态变更通知
        //userStatusList 用户状态变化的用户列表
        //收到通知的情况：订阅过的用户发生了状态变更（包括在线状态和自定义状态），会触发该回调
        //在 IM 控制台打开了好友状态通知开关，即使未主动订阅，当好友状态发生变更时，也会触发该回调
        //同一个账号多设备登录，当其中一台设备修改了自定义状态，所有设备都会收到该回调
    },
};
// 3.初始化SDK
const initSDKRes = await TencentImSDKPlugin.v2TIMManager.initSDK(
    sdkAppID, // SDKAppID
    LogLevelEnum.V2TIM_LOG_DEBUG, // 日志登记等级
    sdkListener // 事件监听器
);
if (initSDKRes.code === 0) {
    //初始化成功
}
