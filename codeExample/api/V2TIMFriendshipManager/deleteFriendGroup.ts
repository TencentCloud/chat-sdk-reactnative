import { TencentImSDKPlugin } from 'react-native-tim-js';

// 删除好友分组
const deleteFriendGroupRes = await TencentImSDKPlugin.v2TIMManager
    .getFriendshipManager()
    .deleteFriendGroup([]); //需要删除的群组名称
if (deleteFriendGroupRes.code === 0) {
    // 删除成功
}
