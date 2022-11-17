// 注意：需要先调用joinGroup进入直播群才能进行设置

import { TencentImSDKPlugin } from 'react-native-tim-js';

// 设置群属性
const setGroupAttributesRes = await TencentImSDKPlugin.v2TIMManager
    .getGroupManager()
    .setGroupAttributes(
        'groupID', // 需要设置属性的群组id
        { custom: 'custom' } // 设置的属性
    );
if (setGroupAttributesRes.code === 0) {
    // 设置成功
}
