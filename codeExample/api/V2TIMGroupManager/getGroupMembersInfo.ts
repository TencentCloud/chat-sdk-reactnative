import { TencentImSDKPlugin } from 'react-native-tim-js';

// 获取指定的群成员资料
const getGroupMembersInfoRes = await TencentImSDKPlugin.v2TIMManager
    .getGroupManager()
    .getGroupMembersInfo(
        'groupID', // 需要获取的群组id
        [] // 需要获取的用户id列表
    );
if (getGroupMembersInfoRes.code === 0) {
    // 获取成功
    getGroupMembersInfoRes.data?.forEach((element) => {
        element.customInfo; // 群成员自定义属性
        element.faceUrl; // 群成员头像Url
        element.friendRemark; // 群成员好友备注
        element.joinTime; // 群成员加群时间
        element.muteUntil; // 群成员禁言时间
        element.nameCard; // 群成员名片
        element.nickName; // 群成员的昵称
        element.role; // 群成员在此群的角色
        element.userID; // 群成员的id
    });
}
