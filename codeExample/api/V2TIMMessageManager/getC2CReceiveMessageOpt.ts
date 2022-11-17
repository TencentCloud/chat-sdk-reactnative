import { TencentImSDKPlugin } from 'react-native-tim-js';

// 查询某些用户的 C2C 消息接收选项
const getC2CReceiveMessageOptRes = await TencentImSDKPlugin.v2TIMManager
    .getMessageManager()
    .getC2CReceiveMessageOpt(['user1', 'user2']);
if (getC2CReceiveMessageOptRes.code === 0) {
    //查询成功
    getC2CReceiveMessageOptRes.data?.forEach((element) => {
        element.c2CReceiveMessageOpt; // 此用户的消息接收选项
        element.userID; // 此用户的id
    });
}
