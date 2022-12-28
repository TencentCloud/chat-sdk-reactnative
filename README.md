# Tencent Chat SDK for React native

<img src="https://camo.githubusercontent.com/c1e070dc8b0a68158dbc5fd476a1a35158f5f62fea16964e82beeaa9ee28094b/68747470733a2f2f7765622e73646b2e71636c6f75642e636f6d2f696d2f64656d6f2f6c61746573742f696d672f6c6f676f2e36383066393833332e737667" width="365" height="182" data-canonical-src="https://web.sdk.qcloud.com/im/demo/latest/img/logo.680f9833.svg" style="max-width: 100%;">

Tencent Cloud's official `IM React Native SDK` can easily integrate chat, conversation, group, and data management capabilities to help you send and receive rich media messages such as text, pictures, short voices, and short videos, fully meeting communication needs.

## About Tencent Cloud Chat
Tencent Cloud Chat provides globally interconnected chat APIs, multi-platform SDKs, and UIKit components to help you quickly bring messaging capabilities such as one-to-one chat, group chat, chat rooms, and system notifications to your applications and websites.

Through the official React Native SDK react-native-tim-js, you can efficiently integrate real-time chat into your client app.

You can sign up for a Tencent Cloud account at [here](https://www.tencentcloud.com/en/account/login?s_url=https%3A%2F%2Fconsole.tencentcloud.com%2Fim).

Explore more docs about [Tencent Cloud Chat](https://www.tencentcloud.com/en/products/im).

## Commonly Used Scenarios
- Online Customer Service

  <img src="https://camo.githubusercontent.com/9a217df8c6d869ad491e6998aefbb29d10fa8f64efc7b2a38eb62f722e02eb54/68747470733a2f2f636c6f756463616368652e696e746c2e74656e63656e742d636c6f75642e636f6d2f636d732f6261636b656e642d636d732f4c3751363931325f25453525394325413825453725424125424625453525414525413225453625394325384425343032782e6a7067" width="730" height="410" data-canonical-src="https://cloudcache.intl.tencent-cloud.com/cms/backend-cms/L7Q6912_%E5%9C%A8%E7%BA%BF%E5%AE%A2%E6%9C%8D%402x.jpg" style="max-width: 100%;">

- OA

  <img src="https://camo.githubusercontent.com/32c69a2c1f4f5355b518f631bb49d96a12e8e2a7fe97185db34b6d5dcf9c215a/68747470733a2f2f636c6f756463616368652e696e746c2e74656e63656e742d636c6f75642e636f6d2f636d732f6261636b656e642d636d732f6e58514e3333315f25453425424325383125453425423825394125453525384125394525453525383525414325343032782e6a7067" width="730" height="410" data-canonical-src="https://cloudcache.intl.tencent-cloud.com/cms/backend-cms/nXQN331_%E4%BC%81%E4%B8%9A%E5%8A%9E%E5%85%AC%402x.jpg" style="max-width: 100%;">

- Interactive Live Streaming

  <img src="https://camo.githubusercontent.com/7f74aa74b2a59dca72a301e096fcf00326c510c6728d3219d386fa8197d9a732/68747470733a2f2f636c6f756463616368652e696e746c2e74656e63656e742d636c6f75642e636f6d2f636d732f6261636b656e642d636d732f485934463638375f25453425424125393225453525384125413825453725394225423425453625393225414425343032782e6a7067" width="730" height="410" data-canonical-src="https://cloudcache.intl.tencent-cloud.com/cms/backend-cms/HY4F687_%E4%BA%92%E5%8A%A8%E7%9B%B4%E6%92%AD%402x.jpg" style="max-width: 100%;">

- Social Messaging

  <img src="https://camo.githubusercontent.com/622200c82af752d7ceb862147ff88dabf38750fbc7ae15429c4e0db326406f95/68747470733a2f2f636c6f756463616368652e696e746c2e74656e63656e742d636c6f75642e636f6d2f636d732f6261636b656e642d636d732f6d3979523332355f25453725413425424525453425424125413425453625423225394625453925383025394125343032782e6a7067" width="730" height="410" data-canonical-src="https://cloudcache.intl.tencent-cloud.com/cms/backend-cms/m9yR325_%E7%A4%BE%E4%BA%A4%E6%B2%9F%E9%80%9A%402x.jpg" style="max-width: 100%;">

- Influencer Marketing
  
  <img src="https://camo.githubusercontent.com/e05de48dffec4fa0d355cd785e0c5d7dc2ca187fefc86b5aac744c20c28b5bcb/68747470733a2f2f636c6f756463616368652e696e746c2e74656e63656e742d636c6f75642e636f6d2f636d732f6261636b656e642d636d732f567451353736345f25453725393425423525453525393525383625453525423825413625453825423425413725343032782e6a7067" width="730" height="410" data-canonical-src="https://cloudcache.intl.tencent-cloud.com/cms/backend-cms/VtQ5764_%E7%94%B5%E5%95%86%E5%B8%A6%E8%B4%A7%402x.jpg" style="max-width: 100%;">

- Interactive Game

  <img src="https://camo.githubusercontent.com/3d6a8ae6081c34901334b26b5ee53953d48a9303e98d1f8ec53a869e97462eba/68747470733a2f2f636c6f756463616368652e696e746c2e74656e63656e742d636c6f75642e636f6d2f636d732f6261636b656e642d636d732f587562493736395f25453425424125393225453525384125413825453625423825423825453625383825384625343032782e6a7067" width="730" height="410" data-canonical-src="https://cloudcache.intl.tencent-cloud.com/cms/backend-cms/XubI769_%E4%BA%92%E5%8A%A8%E6%B8%B8%E6%88%8F%402x.jpg" style="max-width: 100%;">

- Online Education
  
  <img src="https://camo.githubusercontent.com/0b154201b11573c4959dd3242a3861ef5bac789d4097ff9b67b604b04bd86027/68747470733a2f2f636c6f756463616368652e696e746c2e74656e63656e742d636c6f75642e636f6d2f636d732f6261636b656e642d636d732f646b495a3831335f25453525394325413825453725424125424625453625393525393925453825383225423225343032782e6a7067" width="730" height="410" data-canonical-src="https://cloudcache.intl.tencent-cloud.com/cms/backend-cms/dkIZ813_%E5%9C%A8%E7%BA%BF%E6%95%99%E8%82%B2%402x.jpg" style="max-width: 100%;">

- Online Healthcare
  
  <img src="https://camo.githubusercontent.com/e4ee25eeee9e85f8d01db85c007dde82796946f08f86942fc7dcc65a745f49bf/68747470733a2f2f636c6f756463616368652e696e746c2e74656e63656e742d636c6f75642e636f6d2f636d732f6261636b656e642d636d732f373744733936355f25453525394325413825453725424125424625453525384325424225453725393625393725343032782e6a7067" width="730" height="410" data-canonical-src="https://cloudcache.intl.tencent-cloud.com/cms/backend-cms/77Ds965_%E5%9C%A8%E7%BA%BF%E5%8C%BB%E7%96%97%402x.jpg" style="max-width: 100%;">

- Meeting

  <img src="https://camo.githubusercontent.com/b6ebf828075ccf21081ef6aeb518b19c72ad19648701eec15879c92bfdc7db35/68747470733a2f2f636c6f756463616368652e696e746c2e74656e63656e742d636c6f75642e636f6d2f636d732f6261636b656e642d636d732f32345a463737385f25453525394325413825453725424125424625453425424325394125453825414525414525343032782e6a7067" width="730" height="410" data-canonical-src="https://cloudcache.intl.tencent-cloud.com/cms/backend-cms/24ZF778_%E5%9C%A8%E7%BA%BF%E4%BC%9A%E8%AE%AE%402x.jpg" style="max-width: 100%;">

- Smart Device

  <img src="https://camo.githubusercontent.com/5bbf685aae18cffa29cbc4be90752908e3451f7e8337abfccca75409dc95efa8/68747470733a2f2f636c6f756463616368652e696e746c2e74656e63656e742d636c6f75642e636f6d2f636d732f6261636b656e642d636d732f794d52633933365f2545362539392542412545382538332542442545382541452542452545352541342538372534303278253230253238312532392e6a7067" width="730" height="410" data-canonical-src="https://cloudcache.intl.tencent-cloud.com/cms/backend-cms/yMRc936_%E6%99%BA%E8%83%BD%E8%AE%BE%E5%A4%87%402x%20%281%29.jpg" style="max-width: 100%;">

- Private Cloud Deployment

  <img src="https://camo.githubusercontent.com/e435ff05543362a17877087340917439226dd4b8a669bd9670728deef533ba67/68747470733a2f2f636c6f756463616368652e696e746c2e74656e63656e742d636c6f75642e636f6d2f636d732f6261636b656e642d636d732f614c376d3831315f25453725413725383125453625394325383925453525384325393625453925383325413825453725424425423225343032782e6a7067" width="730" height="410" data-canonical-src="https://cloudcache.intl.tencent-cloud.com/cms/backend-cms/aL7m811_%E7%A7%81%E6%9C%89%E5%8C%96%E9%83%A8%E7%BD%B2%402x.jpg" style="max-width: 100%;">

## Installation
``` javascript
// npm
    npm install react-native-tim-js
//yarn
    yarn add react-native-tim-js
```

## Prerequisites
1. You have [signed up](https://cloud.tencent.com/document/product/378/17985) for a Tencent Cloud account，and completed [identity verification](https://cloud.tencent.com/document/product/378/3629)。
2. Please refer to [Creating and Upgrading an Application](https://cloud.tencent.com/document/product/269/32577) and create an app，record its `SDKAppID`。

## Getting started
```javascript
import { TencentImSDKPlugin } from 'react-native-tim-js';

// Obtain Chat Instance
const timManger = TencentImSDKPlugin.v2TIMManager;

// Group Manager Interface，includes advanced function of the group,such as group member invitation, non-group member join application and other operation interfaces
const groupManager = timManager.getGroupManager();

// Advanced Message Interface, includes create message，send message，get historical message and other operation interfaces
const messageManager = timManager.getMessageManager();

// Friendship Interface，includes addtion and deletion of friends，addtion and deletion of blocklist and other operation interfaces
const friendshipManager = timManager.getFriendshipManager();

// Conversation Interface，includes getting,deleting,updating conversation and other operation interfaces
const conversationManager = timManager.getConversationManager();

// Offline Push Interface
const offlinePushManager = timManager.getOfflinePushManager(); 

// Signaling Manager Interface
const signalingManager = timManager.getSignalingManager();

// Init SDK
const sdkAppID = 0; // sdkAppID from prerequisites
const logLevel = LogLevelEnum.V2TIM_LOG_DEBUG;
await timManger.initSDK(sdkAppID, logLeve);

// Login
const userID = 123456; // User ID
const userSig = "xxx"; // userSig generation see [Generating UserSig](https://cloud.tencent.com/document/product/269/32688)
timManger.login(userID, userSig);

// Send First Message
const friendID = 456789; // Receiver ID
const text = "Hello, Tencent IM";
timManger.sendC2CTextMessage(friendID, text);

// logout
timManager.logout();
```

## API Docs & Changelogs
If you want to find out more api docs about react-native-tim-js, go to [Docs](https://comm.qq.com/im/doc/RN/en/).

If you want to check the record of SDK versions, go to [Change Log](https://www.tencentcloud.com/en/document/product/1047/34281).


## Reference
- [Tencent Cloud](https://cloud.tencent.com/product/im)
- [API document](https://comm.qq.com/im/doc/RN/en/)


