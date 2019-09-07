# 本地环回5

示例展示了在同一个标签页内将视频数据通过WebRTC从 answer 端传输给 offer 端。

和 `index4.html` 中的示例相比只是尝试用 `RTCRtpTransceiver` 代替 `offerToReceiveVideo` 选项。因为根据MDN，`offerToReceiveVideo` 属于 Legacy 选项。

```javascript
offerPeerConnection.addTransceiver('video');
const transceiver = offerPeerConnection.getTransceivers()[0];
transceiver.direction = 'recvonly';
```
