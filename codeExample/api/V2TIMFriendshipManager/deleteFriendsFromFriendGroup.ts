import { TencentImSDKPlugin } from 'react-native-tim-js';

// 从好友分组中删除好友（只是将好友移出此列表，不删除好友关系）
const deleteFriendsFromFriendGroupRes = await TencentImSDKPlugin.v2TIMManager
    .getFriendshipManager()
    .deleteFriendsFromFriendGroup(
        'groupName', //需要删除的群组名称
        [] //需要删除的用户id列表
    );
if (deleteFriendsFromFriendGroupRes.code === 0) {
    // 添加成功
    deleteFriendsFromFriendGroupRes.data?.forEach((element) => {
        element.resultCode; //此条记录的错误码
        element.resultInfo; //此条记录操作结果说明
        element.userID; //此条记录被操作的用户id
    });
}
