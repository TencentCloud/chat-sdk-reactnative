//设置群组消息接收选项

import { TencentImSDKPlugin, ReceiveMsgOptEnum } from 'react-native-tim-js';

// 设置在线和离线都不接收消息
const setGroupReceiveMessageOptRes = await TencentImSDKPlugin.v2TIMManager
    .getMessageManager()
    .setGroupReceiveMessageOpt(
        'groupID', // 需要设置的群组id
        ReceiveMsgOptEnum.V2TIM_NOT_RECEIVE_MESSAGE
    ); // 用户消息接收选项属性
if (setGroupReceiveMessageOptRes.code === 0) {
    //设置成功
}
