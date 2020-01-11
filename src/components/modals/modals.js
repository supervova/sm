/**
 * -----------------------------------------------------------------------------
 * MODAL WINDOWS
 * -----------------------------------------------------------------------------
 *
 * Add load() method to Bootstrap modals
 *
 */

jQuery(document).ready(($) => {
  $('a[data-src="external"]').click((e) => {
    const href      = $(e.currentTarget).attr('href');
    const modal     = $('#modal');
    const container = $('.modal-content');

    // Cancel the link behavior
    e.preventDefault();

    // Load content and show modal.
    container.load(`${href} .is-modal-src`, () => {
      modal.modal('show');
    });

    // Clear modal content to prevent show it before new document has been loaded
    modal.on('hidden.bs.modal', () => {
      container.empty();
    });
  });

  $('#modal-search').on('shown.bs.modal', () => {
    $('#modal-search .form__search-input').focus();
  });

  // Hide model on Esc
  $(document).keydown((e) => {
    if (e.keyCode === 27) {
      $('.modal').removeClass('show', () => {
        $(this).hide(400);
      });
    }
  });
});
