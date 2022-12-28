import Foundation
import ImSDK_Plus
import Hydra

class AdvancedMsgListener: NSObject, V2TIMAdvancedMsgListener {
    let eventName: String = "messageListener";

	/// 新消息通知
	public func onRecvNewMessage(_ msg: V2TIMMessage!) {
            let promise =  Promise<Int>(in: .main,{ resolve, reject, _ in
                V2MessageEntity.init(message: msg!).getDictAll().then(in: .main,{ res in
                    CommonUtils.emmitEvent(eventName: self.eventName, eventType: ListenerType.onRecvNewMessage, data: res);
                    resolve(1);
                })
            })
        
        HydraThreadManager.subsc(promise: promise);
	}
    
    public func onRecvMessageRead(_ receiptList: [V2TIMMessageReceipt]!) {
        var data: [[String: Any]] = [];
        for item in receiptList {
            data.append(V2MessageReceiptEntity.getDict(info: item));
        }
        CommonUtils.emmitEvent(eventName: eventName, eventType: ListenerType.onRecvMessageReadReceipts, data: data);
    }
	
	/// C2C已读回执
	public func onRecvC2CReadReceipt(_ receiptList: [V2TIMMessageReceipt]!) {
		var data: [[String: Any]] = [];
		for item in receiptList {
			data.append(V2MessageReceiptEntity.getDict(info: item));
        }
        CommonUtils.emmitEvent(eventName: eventName, eventType: ListenerType.onRecvC2CReadReceipt, data: data);
	}
	
	/// 消息撤回
	public func onRecvMessageRevoked(_ msgID: String!) {
        CommonUtils.emmitEvent(eventName: eventName, eventType: ListenerType.onRecvMessageRevoked, data: msgID);
	}
	

    public func onRecvMessageModified(_ msg: V2TIMMessage!) {
        let promise =  Promise<Int>(in: .main,{ resolve, reject, _ in
                V2MessageEntity.init(message: msg!).getDictAll().then(in: .main,{ res in
                    CommonUtils.emmitEvent(eventName: self.eventName, eventType: ListenerType.onRecvMessageModified, data: res);
                    resolve(1);
                })
            })
        
        HydraThreadManager.subsc(promise: promise);
	}
    
    public func onRecvMessageExtensionsChanged(_ msgID: String!, extensions: [V2TIMMessageExtension]!) {
        var data = [String:Any]();
        data["msgID"] = msgID ?? "";
        var resList = [[String:Any]]();
        for res:V2TIMMessageExtension in extensions ?? [] {
            var resItem = [String: Any]();
            resItem["extensionKey"] = res.extensionKey as Any;
            resItem["extensionValue"] = res.extensionValue as Any;
            resList.append(resItem);
        }
        data["extensions"] = resList;
        CommonUtils.emmitEvent(eventName: eventName, eventType: ListenerType.onRecvMessageExtensionsChanged, data: data);
    }
    
    public func onRecvMessageExtensionsDeleted(_ msgID: String!, extensionKeys: [String]!) {
        var data = [String:Any]();
        data["msgID"] = msgID ?? "";
        data["extensionKeys"] = extensionKeys;
        CommonUtils.emmitEvent(eventName: eventName, eventType: ListenerType.onRecvMessageExtensionsDeleted, data: data);
    }
}
