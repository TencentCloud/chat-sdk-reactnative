import Foundation
import ImSDK_Plus
import Hydra

class ConversationListener: NSObject, V2TIMConversationListener {
	let eventName: String = "conversationListener";

	/// 会话刷新
	public func onConversationChanged(_ conversationList: [V2TIMConversation]!) {
		async({
			_ -> Int in
            var cs: [[String: Any]] = [];
			for item in conversationList {
				cs.append(try Hydra.await (V2ConversationEntity.getDictAll(info: item)));
			}
			CommonUtils.emmitEvent(eventName: self.eventName, eventType: ListenerType.onConversationChanged, data: cs);
			return 1
		}).then({
			value in
		})
	}
	
	/// 新会话
	public func onNewConversation(_ conversationList: [V2TIMConversation]!) {
		var cs: [[String: Any]] = [];
		for item in conversationList {
			cs.append(V2ConversationEntity.getDict(info: item));
		}
		CommonUtils.emmitEvent(eventName: self.eventName, eventType: ListenerType.onNewConversation, data: cs);
	}

	/// 同步服务开始
	public func onSyncServerStart() {
		CommonUtils.emmitEvent(eventName: self.eventName, eventType: ListenerType.onSyncServerStart, data: nil);
	}
	
	/// 同步服务完成
	public func onSyncServerFinish() {
		CommonUtils.emmitEvent(eventName: self.eventName, eventType: ListenerType.onSyncServerFinish, data: nil);
	}
	
	/// 同步服务失败
	public func onSyncServerFailed() {
		CommonUtils.emmitEvent(eventName: self.eventName, eventType: ListenerType.onSyncServerFailed, data: nil);
	}
	
	// 未读数改变
	public func onTotalUnreadMessageCountChanged(_ totalUnreadCount: UInt64) {
		CommonUtils.emmitEvent(eventName: self.eventName, eventType: ListenerType.onTotalUnreadMessageCountChanged, data: totalUnreadCount);
	}


	// 会话分组被删除
    public func onConversationGroupDeleted(_ groupName: String!) {
        CommonUtils.emmitEvent(eventName: self.eventName, eventType: ListenerType.onConversationGroupDeleted, data: groupName)
    }

	// 会话分组被创建
    public func onConversationGroupCreated(_ groupName: String!, conversationList: [V2TIMConversation]!) {
        
        async({
                _ -> Int in
                var cs: [[String: Any]] = [];
            var dd: [String:Any] = [:];
                for item in conversationList {
                    cs.append(try Hydra.await (V2ConversationEntity.getDictAll(info: item)));
                }
            dd["groupName"] = groupName;
            dd["conversationList"] = cs;
            CommonUtils.emmitEvent(eventName: self.eventName, eventType: ListenerType.onConversationGroupCreated, data: dd)
                return 1
            }).then({
                value in
            })
    }

	// 会话分组新增会话
    public func onConversationsAdded(toGroup groupName: String!, conversationList: [V2TIMConversation]!) {
        async({
                _ -> Int in
                var cs: [[String: Any]] = [];
            var dd: [String:Any] = [:];
                for item in conversationList {
                    cs.append(try Hydra.await (V2ConversationEntity.getDictAll(info: item)));
                }
            dd["groupName"] = groupName;
            dd["conversationList"] = cs;
            CommonUtils.emmitEvent(eventName: self.eventName, eventType: ListenerType.onConversationsAddedToGroup, data: dd)
                return 1
            }).then({
                value in
            })
    }

	// 会话分组删除会话
    public func onConversationsDeleted(fromGroup groupName: String!, conversationList: [V2TIMConversation]!) {
        async({
                _ -> Int in
                var cs: [[String: Any]] = [];
            var dd: [String:Any] = [:];
                for item in conversationList {
                    cs.append(try Hydra.await (V2ConversationEntity.getDictAll(info: item)));
                }
            dd["groupName"] = groupName;
            dd["conversationList"] = cs;
            CommonUtils.emmitEvent(eventName: self.eventName, eventType: ListenerType.onConversationsDeletedFromGroup, data: dd)
                return 1
            }).then({
                value in
            })
    }

	// 会话分组名变更
    public func onConversationGroupNameChanged(_ oldName: String!, newName: String!) {
        var dd: [String:Any] = [:];
        dd["oldName"] = oldName
        dd["newName"] = newName
        CommonUtils.emmitEvent(eventName: self.eventName, eventType: ListenerType.onConversationGroupNameChanged, data: dd)
    }
}
