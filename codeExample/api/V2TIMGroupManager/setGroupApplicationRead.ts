import { TencentImSDKPlugin } from 'react-native-tim-js';

// 标记所有群组申请列表为已读
const setGroupApplicationReadRes = await TencentImSDKPlugin.v2TIMManager
    .getGroupManager()
    .setGroupApplicationRead();
if (setGroupApplicationReadRes.code === 0) {
    // 设置成功
}
