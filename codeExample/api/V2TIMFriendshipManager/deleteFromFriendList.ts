import { TencentImSDKPlugin, FriendType } from 'react-native-tim-js';

//从好友列表删除好友
const deleteFromFriendListRes = await TencentImSDKPlugin.v2TIMManager
    .getFriendshipManager()
    .deleteFromFriendList(
        [], //需要删除的用户id列表
        FriendType.V2TIM_FRIEND_TYPE_BOTH //删除操作的类型
    );
if (deleteFromFriendListRes.code == 0) {
    // 删除请求发送成功
    deleteFromFriendListRes.data?.forEach((element) => {
        element.resultCode; //此条删除操作的错误码
        element.resultInfo; //此条删除操作的结果描述
        element.userID; //此条删除操作的用户id
    });
}
