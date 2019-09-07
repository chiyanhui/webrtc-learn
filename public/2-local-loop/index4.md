# 本地环回4

示例展示了在同一个标签页内将视频数据通过WebRTC从 answer 端传输给 offer 端。

注意 `offerPeerConnection.createOffer({offerToReceiveVideo: true})` 中的参数，而之前的示例没有可选的 options 参数。如果去掉这个参数，offer 端将不能收到视频。
