window.onload = function() {

  // POPUP LOGIC

  const contactsMailLink = document.querySelector('.contacts .mail-link'),
        contactsMapLink = document.querySelector('.contacts .map-location'),
        footerAddressLink = document.querySelector('.address-link');
  
  runPopupLogic(contactsMailLink, '.modal.mail');
  runPopupLogic(contactsMapLink, '.modal.map');
  runPopupLogic(footerAddressLink, '.modal.map');

  function runPopupLogic(triggerEl, popupSelector) {
    if (triggerEl) {
      triggerEl.addEventListener('click', function (evt) {
        evt.preventDefault();
        openPopup(popupSelector);
      });
    }

    function openPopup(popupSelector) {
      const popup = document.querySelector(popupSelector);
      const closeBtn = popup.querySelector('.modal-close');
      const closePopupByEscListener = function(evt) {
        if (evt.keyCode === 27) {
          evt.preventDefault();
          closePopup();
        }
      }
  
      popup.classList.add('modal-show');
      if (popupSelector === '.modal.mail') {
        const nameField = popup.querySelector('[name=name]');
        nameField.focus();
      }
  
      closeBtn.addEventListener('click', function (evt) {
        evt.preventDefault();
        closePopup();
      });
      window.addEventListener('keydown', closePopupByEscListener);
  
      function closePopup() {
        window.removeEventListener('keydown', closePopupByEscListener);
        popup.classList.add('modal-pre-closed');
        setTimeout(function() {
          popup.classList.remove('modal-show');
          popup.classList.remove('modal-pre-closed');
        }, 700);
      }
    }
  }

  // SERVICE SLIDER LOGIC

  const deliveryTabBtn = document.getElementById('delivery-btn'),
        warrantyTabBtn = document.getElementById('warranty-btn'),
        creditTabBtn = document.getElementById('credit-btn');

  runServiceSliderLogic(deliveryTabBtn);
  runServiceSliderLogic(warrantyTabBtn);
  runServiceSliderLogic(creditTabBtn);

  function runServiceSliderLogic(tabBtn) {
    if (!tabBtn) return;

    tabBtn.addEventListener('click', function(evt) {
      evt.preventDefault();

      const tabBtnContainer = tabBtn.parentElement;
      if (!tabBtnContainer.classList.contains('active')) {
        deactivateCurrentTab();
        activateClickedTab();
      }
    
      function deactivateCurrentTab() {
        const currentBtnContainer = document.querySelector('.tab-controls .active');
        const currentService = document.querySelector('.service.active');
        
        currentBtnContainer.classList.remove('active');
        currentService.classList.remove('active');
      }
    
      function activateClickedTab() {
        const serviceSelector = getServiceSelector();
        const service = document.querySelector(serviceSelector);
    
        tabBtnContainer.classList.add('active');
        service.classList.add('active');
    
        function getServiceSelector() {
          switch (tabBtn.id) {
            case 'delivery-btn':
              return '.service.delivery';
            case 'warranty-btn':
              return '.service.warranty';
            case 'credit-btn':
              return '.service.credit';
          }
        }
      }
    });
  }
}


// ОЖИВЛЕНИЕ МОДАЛЬНОГО ОКНА
// 1. Найти кнопку по нажатию которой будет открываться модальное окно.
// 2. Найти модальное окно, которое должно будет открыться.
// 3. На кнопку повесить обработчик событий, чтобы по клику:
//      3.1. Отменяется действие по умолчанию.
//      3.2. Добавляется класс 'modal-show' модальному окну.
// 4. Оживить кнопку закрытия модального окна.
// 5. При открытии модального окна, переводить фокус на первое поле в молальном окне.

// ПРОЧЕЕ
// * Не забыть изменить все кавычки на одинарные.