// 注意：需要先调用joinGroup进入直播群才能进行获取

import { TencentImSDKPlugin } from 'react-native-tim-js';

// 获取指定群属性
const getGroupAttributesRes = await TencentImSDKPlugin.v2TIMManager
    .getGroupManager()
    .getGroupAttributes(
        'groupID', // 需要获取属性的群组id
        ['custom'] // 获取的属性key值列表
    );
if (getGroupAttributesRes.code === 0) {
    // 获取成功
    getGroupAttributesRes.data; // 获取到的群属性
}
