'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_PADDING = 30;
var SHADOW_SHIFT = 10;
var GAP = 50;
var FONT_GAP = 5;
var TEXT_HEIGHT = 20;
var BAR_WIDTH = 40;
var FONT = '16px PT Mono';
var USER_Y = CLOUD_Y + CLOUD_PADDING + (TEXT_HEIGHT + FONT_GAP) * 2 + TEXT_HEIGHT;
var barMaxHeight = 150;
var barHeight;
var barY;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = Math.floor(arr[0]);

  for (var i = 0; i <= arr.length - 1; i++) {
    if (Math.floor(arr[i]) > maxElement) {
      maxElement = Math.floor(arr[i]);
    }
  }

  return maxElement;
}

var getRandomNum = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + SHADOW_SHIFT, CLOUD_Y + SHADOW_SHIFT, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = "#000";
  ctx.font = FONT;
  ctx.fillText('Ура вы победили!', CLOUD_X + CLOUD_PADDING, CLOUD_Y + CLOUD_PADDING);
  ctx.fillText('Список результатов:', CLOUD_X + CLOUD_PADDING, CLOUD_Y + CLOUD_PADDING + TEXT_HEIGHT + FONT_GAP);

  var maxTime = getMaxElement(times);

  for (var j = 0; j <= names.length - 1; j++) {
    barHeight = times[j] * barMaxHeight / maxTime;
    barY = (barMaxHeight - barHeight) + CLOUD_Y + CLOUD_PADDING + (TEXT_HEIGHT + FONT_GAP) * 3 + FONT_GAP;
    ctx.fillStyle = "#000";
    ctx.fillText(names[j], CLOUD_X + CLOUD_PADDING + (BAR_WIDTH + GAP) * j, USER_Y);

    var randomNum;

    if (names[j] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      randomNum = getRandomNum(0, 255);
      ctx.fillStyle = 'rgba(0, 0, ' + randomNum + ', 1)';
    }
    ctx.fillRect(CLOUD_X + CLOUD_PADDING + (BAR_WIDTH + GAP) * j, barY , BAR_WIDTH, barHeight);
  }

};
