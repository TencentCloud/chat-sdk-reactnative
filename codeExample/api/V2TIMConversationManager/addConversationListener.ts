import {
    TencentImSDKPlugin,
    V2TimConversationListener,
} from 'react-native-tim-js';

//设置会话监听器
const listener: V2TimConversationListener = {
    onSyncServerStart: () => {
        //同步服务器会话开始
    },
    onSyncServerFinish: () => {
        //同步服务器会话完成
    },
    onSyncServerFailed: () => {
        // 同步服务器会话失败
    },
    onNewConversation: (conversationList) => {
        // 有新的会话
        //conversationList 新会话列表
    },
    onTotalUnreadMessageCountChanged: (totalUnreadCount) => {
        //会话未读总数变更通知
        //totalUnreadCount 会话未读总数
    },
    onConversationChanged: (conversationList) => {
        //某些会话的关键信息发生变化
        //conversationList 变更会话列表
    },
    onConversationGroupCreated(groupName, conversationList) {
        //会话分组被创建
    },
    onConversationGroupDeleted(groupName) {
        //会话分组被删除
    },
    onConversationGroupNameChanged(oldName, newName) {
        //会话分组名变更
    },
    onConversationsAddedToGroup(groupName, conversationList) {
        //会话分组新增会话
    },
    onConversationsDeletedFromGroup(groupName, conversationList) {
        //会话分组删除会话
    },
};
//添加群组监听器
TencentImSDKPlugin.v2TIMManager
    .getConversationManager()
    .addConversationListener(listener);
