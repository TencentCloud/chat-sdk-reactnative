import { TencentImSDKPlugin, FriendType } from 'react-native-tim-js';

//添加好友
const addFriendRes = await TencentImSDKPlugin.v2TIMManager
    .getFriendshipManager()
    .addFriend(
        'userID', //需要添加的用户id
        FriendType.V2TIM_FRIEND_TYPE_BOTH, //设置加好友类型，默认双向
        'remark', //添加的好友的好友备注
        'friendGroup', //添加好友所在分组
        'addWording', //添加好友附带信息
        'addSource' //添加来源描述
    );
if (addFriendRes.code === 0) {
    // 添加请求发送成功
    addFriendRes.data?.resultCode; //添加结果错误码
    addFriendRes.data?.resultInfo; //添加结果描述
    addFriendRes.data?.userID; //被添加的用户id
}
