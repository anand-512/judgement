var app = new App();

var socket = io();

var socIO = new IO();
socIO.init();

var game = new Game();

var nameInput = document.getElementById('nameInput');
var gameInput = document.getElementById("gameInput");
var createButton = document.getElementById('createButton');
var joinButton = document.getElementById('joinButton');
var messageText = document.getElementById("messageText");
var startGameButton = document.getElementById("startGameButton");
var scorecardButton = document.getElementById("scorecardButton");
var chatBox = document.getElementById("chatBox");
var chatInput = document.getElementById("chatInput");
var trumpText = document.getElementById("trumpText");
var form = document.getElementById("form");
var claimTableHead = document.getElementById("claimTableHead");
var claimTable = document.getElementById("claimTable");
var gameNoText = document.getElementById("gameNoText");
var roundNoText = document.getElementById("roundNoText");
var claimButton = document.getElementById("claimButton");
var claimInput = document.getElementById("claimInput");
var overlay = document.getElementById("overlay");
var claimBox = document.getElementById("claimBox");
var trumpBox = document.getElementById("trumpBox");
var selectTrump = document.getElementById("selectTrump");
var roundInfo = document.getElementById("roundInfo");

var suitNames = [
    'Clubs',
    'Diamonds',
    'Spades',
    'Hearts'
];


