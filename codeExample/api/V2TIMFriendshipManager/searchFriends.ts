import { TencentImSDKPlugin } from 'react-native-tim-js';

//搜索好友的搜索条件
const searchParam = {
    isSearchNickName: true, //是否搜索昵称
    isSearchRemark: true, //是否搜索备注
    isSearchUserID: true, //是否搜索id
    keywordList: [], //关键字列表，最多支持5个。
};
const searchFriendsRes = await TencentImSDKPlugin.v2TIMManager
    .getFriendshipManager()
    .searchFriends(searchParam); //搜索好友的搜索条件
if (searchFriendsRes.code === 0) {
    // 查询成功
    searchFriendsRes.data?.forEach((element) => {
        element.relation; //好友类型 0:不是好友 1:对方在我的好友列表中 2:我在对方的好友列表中 3:互为好友
        element.resultCode; //此条记录的查询结果错误码
        element.resultInfo; //此条查询结果描述
        //friendInfo为好友个人资料，如果不是好友，除了 userID 字段，其他字段都为空
        element.friendInfo?.friendCustomInfo; //好友自定义字段 首先要在 控制台 (功能配置 -> 好友自定义字段) 配置好友自定义字段，然后再调用接口进行设置
        element.friendInfo?.friendGroups; //好友所在分组列表
        element.friendInfo?.friendRemark; //好友备注
        element.friendInfo?.userID; //用户的id
        element.friendInfo?.userProfile?.allowType; //用户的好友验证方式 0:允许所有人加我好友 1:不允许所有人加我好友 2:加我好友需我确认
        element.friendInfo?.userProfile?.birthday; //用户生日
        element.friendInfo?.userProfile?.customInfo; //用户的自定义状态
        element.friendInfo?.userProfile?.faceUrl; //用户头像 url
        element.friendInfo?.userProfile?.gender; //用户的性别 1:男 2:女
        element.friendInfo?.userProfile?.level; //用户的等级
        element.friendInfo?.userProfile?.nickName; //用户昵称
        element.friendInfo?.userProfile?.role; //用户的角色
        element.friendInfo?.userProfile?.selfSignature; //用户的签名
        element.friendInfo?.userProfile?.userID; //用户 ID
    });
}
