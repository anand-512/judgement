var app = new App();

var socket = io('http://vz.local', { path: '/judgement/socket.io' });

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

var rankNames = {
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '7',
    '8': '8',
    '9': '9',
    '10': '10',
    '11': 'Jack',
    '12': 'Queen',
    '13': 'King',
    '14': 'Ace'
};


