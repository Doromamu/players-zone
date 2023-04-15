/********Eventos Del elemento Drag and Drop**************/
window.addEventListener('load', (event) => {
  const dragDropArea = document.getElementById('drag-drop-area');
  const fileButton = document.getElementById('file-button');
  const inputImg = document.getElementById('input-img');
  const dragDropText = document.getElementById('drag-drog-text');

  fileButton.addEventListener('click', (event) => {
    event.preventDefault();
    inputImg.click();
  }, false);

  inputImg.addEventListener('select', (event) => {
    console.log('Se selecciono un archivo');
  }, false);

  dragDropArea.addEventListener('dragover', (event) => {
    event.preventDefault();
    dragDropArea.classList.remove('drag-inactive');
    dragDropArea.classList.add('drag-over');
    dragDropText.textContent = 'Suelte el archivo JPG o PNG.';
  }, false);

  dragDropArea.addEventListener('dragleave', (event) => {
    event.preventDefault();
    dragDropArea.classList.remove('drag-over');
    dragDropArea.classList.add('drag-inactive');
    dragDropText.textContent = 'ó arrastre un archivo JPG o PNG.';
  }, false);

  dragDropArea.addEventListener('drop', (event) => {
    event.preventDefault();
    let files = event.dataTransfer.files;
    showImg(files);
    dragDropArea.classList.remove('drag-over');
    dragDropArea.classList.add('drag-inactive');
    dragDropText.textContent = 'ó arrastre un archivo JPG o PNG.';
  }, false);

  function showImg(files) {
    processImg(files.item(0));
  }

  function processImg(file) {
    const validExtension = ['image/jpg', 'image/png', 'image/jepg'];
    if (validExtension.includes(file.type)) {

    } else {
      const errModal = new bootstrap.Modal('#modal-drag-drop', {
        backdrop: true,
        keyboard: false
      });
      const bodyModal = document.querySelector('.modal-body');
      bodyModal.innerHTML = `El archivo <strong> ${file.name} </strong> no
  tiene una extension valida.`;
      errModal.show();
    }
  }
}, false);
/****************************************************** */