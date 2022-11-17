import {
    TencentImSDKPlugin,
    GroupMemberFilterTypeEnum,
} from 'react-native-tim-js';

// 获取群成员列表
const getGroupMemberListRes = await TencentImSDKPlugin.v2TIMManager
    .getGroupManager()
    .getGroupMemberList(
        'groupID', // 需要查询的群组 ID
        GroupMemberFilterTypeEnum.V2TIM_GROUP_MEMBER_FILTER_ADMIN, //查询群成员类型
        '0', // 分页拉取标志，第一次拉取填0，回调成功如果 nextSeq 不为零，需要分页，传入返回值再次拉取，直至为0。
        100, // 需要拉取的数量。最大值：100，避免回包过大导致请求失败。若传入超过100，则只拉取前100个。
        0 // 偏移量，默认从0开始拉取。
    );

if (getGroupMemberListRes.code == 0) {
    // 拉取成功
    getGroupMemberListRes.data?.memberInfoList?.forEach((element) => {
        element?.customInfo; // 群成员自定义字段
        element?.faceUrl; // 头像Url
        element?.friendRemark; // 好友备注
        element?.joinTime; // 群成员入群时间
        element?.muteUntil; // 群成员禁言持续时间
        element?.nameCard; // 群成员名片
        element?.nickName; // 群成员昵称
        element?.role; // 群成员角色
        element?.userID; // 群成员ID
    });
}
