import {
    TencentImSDKPlugin,
    FriendResponseTypeEnum,
    FriendApplicationTypeEnum,
} from 'react-native-tim-js';

//获取好友申请列表
const getFriendApplicationListRes = await TencentImSDKPlugin.v2TIMManager
    .getFriendshipManager()
    .getFriendApplicationList();
if (getFriendApplicationListRes.code === 0) {
    // 查询成功
    getFriendApplicationListRes.data?.unReadCount; //未读申请数量
    getFriendApplicationListRes.data?.friendApplicationList?.forEach(
        (element) => {
            //同意好友申请
            const acceptFriendApplicationRes =
                await TencentImSDKPlugin.v2TIMManager
                    .getFriendshipManager()
                    .acceptFriendApplication(
                        FriendResponseTypeEnum.V2TIM_FRIEND_ACCEPT_AGREE, //建立好友关系时选择单向/双向好友关系
                        element.type as FriendApplicationTypeEnum, //加好友类型 要与getApplicationList查询到的type相同，否则会报错。
                        '' //同意好友的用户id
                    );
            if (acceptFriendApplicationRes.code === 0) {
                // 同意成功
                acceptFriendApplicationRes.data?.resultCode; //操作结果错误码
                acceptFriendApplicationRes.data?.resultInfo; //操作结果描述
                acceptFriendApplicationRes.data?.userID; //同意好友的id
            }
        }
    );
}
