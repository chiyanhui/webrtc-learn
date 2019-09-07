# 手动交换信令

本示例通过在两个标签页的控制台中手动操作交换 WebRTC 信令，完成连接，实现视频双向传输。

在两个标签页中分别打开 offer.html 和 answer.html，并打开两个页面的控制台。

1. 在 offer 端输入 `createOffer()` ，控制台输出 offerSdp 及其 JSON 格式字符串。
2. 在 offer 端输入 `setLocalSdp()` ，控制台输出 `onicecandidate` 产生的 iceCandidate 及其 JSON 格式字符串。
3. 在 answer 端输入 `acceptOffer(...)` ，其中 `...` 为第 1 步中输出的 JSON 格式字符串复制过来的内容。完成后触发 answer 端的 `onaddstream` 事件。
4. 在 answer 端输入 `createAnswer()` ，控制台输出 answerSdp 及其 JSON 格式字符串。
5. 在 answer 端输入 `setLocalSdp()` ，控制台输出 `onicecandidate` 产生的 iceCandidate 及其 JSON 格式字符串。
6. 在 offer 端输入 `acceptAnswer(...)` ，其中 `...` 为第 4 步中输出的 JSON 格式字符串复制过来的内容。完成后触发 offer 端的 `onaddstream` 事件。
7. 在 answer 端输入 `addCandidate(...)` ，其中 `...` 为第 2 步中输出的 JSON 格式字符串复制过来的内容。
8. 在 offer 端输入 `addCandidate(...)` ，其中 `...` 为第 5 步中输出的 JSON 格式字符串复制过来的内容。

在第 2、5 步中 `onicecandidate` 一般触发不止一次，7、8 步的先后顺序可以任意，也可以随意交替。一般不需要添加所有 iceCandidate 两端就可以互相看到视频了。
