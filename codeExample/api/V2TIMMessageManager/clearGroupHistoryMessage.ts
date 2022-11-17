import { TencentImSDKPlugin } from 'react-native-tim-js';

// 清空群聊本地及云端的消息（不删除会话）
const clearGroupHistoryMessageRes = await TencentImSDKPlugin.v2TIMManager
    .getMessageManager()
    .clearGroupHistoryMessage('groupID'); // 需要清空记录的群组id
if (clearGroupHistoryMessageRes.code === 0) {
    //清除成功
}
