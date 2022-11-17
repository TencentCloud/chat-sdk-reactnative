// 注意：需要先调用joinGroup进入直播群才能进行设置

import { TencentImSDKPlugin } from 'react-native-tim-js';

// 初始化群属性
const initGroupAttributesRes = await TencentImSDKPlugin.v2TIMManager
    .getGroupManager()
    .initGroupAttributes(
        'groupID', // 需要初始化属性的群组id
        { custom: 'custom' } // 初始化属性
    );
if (initGroupAttributesRes.code === 0) {
    // 初始化成功
}
