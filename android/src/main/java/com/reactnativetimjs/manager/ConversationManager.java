package com.reactnativetimjs.manager;

import com.reactnativetimjs.util.CommonUtils;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReadableMap;

import com.tencent.imsdk.v2.V2TIMCallback;
import com.tencent.imsdk.v2.V2TIMConversation;
import com.tencent.imsdk.v2.V2TIMConversationListener;
import com.tencent.imsdk.v2.V2TIMConversationResult;
import com.tencent.imsdk.v2.V2TIMManager;
import com.tencent.imsdk.v2.V2TIMValueCallback;
import com.tencent.imsdk.v2.V2TIMConversationOperationResult;
import com.tencent.imsdk.v2.V2TIMConversationListFilter;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;

public class ConversationManager {
    private static V2TIMConversationListener conversationListener;

    public void removeConversationListener(Promise promise, ReadableMap arguments) {
        V2TIMManager.getConversationManager().removeConversationListener(conversationListener);
        CommonUtils.returnSuccess(promise, "removeConversationListener is done");
    }

    public void addConversationListener(Promise promise, ReadableMap arguments) {
        conversationListener = new V2TIMConversationListener() {
            @Override
            public void onSyncServerStart() {
                makeConversationListenerEventData("onSyncServerStart", null);
            }

            @Override
            public void onSyncServerFinish() {
                makeConversationListenerEventData("onSyncServerFinish", null);
            }

            @Override
            public void onSyncServerFailed() {
                makeConversationListenerEventData("onSyncServerFailed", null);
            }

            @Override
            public void onNewConversation(List<V2TIMConversation> conversationList) {
                LinkedList<HashMap<String, Object>> list = new LinkedList<HashMap<String, Object>>();
                for (int i = 0; i < conversationList.size(); i++) {
                    list.add(CommonUtils.convertV2TIMConversationToMap(conversationList.get(i)));
                }
                makeConversationListenerEventData("onNewConversation", list);
            }

            @Override
            public void onConversationChanged(List<V2TIMConversation> conversationList) {
                LinkedList<HashMap<String, Object>> list = new LinkedList<HashMap<String, Object>>();
                for (int i = 0; i < conversationList.size(); i++) {
                    list.add(CommonUtils.convertV2TIMConversationToMap(conversationList.get(i)));
                }
                makeConversationListenerEventData("onConversationChanged", list);
            }

            @Override
            public void onTotalUnreadMessageCountChanged(long totalUnreadCount) {
                makeConversationListenerEventData("onTotalUnreadMessageCountChanged", totalUnreadCount);
            }

            @Override
            public void onConversationGroupCreated(String groupName, List<V2TIMConversation> conversationList) {
                HashMap<String, Object> data = new HashMap<>();
                data.put("groupName", groupName);
                LinkedList<HashMap<String, Object>> list = new LinkedList<HashMap<String, Object>>();
                for (int i = 0; i < conversationList.size(); i++) {
                    list.add(CommonUtils.convertV2TIMConversationToMap(conversationList.get(i)));
                }
                data.put("conversationList", list);
                makeConversationListenerEventData("onConversationGroupCreated", data);
            }

            @Override
            public void onConversationGroupDeleted(String groupName) {
                makeConversationListenerEventData("onConversationGroupDeleted", groupName);
            }

            @Override
            public void onConversationGroupNameChanged(String oldName, String newName) {
                HashMap<String, Object> data = new HashMap<>();
                data.put("oldName", oldName);
                data.put("newName", newName);
                makeConversationListenerEventData("onConversationGroupNameChanged", data);
            }

            @Override
            public void onConversationsAddedToGroup(String groupName, List<V2TIMConversation> conversationList) {
                HashMap<String, Object> data = new HashMap<>();
                data.put("groupName", groupName);
                LinkedList<HashMap<String, Object>> list = new LinkedList<HashMap<String, Object>>();
                for (int i = 0; i < conversationList.size(); i++) {
                    list.add(CommonUtils.convertV2TIMConversationToMap(conversationList.get(i)));
                }
                data.put("conversationList", list);
                makeConversationListenerEventData("onConversationsAddedToGroup", data);
            }

            @Override
            public void onConversationsDeletedFromGroup(String groupName, List<V2TIMConversation> conversationList) {
                HashMap<String, Object> data = new HashMap<>();
                data.put("groupName", groupName);
                LinkedList<HashMap<String, Object>> list = new LinkedList<HashMap<String, Object>>();
                for (int i = 0; i < conversationList.size(); i++) {
                    list.add(CommonUtils.convertV2TIMConversationToMap(conversationList.get(i)));
                }
                data.put("conversationList", list);
                makeConversationListenerEventData("onConversationsDeletedFromGroup", data);
            }
        };
        V2TIMManager.getConversationManager().addConversationListener(conversationListener);
        CommonUtils.returnSuccess(promise, "addConversationListener success");
    }

    public void getConversation(Promise promise, ReadableMap arguments) {
        String conversationID = arguments.getString("conversationID");
        V2TIMManager.getConversationManager().getConversation(conversationID,
                new V2TIMValueCallback<V2TIMConversation>() {
                    @Override
                    public void onError(int i, String s) {
                        CommonUtils.returnError(promise, i, s);
                    }

                    @Override
                    public void onSuccess(V2TIMConversation v2TIMConversation) {
                        CommonUtils.returnSuccess(promise,
                                CommonUtils.convertV2TIMConversationToMap(v2TIMConversation));
                    }
                });
    }

    private <T> void makeConversationListenerEventData(String eventType, T data) {
        CommonUtils.emmitEvent("conversationListener", eventType, data);
    }

    public void getConversationList(Promise promise, ReadableMap arguments) {
        String nextSeq = arguments.getString("nextSeq");
        int count = arguments.getInt("count");
        V2TIMManager.getConversationManager().getConversationList(Long.parseLong(nextSeq), count,
                new V2TIMValueCallback<V2TIMConversationResult>() {
                    @Override
                    public void onError(int i, String s) {
                        CommonUtils.returnError(promise, i, s);
                    }

                    @Override
                    public void onSuccess(V2TIMConversationResult v2TIMConversationResult) {
                        CommonUtils.returnSuccess(promise,
                                CommonUtils.convertV2TIMConversationResultToMap(v2TIMConversationResult));
                    }
                });
    }

    public void getConversationListByConversaionIds(Promise promise, ReadableMap arguments) {
        List<String> conversationIDList = CommonUtils
                .convertReadableArrayToListString(arguments.getArray("conversationIDList"));
        V2TIMManager.getConversationManager().getConversationList(conversationIDList,
                new V2TIMValueCallback<List<V2TIMConversation>>() {
                    @Override
                    public void onSuccess(List<V2TIMConversation> v2TIMConversations) {
                        LinkedList<HashMap<String, Object>> list = new LinkedList<HashMap<String, Object>>();
                        for (int i = 0; i < v2TIMConversations.size(); i++) {
                            list.add(CommonUtils.convertV2TIMConversationToMap(v2TIMConversations.get(i)));
                        }
                        CommonUtils.returnSuccess(promise, list);
                    }

                    @Override
                    public void onError(int i, String s) {
                        CommonUtils.returnError(promise, i, s);
                    }
                });
    }

    public void pinConversation(Promise promise, ReadableMap arguments) {
        String conversationID = arguments.getString("conversationID");
        boolean isPinned = arguments.getBoolean("isPinned");
        V2TIMManager.getConversationManager().pinConversation(conversationID, isPinned, new V2TIMCallback() {
            @Override
            public void onSuccess() {
                CommonUtils.returnSuccess(promise, null);
            }

            @Override
            public void onError(int i, String s) {
                CommonUtils.returnError(promise, i, s);
            }
        });
    }

    public void getTotalUnreadMessageCount(Promise promise, ReadableMap arguments) {
        V2TIMManager.getConversationManager().getTotalUnreadMessageCount(new V2TIMValueCallback<Long>() {
            @Override
            public void onSuccess(Long aLong) {
                CommonUtils.returnSuccess(promise, aLong);
            }

            @Override
            public void onError(int i, String s) {
                CommonUtils.returnError(promise, i, s);
            }
        });
    }

    public void deleteConversation(Promise promise, ReadableMap arguments) {
        // session id
        String conversationID = arguments.getString("conversationID");
        V2TIMManager.getConversationManager().deleteConversation(conversationID, new V2TIMCallback() {
            @Override
            public void onError(int i, String s) {
                CommonUtils.returnError(promise, i, s);
            }

            @Override
            public void onSuccess() {
                CommonUtils.returnSuccess(promise, null);
            }
        });

    }

    public void setConversationDraft(Promise promise, ReadableMap arguments) {
        // session id
        String conversationID = arguments.getString("conversationID");
        String draftText = arguments.getString("draftText");
        if (draftText == "") {
            draftText = null;
        }
        V2TIMManager.getConversationManager().setConversationDraft(conversationID, draftText, new V2TIMCallback() {
            @Override
            public void onError(int i, String s) {
                CommonUtils.returnError(promise, i, s);
            }

            @Override
            public void onSuccess() {
                CommonUtils.returnSuccess(promise, null);
            }
        });

    }

    public void addConversationsToGroup(Promise promise, ReadableMap arguments) {
        List<String> conversationIDList = CommonUtils
                .convertReadableArrayToListString(arguments.getArray("conversationIDList"));
        String groupName = arguments.getString("groupName");
        V2TIMManager.getConversationManager().addConversationsToGroup(groupName, conversationIDList,
                new V2TIMValueCallback<List<V2TIMConversationOperationResult>>() {
                    @Override
                    public void onSuccess(List<V2TIMConversationOperationResult> v2TIMConversationOperationResults) {
                        LinkedList<HashMap<String, Object>> list = new LinkedList<HashMap<String, Object>>();
                        for (int i = 0; i < v2TIMConversationOperationResults.size(); i++) {
                            list.add(CommonUtils.convertV2TIMConversationOperationResultToMap(
                                    v2TIMConversationOperationResults.get(i)));
                        }
                        CommonUtils.returnSuccess(promise, list);
                    }

                    @Override
                    public void onError(int i, String s) {
                        CommonUtils.returnError(promise, i, s);
                    }
                });
    }

    public void deleteConversationsFromGroup(Promise promise, ReadableMap arguments) {
        List<String> conversationIDList = CommonUtils
                .convertReadableArrayToListString(arguments.getArray("conversationIDList"));
        String groupName = arguments.getString("groupName");
        V2TIMManager.getConversationManager().deleteConversationsFromGroup(groupName, conversationIDList,
                new V2TIMValueCallback<List<V2TIMConversationOperationResult>>() {
                    @Override
                    public void onSuccess(List<V2TIMConversationOperationResult> v2TIMConversationOperationResults) {
                        LinkedList<HashMap<String, Object>> list = new LinkedList<HashMap<String, Object>>();
                        for (int i = 0; i < v2TIMConversationOperationResults.size(); i++) {
                            list.add(CommonUtils.convertV2TIMConversationOperationResultToMap(
                                    v2TIMConversationOperationResults.get(i)));
                        }
                        CommonUtils.returnSuccess(promise, list);
                    }

                    @Override
                    public void onError(int i, String s) {
                        CommonUtils.returnError(promise, i, s);
                    }
                });
    }

    public void setConversationCustomData(Promise promise, ReadableMap arguments) {
        List<String> conversationIDList = CommonUtils
                .convertReadableArrayToListString(arguments.getArray("conversationIDList"));
        String customData = arguments.getString("customData");
        V2TIMManager.getConversationManager().setConversationCustomData(conversationIDList, customData,
                new V2TIMValueCallback<List<V2TIMConversationOperationResult>>() {
                    @Override
                    public void onSuccess(List<V2TIMConversationOperationResult> v2TIMConversationOperationResults) {
                        LinkedList<HashMap<String, Object>> list = new LinkedList<>();
                        for (int i = 0; i < v2TIMConversationOperationResults.size(); i++) {
                            list.add(CommonUtils.convertV2TIMConversationOperationResultToMap(
                                    v2TIMConversationOperationResults.get(i)));
                        }
                        CommonUtils.returnSuccess(promise, list);
                    }

                    @Override
                    public void onError(int i, String s) {
                        CommonUtils.returnError(promise, i, s);
                    }
                });
    }

    public void getConversationListByFilter(Promise promise, ReadableMap arguments) {
        final HashMap<String, Object> filter = CommonUtils
                .convertReadableMapToHashMap(CommonUtils.safeGetMap(arguments, "filter"));
        final V2TIMConversationListFilter filterNative = new V2TIMConversationListFilter();
        if (filter.get("conversationType") != null) {
            filterNative.setConversationType((Integer) filter.get("conversationType"));
        }
        if (filter.get("nextSeq") != null) {
            filterNative.setNextSeq(Long.parseLong(filter.get("nextSeq").toString()));
        }
        if (filter.get("count") != null) {
            filterNative.setCount((Integer) filter.get("count"));
        }
        if (filter.get("markType") != null) {
            filterNative.setMarkType(0x1l << (int) filter.get("markType"));
        }
        if (filter.get("groupName") != null) {
            filterNative.setGroupName((String) filter.get("groupName"));
        }
        V2TIMManager.getConversationManager().getConversationListByFilter(filterNative,
                new V2TIMValueCallback<V2TIMConversationResult>() {
                    @Override
                    public void onSuccess(V2TIMConversationResult v2TIMConversationResult) {
                        CommonUtils.returnSuccess(promise,
                                CommonUtils.convertV2TIMConversationResultToMap(v2TIMConversationResult));
                    }

                    @Override
                    public void onError(int i, String s) {
                        CommonUtils.returnError(promise, i, s);
                    }
                });

    }

    public void markConversation(Promise promise, ReadableMap arguments) {
        List<String> conversationIDList = CommonUtils
                .convertReadableArrayToListString(arguments.getArray("conversationIDList"));
        boolean enableMark = arguments.getBoolean("enableMark");
        int markType = arguments.getInt("markType");
        long longMarkType = 0x1l << markType;
        V2TIMManager.getConversationManager().markConversation(conversationIDList, longMarkType, enableMark,
                new V2TIMValueCallback<List<V2TIMConversationOperationResult>>() {
                    @Override
                    public void onSuccess(List<V2TIMConversationOperationResult> v2TIMConversationOperationResults) {
                        LinkedList<HashMap<String, Object>> list = new LinkedList<HashMap<String, Object>>();
                        for (int i = 0; i < v2TIMConversationOperationResults.size(); i++) {
                            list.add(CommonUtils.convertV2TIMConversationOperationResultToMap(
                                    v2TIMConversationOperationResults.get(i)));
                        }
                        CommonUtils.returnSuccess(promise, list);
                    }

                    @Override
                    public void onError(int i, String s) {
                        CommonUtils.returnError(promise, i, s);
                    }
                });

    }

    public void createConversationGroup(Promise promise, ReadableMap arguments) {
        List<String> conversationIDList = CommonUtils
                .convertReadableArrayToListString(arguments.getArray("conversationIDList"));
        String groupName = arguments.getString("groupName");
        V2TIMManager.getConversationManager().createConversationGroup(groupName, conversationIDList,
                new V2TIMValueCallback<List<V2TIMConversationOperationResult>>() {
                    @Override
                    public void onSuccess(List<V2TIMConversationOperationResult> v2TIMConversationOperationResults) {
                        LinkedList<HashMap<String, Object>> list = new LinkedList<HashMap<String, Object>>();
                        for (int i = 0; i < v2TIMConversationOperationResults.size(); i++) {
                            list.add(CommonUtils.convertV2TIMConversationOperationResultToMap(
                                    v2TIMConversationOperationResults.get(i)));
                        }
                        CommonUtils.returnSuccess(promise, list);
                    }

                    @Override
                    public void onError(int i, String s) {
                        CommonUtils.returnError(promise, i, s);
                    }
                });
    }

    public void getConversationGroupList(Promise promise, ReadableMap arguments) {
        V2TIMManager.getConversationManager().getConversationGroupList(new V2TIMValueCallback<List<String>>() {
            @Override
            public void onSuccess(List<String> strings) {
                List<String> list = new LinkedList();
                for (int i = 0; i < strings.size(); i++) {
                    list.add(strings.get(i));
                }
                System.out.println(list);
                CommonUtils.returnSuccess(promise, list);
            }

            @Override
            public void onError(int i, String s) {
                CommonUtils.returnError(promise, i, s);
            }
        });
    }

    public void deleteConversationGroup(Promise promise, ReadableMap arguments) {
        String groupName = arguments.getString("groupName");
        V2TIMManager.getConversationManager().deleteConversationGroup(groupName, new V2TIMCallback() {
            @Override
            public void onSuccess() {
                CommonUtils.returnSuccess(promise, null);
            }

            @Override
            public void onError(int i, String s) {
                CommonUtils.returnError(promise, i, s);
            }
        });
    }

    public void renameConversationGroup(Promise promise, ReadableMap arguments) {
        String oldName = arguments.getString("oldName");
        String newName = arguments.getString("newName");
        V2TIMManager.getConversationManager().renameConversationGroup(oldName, newName, new V2TIMCallback() {
            @Override
            public void onSuccess() {
                CommonUtils.returnSuccess(promise, null);
            }

            @Override
            public void onError(int i, String s) {
                CommonUtils.returnError(promise, i, s);
            }
        });

    }
}
