# 本地回环

示例展示了在同一个标签页内将视频数据通过WebRTC进行单向传输。

通过 `new RTCPeerConnection(null)` 创建一个 RTCPeerConnection， 代表一个WebRTC连接。

在 RTCPeerConnection 上添加 `onicecandidate` 和 `onaddstream` 事件监听。

在连接过程中 RTCPeerConnection 需要将 `onicecandidate` 事件中获得的 iceCandidate 发送给另一端的 RTCPeerConnection， 远端的 RTCPeerConnection 需要通过 `addIceCandidate` 方法添加传来的 iceCandidate。

`onaddstream` 事件中获取连接另一端传输过来的媒体流， 可通过 `<video>` 播放。

发送端通过 `addStream` 添加要传输的视频流。

发起方添加视频流之后通过 `createOffer` 生成 offer sdp（Session Description Protocol， 会话描述协议）， 并通过 `setLocalDescription` 将其设置为 local sdp，之后需要将 offer sdp 发送给应答方，应答方收到后，通过 `setRemoteDescription` 将其设置为 remote sdp。

应答方设置 remote sdp 后通过 `createAnswer` 生成 answer sdp，并通过 `setLocalDescription` 将其设置为 local sdp，之后需要将 answer sdp 发送给发起方，发起方收到后，通过 `setRemoteDescription` 将其设置为 remote sdp。

两边交换 sdp 和 iceCandidate 的过程一般通过信令服务器完成，在示例中因为两个 RTCPeerConnection 在同一个 JS 运行时，省去了发送过程。
