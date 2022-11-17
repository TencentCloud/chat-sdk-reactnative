import { TencentImSDKPlugin } from 'react-native-tim-js';

// 设置单聊消息已读
const markGroupMessageAsReadRes = await TencentImSDKPlugin.v2TIMManager
    .getMessageManager()
    .markGroupMessageAsRead('groupID'); // 需要设置消息已读的群组id
if (markGroupMessageAsReadRes.code === 0) {
    // 标记成功
}
