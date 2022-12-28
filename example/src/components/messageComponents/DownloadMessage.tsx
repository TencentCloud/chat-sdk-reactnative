import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { TencentImSDKPlugin } from 'react-native-tim-js';
import CommonButton from '../commonComponents/CommonButton';
import SDKResponseView from '../sdkResponseView';
import CheckBoxModalComponent from '../commonComponents/CheckboxModalComponent';
import mystylesheet from '../../stylesheets';
const DownloadMessageComponent = () => {
    const [res, setRes] = useState<any>({});
    const [conversationID, setConversationID] = useState<string>('未选择');
    const [message, setMessage] = useState<string>('[]');

    const downloadMessage = async () => {
        // const res = await TencentImSDKPlugin.v2TIMManager
        //     .getMessageManager()
        //     .findMessages([message]);

        // 下载语音消息
        // const res = await TencentImSDKPlugin.v2TIMManager
        //     .getMessageManager()
        //     .downloadMessage(message, 4, 0, false);

        // 下载图片大图片消息
        const res = await TencentImSDKPlugin.v2TIMManager
            .getMessageManager()
            .downloadMessage(message, 3, 0, false);

        // 下载视频消息
        // const res = await TencentImSDKPlugin.v2TIMManager
        //     .getMessageManager()
        //     .downloadMessage(message, 5, 0, false);

        // 下载文件消息
        // const res = await TencentImSDKPlugin.v2TIMManager
        //     .getMessageManager()
        //     .downloadMessage(message, 6, 0, false);

        setRes(res);
    };

    const CodeComponent = () => {
        return res.code !== undefined ? (
            <SDKResponseView codeString={JSON.stringify(res, null, 2)} />
        ) : null;
    };

    const MessageSelectComponent = () => {
        const [visible, setVisible] = useState<boolean>(false);
        return (
            <View style={styles.friendgroupview}>
                <View style={styles.selectContainer}>
                    <TouchableOpacity onPress={() => setVisible(true)}>
                        <View style={mystylesheet.buttonView}>
                            <Text style={mystylesheet.buttonText}>
                                选择消息
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={mystylesheet.selectedText}>{message}</Text>
                </View>
                <CheckBoxModalComponent
                    visible={visible}
                    getVisible={setVisible}
                    getUsername={setMessage}
                    type={'message'}
                    conversationID={conversationID}
                />
            </View>
        );
    };

    const ConversationSelectComponent = () => {
        const [visible, setVisible] = useState<boolean>(false);
        return (
            <View style={styles.friendgroupview}>
                <View style={styles.selectContainer}>
                    <TouchableOpacity onPress={() => setVisible(true)}>
                        <View style={mystylesheet.buttonView}>
                            <Text style={mystylesheet.buttonText}>
                                选择会话
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={mystylesheet.selectedText}>
                        {conversationID}
                    </Text>
                </View>
                <CheckBoxModalComponent
                    visible={visible}
                    getVisible={setVisible}
                    getUsername={setConversationID}
                    type={'conversation'}
                />
            </View>
        );
    };

    return (
        <View style={{ height: '100%' }}>
            <ConversationSelectComponent />
            <MessageSelectComponent />
            <CommonButton
                handler={() => {
                    downloadMessage();
                }}
                content={'下载多媒体消息'}
            />
            <CodeComponent />
        </View>
    );
};

export default DownloadMessageComponent;
const styles = StyleSheet.create({
    selectContainer: {
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 10,
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
        marginTop: 10,
    },
});
