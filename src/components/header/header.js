/**
 * -----------------------------------------------------------------------------
 * HEADER BEHAVIOUR
 * -----------------------------------------------------------------------------
 */

jQuery(document).ready(($) => {
  // Back button
  $('.header__back').on('click', () => {
    window.history.go(-1);
  });
});

