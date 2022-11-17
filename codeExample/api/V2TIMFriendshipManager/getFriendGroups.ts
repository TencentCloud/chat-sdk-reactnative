import { TencentImSDKPlugin } from 'react-native-tim-js';

// 获取分组信息
const getFriendGroupsRes = await TencentImSDKPlugin.v2TIMManager
    .getFriendshipManager()
    .getFriendGroups([]); //要获取信息的好友分组名称列表
if (getFriendGroupsRes.code === 0) {
    // 查询成功
    getFriendGroupsRes.data?.forEach((element) => {
        element.friendCount; //此组的好友数
        element.friendIDList; //此组的好友id列表
        element.name; //此组的名称
    });
}
