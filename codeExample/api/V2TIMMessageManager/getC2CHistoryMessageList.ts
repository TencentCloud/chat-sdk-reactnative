// 拉取单聊历史消息
// 首次拉取，lastMsgID 设置为 null

import { TencentImSDKPlugin } from 'react-native-tim-js';

// 再次拉取时，lastMsgID 可以使用返回的消息列表中的最后一条消息的id
const getC2CHistoryMessageListRes = await TencentImSDKPlugin.v2TIMManager
    .getMessageManager()
    .getC2CHistoryMessageList(
        'userId', // 单聊用户id
        10 // 拉取数据数量
    );
if (getC2CHistoryMessageListRes.code === 0) {
    //拉取成功
}
