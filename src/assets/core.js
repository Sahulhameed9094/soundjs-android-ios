var soundWrapper = [];
var soundWrapper2 = [];
var _audioArray = [];

var audioUrls = [
  {
    id: "correct_1",
    src: "https://qacdn.phonicshero.com/assets/sfx/loading_long.mp3",
  },
  // {
  //   id: "correct_2",
  //   src: "https://qacdn.phonicshero.com/assets/sfx/loading_long.mp3",
  // },
  // {
  //   id: "correct_3",
  //   src: "https://qacdn.phonicshero.com/assets/sfx/loading_long.mp3",
  // },
];

function loadaudios() {
  //debugger;
  this.loader = new PxLoader();


  // for (var i = 0; i < audioUrls.length; i++) {
  //   let _audio = (this.audio = document.createElement("audio"));
  //   _audio.src = audioUrls[i].src;
  //   _audio.id = audioUrls[i].id;
  //   _audio.play();
  // }
  ////debugger;
  for (var i = 0; i < audioUrls.length; i++) {
    this.soundWrapper[audioUrls[i].id] = this.loader.addAudio(audioUrls[i].src);
    // this.soundWrapper[audioUrls[i].id] = this.loader.addSound(audioUrls[i].id, audioUrls[i].src);
    // this.soundWrapper[audioAsset[i].id] = this.loader.addSound(audioAsset[i].id, Getsrc(audioAsset[i].src));
    // ////debugger;

  }
  this.loader.addProgressListener(function (e) {
    ////debugger;
    console.log(e);
    // e.resource.audio
  });

  this.loader.addCompletionListener(function (e) {
    ////debugger;
    // alert("Ready to go!");
  });

  this.loader.start();
}
function correct_1() {
  // this.soundWrapper["correct_1"].addEventListener("ended", (event) => {
  //   console.log("correctened");
  // });
  // this.soundWrapper["correct_1"].volume = 1;
  this.soundWrapper["correct_1"].play();

}

function correct_1_1audio() {

  var audio = new Audio('https://assets.phonicshero.com/assets/sfx/correct_1.mp3');
  audio.play();
}

function cuckoo_1() {
  this.soundWrapper["cuckoo_1"].play();

}

function loading_long() {

  var audio = new Audio('https://qacdn.phonicshero.com/assets/sfx/loading_long.mp3');
  // audio.addEventListener("suspend", function (e) { alert('suspended'); }, this);
  // audio.addEventListener("stalled", function (e) { alert('stalled'); }, this);
  // audio.addEventListener("emptied", function (e) { alert('emptied'); }, this);
  // audio.addEventListener("statechange", (event) => {  alert('statechange'); });
  // audio.play();

  audio.addEventListener("canplay", (event) => { debugger; console.error(event); });

  //oncanplay = (event) => { };
  addEventListener("canplaythrough", (event) => { debugger; console.error(event); });

  //oncanplaythrough = (event) => { };
  audio.addEventListener("complete", (event) => { debugger; console.error(event); });

  //oncomplete = (event) => { };
  audio.addEventListener("durationchange", (event) => { debugger; console.error(event); });

  //ondurationchange = (event) => { };
  audio.addEventListener("emptied", (event) => { debugger; console.error(event); });

  //onemptied = (event) => { };
  audio.addEventListener("ended", (event) => { debugger; console.error(event); });

  //onended = (event) => { };
  audio.addEventListener("loadeddata", (event) => { debugger; console.error(event); });

  //onloadeddata = (event) => { };
  audio.addEventListener("loadedmetadata", (event) => { debugger; console.error(event); });

  //onloadedmetadata = (event) => { };
  audio.addEventListener("loadstart", (event) => { debugger; console.error(event); });

  //onloadstart = (event) => { };
  addEventListener("pause", (event) => { debugger; console.error(event); });

  //onpause = (event) => { };
  audio.addEventListener("play", (event) => { debugger; console.error(event); });

  //onplay = (event) => { };
  audio.addEventListener("playing", (event) => { debugger; console.error(event); });

  //onplaying = (event) => { };
  audio.addEventListener("ratechange", (event) => { debugger; console.error(event); });

  //onratechange = (event) => { };
  audio.addEventListener("seeked", (event) => { debugger; console.error(event); });

  //onseeked = (event) => { };
  audio.addEventListener("seeking", (event) => { debugger; console.error(event); });

  //onseeking = (event) => { };
  audio.addEventListener("stalled", (event) => { debugger; console.error(event); });

  //onstalled = (event) => { };
  audio.addEventListener("suspend", (event) => { debugger; console.error(event); });

  //onsuspend = (event) => { };
  audio.addEventListener("timeupdate", (event) => { debugger; console.error(event); });

  //ontimeupdate = (event) => { };
  audio.addEventListener("volumechange", (event) => { debugger; console.error(event); });

  //onvolumechange = (event) => { };
  audio.addEventListener("waiting", (event) => { debugger; console.error(event); });

  //onwaiting = (event) => { };

  audio.play();

}
// window.onload(playAudios);
// document.addEventListener('deviceready', playAudios);

function load() {
  // Update the UI
  //debugger;

  var queue = new createjs.LoadQueue();
  createjs.Sound.alternateExtensions = ["mp3"];
  queue.installPlugin(createjs.Sound);
  queue.addEventListener("fileload", handleFileLoad);
  queue.addEventListener("complete", handleComplete);
  queue.loadManifest(audioUrls);
}
// createjs.Sound.play('correct_1')
function handleFileLoad(event) {
  //debugger;
  console.log(event.target);
  console.log(event.type)
  console.log(event.item)
  console.log(event.result)
  console.log(event.rawResult)



  // Update the UI
  // document.getElementById("display").innerHTML += "<br/>Loaded: " + event.item.id
  //   + " using " + createjs.Sound.activePlugin.toString();
  // document.getElementById("stopBtn").disabled = "";

  // Play the loaded sound
  // createjs.Sound.play(event.item.id);
}

function handleComplete(event) {
  // document.getElementById("display").innerHtml += "<br/>Loading Complete!";
  alert("audio loaded successfully");
}
function handleComplete2(event) {
  // document.getElementById("display").innerHtml += "<br/>Loading Complete!";
  console.log("audio PLAYED successfully");
}

function playIt2(path) {
  // debugger;
  console.log("playing timer");
setTimeout(() => {
  console.log(" timer ended");
  var instance = createjs.Sound.play(path);
  instance.on("complete", handleComplete2, this);
  instance.on("error", function (e) { console.error(e); }, this);
}, 1000);
  

}

function playIt(path) {
  // debugger;
  console.log("playing");
  //var instance = createjs.Sound.createInstance(path);;  // play using id.  Could also use full sourcepath or event.src.
  var instance = createjs.Sound.play(path);
  console.log(instance);
  console.log(instance.playState);

  watch(instance, "playState", function(){
    console.log("playState changed!" + instance.playState);
  });

  instance.on("complete", handleComplete2, this);
  // instance.on("complete", handleComplete, this);
  instance.on("error", function (e) { console.error(e); }, this);
  // instance.on("progress", function (e) { console.error(e); }, this);
  // instance.on("fileload", function (e) { console.error(e); }, this);
  // instance.on("fileprogress", function (e) { console.error(e); }, this);
  /* instance.on("suspend", function (e) { alert('suspended'); }, this);
   instance.on("stalled", function (e) { alert('stalled'); }, this);
   instance.on("emptied", function (e) { alert('emptied'); }, this);
   instance.on("statechange", (event) => { alert('statechange'); }); */
  // instance.play();
  // instance.volume = 0.5;
}


document.addEventListener("deviceready", () => {
  load();
});