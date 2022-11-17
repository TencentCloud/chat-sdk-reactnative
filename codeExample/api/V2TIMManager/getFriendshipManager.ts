import { TencentImSDKPlugin, FriendType } from 'react-native-tim-js';

// 使用getFriendshipManager添加好友的案例
const userID = ''; //需要添加的用户id
const remark = ''; //添加的好友的好友备注
const friendGroup = ''; //添加好友所在分组
const addWording = ''; //添加好友附带信息
const addSource = ''; //添加来源描述
const addType = FriendType.V2TIM_FRIEND_TYPE_BOTH; //设置加好友类型，默认双向

//添加好友
const addFriendRes = await TencentImSDKPlugin.v2TIMManager
    .getFriendshipManager()
    .addFriend(userID, addType, remark, friendGroup, addWording, addSource);
if (addFriendRes.code === 0) {
    // 添加请求发送成功
}
