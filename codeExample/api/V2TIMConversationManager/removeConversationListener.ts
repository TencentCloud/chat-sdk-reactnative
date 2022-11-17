import {
    TencentImSDKPlugin,
    V2TimConversationListener,
} from 'react-native-tim-js'; //添加会话到一个会话分组

//设置会话监听器
const listener: V2TimConversationListener = {
    onConversationChanged: (conversationList) => {
        //某些会话的关键信息发生变化（未读计数发生变化、最后一条消息被更新等等），可以根据会话的 lastMessage -> timestamp 重新对会话列表做排序
        //conversationList 改变的会话列表
    },
    onNewConversation: (conversationList) => {
        //有新的会话（比如收到一个新同事发来的单聊消息、或者被拉入了一个新的群组中），可以根据会话的 lastMessage -> timestamp 重新对会话列表做排序
        //conversationList 新的会话列表
    },
    onSyncServerFailed: () => {
        //同步服务器会话失败
    },
    onSyncServerFinish: () => {
        //同步服务器会话完成，如果会话有变更，会通过 onNewConversation | onConversationChanged 回调告知客户
    },
    onSyncServerStart: () => {
        //同步服务器会话开始，SDK 会在登录成功或者断网重连后自动同步服务器会话，您可以监听这个事件做一些 UI 进度展示操作。
    },
    onTotalUnreadMessageCountChanged: (totalUnreadCount) => {
        //会话未读总数变更通知，未读总数会减去设置为免打扰的会话的未读数
        //totalUnreadCount 会话未读总数
    },
};
//添加会话监听器
TencentImSDKPlugin.v2TIMManager
    .getConversationManager()
    .addConversationListener(listener); //需要新增的会话监听器
//添加之后可移除会话监听器
TencentImSDKPlugin.v2TIMManager
    .getConversationManager()
    .removeConversationListener(listener); //需要移除的会话监听器
