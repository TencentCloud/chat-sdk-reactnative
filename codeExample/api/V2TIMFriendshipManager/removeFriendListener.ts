import {
    TencentImSDKPlugin,
    V2TimFriendshipListener,
} from 'react-native-tim-js';

//设置关系链监听器
const listener: V2TimFriendshipListener = {
    onBlackListAdd: (infoList) => {
        //黑名单列表新增用户的回调
        //infoList 新增的用户信息列表
    },
    onBlackListDeleted: (userList) => {
        //黑名单列表删除的回调
        //userList 被删除的用户id列表
    },
    onFriendApplicationListAdded: (applicationList) => {
        //好友请求数量增加的回调
        //applicationList 新增的好友请求信息列表
    },
    onFriendApplicationListDeleted: (userIDList) => {
        //好友请求数量减少的回调
        //减少的好友请求的请求用户id列表
    },
    onFriendApplicationListRead: () => {
        //好友请求已读的回调
    },
    onFriendInfoChanged: (infoList) => {
        //好友信息改变的回调
        //infoList 好友信息改变的好友列表
    },
    onFriendListAdded: (users) => {
        //好友列表增加人员的回调
        //users 新增的好友信息列表
    },
    onFriendListDeleted: (userList) => {
        //好友列表减少人员的回调
        //userList 减少的好友id列表
    },
};
TencentImSDKPlugin.v2TIMManager
    .getFriendshipManager()
    .addFriendListener(listener); //添加关系链监听器

//添加成功之后可移除
TencentImSDKPlugin.v2TIMManager
    .getFriendshipManager()
    .removeFriendListener(listener); //需要移除的关系链监听器
