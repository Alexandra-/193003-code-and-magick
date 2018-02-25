'use strict';
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var WIZARDS_QUANTITY = 4;
var wizards = [];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var getRandom = function (max, min) {
  if (typeof min === 'undefined') {
    min = 0;
  }
  return Math.floor(Math.random() * (max - min) + min);
};

var createWizardsList = function () {
  var wizardName;
  var wizardSurname;
  for (var k = 0; k < WIZARDS_QUANTITY; k++) {
    wizardName = WIZARD_NAMES[getRandom(WIZARD_NAMES.length)];
    wizardSurname = WIZARD_SURNAMES[getRandom(WIZARD_SURNAMES.length)];
    wizards.push({
      name: wizardName + ' ' + wizardSurname,
      coatColor: COAT_COLOR[getRandom(COAT_COLOR.length)],
      eyesColor: EYES_COLOR[getRandom(EYES_COLOR.length)]
    });
  }
};

createWizardsList();

var wizardElement;
for (var i = 0; i < wizards.length; i++) {
  wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
  similarListElement.appendChild(wizardElement);
}
