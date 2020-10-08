/* eslint-disable strict */

/* to add an item */
$('#js-shopping-list-form').submit(function (event) {
  event.preventDefault();
  const listItem = $('#shopping-list-entry').val();

  var listItemTemplate = '<li><span class="shopping-item">' +
    listItem +
    '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>';

  $('ul').append(listItemTemplate);
  $('#shopping-list-entry').val("");
});

/* to check off an item */
$('ul').on('click', '.shopping-item-toggle', function (event) {
  const listItem = $(event.currentTarget).closest('li');
  $(listItem).find('.shopping-item').toggleClass('shopping-item__checked');
});

/* to remove an item */
$('ul').on('click', '.shopping-item-delete', function (event) {
  $(event.currentTarget).closest('li').remove();
})