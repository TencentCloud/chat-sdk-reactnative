import { TencentImSDKPlugin } from 'react-native-tim-js';

//清空单聊本地及云端的消息（不删除会话）
const clearC2CHistoryMessageRes = await TencentImSDKPlugin.v2TIMManager
    .getMessageManager()
    .clearC2CHistoryMessage('userID'); // 需要清空记录的用户id
if (clearC2CHistoryMessageRes.code === 0) {
    //清除成功
}
