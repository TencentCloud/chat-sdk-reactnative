/**
 * @module interface
 */
import type { V2TimConversation } from './v2TimConversation';

export interface V2TimConversationListener {
    onSyncServerStart?: () => void;
    onSyncServerFinish?: () => void;
    onSyncServerFailed?: () => void;
    onNewConversation?: (conversationList: V2TimConversation[]) => void;
    onTotalUnreadMessageCountChanged?: (totalUnreadCount: number) => void;
    onConversationChanged?: (conversationList: V2TimConversation[]) => void;
    onConversationGroupCreated?: (
        groupName: String,
        conversationList: V2TimConversation[]
    ) => void;
    onConversationGroupDeleted?: (groupName: String) => void;
    onConversationGroupNameChanged?: (oldName: String, newName: String) => void;
    onConversationsAddedToGroup?: (
        groupName: String,
        conversationList: V2TimConversation[]
    ) => void;
    onConversationsDeletedFromGroup?: (
        groupName: String,
        conversationList: V2TimConversation[]
    ) => void;
}
