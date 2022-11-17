import { TencentImSDKPlugin, FriendType } from 'react-native-tim-js';

//检查指定用户的好友关系
const checkFriendRes = await TencentImSDKPlugin.v2TIMManager
    .getFriendshipManager()
    .checkFriend(
        [], //需要检查的用户id列表
        FriendType.V2TIM_FRIEND_TYPE_BOTH //检查的类型
    );
if (checkFriendRes.code == 0) {
    // 查询发送成功
    checkFriendRes.data?.forEach((element) => {
        element.resultCode; //检查结果错误码
        element.resultInfo; //检查结果信息
        element.resultType; //与查询用户的关系类型 0:不是好友 1:对方在我的好友列表中 2:我在对方的好友列表中 3:互为好友
        element.userID; //用户id
    });
}
