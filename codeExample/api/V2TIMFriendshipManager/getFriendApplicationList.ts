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
            element?.addSource; //申请添加来源 flutter会在发出请求的source前添加AddSource_Type_
            element?.addTime; //申请时间
            element?.addWording; //申请添加的信息
            element?.faceUrl; //申请好友头像Url
            element?.nickName; //申请用户昵称
            element?.type; //申请好友类型
            element?.userID; //申请用户id
        }
    );
}
