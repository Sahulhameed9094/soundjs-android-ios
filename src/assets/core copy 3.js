var soundWrapper = [];
var soundWrapper2 = [];
var _audioArray = [];

var storeImages = [];
var storeAudio = [];

var queueList = [];
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

// Create a FileTransfer object
var fileTransfer = new FileTransfer();

// Specify the target directory for downloads
var targetDirectory = cordova.file.dataDirectory;

var audioUrls = [
  {
    id: "bled_sentence_snd",
    src: "https://login.readingdoctor.com/assets/Blending/audio/CCVC/bled_sentence_snd.wav",
    fileName: "bled_sentence_snd.wav",
  },
  // {
  //   id: "bled_snd",
  //   src: "https://login.readingdoctor.com/assets/Blending/audio/CCVC/bled_snd.wav",
  //   fileName: "bled_snd.wav",
  // },
  // {
  //   id: "End_of_sequence_Bartek",
  //   src: "https://login.readingdoctor.com/assets/End_of_sequence_Bartek.mp3",
  //   fileName: "End_of_sequence_Bartek.mp3",
  // },
  // {
  //   id: "WellDoneNews",
  //   src: "https://login.readingdoctor.com/assets/WellDoneNews.mp3",
  //   fileName: "WellDoneNews.mp3",
  // },
];

// window.onload(playAudios);
// document.addEventListener('deviceready', playAudios);
// ! step 1
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
  if (event.item.type == createjs.LoadQueue.SOUND) {
    debugger;
    let audioBuffer = event.result;
    // Convert AudioBuffer to WAV ArrayBuffer
    const wavBuffer = audioBufferToWav(audioBuffer);
    // Create a Blob from the WAV ArrayBuffer
    const blob = new Blob([new Uint8Array(wavBuffer)], { type: "audio/wav" });
    let _audioObj = {};
    _audioObj.id = event.item.id;
    _audioObj.audioBlob = blob;
    _audioObj.fileName = event.item.fileName;

    storeAudio.push(_audioObj);
    // console.log(event.result);
  }
}

function errorHandler(error) {
  console.log("Error: " + error.message);
}

function insertMusicData() {
  // Assume you have an AudioBuffer named audioBuffer

  for (let index = 0; index < storeAudio.length; index++) {
    const element = storeAudio[index];
    // Save Blob to File
    const fileName = element.fileName;
    const filePath = cordova.file.dataDirectory + fileName;

    window.resolveLocalFileSystemURL(
      cordova.file.dataDirectory,
      function (directoryEntry) {
        debugger;
        directoryEntry.getFile(
          fileName,
          { create: true, exclusive: false },
          function (fileEntry) {
            debugger;
            fileEntry.createWriter(function (fileWriter) {
              fileWriter.write(element.audioBlob);
              // Now the audio file is saved at filePath
            }, errorHandler);
          },
          errorHandler
        );
      },
      errorHandler
    );
  }
}

function playaudio() {
  // Load Audio File

  const fileName = "End_of_sequence_Bartek.mp3";
  const filePath = cordova.file.dataDirectory + fileName;
  createjs.Sound.registerSound(filePath, "soundID");

  // Use createjs.Sound.play()
  createjs.Sound.play("End_of_sequence_Bartek");
}

function insertMusicData_1() {
  // Use SQLite plugin to insert data into the table
  debugger;
  storeAudio.forEach((x) => {
    debugger;
    addItemAudio(x.id, x.audio);
  });
}

function addItemAudio(id, blob) {
  debugger;

  db.transaction(
    function (tx) {
      debugger;

      var query = "INSERT INTO storeAudiotbl (audioID,audio) VALUES (?,?)";
      // var blob = new Blob([audio]);
      tx.executeSql(
        query,
        [id, blob],
        function (tx, res) {
          debugger;

          console.log("insertId: " + res.insertId + " -- probably 1");
          console.log("rowsAffected: " + res.rowsAffected + " -- should be 1");
        },
        function (tx, error) {
          debugger;

          console.log("INSERT error: " + error.message);
        }
      );
    },
    function (error) {
      debugger;

      console.log("transaction error: " + error.message);
    },
    function () {
      debugger;

      console.log("transaction ok");
    }
  );
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
    instance.on(
      "error",
      function (e) {
        console.error(e);
      },
      this
    );
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
  instance.on(
    "error",
    function (e) {
      console.error(e);
    },
    this
  );
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
  xhr.responseType = "blob";

  // Define a callback for when the request is complete
  xhr.onload = function () {
    if (xhr.status === 200) {
      // The audio data is now in xhr.response as a Blob
      var audioBlob = xhr.response;

      let _audioObj = {};
      _audioObj.id = 1;
      _audioObj.audio = audioBlob;
      storeAudio.push(_audioObj);
      // // Create a URL for the Blob
      // var audioURL = URL.createObjectURL(audioBlob);

      // // Create a download link
      // var downloadLink = document.createElement('a');
      // downloadLink.href = audioURL;
      // downloadLink.download = 'audio.mp3'; // Set the desired filename
      // downloadLink.style.display = 'none';

      // // Append the link to the document and trigger the download
      // document.body.appendChild(downloadLink);
      // downloadLink.click();

      // // Clean up by removing the download link and revoking the Blob URL
      // document.body.removeChild(downloadLink);
      // URL.revokeObjectURL(audioURL);
    }
  };

  // Open a GET request to the audio source
  xhr.open("GET", audioURL, true);

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
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  db = window.sqlitePlugin.openDatabase({
    name: "sahulSqlite.db",
    location: "default",
    createFromLocation: 1,
  });

  // Perform database operations here
}

function addItemAudio_backups(id, audio) {
  db.transaction(function (tx) {
    audioBufferToArrayBuffer(audio).then(function (arrayBuffer) {
      const blob = new Blob([arrayBuffer], {
        type: "application/octet-stream",
      });
      var query = "INSERT INTO storeAudiotbl (audioID,audio) VALUES (?,?)";
      tx.executeSql(
        query,
        [id, blob],
        function (tx, res) {
          alert("AudioBuffer inserted successfully as Blob");
        },
        function (error) {
          console.error("Error inserting Blob data: " + error.message);
        }
      );
    });
  });
}

function addItemImage(id, image) {
  debugger;

  db.transaction(
    function (tx) {
      debugger;

      var query = "INSERT INTO storeImagetbl (imageID,image) VALUES (?,?)";

      tx.executeSql(
        query,
        [id, image],
        function (tx, res) {
          debugger;

          console.log("insertId: " + res.insertId + " -- probably 1");
          console.log("rowsAffected: " + res.rowsAffected + " -- should be 1");
        },
        function (tx, error) {
          debugger;

          console.log("INSERT error: " + error.message);
        }
      );
    },
    function (error) {
      debugger;

      console.log("transaction error: " + error.message);
    },
    function () {
      debugger;

      console.log("transaction ok");
    }
  );
}

function createTable() {
  // Use SQLite plugin to create the table
  // Create the storetable table
  debugger;
  db.transaction(
    function (tx) {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS storeAudiotbl (id INTEGER PRIMARY KEY AUTOINCREMENT,audioID TEXT, audio BLOB)"
      );
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS storeImagetbl (id INTEGER PRIMARY KEY AUTOINCREMENT,imageID TEXT, image TEXT)"
      );
    },
    function (error) {
      console.log("Transaction ERROR: " + error.message);
    },
    function () {
      console.log("Populated table OK");
    }
  );
}

function insertData() {
  // Use SQLite plugin to insert data into the table
  debugger;
  storeImages.forEach((x) => {
    debugger;
    addItemImage(x.id, x.image);
  });
}

function deleteTable() {
  // Use SQLite plugin to delete the table
  db.executeSql("DELETE FROM storeAudiotbl");
  db.executeSql("DELETE FROM storeImagetbl");
}

function FetchImageData() {
  var query = "select imageID,image from storeImagetbl";

  db.transaction(function (tr) {
    tr.executeSql(query, [], function (tr, rs) {
      console.log("Got upperString result: " + rs.rows.item);
      document.getElementById("imageElement").src = rs.rows.item(0).image;
    });
  });
}

function FetchAudioData_backup() {
  var query = "SELECT * FROM  storeAudiotbl ORDER by id DESC";

  db.transaction(function (tr) {
    tr.executeSql(query, [], function (tr, rs) {
      console.log("Got upperString result: " + rs.rows.item(0).audio);
      debugger;
      try {
        const reader = new FileReader();

        reader.onload = function () {
          const arrayBuffer = reader.result;
          audioContext.decodeAudioData(
            arrayBuffer,
            function (decodedAudioBuffer) {
              // Use the decoded AudioBuffer
              const sourceNode = audioContext.createBufferSource();
              sourceNode.buffer = decodedAudioBuffer;
              sourceNode.connect(audioContext.destination);
              sourceNode.start(0);
            },
            function (error) {
              console.error("Error decoding AudioBuffer: " + error);
            }
          );
        };

        reader.readAsArrayBuffer(audioBlob);

        createjs.Sound.initializeDefaultPlugins();

        // Create an AudioBufferSourceNode and set its buffer
        const audioContext = createjs.Sound.activePlugin.context;
        const audioBuffer = rs.rows.item(0).audio; // Replace with your AudioBuffer
        const sourceNode = audioContext.createBufferSource();
        sourceNode.buffer = audioBuffer;

        // Play the AudioBuffer
        const soundInstance = createjs.Sound.play(sourceNode, { volume: 1 });
        soundInstance.addEventListener("complete", handleComplete);
      } catch (error) {
        console.log(error);
      }
    });
  });
}

// base64ToArrayBuffer

function handleComplete() {
  console.log("Audio playback completed");
}

function FetchAudioData() {
  var query = "SELECT * FROM storeAudiotbl";
  // Fetch the Blob data from the database
  // Assuming you have the database instance as `db` and an initialized AudioContext named `audioContext`
  debugger;
  // Fetch the Blob data from the database
  db.transaction(function (tx) {
    tx.executeSql(
      query,
      [],
      function (tx, res) {
        if (res.rows.length > 0) {
          debugger;

          for (let index = 0; index < res.rows.length; index++) {
            const audioBlob = res.rows.item(index).audio;
            console.log(audioBlob);
            var retrievedAudioBufferArrayBuffer =
              base64ToArrayBuffer(audioBlob);

            var retrievedAudioBuffer = convertBufferToAudioBuffer(
              retrievedAudioBufferArrayBuffer,
              audioContext
            );
            debugger;
          }

          // const arrayBuffer = base64ToArrayBuffer(audioBlob);

          /*  const reader = new FileReader();
  
          reader.onload = function () {
            debugger;
            const arrayBuffer = reader.result;
  
            // Create an AudioBuffer from the ArrayBuffer
            audioContext.decodeAudioData(arrayBuffer, function (decodedAudioBuffer) {
              debugger;
              // Use the decoded AudioBuffer as sourceNode.buffer
              const sourceNode = audioContext.createBufferSource();
              sourceNode.buffer = decodedAudioBuffer;
              sourceNode.connect(audioContext.destination);
              sourceNode.start(0);
            }, function (error) {
              console.error('Error decoding AudioBuffer: ' + error);
            });
          };
  
          reader.readAsArrayBuffer(audioBlob); */
        }
      },
      function (error) {
        console.error("Error fetching Blob data: " + error.message);
      }
    );
  });
}

// Assuming you have the database instance as `db` and an `AudioBuffer` named `audioBuffer`

// Convert the AudioBuffer to an ArrayBuffer
const audioBufferToArrayBuffer = async (audioBuffer) => {
  const audioData = audioBuffer.getChannelData(0);
  const buffer = new ArrayBuffer(audioData.length * 4); // Float32 values
  const view = new Float32Array(buffer);
  for (let i = 0; i < audioData.length; i++) {
    view[i] = audioData[i];
  }
  return buffer;
};

// Insert the ArrayBuffer as a Blob into the database

// Assuming you have the database instance as `db` and an initialized AudioContext named `audioContext`

// Assume 'base64Blob' is the Base64-encoded Blob data from SQLite

// Convert Base64 to ArrayBuffer
function base64ToArrayBuffer(base64) {
  const binaryString = atob(base64);
  const length = binaryString.length;
  const buffer = new ArrayBuffer(length);
  const view = new Uint8Array(buffer);

  for (let i = 0; i < length; i++) {
    view[i] = binaryString.charCodeAt(i);
  }

  return buffer;
}

// Use the function to convert the Base64 Blob to ArrayBuffer
// const arrayBuffer = base64ToArrayBuffer(base64Blob);

// Now 'arrayBuffer' contains the Blob data in ArrayBuffer format

function backtostate() {
  const blob = new Blob([new Uint8Array(wavBuffer)], { type: "audio/wav" });

  // Assuming you have a Blob named 'audioBlob'
  const reader = new FileReader();

  reader.onloadend = function () {
    const arrayBuffer = reader.result;

    // Decode the ArrayBuffer to an AudioBuffer
    const audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();

    audioContext.decodeAudioData(
      arrayBuffer,
      function (decodedAudioBuffer) {
        // Use the decoded AudioBuffer as needed
        console.log("AudioBuffer decoded:", decodedAudioBuffer);

        // Now you can play or manipulate the AudioBuffer
      },
      function (error) {
        console.error("Error decoding AudioBuffer:", error);
      }
    );
  };

  reader.readAsArrayBuffer(audioBlob);
}

// new
// Assuming you have an AudioBuffer named 'audioBuffer'

// Step 1: Convert AudioBuffer to ArrayBuffer
function convertAudioBufferToBuffer(audioBuffer) {
  var numberOfChannels = audioBuffer.numberOfChannels;
  var length = audioBuffer.length * numberOfChannels;
  var audioBufferCopy = new Float32Array(length);

  for (var channel = 0; channel < numberOfChannels; channel++) {
    var channelData = audioBuffer.getChannelData(channel);
    audioBufferCopy.set(channelData, channel * audioBuffer.length);
  }

  return audioBufferCopy.buffer;
}

// var audioBufferArrayBuffer = convertAudioBufferToBuffer(audioBuffer);

// Step 2: Convert ArrayBuffer to Base64
function arrayBufferToBase64(buffer) {
  var binary = "";
  var bytes = new Uint8Array(buffer);

  for (var i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }

  return btoa(binary);
}

// var audioBufferBase64 = arrayBufferToBase64(audioBufferArrayBuffer);

// Now you can save `audioBufferBase64` in the SQLite database as a BLOB
// using the code from the previous response.

// Step 3: Convert Base64 to ArrayBuffer
function base64ToArrayBuffer(base64) {
  var binaryString = atob(base64);
  var length = binaryString.length;
  var bytes = new Uint8Array(length);

  for (var i = 0; i < length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }

  return bytes.buffer;
}

var retrievedAudioBufferArrayBuffer = base64ToArrayBuffer(
  retrievedAudioBufferBase64
);

// Step 4: Convert ArrayBuffer to AudioBuffer
function convertBufferToAudioBuffer(buffer, context) {
  var audioBuffer = context.createBuffer(1, buffer.length, context.sampleRate);
  var channelData = audioBuffer.getChannelData(0);
  channelData.set(new Float32Array(buffer));
  return audioBuffer;
}

var retrievedAudioBuffer = convertBufferToAudioBuffer(
  retrievedAudioBufferArrayBuffer,
  audioContext
);

// Now you can use the 'retrievedAudioBuffer' in your Web Audio API context.

window.addEventListener(
  "filePluginIsReady",
  function () {
    alert("File plugin is ready");
  },
  false
);

function getSampleFile(dirEntry) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://cordova.apache.org/static/img/cordova_bot.png", true);
  xhr.responseType = "blob";

  xhr.onload = function () {
    if (this.status == 200) {
      var blob = new Blob([this.response], { type: "image/png" });
      saveFile(dirEntry, blob, "downloadedImage.png");
    }
  };
  xhr.send();
}

function saveFile(dirEntry, fileData, fileName) {
  dirEntry.getFile(
    fileName,
    { create: true, exclusive: false },
    function (fileEntry) {
      writeFile(fileEntry, fileData);
    },
    onErrorCreateFile
  );
}

function writeFile(fileEntry, dataObj, isAppend) {
  // Create a FileWriter object for our FileEntry (log.txt).
  fileEntry.createWriter(function (fileWriter) {
    fileWriter.onwriteend = function () {
      console.log("Successful file write...");
      if (dataObj.type == "image/png") {
        readBinaryFile(fileEntry);
      } else {
        readFile(fileEntry);
      }
    };

    fileWriter.onerror = function (e) {
      console.log("Failed file write: " + e.toString());
    };

    fileWriter.write(dataObj);
  });
}

function LoadfromContainer() {
  debugger;
  const fileName = "audiofile.wav";
  const filePath = cordova.file.dataDirectory + fileName;

  let audioUrls = [
    {
      id: "soundID",
      src: "cdvfile://localhost/library-nosync/bled_sentence_snd.wav",
    },
  ];

  let queue = new createjs.LoadQueue();
  createjs.Sound.alternateExtensions = ["mp3"];
  queue.installPlugin(createjs.Sound);
  queue.addEventListener("fileload", function (params) {
    debugger;
  });
  queue.addEventListener("complete", function (params) {
    debugger;
  });
  queue.on("error", function (params) {
    debugger;
  });
  queue.on("progress", function (params) {
    debugger;
  });

  queue.on("fileprogress", function (params) {
    debugger;
  });
  queue.loadManifest(audioUrls);
}

function GetlistfromContainer() {
  // Get the data directory path
  var dataDirectory = cordova.file.dataDirectory;
  // Resolve the local filesystem URL for the data directory
  window.resolveLocalFileSystemURL(
    dataDirectory,
    function (directoryEntry) {
      // Create a directory reader
      var directoryReader = directoryEntry.createReader();
      // Read the contents of the directory
      directoryReader.readEntries(
        function (entries) {
          // entries is an array of file and directory entries
          entries.forEach(function (entry) {
            console.log("Name:", entry.toInternalURL());
            console.log("Is Directory:", entry.isDirectory);
            console.log("Full Path:", entry.fullPath);
            console.log("------------------------");
          });
        },
        function (error) {
          console.error("Error reading directory:", error);
        }
      );
    },
    function (error) {
      console.error("Error resolving data directory URL:", error);
    }
  );
}

// cdvfile://localhost/library-nosync/bled_sentence_snd.wav

function CordovaMediaPlayer() {
  debugger;
  var my_media = new Media(
    "file:///var/mobile/Containers/Data/Application/02122D6F-E40D-4085-B70D-AE51D2B660D8/Library/NoCloud/help_dialog_11_snd.mp3",
    function (onSuccess) {},
    function (onError) {}
  );
  my_media.play();
}

// Create a FileTransfer object

// Array of file URLs to download

// Specify the target directory for downloads

// Function to initiate the download for a single file
function downloadFile1(url) {
  var targetDirectory = cordova.file.dataDirectory;
  var fileTransfer = new FileTransfer();
  // Extract the file name from the URL
  var fileName = url.split("/").pop();

  // Specify the target path for the download
  var targetPath = targetDirectory + fileName;

  // Use the FileTransfer plugin to download the file
  fileTransfer.download(
    url, // Source URL
    targetPath, // Target path on the device
    function (entry) {
      // Success callback
      debugger;
      console.log("File downloaded successfully: " + entry.toURL());
    },
    function (error) {
      debugger;
      // Error callback
      console.error("Error downloading file: " + JSON.stringify(error));
    }
  );
}

function fileTransfer1() {
  debugger;
  var fileUrls = [
    "https://login.readingdoctor.com/assets/audio/help_dialog_11_snd.mp3",
    "https://login.readingdoctor.com/assets/game_images/level_failed.png",
    "https://login.readingdoctor.com/assets/audio/sw_or_snd.mp3",
    // Add more file URLs as needed
  ];
  // Loop through the array of file URLs and initiate the downloads

  // Create an array of promises for each download
  var downloadPromises = fileUrls.map(downloadFile);

  // Use Promise.all() to handle multiple downloads concurrently
  Promise.all(downloadPromises)
    .then((results) => {
      // All downloads succeeded
      console.log("All files downloaded successfully:", results);

      // Your code to process responses after all files are downloaded
      // This will only be executed if all downloads are successful
    })
    .catch((error) => {
      // At least one download failed
      console.error("Error downloading files:", error);

      // Your code to handle errors during file downloads
    });
}

// Function to initiate the download for a single file and return a promise
function downloadFile(url) {
  return new Promise((resolve, reject) => {
    // Extract the file name from the URL
    var fileName = url.split("/").pop();

    // Specify the target path for the download
    var targetPath = targetDirectory + fileName;

    // Use the FileTransfer plugin to download the file
    fileTransfer.download(
      url, // Source URL
      targetPath, // Target path on the device
      resolve, // Success callback
      reject // Error callback
    );
  });
}
