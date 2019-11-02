function switchTab(clickedBtn) {
  const clickedBtnContainer = clickedBtn.parentElement;
  if (!clickedBtnContainer.classList.contains('active')) {
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
    const serviceId = getServiceId();
    const service = document.getElementById(serviceId);

    clickedBtnContainer.classList.add('active');
    service.classList.add('active');

    function getServiceId() {
      switch (clickedBtn.id) {
        case 'delivery-btn':
          return 'delivery-service';
        case 'warranty-btn':
          return 'warranty-service';
        case 'credit-btn':
          return 'credit-service';
      }
    }
  }
}