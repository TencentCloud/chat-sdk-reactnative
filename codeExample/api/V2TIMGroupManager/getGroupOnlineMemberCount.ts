import { TencentImSDKPlugin } from 'react-native-tim-js';

// 获取指定群在线人数
const getGroupOnlineMemberCountRes = await TencentImSDKPlugin.v2TIMManager
    .getGroupManager()
    .getGroupOnlineMemberCount('groupID');
if (getGroupOnlineMemberCountRes.code === 0) {
    // 查询成功
    getGroupOnlineMemberCountRes.data; // 查询到的群在线人数
}
