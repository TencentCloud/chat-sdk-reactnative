// 设置消息自定义数据

import { TencentImSDKPlugin } from 'react-native-tim-js';

// 设置之后此消息会多出一个localCustomInt属性，用户可以读取此属性来获取设置的自定义属性
const setLocalCustomIntRes = await TencentImSDKPlugin.v2TIMManager
    .getMessageManager()
    .setLocalCustomInt(
        'msgID', // 需要设置的消息id messageId为消息发送后服务端创建的messageid，不是创建消息时的消息id
        0
    ); // 需要设置的自定义属性
if (setLocalCustomIntRes.code === 0) {
    //设置成功
}
