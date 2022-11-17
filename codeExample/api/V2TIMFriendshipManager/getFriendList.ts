import { TencentImSDKPlugin } from 'react-native-tim-js';

//获取好友列表
const getFriendListRes = await TencentImSDKPlugin.v2TIMManager
    .getFriendshipManager()
    .getFriendList();
if (getFriendListRes.code == 0) {
    // 查询成功
    getFriendListRes.data?.forEach((element) => {
        element.friendCustomInfo; //好友自定义字段 首先要在 控制台 (功能配置 -> 好友自定义字段) 配置好友自定义字段，然后再调用接口进行设置
        element.friendGroups; //好友所在分组列表
        element.friendRemark; //好友备注
        element.userID; //用户的id
        element.userProfile?.allowType; //用户的好友验证方式 0:允许所有人加我好友 1:不允许所有人加我好友 2:加我好友需我确认
        element.userProfile?.birthday; //用户生日
        element.userProfile?.customInfo; //用户的自定义状态
        element.userProfile?.faceUrl; //用户头像 url
        element.userProfile?.gender; //用户的性别 1:男 2:女
        element.userProfile?.level; //用户的等级
        element.userProfile?.nickName; //用户昵称
        element.userProfile?.role; //用户的角色
        element.userProfile?.selfSignature; //用户的签名
        element.userProfile?.userID; //用户 ID
    });
}
