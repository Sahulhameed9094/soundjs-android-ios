var soundWrapper = [];
var soundWrapper2 = [];
var _audioArray = [];

var storeImages = [];
var storeAudio = [];

var queueList = [];
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

// Create a FileTransfer object
// var fileTransfer = new FileTransfer();

// Specify the target directory for downloads
// var targetDirectory = cordova.file.dataDirectory;

var audioUrls = [
  {
    index: 500,
    type: "manifest",
    id: "blending_arrow",
    name: "blending_arrow",
    src: "https://qacdn.phonicshero.com/assets/images/ph/images/baby1.png",
    loadTimeout: 8000,
    ext: "png",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    id: "out_of_lives_anim",
    name: "out_of_lives_anim",
    type: "manifest",
    src: "https://login.readingdoctor.com/assets/game_images/out_of_lives_anim_spr_0.png",
    loadTimeout: 8000,
    ext: "png",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    id: "level_failed",
    type: "manifest",
    name: "level_failed",
    src: "https://login.readingdoctor.com/assets/game_images/level_failed.png",
    loadTimeout: 8000,
    ext: "png",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    id: "sw_or",
    type: "sound",
    name: "or_snd",
    src: "https://login.readingdoctor.com/assets/audio/sw_or_snd.mp3",
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    index: 0,
    id: "help_letter_0",
    type: "manifest",
    name: "help_letter_0",
    src: "https://login.readingdoctor.com/assets/game_images/help_letter_sounds_0.png",
    loadTimeout: 8000,
    ext: "png",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    index: 1,
    id: "help_letter_1",
    type: "manifest",
    name: "help_letter_1",
    src: "https://login.readingdoctor.com/assets/game_images/help_letter_sounds_2.png",
    loadTimeout: 8000,
    ext: "png",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    index: 2,
    id: "help_letter_2",
    type: "manifest",
    name: "help_letter_2",
    src: "https://login.readingdoctor.com/assets/game_images/help_letter_sounds_3.png",
    loadTimeout: 8000,
    ext: "png",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    index: 3,
    id: "help_letter_3",
    type: "manifest",
    name: "help_letter_3",
    src: "https://login.readingdoctor.com/assets/game_images/help_letter_sounds_4.png",
    loadTimeout: 8000,
    ext: "png",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    index: 4,
    id: "help_letter_4",
    type: "manifest",
    name: "help_letter_4",
    src: "https://login.readingdoctor.com/assets/game_images/help_letter_sounds_5.png",
    loadTimeout: 8000,
    ext: "png",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    index: 5,
    id: "help_letter_5",
    type: "manifest",
    name: "help_letter_5",
    src: "https://login.readingdoctor.com/assets/game_images/help_letter_sounds_6.png",
    loadTimeout: 8000,
    ext: "png",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    index: 6,
    id: "help_letter_6",
    type: "manifest",
    name: "help_letter_6",
    src: "https://login.readingdoctor.com/assets/game_images/help_letter_sounds_7.png",
    loadTimeout: 8000,
    ext: "png",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    index: 7,
    id: "help_letter_7",
    type: "manifest",
    name: "help_letter_7",
    src: "https://login.readingdoctor.com/assets/game_images/help_letter_sounds_8.png",
    loadTimeout: 8000,
    ext: "png",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    index: 8,
    id: "help_letter_8",
    type: "manifest",
    name: "help_letter_8",
    src: "https://login.readingdoctor.com/assets/game_images/help_letter_sounds_9.png",
    loadTimeout: 8000,
    ext: "png",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    index: 9,
    id: "help_letter_9",
    type: "manifest",
    name: "help_letter_9",
    src: "https://login.readingdoctor.com/assets/game_images/help_letter_sounds_10.png",
    loadTimeout: 8000,
    ext: "png",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    index: 10,
    id: "help_letter_10",
    type: "manifest",
    name: "help_letter_10",
    src: "https://login.readingdoctor.com/assets/game_images/help_letter_sounds_11.png",
    loadTimeout: 8000,
    ext: "png",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    index: 11,
    id: "help_letter_11",
    type: "manifest",
    name: "help_letter_11",
    src: "https://login.readingdoctor.com/assets/game_images/help_letter_sounds_12.png",
    loadTimeout: 8000,
    ext: "png",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    index: 12,
    id: "help_letter_12",
    type: "manifest",
    name: "help_letter_12",
    src: "https://login.readingdoctor.com/assets/game_images/help_letter_sounds_13.png",
    loadTimeout: 8000,
    ext: "png",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    index: 13,
    id: "help_letter_13",
    type: "manifest",
    name: "help_letter_13",
    src: "https://login.readingdoctor.com/assets/game_images/help_letter_sounds_14.png",
    loadTimeout: 8000,
    ext: "png",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    index: 31,
    id: "help_letter_14",
    type: "manifest",
    name: "help_letter_14",
    src: "https://login.readingdoctor.com/assets/game_images/help_blending_15.png",
    loadTimeout: 8000,
    ext: "png",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    index: 14,
    id: "helpBtnYes_0",
    name: "helpBtnYes_0",
    src: "https://login.readingdoctor.com/assets/game_images/dialog_button_yes_spr_0.png",
    loadTimeout: 8000,
    ext: "png",
    type: "image",
    path: "",
  },
  {
    index: 15,
    id: "helpBtnYes_1",
    name: "helpBtnYes_1",
    src: "https://login.readingdoctor.com/assets/game_images/dialog_button_yes_spr_1.png",
    loadTimeout: 8000,
    ext: "png",
    type: "image",
    path: "",
  },
  {
    index: 16,
    id: "help_dialogStartSound_0",
    type: "sound",
    name: "help_dialogStartSound_0",
    src: "https://login.readingdoctor.com/assets/audio/help_dialog_2_snd.mp3",
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    index: 17,
    id: "help_dialogStartSound_1",
    type: "sound",
    name: "help_dialogStartSound_1",
    src: "https://login.readingdoctor.com/assets/audio/help_dialog_5_snd.mp3",
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    index: 18,
    id: "help_dialogSound_1",
    type: "sound",
    name: "help_dialogSound_1",
    src: "https://login.readingdoctor.com/assets/audio/help_dialog_11_snd.mp3",
    duration: 4510.612244897959,
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    index: 19,
    id: "help_dialogSound_2",
    type: "sound",
    name: "help_dialogSound_2",
    src: "https://login.readingdoctor.com/assets/audio/help_dialog_36_snd.mp3",
    duration: 2549.9773242630386,
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    index: 32,
    id: "help_dialogSound_33",
    type: "sound",
    name: "help_dialogSound_33",
    src: "https://login.readingdoctor.com/assets/audio/help_dialog_32_snd.mp3",
    duration: 2195.714285714286,
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    index: 20,
    id: "help_dialogSound_3",
    type: "sound",
    name: "help_dialogSound_3",
    src: "https://login.readingdoctor.com/assets/audio/help_dialog_20_snd.mp3",
    duration: 2195.714285714286,
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    index: 21,
    id: "help_dialogSound_4",
    type: "sound",
    name: "help_dialogSound_4",
    src: "https://login.readingdoctor.com/assets/audio/help_dialog_22_snd.mp3",
    duration: 2849.8866213151928,
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    index: 22,
    id: "help_dialogSound_5",
    type: "sound",
    name: "help_dialogSound_5",
    src: "https://login.readingdoctor.com/assets/audio/help_dialog_23_snd.mp3",
    duration: 2999.9773242630386,
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    index: 23,
    id: "help_dialogSound_6",
    type: "sound",
    name: "help_dialogSound_6",
    src: "https://login.readingdoctor.com/assets/audio/help_dialog_34_snd.mp3",
    duration: 3735.056689342404,
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    index: 24,
    id: "help_dialogSound_7",
    type: "sound",
    name: "help_dialogSound_7",
    src: "https://login.readingdoctor.com/assets/audio/help_dialog_33_snd.mp3",
    duration: 4019.9773242630386,
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    index: 25,
    id: "help_dialogSound_8",
    type: "sound",
    name: "help_dialogSound_8",
    src: "https://login.readingdoctor.com/assets/audio/help_dialog_25_snd.mp3",
    duration: 2399.9773242630386,
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    index: 26,
    id: "help_dialogSound_9",
    type: "sound",
    name: "help_dialogSound_9",
    src: "https://login.readingdoctor.com/assets/audio/help_dialog_37_snd.mp3",
    duration: 5386.71201814059,
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    index: 27,
    id: "help_dialogSound_10",
    type: "sound",
    name: "help_dialogSound_10",
    src: "https://login.readingdoctor.com/assets/audio/help_dialog_26_snd.mp3",
    duration: 3629.9773242630386,
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    index: 28,
    id: "help_dialogSound_11",
    type: "sound",
    name: "help_dialogSound_11",
    src: "https://login.readingdoctor.com/assets/audio/help_dialog_27_snd.mp3",
    duration: 2519.9773242630386,
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    index: 29,
    id: "help_dialogSound_12",
    type: "sound",
    name: "help_dialogSound_12",
    src: "https://login.readingdoctor.com/assets/audio/help_dialog_35_snd.mp3",
    duration: 3156.4625850340135,
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    index: 30,
    id: "help_dialogSound_13",
    type: "sound",
    name: "help_dialogSound_13",
    src: "https://login.readingdoctor.com/assets/audio/help_dialog_28_snd.mp3",
    duration: 2664.4444444444443,
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    id: "a_AU_snd",
    name: "a_AU_snd",
    type: "sound",
    src: "https://login.readingdoctor.com/ContentUpload/assets/LS1P/audio/aus/a_AU_snd.mp3",
    letter: "a",
    crossOrigin: "anonymous",
    framespeed: 0,
    framecount: 0,
    frametimeout: 0,
    isexist: true,
    ContentPublish: true,
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    id: "a_apple_AU_snd",
    name: "a_apple_AU_snd",
    type: "sound",
    src: "https://login.readingdoctor.com/ContentUpload/assets/LS1P/audio/aus/a_word_AU_snd.mp3",
    letter: "a",
    crossOrigin: "anonymous",
    framespeed: 0,
    framecount: 0,
    frametimeout: 0,
    isexist: true,
    ContentPublish: true,
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    id: "a_apple_sentence_AU_snd",
    name: "a_apple_sentence_AU_snd",
    type: "sound",
    src: "https://login.readingdoctor.com/ContentUpload/assets/LS1P/audio/aus/a_sentence_AU_snd.mp3",
    letter: "a",
    crossOrigin: "anonymous",
    framespeed: 0,
    framecount: 0,
    frametimeout: 0,
    isexist: true,
    ContentPublish: true,
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    id: "e_AU_snd",
    name: "e_AU_snd",
    type: "sound",
    src: "https://login.readingdoctor.com/ContentUpload/assets/LS1P/audio/aus/e_AU_snd.mp3",
    letter: "e",
    crossOrigin: "anonymous",
    framespeed: 0,
    framecount: 0,
    frametimeout: 0,
    isexist: true,
    ContentPublish: true,
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    id: "e_egg_AU_snd",
    name: "e_egg_AU_snd",
    type: "sound",
    src: "https://login.readingdoctor.com/ContentUpload/assets/LS1P/audio/aus/e_word_AU_snd.mp3",
    letter: "e",
    crossOrigin: "anonymous",
    framespeed: 0,
    framecount: 0,
    frametimeout: 0,
    isexist: true,
    ContentPublish: true,
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    id: "e_egg_sentence_AU_snd",
    name: "e_egg_sentence_AU_snd",
    type: "sound",
    src: "https://login.readingdoctor.com/ContentUpload/assets/LS1P/audio/aus/e_sentence_AU_snd.mp3",
    letter: "e",
    crossOrigin: "anonymous",
    framespeed: 0,
    framecount: 0,
    frametimeout: 0,
    isexist: true,
    ContentPublish: true,
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    id: "i_AU_snd",
    name: "i_AU_snd",
    type: "sound",
    src: "https://login.readingdoctor.com/ContentUpload/assets/LS1P/audio/aus/i_AU_snd.mp3",
    letter: "i",
    crossOrigin: "anonymous",
    framespeed: 0,
    framecount: 0,
    frametimeout: 0,
    isexist: true,
    ContentPublish: true,
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    id: "i_insect_AU_snd",
    name: "i_insect_AU_snd",
    type: "sound",
    src: "https://login.readingdoctor.com/ContentUpload/assets/LS1P/audio/aus/i_word_AU_snd.mp3",
    letter: "i",
    crossOrigin: "anonymous",
    framespeed: 0,
    framecount: 0,
    frametimeout: 0,
    isexist: true,
    ContentPublish: true,
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    id: "i_insect_sentence_AU_snd",
    name: "i_insect_sentence_AU_snd",
    type: "sound",
    src: "https://login.readingdoctor.com/ContentUpload/assets/LS1P/audio/aus/i_sentence_AU_snd.mp3",
    letter: "i",
    crossOrigin: "anonymous",
    framespeed: 0,
    framecount: 0,
    frametimeout: 0,
    isexist: true,
    ContentPublish: true,
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    id: "n_AU_snd",
    name: "n_AU_snd",
    type: "sound",
    src: "https://login.readingdoctor.com/ContentUpload/assets/LS1P/audio/aus/n_AU_snd.mp3",
    letter: "n",
    crossOrigin: "anonymous",
    framespeed: 0,
    framecount: 0,
    frametimeout: 0,
    isexist: true,
    ContentPublish: true,
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    id: "n_nose_AU_snd",
    name: "n_nose_AU_snd",
    type: "sound",
    src: "https://login.readingdoctor.com/ContentUpload/assets/LS1P/audio/aus/n_word_AU_snd.mp3",
    letter: "n",
    crossOrigin: "anonymous",
    framespeed: 0,
    framecount: 0,
    frametimeout: 0,
    isexist: true,
    ContentPublish: true,
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    id: "n_nose_sentence_AU_snd",
    name: "n_nose_sentence_AU_snd",
    type: "sound",
    src: "https://login.readingdoctor.com/ContentUpload/assets/LS1P/audio/aus/n_sentence_AU_snd.mp3",
    letter: "n",
    crossOrigin: "anonymous",
    framespeed: 0,
    framecount: 0,
    frametimeout: 0,
    isexist: true,
    ContentPublish: true,
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    id: "p_AU_snd",
    name: "p_AU_snd",
    type: "sound",
    src: "https://login.readingdoctor.com/ContentUpload/assets/LS1P/audio/aus/p_AU_snd.mp3",
    letter: "p",
    crossOrigin: "anonymous",
    framespeed: 0,
    framecount: 0,
    frametimeout: 0,
    isexist: true,
    ContentPublish: true,
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    id: "p_pan_AU_snd",
    name: "p_pan_AU_snd",
    type: "sound",
    src: "https://login.readingdoctor.com/ContentUpload/assets/LS1P/audio/aus/p_word_AU_snd.mp3",
    letter: "p",
    crossOrigin: "anonymous",
    framespeed: 0,
    framecount: 0,
    frametimeout: 0,
    isexist: true,
    ContentPublish: true,
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    id: "p_pan_sentence_AU_snd",
    name: "p_pan_sentence_AU_snd",
    type: "sound",
    src: "https://login.readingdoctor.com/ContentUpload/assets/LS1P/audio/aus/p_sentence_AU_snd.mp3",
    letter: "p",
    crossOrigin: "anonymous",
    framespeed: 0,
    framecount: 0,
    frametimeout: 0,
    isexist: true,
    ContentPublish: true,
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    id: "s_AU_snd",
    name: "s_AU_snd",
    type: "sound",
    src: "https://login.readingdoctor.com/ContentUpload/assets/LS1P/audio/aus/s_AU_snd.mp3",
    letter: "s",
    crossOrigin: "anonymous",
    framespeed: 0,
    framecount: 0,
    frametimeout: 0,
    isexist: true,
    ContentPublish: true,
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    id: "s_snake_AU_snd",
    name: "s_snake_AU_snd",
    type: "sound",
    src: "https://login.readingdoctor.com/ContentUpload/assets/LS1P/audio/aus/s_word_AU_snd.mp3",
    letter: "s",
    crossOrigin: "anonymous",
    framespeed: 0,
    framecount: 0,
    frametimeout: 0,
    isexist: true,
    ContentPublish: true,
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    id: "s_snake_sentence_AU_snd",
    name: "s_snake_sentence_AU_snd",
    type: "sound",
    src: "https://login.readingdoctor.com/ContentUpload/assets/LS1P/audio/aus/s_sentence_AU_snd.mp3",
    letter: "s",
    crossOrigin: "anonymous",
    framespeed: 0,
    framecount: 0,
    frametimeout: 0,
    isexist: true,
    ContentPublish: true,
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    id: "t_AU_snd",
    name: "t_AU_snd",
    type: "sound",
    src: "https://login.readingdoctor.com/ContentUpload/assets/LS1P/audio/aus/t_AU_snd.mp3",
    letter: "t",
    crossOrigin: "anonymous",
    framespeed: 0,
    framecount: 0,
    frametimeout: 0,
    isexist: true,
    ContentPublish: true,
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    id: "t_tap_AU_snd",
    name: "t_tap_AU_snd",
    type: "sound",
    src: "https://login.readingdoctor.com/ContentUpload/assets/LS1P/audio/aus/t_word_AU_snd.mp3",
    letter: "t",
    crossOrigin: "anonymous",
    framespeed: 0,
    framecount: 0,
    frametimeout: 0,
    isexist: true,
    ContentPublish: true,
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    id: "t_tap_sentence_AU_snd",
    name: "t_tap_sentence_AU_snd",
    type: "sound",
    src: "https://login.readingdoctor.com/ContentUpload/assets/LS1P/audio/aus/t_sentence_AU_snd.mp3",
    letter: "t",
    crossOrigin: "anonymous",
    framespeed: 0,
    framecount: 0,
    frametimeout: 0,
    isexist: true,
    ContentPublish: true,
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    id: "first_time_letter_sounds_menu",
    type: "sound",
    name: "first_time_letter_sounds_menu",
    src: "https://login.readingdoctor.com/assets/audio/first_time_letter_sounds_menu_snd.mp3",
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    id: "find_the_letter_sounds",
    type: "sound",
    name: "find_the_letter_sounds",
    src: "https://login.readingdoctor.com/assets/audio/find_the_letter_sounds_snd.mp3",
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    id: "a0",
    name: "a",
    type: "manifest",
    src: "https://login.readingdoctor.com/ContentUpload/assets/LS1P/mnemonics/a_spr_0.png",
    letter: "a",
    crossOrigin: "anonymous",
    framespeed: 0,
    framecount: 0,
    frametimeout: 0,
    isexist: true,
    ContentPublish: true,
    loadTimeout: 8000,
    ext: "png",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    id: "a1",
    name: "a",
    type: "manifest",
    src: "https://login.readingdoctor.com/ContentUpload/assets/LS1P/mnemonics/a_spr_1.png",
    letter: "a",
    crossOrigin: "anonymous",
    framespeed: 0,
    framecount: 0,
    frametimeout: 0,
    isexist: true,
    ContentPublish: true,
    loadTimeout: 8000,
    ext: "png",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    id: "a2",
    name: "a",
    type: "manifest",
    src: "https://login.readingdoctor.com/ContentUpload/assets/LS1P/mnemonics/a_spr_2.png",
    letter: "a",
    crossOrigin: "anonymous",
    framespeed: 0,
    framecount: 0,
    frametimeout: 0,
    isexist: true,
    ContentPublish: true,
    loadTimeout: 8000,
    ext: "png",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    id: "a3",
    name: "a",
    type: "manifest",
    src: "https://login.readingdoctor.com/ContentUpload/assets/LS1P/mnemonics/a_spr_3.png",
    letter: "a",
    crossOrigin: "anonymous",
    framespeed: 0,
    framecount: 0,
    frametimeout: 0,
    isexist: true,
    ContentPublish: true,
    loadTimeout: 8000,
    ext: "png",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    id: "e0",
    name: "e",
    type: "manifest",
    src: "https://login.readingdoctor.com/ContentUpload/assets/LS1P/mnemonics/e_spr_0.png",
    letter: "e",
    crossOrigin: "anonymous",
    framespeed: 0,
    framecount: 0,
    frametimeout: 0,
    isexist: true,
    ContentPublish: true,
    loadTimeout: 8000,
    ext: "png",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    id: "e1",
    name: "e",
    type: "manifest",
    src: "https://login.readingdoctor.com/ContentUpload/assets/LS1P/mnemonics/e_spr_1.png",
    letter: "e",
    crossOrigin: "anonymous",
    framespeed: 0,
    framecount: 0,
    frametimeout: 0,
    isexist: true,
    ContentPublish: true,
    loadTimeout: 8000,
    ext: "png",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    id: "e2",
    name: "e",
    type: "manifest",
    src: "https://login.readingdoctor.com/ContentUpload/assets/LS1P/mnemonics/e_spr_2.png",
    letter: "e",
    crossOrigin: "anonymous",
    framespeed: 0,
    framecount: 0,
    frametimeout: 0,
    isexist: true,
    ContentPublish: true,
    loadTimeout: 8000,
    ext: "png",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    id: "e3",
    name: "e",
    type: "manifest",
    src: "https://login.readingdoctor.com/ContentUpload/assets/LS1P/mnemonics/e_spr_3.png",
    letter: "e",
    crossOrigin: "anonymous",
    framespeed: 0,
    framecount: 0,
    frametimeout: 0,
    isexist: true,
    ContentPublish: true,
    loadTimeout: 8000,
    ext: "png",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    id: "i0",
    name: "i",
    type: "manifest",
    src: "https://login.readingdoctor.com/ContentUpload/assets/LS1P/mnemonics/i_spr_0.png",
    letter: "i",
    crossOrigin: "anonymous",
    framespeed: 0,
    framecount: 0,
    frametimeout: 0,
    isexist: true,
    ContentPublish: true,
    loadTimeout: 8000,
    ext: "png",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    id: "i1",
    name: "i",
    type: "manifest",
    src: "https://login.readingdoctor.com/ContentUpload/assets/LS1P/mnemonics/i_spr_1.png",
    letter: "i",
    crossOrigin: "anonymous",
    framespeed: 0,
    framecount: 0,
    frametimeout: 0,
    isexist: true,
    ContentPublish: true,
    loadTimeout: 8000,
    ext: "png",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    id: "i2",
    name: "i",
    type: "manifest",
    src: "https://login.readingdoctor.com/ContentUpload/assets/LS1P/mnemonics/i_spr_2.png",
    letter: "i",
    crossOrigin: "anonymous",
    framespeed: 0,
    framecount: 0,
    frametimeout: 0,
    isexist: true,
    ContentPublish: true,
    loadTimeout: 8000,
    ext: "png",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    id: "i3",
    name: "i",
    type: "manifest",
    src: "https://login.readingdoctor.com/ContentUpload/assets/LS1P/mnemonics/i_spr_3.png",
    letter: "i",
    crossOrigin: "anonymous",
    framespeed: 0,
    framecount: 0,
    frametimeout: 0,
    isexist: true,
    ContentPublish: true,
    loadTimeout: 8000,
    ext: "png",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    id: "n0",
    name: "n",
    type: "manifest",
    src: "https://login.readingdoctor.com/ContentUpload/assets/LS1P/mnemonics/n_spr_0.png",
    letter: "n",
    crossOrigin: "anonymous",
    framespeed: 0,
    framecount: 0,
    frametimeout: 0,
    isexist: true,
    ContentPublish: true,
    loadTimeout: 8000,
    ext: "png",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    id: "n1",
    name: "n",
    type: "manifest",
    src: "https://login.readingdoctor.com/ContentUpload/assets/LS1P/mnemonics/n_spr_1.png",
    letter: "n",
    crossOrigin: "anonymous",
    framespeed: 0,
    framecount: 0,
    frametimeout: 0,
    isexist: true,
    ContentPublish: true,
    loadTimeout: 8000,
    ext: "png",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    id: "n2",
    name: "n",
    type: "manifest",
    src: "https://login.readingdoctor.com/ContentUpload/assets/LS1P/mnemonics/n_spr_2.png",
    letter: "n",
    crossOrigin: "anonymous",
    framespeed: 0,
    framecount: 0,
    frametimeout: 0,
    isexist: true,
    ContentPublish: true,
    loadTimeout: 8000,
    ext: "png",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    id: "n3",
    name: "n",
    type: "manifest",
    src: "https://login.readingdoctor.com/ContentUpload/assets/LS1P/mnemonics/n_spr_3.png",
    letter: "n",
    crossOrigin: "anonymous",
    framespeed: 0,
    framecount: 0,
    frametimeout: 0,
    isexist: true,
    ContentPublish: true,
    loadTimeout: 8000,
    ext: "png",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    id: "p0",
    name: "p",
    type: "manifest",
    src: "https://login.readingdoctor.com/ContentUpload/assets/LS1P/mnemonics/p_spr_0.png",
    letter: "p",
    crossOrigin: "anonymous",
    framespeed: 0,
    framecount: 0,
    frametimeout: 0,
    isexist: true,
    ContentPublish: true,
    loadTimeout: 8000,
    ext: "png",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    id: "p1",
    name: "p",
    type: "manifest",
    src: "https://login.readingdoctor.com/ContentUpload/assets/LS1P/mnemonics/p_spr_1.png",
    letter: "p",
    crossOrigin: "anonymous",
    framespeed: 0,
    framecount: 0,
    frametimeout: 0,
    isexist: true,
    ContentPublish: true,
    loadTimeout: 8000,
    ext: "png",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    id: "p2",
    name: "p",
    type: "manifest",
    src: "https://login.readingdoctor.com/ContentUpload/assets/LS1P/mnemonics/p_spr_2.png",
    letter: "p",
    crossOrigin: "anonymous",
    framespeed: 0,
    framecount: 0,
    frametimeout: 0,
    isexist: true,
    ContentPublish: true,
    loadTimeout: 8000,
    ext: "png",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    id: "p3",
    name: "p",
    type: "manifest",
    src: "https://login.readingdoctor.com/ContentUpload/assets/LS1P/mnemonics/p_spr_3.png",
    letter: "p",
    crossOrigin: "anonymous",
    framespeed: 0,
    framecount: 0,
    frametimeout: 0,
    isexist: true,
    ContentPublish: true,
    loadTimeout: 8000,
    ext: "png",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    id: "s0",
    name: "s",
    type: "manifest",
    src: "https://login.readingdoctor.com/ContentUpload/assets/LS1P/mnemonics/s_spr_0.png",
    letter: "s",
    crossOrigin: "anonymous",
    framespeed: 0,
    framecount: 0,
    frametimeout: 0,
    isexist: true,
    ContentPublish: true,
    loadTimeout: 8000,
    ext: "png",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    id: "s1",
    name: "s",
    type: "manifest",
    src: "https://login.readingdoctor.com/ContentUpload/assets/LS1P/mnemonics/s_spr_1.png",
    letter: "s",
    crossOrigin: "anonymous",
    framespeed: 0,
    framecount: 0,
    frametimeout: 0,
    isexist: true,
    ContentPublish: true,
    loadTimeout: 8000,
    ext: "png",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    id: "s2",
    name: "s",
    type: "manifest",
    src: "https://login.readingdoctor.com/ContentUpload/assets/LS1P/mnemonics/s_spr_2.png",
    letter: "s",
    crossOrigin: "anonymous",
    framespeed: 0,
    framecount: 0,
    frametimeout: 0,
    isexist: true,
    ContentPublish: true,
    loadTimeout: 8000,
    ext: "png",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    id: "s3",
    name: "s",
    type: "manifest",
    src: "https://login.readingdoctor.com/ContentUpload/assets/LS1P/mnemonics/s_spr_3.png",
    letter: "s",
    crossOrigin: "anonymous",
    framespeed: 0,
    framecount: 0,
    frametimeout: 0,
    isexist: true,
    ContentPublish: true,
    loadTimeout: 8000,
    ext: "png",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    id: "t0",
    name: "t",
    type: "manifest",
    src: "https://login.readingdoctor.com/ContentUpload/assets/LS1P/mnemonics/t_spr_0.png",
    letter: "t",
    crossOrigin: "anonymous",
    framespeed: 0,
    framecount: 0,
    frametimeout: 0,
    isexist: true,
    ContentPublish: true,
    loadTimeout: 8000,
    ext: "png",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    id: "t1",
    name: "t",
    type: "manifest",
    src: "https://login.readingdoctor.com/ContentUpload/assets/LS1P/mnemonics/t_spr_1.png",
    letter: "t",
    crossOrigin: "anonymous",
    framespeed: 0,
    framecount: 0,
    frametimeout: 0,
    isexist: true,
    ContentPublish: true,
    loadTimeout: 8000,
    ext: "png",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    id: "t2",
    name: "t",
    type: "manifest",
    src: "https://login.readingdoctor.com/ContentUpload/assets/LS1P/mnemonics/t_spr_2.png",
    letter: "t",
    crossOrigin: "anonymous",
    framespeed: 0,
    framecount: 0,
    frametimeout: 0,
    isexist: true,
    ContentPublish: true,
    loadTimeout: 8000,
    ext: "png",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    id: "t3",
    name: "t",
    type: "manifest",
    src: "https://login.readingdoctor.com/ContentUpload/assets/LS1P/mnemonics/t_spr_3.png",
    letter: "t",
    crossOrigin: "anonymous",
    framespeed: 0,
    framecount: 0,
    frametimeout: 0,
    isexist: true,
    ContentPublish: true,
    loadTimeout: 8000,
    ext: "png",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    id: "amov",
    name: "a",
    type: "manifest",
    src: "https://login.readingdoctor.com/ContentUpload/assets/LS1P/mouthspritesheet/a_AU_mov.jpg",
    letter: "a",
    crossOrigin: "anonymous",
    framespeed: 0.9,
    framecount: 16,
    frametimeout: 550,
    isexist: true,
    ContentPublish: true,
    loadTimeout: 8000,
    ext: "jpg",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    id: "emov",
    name: "e",
    type: "manifest",
    src: "https://login.readingdoctor.com/ContentUpload/assets/LS1P/mouthspritesheet/e_AU_mov.jpg",
    letter: "e",
    crossOrigin: "anonymous",
    framespeed: 0.9,
    framecount: 14,
    frametimeout: 500,
    isexist: true,
    ContentPublish: true,
    loadTimeout: 8000,
    ext: "jpg",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    id: "imov",
    name: "i",
    type: "manifest",
    src: "https://login.readingdoctor.com/ContentUpload/assets/LS1P/mouthspritesheet/i_AU_mov.jpg",
    letter: "i",
    crossOrigin: "anonymous",
    framespeed: 0.9,
    framecount: 18,
    frametimeout: 630,
    isexist: true,
    ContentPublish: true,
    loadTimeout: 8000,
    ext: "jpg",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    id: "nmov",
    name: "n",
    type: "manifest",
    src: "https://login.readingdoctor.com/ContentUpload/assets/LS1P/mouthspritesheet/n_AU_mov.jpg",
    letter: "n",
    crossOrigin: "anonymous",
    framespeed: 0.9,
    framecount: 18,
    frametimeout: 630,
    isexist: true,
    ContentPublish: true,
    loadTimeout: 8000,
    ext: "jpg",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    id: "pmov",
    name: "p",
    type: "manifest",
    src: "https://login.readingdoctor.com/ContentUpload/assets/LS1P/mouthspritesheet/p_AU_mov.jpg",
    letter: "p",
    crossOrigin: "anonymous",
    framespeed: 0.9,
    framecount: 16,
    frametimeout: 550,
    isexist: true,
    ContentPublish: true,
    loadTimeout: 8000,
    ext: "jpg",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    id: "smov",
    name: "s",
    type: "manifest",
    src: "https://login.readingdoctor.com/ContentUpload/assets/LS1P/mouthspritesheet/s_AU_mov.jpg",
    letter: "s",
    crossOrigin: "anonymous",
    framespeed: 0.9,
    framecount: 20,
    frametimeout: 630,
    isexist: true,
    ContentPublish: true,
    loadTimeout: 8000,
    ext: "jpg",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    id: "tmov",
    name: "t",
    type: "manifest",
    src: "https://login.readingdoctor.com/ContentUpload/assets/LS1P/mouthspritesheet/t_AU_mov.jpg",
    letter: "t",
    crossOrigin: "anonymous",
    framespeed: 0.9,
    framecount: 17,
    frametimeout: 600,
    isexist: true,
    ContentPublish: true,
    loadTimeout: 8000,
    ext: "jpg",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    id: "yahoo_snd",
    type: "sound",
    index: 1,
    name: "yahoo_snd",
    src: "https://login.readingdoctor.com/assets/audio/yahoo_snd.mp3",
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    id: "yeehaw_snd",
    type: "sound",
    index: 1,
    name: "yeehaw_snd",
    src: "https://login.readingdoctor.com/assets/audio/yeehaw_snd.mp3",
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    id: "yeehoo_snd",
    type: "sound",
    index: 1,
    name: "yeehoo_snd",
    src: "https://login.readingdoctor.com/assets/audio/yeehoo_snd.mp3",
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    id: "yippee_snd",
    type: "sound",
    index: 1,
    name: "yippee_snd",
    src: "https://login.readingdoctor.com/assets/audio/yippee_snd.mp3",
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    id: "bonus_img_100",
    type: "manifest",
    index: 1,
    name: "bonus_100a_spr_0",
    src: "https://login.readingdoctor.com/assets/game_images/bonus_100a_spr_0.png",
    loadTimeout: 8000,
    ext: "png",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    id: "bonus_img_200",
    type: "manifest",
    index: 1,
    name: "bonus_200a_spr_0",
    src: "https://login.readingdoctor.com/assets/game_images/bonus_200a_spr_0.png",
    loadTimeout: 8000,
    ext: "png",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    id: "bonus_img_300",
    type: "manifest",
    index: 1,
    name: "bonus_300a_spr_0",
    src: "https://login.readingdoctor.com/assets/game_images/bonus_300a_spr_0.png",
    loadTimeout: 8000,
    ext: "png",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    id: "bonus_img_400",
    type: "manifest",
    index: 1,
    name: "bonus_400a_spr_0",
    src: "https://login.readingdoctor.com/assets/game_images/bonus_400a_spr_0.png",
    loadTimeout: 8000,
    ext: "png",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    id: "bonus_img_500",
    type: "manifest",
    index: 1,
    name: "bonus_500a_spr_0",
    src: "https://login.readingdoctor.com/assets/game_images/bonus_500a_spr_0.png",
    loadTimeout: 8000,
    ext: "png",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    id: "bonus_img_1000",
    type: "manifest",
    index: 1,
    name: "bonus_1000a_spr_0",
    src: "https://login.readingdoctor.com/assets/game_images/bonus_1000a_spr_0.png",
    loadTimeout: 8000,
    ext: "png",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    id: "bonus_audio_100",
    type: "sound",
    index: 10,
    name: "bonus_100_10",
    src: "https://login.readingdoctor.com/assets/audio/bonus_100_10_snd.mp3",
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    id: "bonus_audio_200",
    type: "sound",
    index: 6,
    name: "bonus_200_6",
    src: "https://login.readingdoctor.com/assets/audio/bonus_200_6_snd.mp3",
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    id: "bonus_audio_300",
    type: "sound",
    index: 4,
    name: "bonus_300_4",
    src: "https://login.readingdoctor.com/assets/audio/bonus_300_4_snd.mp3",
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    id: "bonus_audio_400",
    type: "sound",
    index: 9,
    name: "bonus_400_9",
    src: "https://login.readingdoctor.com/assets/audio/bonus_400_9_snd.mp3",
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    id: "bonus_audio_500",
    type: "sound",
    index: 5,
    name: "bonus_500_5",
    src: "https://login.readingdoctor.com/assets/audio/bonus_500_5_snd.mp3",
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    id: "bonus_audio_1000",
    type: "sound",
    index: 7,
    name: "bonus_1000_7",
    src: "https://login.readingdoctor.com/assets/audio/bonus_1000_7_snd.mp3",
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    id: "bonusbeat",
    type: "sound",
    index: 1,
    name: "bonusbeat3_LS2P_snd",
    src: "https://login.readingdoctor.com/assets/audio/bonusbeat3_LS2P_snd.mp3",
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    index: 9,
    id: "gamecompleteimage",
    type: "manifest",
    name: "you_did_it_anim",
    src: "https://login.readingdoctor.com/assets/game_images/you_did_it_anim_spr_0.png",
    loadTimeout: 8000,
    ext: "png",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    id: "encouragement_1",
    type: "sound",
    index: 1,
    name: "encouragement_1",
    src: "https://login.readingdoctor.com/assets/audio/encouragement_1_snd.mp3",
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    id: "encouragement_2",
    type: "sound",
    index: 2,
    name: "encouragement_2",
    src: "https://login.readingdoctor.com/assets/audio/encouragement_2_snd.mp3",
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    id: "encouragement_3",
    type: "sound",
    index: 3,
    name: "encouragement_3",
    src: "https://login.readingdoctor.com/assets/audio/encouragement_3_snd.mp3",
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    id: "encouragement_4",
    type: "sound",
    index: 4,
    name: "encouragement_4",
    src: "https://login.readingdoctor.com/assets/audio/encouragement_4_snd.mp3",
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    id: "encouragement_5",
    type: "sound",
    index: 5,
    name: "encouragement_5",
    src: "https://login.readingdoctor.com/assets/audio/encouragement_5_snd.mp3",
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    id: "encouragement_6",
    type: "sound",
    index: 6,
    name: "encouragement_6",
    src: "https://login.readingdoctor.com/assets/audio/encouragement_6_snd.mp3",
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    id: "encouragement_7",
    type: "sound",
    index: 7,
    name: "encouragement_7",
    src: "https://login.readingdoctor.com/assets/audio/encouragement_7_snd.mp3",
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    id: "encouragement_8",
    type: "sound",
    index: 8,
    name: "encouragement_8",
    src: "https://login.readingdoctor.com/assets/audio/encouragement_8_snd.mp3",
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    id: "encouragement_9",
    type: "sound",
    index: 9,
    name: "encouragement_9",
    src: "https://login.readingdoctor.com/assets/audio/encouragement_9_snd.mp3",
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    id: "encouragement_10",
    type: "sound",
    index: 10,
    name: "encouragement_10",
    src: "https://login.readingdoctor.com/assets/audio/encouragement_10_snd.mp3",
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    id: "encouragement_11",
    type: "sound",
    index: 11,
    name: "encouragement_11",
    src: "https://login.readingdoctor.com/assets/audio/encouragement_11_snd.mp3",
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    id: "encouragement_12",
    type: "sound",
    index: 12,
    name: "encouragement_12",
    src: "https://login.readingdoctor.com/assets/audio/encouragement_12_snd.mp3",
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    id: "encouragement_12",
    type: "sound",
    index: 13,
    name: "encouragement_12",
    src: "https://login.readingdoctor.com/assets/audio/encouragement_13_snd.mp3",
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    id: "encouragement_14",
    type: "sound",
    index: 14,
    name: "encouragement_14",
    src: "https://login.readingdoctor.com/assets/audio/encouragement_14_snd.mp3",
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    id: "encouragement_14",
    type: "sound",
    index: 15,
    name: "encouragement_14",
    src: "https://login.readingdoctor.com/assets/audio/encouragement_15_snd.mp3",
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    id: "encouragement_14",
    type: "sound",
    index: 16,
    name: "encouragement_14",
    src: "https://login.readingdoctor.com/assets/audio/encouragement_16_snd.mp3",
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    id: "encouragement_17",
    type: "sound",
    index: 17,
    name: "encouragement_17",
    src: "https://login.readingdoctor.com/assets/audio/encouragement_17_snd.mp3",
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    id: "encouragement_18",
    type: "sound",
    index: 18,
    name: "encouragement_18",
    src: "https://login.readingdoctor.com/assets/audio/encouragement_18_snd.mp3",
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    id: "encouragement_19",
    type: "sound",
    index: 19,
    name: "encouragement_19",
    src: "https://login.readingdoctor.com/assets/audio/encouragement_19_snd.mp3",
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    id: "encouragement_20",
    type: "sound",
    index: 20,
    name: "encouragement_20",
    src: "https://login.readingdoctor.com/assets/audio/encouragement_20_snd.mp3",
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    id: "encouragement_21",
    type: "sound",
    index: 21,
    name: "encouragement_21",
    src: "https://login.readingdoctor.com/assets/audio/encouragement_21_snd.mp3",
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    id: "encouragement_22",
    type: "sound",
    index: 22,
    name: "encouragement_22",
    src: "https://login.readingdoctor.com/assets/audio/encouragement_22_snd.mp3",
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    id: "consec",
    type: "sound",
    index: 23,
    name: "consec",
    src: "https://login.readingdoctor.com/assets/audio/consec_snd.mp3",
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    id: "bonus_prize",
    type: "sound",
    name: "bonus_prize",
    src: "https://login.readingdoctor.com/assets/audio/bonus_prize_snd.mp3",
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    id: "bonus_all_prizes",
    type: "sound",
    name: "bonus_all_prizes",
    src: "https://login.readingdoctor.com/assets/audio/bonus_all_prizes_snd.mp3",
    loadTimeout: 8000,
    ext: "mp3",
    path: "",
    data: 100,
  },
  {
    id: "bonus_prize_img",
    type: "manifest",
    name: "bonus_prize_img",
    src: "https://login.readingdoctor.com/assets/game_images/bonus_prize_spr_0.png",
    loadTimeout: 8000,
    ext: "png",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    id: "bonus_all_prizes_img",
    type: "manifest",
    name: "bonus_all_prizes_img",
    src: "https://login.readingdoctor.com/assets/game_images/bonus_all_prizes_spr_0.png",
    loadTimeout: 8000,
    ext: "png",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    id: "how_to_use_LS1P_default",
    type: "manifest",
    name: "how_to_use_LS1P_default",
    src: "https://login.readingdoctor.com/assets/game_images/how_to_use_LS1P_spr_0.png",
    loadTimeout: 8000,
    ext: "png",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    id: "how_to_use_LS1P_hover",
    type: "manifest",
    name: "how_to_use_LS1P_default",
    src: "https://login.readingdoctor.com/assets/game_images/how_to_use_LS1P_spr_1.png",
    loadTimeout: 8000,
    ext: "png",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    id: "about_LS1P_default",
    type: "manifest",
    name: "about_LS1P_default",
    src: "https://login.readingdoctor.com/assets/game_images/about_LS1P_spr_0.png",
    loadTimeout: 8000,
    ext: "png",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    id: "about_LS1P_hover",
    type: "manifest",
    name: "about_LS1P_hover",
    src: "https://login.readingdoctor.com/assets/game_images/about_LS1P_spr_1.png",
    loadTimeout: 8000,
    ext: "png",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    id: "how_to_use_LS1P_bg",
    type: "manifest",
    name: "how_to_use_LS1P_bg",
    src: "https://login.readingdoctor.com/assets/game_images/how_to_use_LS1P_bg.png",
    loadTimeout: 8000,
    ext: "png",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    id: "how_to_use_masthead_spr_0",
    type: "manifest",
    name: "how_to_use_masthead_spr_0",
    src: "https://login.readingdoctor.com/assets/game_images/how_to_use_masthead_spr_0.png",
    loadTimeout: 8000,
    ext: "png",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    id: "movie_off",
    type: "manifest",
    src: "https://login.readingdoctor.com/assets/game_images/movie_on_spr_0.png",
    loadTimeout: 8000,
    ext: "png",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    id: "movie_display",
    type: "manifest",
    src: "https://login.readingdoctor.com/assets/game_images/movie_display_spr_0.png",
    loadTimeout: 8000,
    ext: "png",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
  {
    id: "blankmov",
    type: "manifest",
    src: "https://login.readingdoctor.com/assets/game_images/blankmov_spr_0.png",
    loadTimeout: 8000,
    ext: "png",
    path: "",
    mimeType: "text/plain; charset=utf-8",
  },
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
  // db = window.sqlitePlugin.openDatabase({
  //   name: "sahulSqlite.db",
  //   location: "default",
  //   createFromLocation: 1,
  // });
  // Perform database operations here
  console.log(moment().format("MMMM Do YYYY, h:mm:ss a"));
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
var _downloadedFile = [];
function CordovaMediaPlayer() {
  debugger;
  var my_media = new Media(
    _downloadedFile[0].nativeURL,
    function (onSuccess) {},
    function (onError) {}
  );
  my_media.play();
}

// Create a FileTransfer object

// Array of file URLs to download

// Specify the target directory for downloads

// Function to initiate the download for a single file
function downloadFile1() {
  var url = audioUrls[0].src;
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

function fileTransfer12() {
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

// ! promise is resolved

// Create a FileTransfer object

// Array of file URLs to download

// Specify the target directory for downloads

// Function to initiate the download for a single file and return a promise
function downloadFile(url) {
  return new Promise((resolve, reject) => {
    var targetDirectory = cordova.file.dataDirectory;
    var fileTransfer = new FileTransfer();

    // Extract the file name from the URL
    var fileName = url.src.split("/").pop();

    // Specify the target path for the download
    var targetPath = targetDirectory + fileName;

    // Use the FileTransfer plugin to download the file
    fileTransfer.download(
      url.src, // Source URL
      targetPath, // Target path on the device
      resolve, // Success callback
      reject // Error callback
    );
  });
}
function fileTransfer1(params) {
  // Create an array of promises for each download
  var downloadPromises = audioUrls.map(downloadFile);
  startTImer();
  // Use Promise.all() to handle multiple downloads concurrently
  Promise.all(downloadPromises)
    .then((results) => {
      debugger;
      // All downloads succeeded
      console.log("All files downloaded successfully:", results);

      // for (let index = 0; index < results.length; index++) {
      //   const element = results[index];
      //   this._downloadedFile.push(element.nativeURL);
      // }
      this._downloadedFile = results;
      console.log("All files downloaded successfully:", _downloadedFile);

      // Your code to process responses after all files are downloaded
      // This will only be executed if all downloads are successful
      startTImer();
    })
    .catch((error) => {
      debugger;
      // At least one download failed
      console.error("Error downloading files:", error);

      // Your code to handle errors during file downloads
    });
  // ! promise is resolved
}

function startTImer() {
  console.log(moment().format("MMMM Do YYYY, h:mm:ss a"));
}
