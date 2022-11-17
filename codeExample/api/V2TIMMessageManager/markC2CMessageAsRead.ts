import { TencentImSDKPlugin } from 'react-native-tim-js';

// 设置单聊消息已读
const markC2CMessageAsReadRes = await TencentImSDKPlugin.v2TIMManager
    .getMessageManager()
    .markC2CMessageAsRead('userID'); // 需要设置消息已读的用户id
if (markC2CMessageAsReadRes.code === 0) {
    // 标记成功
}
