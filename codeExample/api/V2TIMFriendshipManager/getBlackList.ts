import { TencentImSDKPlugin } from 'react-native-tim-js';

//获取黑名单列表
const getBlackListRes = await TencentImSDKPlugin.v2TIMManager
    .getFriendshipManager()
    .getBlackList();
if (getBlackListRes.code === 0) {
    // 查询成功
    getBlackListRes.data?.forEach((element) => {
        element.friendCustomInfo; //用户自定义属性
        element.friendGroups; //用户的好友分组
        element.friendRemark; //用户备注
        element.userID; //此条记录用户id
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
