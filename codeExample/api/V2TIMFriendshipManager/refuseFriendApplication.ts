import { TencentImSDKPlugin } from 'react-native-tim-js';

//获取好友申请列表
const getFriendApplicationListRes = await TencentImSDKPlugin.v2TIMManager
    .getFriendshipManager()
    .getFriendApplicationList();
if (getFriendApplicationListRes.code === 0) {
    // 查询成功
    getFriendApplicationListRes.data?.unReadCount; //未读申请数量
    getFriendApplicationListRes.data?.friendApplicationList?.forEach(
        (element) => {
            const refuseFriendApplicationRes =
                await TencentImSDKPlugin.v2TIMManager
                    .getFriendshipManager()
                    .refuseFriendApplication(
                        element!.type, //拒绝好友类型
                        'userID'
                    ); //拒绝好友的用户id
            if (refuseFriendApplicationRes.code === 0) {
                // 拒绝成功
                refuseFriendApplicationRes.data?.resultCode; //操作结果错误码
                refuseFriendApplicationRes.data?.resultInfo; //操作结果描述
                refuseFriendApplicationRes.data?.userID; //拒绝好友的id
            }
        }
    );
}
