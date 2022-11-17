import { TencentImSDKPlugin } from 'react-native-tim-js';

const groupListener = {
    onMemberEnter: (groupID, memberList) => {
        //有用户加入群（全员能够收到）
        //groupID    群 ID
        //memberList    加入的成员
    },
    onMemberLeave: (groupID, member) => {
        //有用户离开群（全员能够收到）
        //groupID    群 ID
        //member    离开的成员
    },
    onMemberInvited: (groupID, opUser, memberList) => {
        //某些人被拉入某群（全员能够收到）
        //groupID    群 ID
        //opUser    处理人
        //memberList    被拉进群成员
    },
    onMemberKicked: (groupID, opUser, memberList) => {
        //某些人被踢出某群（全员能够收到）
        //groupID    群 ID
        //opUser    处理人
        //memberList    被踢成员
    },
    onMemberInfoChanged: (groupID, groupMemberChangeInfoList) => {
        //群成员信息被修改，仅支持禁言通知（全员能收到）。
        //groupID    群 ID
        //v2TIMGroupMemberChangeInfoList    被修改的群成员信息
    },
    onGroupCreated: (groupID) => {
        //创建群（主要用于多端同步）
        //groupID    群 ID
    },
    onGroupDismissed: (groupID, opUser) => {
        //群被解散了（全员能收到）
        //groupID    群 ID
        //opUser    处理人/
    },
    onGroupRecycled: (groupID, opUser) => {
        //群被回收（全员能收到）
        //groupID    群 ID
        //opUser    处理人
    },
    onGroupInfoChanged: (groupID, changeInfos) => {
        //群信息被修改（全员能收到）
        //groupID    群 ID
        //changeInfos    修改的群信息
    },
    onReceiveJoinApplication: (groupID, member, opReason) => {
        //有新的加群请求（只有群主或管理员会收到）
        //groupID    群 ID
        //member    申请人
        //opReason    申请原因
    },
    onApplicationProcessed: (groupID, opUser, isAgreeJoin, opReason) => {
        //加群请求已经被群主或管理员处理了（只有申请人能够收到）
        //groupID    群 ID
        //opUser    处理人
        //isAgreeJoin    是否同意加群
        //opReason    处理原因
    },
    onGrantAdministrator: (groupID, opUser, memberList) => {
        //指定管理员身份
        //groupID    群 ID
        //opUser    处理人
        //memberList    被处理的群成员
    },
    onRevokeAdministrator: (groupID, opUser, memberList) => {
        //取消管理员身份
        //groupID    群 ID
        //opUser    处理人
        //memberList    被处理的群成员
    },
    onQuitFromGroup: (groupID) => {
        //主动退出群组（主要用于多端同步，直播群（AVChatRoom）不支持）
        //groupID    群 ID
    },
    onReceiveRESTCustomData: (groupID, customData) => {
        //收到 RESTAPI 下发的自定义系统消息
        //groupID    群 ID
        //customData    自定义数据
    },
    onGroupAttributeChanged: (groupID, groupAttribute) => {
        //到回属性收新更的群调;
        //groupID    群 ID
        //groupAttributeMap    群的所有属性
    },
};

TencentImSDKPlugin.v2TIMManager.addGroupListener(groupListener);
