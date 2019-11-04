window.onload = function() {
  const contactsMailLink = document.getElementById('contactsMailLink'),
        contactsMapLink = document.getElementById('contactsMapLink'),
        footerAddressLink = document.getElementById('footerAddressLink');

  if (contactsMailLink) {
    contactsMailLink.onclick = function() {
      openModal('mailModal');
      return false;
    }
  }
  if (contactsMapLink) {
    contactsMapLink.onclick = function() {
      openModal('mapModal');
      return false;
    }
  }
  if (footerAddressLink) {
    footerAddressLink.onclick = function() {
      openModal('mapModal');
      return false;
    }
  }
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.remove('closed');
}

function closeModal(btn) {
  const modal = btn.parentElement;
  modal.classList.add('closed');
}
