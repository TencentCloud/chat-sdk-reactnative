import Foundation
import ImSDK_Plus

class ConversationManager {
	private var conversationListener: ConversationListener = ConversationListener();

	public func getConversationList(param: [String: Any], resolve:@escaping RCTPromiseResolveBlock) {
		if let nextSeq = param["nextSeq"] as? String,
		   let count = param["count"] as? Int32 {
            V2TIMManager.sharedInstance().getConversationList(UInt64(nextSeq) ?? 0 , count: count, succ: {
				conversations, nextSeq, finished in
				
                let dict = V2ConversationResultEntity.init(conversations: conversations ?? [], nextSeq: String(nextSeq), finished: finished).getDict();
				CommonUtils.resultSuccess(method: "getConversationList", resolve: resolve, data: dict);
			}, fail: TencentImUtils.returnErrorClosures(method: "getConversationList", resolve: resolve))
		}
	}
	
	public func getConversationListByConversaionIds(param: [String: Any], resolve:@escaping RCTPromiseResolveBlock) {
		if let conversationIDList =  param["conversationIDList"] as? [String] {
		   V2TIMManager.sharedInstance().getConversationList(conversationIDList, succ: {
               if($0 != nil){
                   let dict = $0!.map { V2ConversationEntity.getDict(info: $0) };
                   CommonUtils.resultSuccess(method: "getConversationListByConversaionIds", resolve: resolve, data: dict);
               }
				
			}, fail: TencentImUtils.returnErrorClosures(method: "getConversationListByConversaionIds", resolve: resolve))
		}
	}
	
	public func getConversation(param: [String: Any], resolve:@escaping RCTPromiseResolveBlock) {
		if let conversationID = param["conversationID"] as? String {
			V2TIMManager.sharedInstance().getConversation(conversationID, succ: {
				conversation in
				
				CommonUtils.resultSuccess(method: "getConversation", resolve: resolve, data: V2ConversationEntity.getDict(info: conversation!));
			}, fail: TencentImUtils.returnErrorClosures(method: "getConversation", resolve: resolve))
		}
	}
	
	public func deleteConversation(param: [String: Any], resolve:@escaping RCTPromiseResolveBlock) {
		let conversationID = param["conversationID"] as? String;
		
		V2TIMManager.sharedInstance()?.deleteConversation(conversationID, succ: {
			() -> Void in
			
			CommonUtils.resultSuccess(method: "deleteConversation", resolve: resolve)
		}, fail: TencentImUtils.returnErrorClosures(method: "deleteConversation", resolve: resolve));
	}
	
	public func setConversationDraft(param: [String: Any], resolve:@escaping RCTPromiseResolveBlock) {
		let conversationID = param["conversationID"] as? String;
		let draftText = param["draftText"] as? String;
		
		V2TIMManager.sharedInstance()?.setConversationDraft(conversationID, draftText: draftText, succ: {
			() -> Void in
			
			CommonUtils.resultSuccess(method: "setConversationDraft", resolve: resolve)
		}, fail: TencentImUtils.returnErrorClosures(method: "setConversationDraft", resolve: resolve))
	}
	
	public func pinConversation(param: [String: Any], resolve:@escaping RCTPromiseResolveBlock) {
		let conversationID = param["conversationID"] as? String;
		let isPinned = param["isPinned"] as? Bool;
		
		V2TIMManager.sharedInstance()?.pinConversation(conversationID, isPinned: isPinned ?? false, succ: {
			() -> Void in
			CommonUtils.resultSuccess(method: "pinConversation", resolve: resolve, data: "ok")
		}, fail: TencentImUtils.returnErrorClosures(method: "pinConversation", resolve: resolve))
	}
	
	public func getTotalUnreadMessageCount(param: [String: Any], resolve:@escaping RCTPromiseResolveBlock) {
		V2TIMManager.sharedInstance()?.getTotalUnreadMessageCount({
			totalCount -> Void in
			CommonUtils.resultSuccess(method: "getTotalUnreadMessageCount", resolve: resolve, data: totalCount)
		}, fail: TencentImUtils.returnErrorClosures(method: "getTotalUnreadMessageCount", resolve: resolve))
	}

	public func addConversationListener(param: [String: Any], resolve:@escaping RCTPromiseResolveBlock) {
        V2TIMManager.sharedInstance().addConversationListener(listener: conversationListener);
		CommonUtils.resultSuccess(method: "addConversationListener", resolve: resolve, data: "addConversationListener is done");
	}

	public func removeConversationListener(param: [String: Any], resolve:@escaping RCTPromiseResolveBlock) {
		V2TIMManager.sharedInstance().removeConversationListener(listener: conversationListener);
		CommonUtils.resultSuccess(method: "removeConversationListener", resolve: resolve, data: "removeConversationListener is done");
	}

	public func addConversationsToGroup(param: [String: Any], resolve:@escaping RCTPromiseResolveBlock) {
        let conversationIDList:[String] = param["conversationIDList"] as! [String];
        let groupName = (param["groupName"] as? String)!;
        V2TIMManager.sharedInstance().addConversations(toGroup: groupName, conversationIDList: conversationIDList) { result_list in
            var dd : [[String:Any]] = [];
            result_list?.forEach({ item in
                dd.append([
                    "conversationID":item.conversationID ?? "",
                    "resultCode":item.resultCode ,
                    "resultInfo":item.resultInfo ?? "",
                ])
            })
            CommonUtils.resultSuccess(method: "addConversationsToGroup", resolve: resolve, data: dd)
        } fail: { code, desc in
            CommonUtils.resultFailed(desc: desc, code: code, method: "addConversationsToGroup", resolve: resolve)
        }
    }

	public func deleteConversationsFromGroup(param: [String: Any], resolve:@escaping RCTPromiseResolveBlock) {
        let conversationIDList:[String] = param["conversationIDList"] as! [String];
        let groupName = (param["groupName"] as? String)!;
        V2TIMManager.sharedInstance().deleteConversations(fromGroup: groupName, conversationIDList: conversationIDList) { result_list in
            var dd : [[String:Any]] = [];
            result_list?.forEach({ item in
                dd.append([
                    "conversationID":item.conversationID ?? "",
                    "resultCode":item.resultCode ,
                    "resultInfo":item.resultInfo ?? "",
                ])
            })
			CommonUtils.resultSuccess(method: "deleteConversationsFromGroup", resolve: resolve, data: dd)
        } fail: { code, desc in
            CommonUtils.resultFailed(desc: desc, code: code, method: "deleteConversationsFromGroup", resolve: resolve)
        }
        
    }

	public func setConversationCustomData(param: [String: Any], resolve:@escaping RCTPromiseResolveBlock) {
		let conversationIDList:[String] = param["conversationIDList"] as! [String];
        let customData = (param["customData"] as? String)!;
        V2TIMManager.sharedInstance().setConversationCustomData(conversationIDList, customData: customData.data(using: String.Encoding.utf8)) { result_list in
            var dd : [[String:Any]] = [];
            result_list?.forEach({ item in
                dd.append([
                    "conversationID":item.conversationID ?? "",
                    "resultCode":item.resultCode ,
                    "resultInfo":item.resultInfo ?? "",
                ])
            })
            CommonUtils.resultSuccess(method: "setConversationCustomData", resolve: resolve, data: dd)
        } fail: { code, desc in
            CommonUtils.resultFailed(desc: desc, code: code, method: "setConversationCustomData", resolve: resolve)
        }

    }

    public func getConversationListByFilter(param: [String: Any], resolve:@escaping RCTPromiseResolveBlock) {
        let filter = param["filter"] as? [String:Any] ?? [:];
        let filter_native = V2TIMConversationListFilter.init();
      
        if(filter["groupName"] as? String != nil){
            filter_native.groupName = (filter["groupName"] as? String)
        }
        
        if(filter["conversationType"]  as? Int != nil){
            filter_native.type = V2TIMConversationType.init(rawValue: Int(filter["conversationType"] as! Int)) ?? V2TIMConversationType.C2C
        }

        if(filter["nextSeq"]  as? UInt64 != nil){
            filter_native.nextSeq = (filter["nextSeq"] as! UInt64)
        }
        if(filter["count"]  as? UInt32 != nil){
            filter_native.count = (filter["count"] as! UInt)
        }
        if(filter["markType"]  as? UInt32 != nil){
            let u64: UInt64 = 1;
            let ab = u64 << (filter["markType"] as! UInt32)
            filter_native.markType = UInt(ab);
        }
        V2TIMManager.sharedInstance().getConversationList(by: filter_native) { conversations, nextSeq, finished in
            let dict = V2ConversationResultEntity.init(conversations: conversations ?? [], nextSeq: String(nextSeq), finished: finished).getDict();
            CommonUtils.resultSuccess(method: "getConversationListByFilter", resolve: resolve, data: dict);
        } fail: { code, desc in
            CommonUtils.resultFailed(desc: desc, code: code, method: "getConversationListByFilter", resolve: resolve)
        }

    }

    public func markConversation(param: [String: Any], resolve:@escaping RCTPromiseResolveBlock) {
		let conversationIDList:[String] = param["conversationIDList"] as! [String];
        let enableMark = (param["enableMark"] as? Bool)!;
        let markType = (param["markType"] as? Int32)!;
        let u64: UInt64 = 1;
        V2TIMManager.sharedInstance().markConversation(conversationIDList, markType: (u64 << markType) as NSNumber?, enableMark: enableMark) { result_list in
            var dd : [[String:Any]] = [];
            result_list?.forEach({ item in
                dd.append([
                    "conversationID":item.conversationID ?? "",
                    "resultCode":item.resultCode ,
                    "resultInfo":item.resultInfo ?? "",
                ])
            })
            CommonUtils.resultSuccess(method: "markConversation", resolve: resolve, data: dd)
        } fail: { code, desc in
            CommonUtils.resultFailed(desc: desc, code: code, method: "markConversation", resolve: resolve)
        }
    }

    public func createConversationGroup(param: [String: Any], resolve:@escaping RCTPromiseResolveBlock) {
		let conversationIDList:[String] = param["conversationIDList"] as! [String];
        let groupName = (param["groupName"] as? String)!;
        V2TIMManager.sharedInstance().createConversationGroup(groupName, conversationIDList: conversationIDList) { result_list in
            var dd : [[String:Any]] = [];
            result_list?.forEach({ item in
                dd.append([
                    "conversationID":item.conversationID ?? "",
                    "resultCode":item.resultCode ,
                    "resultInfo":item.resultInfo ?? "",
                ])
            })
            CommonUtils.resultSuccess(method: "createConversationGroup", resolve: resolve, data: dd)
        } fail: { code, desc in
            CommonUtils.resultFailed(desc: desc, code: code, method: "createConversationGroup", resolve: resolve)
        }
    }
    
    public func getConversationGroupList(param: [String: Any], resolve:@escaping RCTPromiseResolveBlock) {
        V2TIMManager.sharedInstance().getConversationGroupList { ids in
            CommonUtils.resultSuccess(method: "getConversationGroupList", resolve: resolve, data: ids ?? [])
        } fail: { code, desc in
            CommonUtils.resultFailed(desc: desc, code: code, method: "getConversationGroupList", resolve: resolve)
        }

    }
    public func deleteConversationGroup(param: [String: Any], resolve:@escaping RCTPromiseResolveBlock) {
        let groupName = (param["groupName"] as? String)!;
        V2TIMManager.sharedInstance().deleteConversationGroup(groupName) {
            CommonUtils.resultSuccess(method: "deleteConversationGroup", resolve: resolve)
        } fail: { code, desc in
            CommonUtils.resultFailed(desc: desc, code: code, method: "deleteConversationGroup", resolve: resolve)
        }

    }
    public func renameConversationGroup(param: [String: Any], resolve:@escaping RCTPromiseResolveBlock) {
        let oldName = (param["oldName"] as? String)!;
        let newName = (param["newName"] as? String)!;
        V2TIMManager.sharedInstance().renameConversationGroup(oldName, newName: newName) {
            CommonUtils.resultSuccess(method: "renameConversationGroup", resolve: resolve)
        } fail: { code, desc in
            CommonUtils.resultFailed(desc: desc, code: code, method: "renameConversationGroup", resolve: resolve)
        }

    }
}
