// 注意：需要先调用joinGroup进入直播群才能进行设置

import { TencentImSDKPlugin } from 'react-native-tim-js';

// 删除指定群属性
const deleteGroupAttributesRes = await TencentImSDKPlugin.v2TIMManager
    .getGroupManager()
    .deleteGroupAttributes('groupID', ['custom']);
if (deleteGroupAttributesRes.code === 0) {
    // 删除成功
}
