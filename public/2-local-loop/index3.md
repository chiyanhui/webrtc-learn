# 本地环回3

示例展示了在同一个标签页内将视频数据通过WebRTC进行双向传输。视频从canvas上获取。

和 `index.html` 中的示例相比，将两端成为 offer 端和 answer 端，而非 local 端和 remote 端。两端都需要通过 `onaddstream` 事件中获取连接另一端传输过来的媒体流。注意两端都需要先通过 `addStream` 添加视频流，再生成自己的 sdp。
