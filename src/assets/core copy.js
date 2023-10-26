// window.onload(playAudios);
document.addEventListener('load', playAudios);

var soundWrapper = [];
var soundWrapper2 = [];
var _audioArray = [];
function playAudios() {
  // //debugger;
  this.loader = new PxLoader();
  var audioUrls = [

    {
      id: "correct_1",
      path: "https://assets.phonicshero.com/assets/sfx/correct_1.mp3",
    },
    {
      id: "intro_one_way_of_spelling_the_sound",
      path: "https://assets.phonicshero.com/assets/uk/audio/intros/intro_one_way_of_spelling_the_sound.mp3",
    },
    {
      id: "cuckoo_1",
      path: "https://assets.phonicshero.com/assets/sfx/cuckoo_1.mp3",
    },
  ];

  // for (var i = 0; i < audioUrls.length; i++) {
  //   let _audio = (this.audio = document.createElement("audio"));
  //   _audio.src = audioUrls[i].path;
  //   _audio.id = audioUrls[i].id;
  //   _audio.play();
  // }
  //debugger;
  for (var i = 0; i < audioUrls.length; i++) {
    this.soundWrapper[audioUrls[i].id] = this.loader.addAudio(audioUrls[i].path);
    // this.soundWrapper[audioUrls[i].id] = this.loader.addSound(audioUrls[i].id, audioUrls[i].path);
    // this.soundWrapper[audioAsset[i].id] = this.loader.addSound(audioAsset[i].id, GetPath(audioAsset[i].path));
    // //debugger;

  }
  this.loader.addProgressListener(function (e) {
    //debugger;
    console.log(e);
    e.resource.audio
  });

  this.loader.addCompletionListener(function (e) {
    //debugger;
    // alert("Ready to go!");
  });

  this.loader.start();
}
function correct_1() {
  // this.soundWrapper["correct_1"].addEventListener("ended", (event) => {
  //   console.log("correctened");
  // });
  // this.soundWrapper["correct_1"].volume = 1;
  // this.soundWrapper["correct_1"].play();


  soundManager.createSound({
    id: 'correct_1',
    url: 'https://assets.phonicshero.com/assets/sfx/correct_1.mp3'
  });
  soundManager.play('correct_1');

  // var audio = new Audio('https://assets.phonicshero.com/assets/sfx/correct_1.mp3');
  // audio.play();

}

function correct_1_1audio() {

  var audio = new Audio(this.soundWrapper["correct_1"].src);
  audio.play();
}

function cuckoo_1() {
  this.soundWrapper["cuckoo_1"].play();

}

function cuckoo_1audio() {

  var audio = new Audio(this.soundWrapper["cuckoo_1"].src);
  audio.play();
}

function intro_one_way_of_spelling_the_sound() {
  this.soundWrapper["intro_one_way_of_spelling_the_sound"].play();

}

function intro_one_way_of_spelling_the_sound_audio() {

  var audio = new Audio(this.soundWrapper["intro_one_way_of_spelling_the_sound"].src);
  audio.play();
}



