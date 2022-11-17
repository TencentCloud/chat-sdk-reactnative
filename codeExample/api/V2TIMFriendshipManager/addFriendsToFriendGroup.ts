import { TencentImSDKPlugin } from 'react-native-tim-js';

//添加好友到一个好友分组
const addFriendsToFriendGroupRes = await TencentImSDKPlugin.v2TIMManager
    .getFriendshipManager()
    .addFriendsToFriendGroup(
        'groupName', //分组名称
        [] //需要加入分组的好友id
    );
if (addFriendsToFriendGroupRes.code === 0) {
    // 添加成功
    addFriendsToFriendGroupRes.data?.forEach((element) => {
        element.resultCode; //此条记录的错误码
        element.resultInfo; //此条记录的操作结果描述
        element.userID; //此条记录被操作的用户id
    });
}
