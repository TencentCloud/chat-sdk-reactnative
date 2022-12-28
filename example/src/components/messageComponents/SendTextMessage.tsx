import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Switch } from 'react-native';
import { TencentImSDKPlugin } from 'react-native-tim-js';
import CommonButton from '../commonComponents/CommonButton';
import SDKResponseView from '../sdkResponseView';
import UserInputComponent from '../commonComponents/UserInputComponent';
import CheckBoxModalComponent from '../commonComponents/CheckboxModalComponent';
import BottomModalComponent from '../commonComponents/BottomModalComponent';
import mystylesheet from '../../stylesheets';

const SendTextMessageComponent = () => {
    const [res, setRes] = useState<any>({});
    const [input, setInput] = useState<string>('');
    const [userName, setUserName] = useState<string>('未选择');
    const [groupName, setGroupName] = useState<string>('未选择');
    const [communityGroupID, setCommunityGroupID] = useState<string>('未选择');
    const [priority, setPriority] = useState<string>('V2TIM_PRIORITY_DEFAULT');
    const [priorityEnum, setPriorityEnum] = useState<number>(0);
    const [isonlineUserOnly, setIsonlineUserOnly] = useState(false);
    const [isExcludedFromUnreadCount, setIsExcludedFromUnreadCount] =
        useState(false);
    const [isSupportMessageExtension, setIsSupportMessageExtension] =
        useState(false);
    const receiveOnlineUserstoggle = () =>
        setIsonlineUserOnly((previousState) => !previousState);
    const unreadCounttoggle = () =>
        setIsExcludedFromUnreadCount((previousState) => !previousState);
    const messageExtensionCounttoggle = () =>
        setIsSupportMessageExtension((previousState) => !previousState);
    const sendTextMessage = async () => {
        const messageRes = await TencentImSDKPlugin.v2TIMManager
            .getMessageManager()
            .createTextMessage(input);

        const id = messageRes.data?.id;
        const receiver = userName === '未选择' ? '' : userName;
        const groupID = groupName === '未选择' ? '' : groupName;
        if (id !== undefined) {
            const response = await TencentImSDKPlugin.v2TIMManager
                .getMessageManager()
                .sendMessage({
                    id: id.toString(),
                    receiver: receiver,
                    groupID: groupID,
                    onlineUserOnly: isonlineUserOnly,
                    isExcludedFromUnreadCount: isExcludedFromUnreadCount,
                    isSupportMessageExtension: isSupportMessageExtension,
                    priority: priorityEnum,
                });
            setRes(response);
        }
    };

    const CodeComponent = () => {
        return res.code !== undefined ? (
            <SDKResponseView codeString={JSON.stringify(res, null, 2)} />
        ) : null;
    };

    const FriendComponent = () => {
        const [visible, setVisible] = useState<boolean>(false);

        return (
            <View style={styles.friendgroupview}>
                <View style={styles.selectContainer}>
                    <TouchableOpacity
                        onPress={() => {
                            setVisible(true);
                        }}
                    >
                        <View style={mystylesheet.buttonView}>
                            <Text style={mystylesheet.buttonText}>
                                选择好友
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={mystylesheet.selectedText}>{userName}</Text>
                </View>
                <CheckBoxModalComponent
                    visible={visible}
                    getVisible={setVisible}
                    getUsername={setUserName}
                    type={'friend'}
                />
            </View>
        );
    };

    const GroupComponent = () => {
        const [visible, setVisible] = useState<boolean>(false);

        return (
            <View style={styles.friendgroupview}>
                <View style={styles.selectContainer}>
                    <TouchableOpacity
                        onPress={() => {
                            setVisible(true);
                        }}
                    >
                        <View style={mystylesheet.buttonView}>
                            <Text style={mystylesheet.buttonText}>
                                选择群组
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={mystylesheet.selectedText}>{groupName}</Text>
                </View>
                <CheckBoxModalComponent
                    visible={visible}
                    getVisible={setVisible}
                    getUsername={setGroupName}
                    type={'group'}
                />
            </View>
        );
    };

    const PriorityComponent = () => {
        const [visible, setVisible] = useState(false);
        const getSelectedHandler = (selected) => {
            setPriority(selected.name);
            setPriorityEnum(selected.id);
        };
        return (
            <>
                <View style={mystylesheet.userInputcontainer}>
                    <View style={mystylesheet.itemContainergray}>
                        <View style={styles.selectView}>
                            <TouchableOpacity
                                onPress={() => {
                                    setVisible(true);
                                }}
                            >
                                <View style={mystylesheet.buttonView}>
                                    <Text style={mystylesheet.buttonText}>
                                        选择优先级
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <Text
                                style={styles.selectText}
                            >{`已选：${priority}`}</Text>
                        </View>
                    </View>
                </View>
                <BottomModalComponent
                    type="priorityselect"
                    visible={visible}
                    getSelected={getSelectedHandler}
                    getVisible={setVisible}
                />
            </>
        );
    };

    const CommunitySelectComponent = () => {
        const [visible, setVisible] = useState<boolean>(false);
        return (
            <View style={styles.friendgroupview}>
                <View style={styles.selectContainer}>
                    <TouchableOpacity
                        onPress={() => {
                            setVisible(true);
                        }}
                    >
                        <View style={mystylesheet.buttonView}>
                            <Text style={mystylesheet.buttonText}>
                                选择社群
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={mystylesheet.selectedText}>
                        {communityGroupID}
                    </Text>
                </View>
                <CheckBoxModalComponent
                    visible={visible}
                    getVisible={setVisible}
                    getUsername={setCommunityGroupID}
                    type={'community'}
                />
            </View>
        );
    };
    const TopicSelectComponent = () => {
        const [visible, setVisible] = useState<boolean>(false);
        return (
            <View style={styles.friendgroupview}>
                <View style={styles.selectContainer}>
                    <TouchableOpacity
                        onPress={() => {
                            setVisible(true);
                        }}
                    >
                        <View style={mystylesheet.buttonView}>
                            <Text style={mystylesheet.buttonText}>
                                选择话题
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={mystylesheet.selectedText}>{groupName}</Text>
                </View>
                <CheckBoxModalComponent
                    visible={visible}
                    getVisible={setVisible}
                    getUsername={setGroupName}
                    getSource={(val) => {
                        setGroupName(val.topicID ?? '');
                    }}
                    groupID={communityGroupID}
                    type={'topic'}
                />
            </View>
        );
    };

    return (
        <View style={{ height: '100%' }}>
            <View style={mystylesheet.userInputcontainer}>
                <UserInputComponent
                    content="发送文本"
                    placeholdercontent="发送文本"
                    getContent={setInput}
                />
            </View>
            <FriendComponent />
            <GroupComponent />
            <CommunitySelectComponent />
            <TopicSelectComponent />
            <PriorityComponent />
            <View style={mystylesheet.switchcontainer}>
                <Text style={mystylesheet.switchtext}>
                    是否仅在线用户接受到消息
                </Text>
                <Switch
                    trackColor={{ false: '#c0c0c0', true: '#81b0ff' }}
                    thumbColor={isonlineUserOnly ? '#2F80ED' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={receiveOnlineUserstoggle}
                    value={isonlineUserOnly}
                />
            </View>
            <View style={mystylesheet.switchcontainer}>
                <Text style={mystylesheet.switchtext}>
                    发送消息是否不计入未读数
                </Text>
                <Switch
                    trackColor={{ false: '#c0c0c0', true: '#81b0ff' }}
                    thumbColor={
                        isExcludedFromUnreadCount ? '#2F80ED' : '#f4f3f4'
                    }
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={unreadCounttoggle}
                    value={isExcludedFromUnreadCount}
                />
            </View>
            <View style={mystylesheet.switchcontainer}>
                <Text style={mystylesheet.switchtext}>
                    发送消息是否支持消息扩展
                </Text>
                <Switch
                    trackColor={{ false: '#c0c0c0', true: '#81b0ff' }}
                    thumbColor={
                        isSupportMessageExtension ? '#2F80ED' : '#f4f3f4'
                    }
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={messageExtensionCounttoggle}
                    value={isSupportMessageExtension}
                />
            </View>
            <CommonButton
                handler={() => {
                    sendTextMessage();
                }}
                content={'发送文本消息'}
            />
            <CodeComponent />
        </View>
    );
};

export default SendTextMessageComponent;
const styles = StyleSheet.create({
    selectContainer: {
        flexDirection: 'row',
    },
    selectView: {
        flexDirection: 'row',
    },
    selectText: {
        marginLeft: 10,
        lineHeight: 35,
        fontSize: 14,
    },
    friendgroupview: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
    },
});
