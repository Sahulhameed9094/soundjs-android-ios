
var queueList = [
  { src:'https://assets.phonicshero.com/assets/images/ph/images/bg_blueSky.png', id: "image1" },
];

  debugger;
  var queue = new createjs.LoadQueue();
  createjs.Sound.alternateExtensions = ["mp3"];
  queue.installPlugin(createjs.Sound);
  queue.on("complete", handleComplete, this);
  queue.on("progress", handleProgress, this);
  queue.on("fileload", handleFileLoad, this);
  queue.loadManifest(queueList, true);

// createjs.Sound.play('correct_1')
function handleFileLoad(event) {
  // Handle individual file load events here
  var img = document.getElementById(event.item.id);
  img.src = event.item.src;
}

function handleProgress(event) {
  // Handle progress updates here
  console.log("Loading progress: " + (event.progress * 100) + "%");
}

function handleComplete() {
  // All files are loaded; you can perform any final actions here
  console.log("Loading complete");
}
