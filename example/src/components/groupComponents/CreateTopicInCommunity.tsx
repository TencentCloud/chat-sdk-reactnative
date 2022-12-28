import React, { useState } from 'react';

import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { TencentImSDKPlugin } from 'react-native-tim-js';
import CommonButton from '../commonComponents/CommonButton';
import UserInputComponent from '../commonComponents/UserInputComponent';
import mystylesheet from '../../stylesheets';
import SDKResponseView from '../sdkResponseView';
import CheckBoxModalComponent from '../commonComponents/CheckboxModalComponent';

const CreateTopicInCommunity = () => {
    const createTopic = async () => {
        const res = await TencentImSDKPlugin.v2TIMManager
            .getGroupManager()
            .createTopicInCommunity(groupID, {
                topicName: groupName,
                topicFaceURL: topicFaceUrl,
                topicID,
                introduction: briefly,
            });
        setRes(res);
    };
    const [groupID, setGroupID] = useState<string>('');
    const [groupName, setGroupName] = useState<string>('');
    const [briefly, setBriefly] = useState<string>('');
    const [topicID, setTopicID] = useState<string>('');
    const [topicFaceUrl, setTopicFaceUrl] = useState<string>('');
    const [res, setRes] = useState<any>({});
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
    return (
        <View style={{ height: '100%' }}>
            <GroupSelectComponent />
            <View style={mystylesheet.userInputcontainer}>
                <UserInputComponent
                    content="话题ID"
                    placeholdercontent="话题ID"
                    getContent={setTopicID}
                />
            </View>
            <View style={mystylesheet.userInputcontainer}>
                <UserInputComponent
                    content="话题名称"
                    placeholdercontent="话题名称"
                    getContent={setGroupName}
                />
            </View>
            <View style={mystylesheet.userInputcontainer}>
                <UserInputComponent
                    content="话题头像"
                    placeholdercontent="话题头像"
                    getContent={setTopicFaceUrl}
                />
            </View>
            <View style={mystylesheet.userInputcontainer}>
                <UserInputComponent
                    content="话题简介"
                    placeholdercontent="话题简介"
                    getContent={setBriefly}
                />
            </View>
            <CommonButton handler={() => createTopic()} content={'创建话题'} />
            <CodeComponent />
        </View>
    );
};

export default CreateTopicInCommunity;

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
    },
    prioritySelectView: {
        flexDirection: 'row',
    },
    prioritySelectText: {
        marginTop: 5,
        fontSize: 14,
        marginLeft: 5,
    },
    selectView: {
        flexDirection: 'row',
    },
    faceurlbuttonView: {
        backgroundColor: '#2F80ED',
        borderRadius: 3,
        width: 130,
        height: 35,
        marginTop: -5,
        marginRight: 10,
    },
    faceurlbuttonText: {
        color: '#FFFFFF',
        fontSize: 14,
        textAlign: 'center',
        textAlignVertical: 'center',
        lineHeight: 35,
    },
    faceUrl: {
        width: 45,
        height: 45,
        marginTop: -10,
    },
    selectContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    groupSelectView: {
        flexDirection: 'row',
    },
    groupSelectText: {
        marginTop: 5,
        fontSize: 14,
        marginLeft: 5,
    },
});
