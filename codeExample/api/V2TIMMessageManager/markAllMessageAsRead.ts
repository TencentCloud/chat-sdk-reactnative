import { TencentImSDKPlugin } from 'react-native-tim-js';

// 标记所有消息为已读
const markAllMessageAsReadRes = await TencentImSDKPlugin.v2TIMManager
    .getMessageManager()
    .markAllMessageAsRead();
if (markAllMessageAsReadRes.code === 0) {
    // 标记成功
}
