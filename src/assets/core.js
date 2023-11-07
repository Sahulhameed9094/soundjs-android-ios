var soundWrapper = [];
var soundWrapper2 = [];
var _audioArray = [];

var storeImages = [];
var storeAudio = [];

var queueList = [];

var audioUrls = [
  {
    id: "correct_1",
    src: "https://qacdn.phonicshero.com/assets/images/ph/images/baby1.png",
  },
  {
    id: "bled_sentence_snd",
    src: "https://qalogin.readingdoctor.com/assets/WellDoneNews.mp3",
  },
  {
    id: "bled_snd",
    src: "https://qalogin.readingdoctor.com/assets/Blending/audio/CCVC/bled_snd.wav",
  },
  {
    id: "ccvc_skid_spr_0",
    src: "https://qalogin.readingdoctor.com/assets/Blending/mnemonics/CCVC/ccvc_skid_spr_0.png",
  },
  {
    id: "ccvc_skin_spr_0",
    src: "https://qalogin.readingdoctor.com/assets/Blending/mnemonics/CCVC/ccvc_skin_spr_0.png",
  },
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

function LoadQueueRD() {
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

  if (event.item.type === createjs.LoadQueue.IMAGE) {
    var image = new Image();
    image.src = event.result.src;

    // // Wait for the image to load
    image.onload = function () {
      // Convert the image to a base64 string
      var canvas = document.createElement("canvas");
      canvas.width = image.width;
      canvas.height = image.height;
      var ctx = canvas.getContext("2d");
      ctx.drawImage(image, 0, 0, image.width, image.height);

      // Get the base64 data URL
      let base64Data = canvas.toDataURL("image/png");


      // Now you can use the base64Data as needed
      console.log(base64Data);

      // addItemImage(event.item.id, base64Data);


      let _imageObj = {};
      _imageObj.id = event.item.id;
      _imageObj.image = base64Data
      storeImages.push(_imageObj);

    };
  } else if (event.item.type == createjs.LoadQueue.SOUND) {

    //save blob data in sqllite
    let _audioObj = {};
    _audioObj.id = event.item.id;
    _audioObj.audio = event.result
    storeAudio.push(_audioObj);
    console.log(event.result);
  }
}

function handleComplete(event) {
  // document.getElementById("display").innerHtml += "<br/>Loading Complete!";
  console.log("audio loaded successfully");
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

  watch(instance, "playState", function () {
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





function downloadAudioAsBlob() {
  debugger;
  let audioURL = "https://qalogin.readingdoctor.com/assets/WellDoneNews.mp3";
  // Create an XMLHttpRequest object
  var xhr = new XMLHttpRequest();

  // Set the responseType to "blob" to receive binary data
  xhr.responseType = 'blob';

  // Define a callback for when the request is complete
  xhr.onload = function () {
    if (xhr.status === 200) {
      // The audio data is now in xhr.response as a Blob
      var audioBlob = xhr.response;

      // Create a URL for the Blob
      var audioURL = URL.createObjectURL(audioBlob);

      // Create a download link
      var downloadLink = document.createElement('a');
      downloadLink.href = audioURL;
      downloadLink.download = 'audio.mp3'; // Set the desired filename
      downloadLink.style.display = 'none';

      // Append the link to the document and trigger the download
      document.body.appendChild(downloadLink);
      downloadLink.click();

      // Clean up by removing the download link and revoking the Blob URL
      document.body.removeChild(downloadLink);
      URL.revokeObjectURL(audioURL);
    }
  };

  // Open a GET request to the audio source
  xhr.open('GET', audioURL, true);

  // Send the request
  xhr.send();
}

// Example usage
// downloadAudioAsBlob('https://example.com/audio.mp3');


// var db = null;
// document.addEventListener('deviceready', function () {

//   /*var db = window.sqlitePlugin.openDatabase({
//     name: 'sahulSqlite.db',
//     location: 'default',
//     // createFromLocation: 1
//   });
//   db.transaction(function (tx) {
//     alert('Database created successfully' + tx.name);
//     // Perform any database operations here    // For example, creating tables or inserting data    tx.executeSql('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT)');
//   }, function (error) {
//     console.error('Transaction error: ', error);
//   }, function () {
//     console.log('Transaction success');
//   }); */

//   var db = window.sqlitePlugin.openDatabase({ name: 'my.db', location: 'default' },
//     function (db) {
//       db.transaction(function (tx) {
//         tx.executeSql('CREATE TABLE customerAccounts (firstname, lastname, acctNo)');
//       }, function (error) {
//         console.log('transaction error: ' + error.message);
//       }, function () {
//         console.log('transaction ok');
//       });

//     }, function (error) {
//       console.log('Open database ERROR: ' + JSON.stringify(error));
//     });

// });

var db = null;
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {

  db = window.sqlitePlugin.openDatabase({
    name: 'sahulSqlite.db',
    location: 'default',
    createFromLocation: 1
  });



  // Perform database operations here
}






function addItemAudio(id, audio) {
  debugger;

  db.transaction(function (tx) {
    debugger;

    var query = "INSERT INTO storeAudiotbl (audioID,audio) VALUES (?,?)";

    tx.executeSql(query, [id, audio], function (tx, res) {
      debugger;

      console.log("insertId: " + res.insertId + " -- probably 1");
      console.log("rowsAffected: " + res.rowsAffected + " -- should be 1");
    }, function (tx, error) {
      debugger;

      console.log('INSERT error: ' + error.message);
    });
  }, function (error) {
    debugger;

    console.log('transaction error: ' + error.message);
  }, function () {
    debugger;

    console.log('transaction ok');
  });
}


function addItemImage(id, image) {
  debugger;

  db.transaction(function (tx) {
    debugger;

    var query = "INSERT INTO storeImagetbl (imageID,image) VALUES (?,?)";

    tx.executeSql(query, [id, image], function (tx, res) {
      debugger;

      console.log("insertId: " + res.insertId + " -- probably 1");
      console.log("rowsAffected: " + res.rowsAffected + " -- should be 1");
    }, function (tx, error) {
      debugger;

      console.log('INSERT error: ' + error.message);
    });
  }, function (error) {
    debugger;

    console.log('transaction error: ' + error.message);
  }, function () {
    debugger;

    console.log('transaction ok');
  });
}


function createTable() {
  // Use SQLite plugin to create the table
  // Create the storetable table
  db.transaction(function (tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS storeAudiotbl (id INTEGER PRIMARY KEY AUTOINCREMENT,audioID TEXT, audio BLOB)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS storeImagetbl (id INTEGER PRIMARY KEY AUTOINCREMENT,imageID TEXT, image TEXT)');
  });
}

function insertData() {
  // Use SQLite plugin to insert data into the table
  debugger;
  storeImages.forEach((x) => {
    debugger;
    addItemImage(x.id, x.image)
  });

}

function insertMusicData() {
  // Use SQLite plugin to insert data into the table
  debugger;
  storeAudio.forEach((x) => {
    debugger;
    addItemAudio(x.id, x.audio)
  });

}


function deleteTable() {
  // Use SQLite plugin to delete the table
  db.executeSql("DROP TABLE IF EXISTS storeAudiotbl");
  db.executeSql("DROP TABLE IF EXISTS storeImagetbl");

}

function BindImageData() {
  var query = "select imageID,image from storeImagetbl";

  db.transaction(function (tr) {
    tr.executeSql(query, [], function (tr, rs) {
      console.log('Got upperString result: ' + rs.rows.item);
      document.getElementById('imageElement').src = rs.rows.item(0).image;
    });
  });



}


