//设置用户消息接收选项

import { TencentImSDKPlugin, ReceiveMsgOptEnum } from 'react-native-tim-js';

// 设置在线和离线都不接收消息
const setC2CReceiveMessageOptRes = await TencentImSDKPlugin.v2TIMManager
    .getMessageManager()
    .setC2CReceiveMessageOpt(
        ['user1', 'user2'], // 需要设置的用户id列表
        ReceiveMsgOptEnum.V2TIM_NOT_RECEIVE_MESSAGE
    ); // 用户消息接收选项属性
if (setC2CReceiveMessageOptRes.code === 0) {
    //设置成功
}
