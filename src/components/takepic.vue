<template>
  <div class="takepic">
    <div id="dcontent" class="dcontent">
      <div class="picbottom">
        <img :src="picsrc" width="200px" height="200px" alt="">
        <input id="takepic" type="file" accept="image/*" @change="takepic">
      </div>
  
    </div>
    <div id="output">
      Camera管理摄像头设备，可用于拍摄照片、录制视频文件。
      <input type="file" accept="image/*" capture="camera">
      <div style="width: 100%;height: 50px"></div>
      <input type="file" accept="video/*" capture="camcorder">
      <div style="width: 100%;height: 50px"></div>
      <input type="file" accept="audio/*" capture="microphone">
      <div style="width: 100%;height: 50px"></div>
      <input type="file" accept="video/*" capture="multiple">
    </div>
    <video id="player" controls autoplay></video>
    <button @click="pic">ticpic</button>
    <button id="capture">Capture</button>
    <canvas id="snapshot" width=320 height=240></canvas>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      picsrc: ''
    }
  },
  methods: {
    takepic() {
      var url = null
      var picfile = document.getElementById('takepic').files[0]
      if (window.createObjectURL != undefined) {//basic
        url = window.createObjectURL(picfile);
      } else if (window.URL != undefined) {//mozilla(firefox)兼容火狐
        url = window.URL.createObjectURL(picfile);
      } else if (window.webkitURL != undefined) {//webkit or chrome
        url = window.webkitURL.createObjectURL(picfile);
      }
      console.log(url)
      this.picsrc = url
    },
    pic() {
      var player = document.getElementById('player');
      var snapshotCanvas = document.getElementById('snapshot');
      var captureButton = document.getElementById('capture');

      var handleSuccess = function (stream) {
        alert(3)
        // Attach the video stream to the video element and autoplay.
        player.srcObject = stream;
      };

      captureButton.addEventListener('click', function () {
        var context = snapshot.getContext('2d');
        // Draw the video frame to the canvas.
        context.drawImage(player, 0, 0, snapshotCanvas.width,
          snapshotCanvas.height);
      });
      alert(window.navigator.mediaDevices.getUserMedia({ video: true }))
      console.log(window.navigator.mediaDevices.getUserMedia({ video: true,audio: true }))
      const navigator = window.navigator
      navigator.getUserMedia = navigator.getUserMedia ||navigator.webkitGetUserMedia || navigator.mozGetUserMedia ||navigator.msGetUserMedia
       window.navigator.mediaDevices.getUserMedia({ video: true })
        .then(handleSuccess);
      // if (navigator.getUserMedia) { // 标准的API
      //   alert(1)
      //   navigator.getUserMedia({ "video": true }).then(function (stream) {
      //     player.src = stream;
      //     alert(3)
      //     player.play();
      //   });
      // } else if (navigator.webkitGetUserMedia) { // WebKit 核心的API
      //   alert(2)
      //   navigator.webkitGetUserMedia({ "video": true }, function (stream) {
      //     player.src = window.webkitURL.createObjectURL(stream);
      //     player.play();
      //   }, errocb);
      // }
    }
  }
}
</script>

<style lang="stylus" type="text/stylus">
  .picbottom
    position relative
    overflow hidden
    width: 200px
    height: 200px
    border-radius: 50%
    float left
    background-color: blue
    #takepic
      position absolute
      display block
      width 100px
      height 100px
      border-radius 50%
      z-index 2
      left 50%
      top 50%
      padding 50px
      margin-left -25%
      margin-top -25%
      opacity 0
</style>
