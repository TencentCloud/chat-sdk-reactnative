import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { TencentImSDKPlugin, V2TimTopicInfo } from 'react-native-tim-js';
import CommonButton from '../commonComponents/CommonButton';
import SDKResponseView from '../sdkResponseView';
import CheckBoxModalComponent from '../commonComponents/CheckboxModalComponent';
import mystylesheet from '../../stylesheets';
import UserInputComponent from '../commonComponents/UserInputComponent';

const SetTopicInfo = () => {
    const [groupID, setGroupID] = useState<string>('未选择');
    const [topicID, setTopicID] = useState<string>('未选择');
    const [res, setRes] = React.useState<any>({});
    const [topicName, setTopicName] = useState<string>('');
    const [topicFaceURL, setTopicFaceUrl] = useState<string>('');
    const [customString, setCustomString] = useState<string>('');

    const deleteTopic = async () => {
        console.log(customString);
        const response = await TencentImSDKPlugin.v2TIMManager
            .getGroupManager()
            .setTopicInfo(groupID, {
                topicID,
                topicFaceUrl: topicFaceURL === '' ? undefined : topicFaceURL,
                topicName: topicName === '' ? undefined : topicName,
                customString: customString === '' ? undefined : customString,
            });
        setRes(response);
    };

    const getSourceValue = (val: V2TimTopicInfo) => {
        setTopicID(val.topicID ?? '');
    };
    const CodeComponent = () => {
        return res.code !== undefined ? (
            <SDKResponseView codeString={JSON.stringify(res, null, 2)} />
        ) : null;
    };
    const GroupSelectComponent = () => {
        const [visible, setVisible] = useState<boolean>(false);
        return (
            <View style={styles.container}>
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
                    <Text style={mystylesheet.selectedText}>{groupID}</Text>
                </View>
                <CheckBoxModalComponent
                    visible={visible}
                    getVisible={setVisible}
                    getUsername={setGroupID}
                    type={'community'}
                />
            </View>
        );
    };
    const TopicSelectComponent = () => {
        const [visible, setVisible] = useState<boolean>(false);
        return (
            <View style={styles.container}>
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
                    <Text style={mystylesheet.selectedText}>{topicID}</Text>
                </View>
                <CheckBoxModalComponent
                    visible={visible}
                    getVisible={setVisible}
                    getUsername={setTopicID}
                    getSource={getSourceValue}
                    groupID={groupID}
                    type={'topic'}
                />
            </View>
        );
    };
    return (
        <View style={{ height: '100%' }}>
            <GroupSelectComponent />
            <TopicSelectComponent />
            <UserInputComponent
                content="话题名称"
                placeholdercontent="话题名称"
                getContent={setTopicName}
            />
            <UserInputComponent
                content="话题头像"
                placeholdercontent="话题头像"
                getContent={setTopicFaceUrl}
            />
            <UserInputComponent
                content="自定义字段"
                placeholdercontent="自定义字段"
                getContent={setCustomString}
            />
            <CommonButton
                handler={() => deleteTopic()}
                content={'修改话题信息'}
            />
            <CodeComponent />
        </View>
    );
};

export default SetTopicInfo;

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
    },
    selectView: {
        flexDirection: 'row',
    },
    selectContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    userInputcontainer: {
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'center',
    },
    selectText: {
        marginLeft: 10,
        lineHeight: 35,
        fontSize: 14,
    },
    nextseqstyle: {
        margin: 10,
    },
});
