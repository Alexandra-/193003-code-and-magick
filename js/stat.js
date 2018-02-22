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


var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + SHADOW_SHIFT, CLOUD_Y + SHADOW_SHIFT, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = "#000";

  ctx.font = FONT;
  ctx.fillText('Ура вы победили!', CLOUD_X + CLOUD_PADDING, CLOUD_Y + CLOUD_PADDING);

  ctx.fillText('Список результатов:', CLOUD_X + CLOUD_PADDING, CLOUD_Y + CLOUD_PADDING + TEXT_HEIGHT + FONT_GAP);

  var maxTime = Math.floor(times[0]);
  var barHeight;
  var barY;

  for (var i = 0; i <= times.length - 1; i++) {
    if (Math.floor(times[i]) > maxTime) {
      maxTime = Math.floor(times[i]);
    }
  }

  for (var j = 0; j <= names.length - 1; j++) {
    barHeight = times[j] * 100 / maxTime;
    barY = (150 - barHeight) + CLOUD_Y + CLOUD_PADDING + (TEXT_HEIGHT + FONT_GAP) * 3 + FONT_GAP;
    ctx.fillText(names[j], CLOUD_X + CLOUD_PADDING + (BAR_WIDTH + GAP) * j, USER_Y);
    ctx.fillRect(CLOUD_X + CLOUD_PADDING + (BAR_WIDTH + GAP) * j, barY , BAR_WIDTH, barHeight);
  }

};
