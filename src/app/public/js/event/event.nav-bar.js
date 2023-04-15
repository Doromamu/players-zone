/*******Eventos de la barra de navegacion******* */
window.addEventListener('load', (event) => {
  const categoriesDocElement = document.getElementById('categories');
  const categoriesBoxDocElement = document.getElementById('categories-box');
  categoriesDocElement.addEventListener('mouseover', () => {

    categoriesBoxDocElement.style.display = 'block';
  }, false);

  categoriesDocElement.addEventListener('mouseout', () => {

    categoriesBoxDocElement.style.display = 'none';
  }, false);

  const userDocElement = document.getElementById('user');
  const userBoxDocElement = document.getElementById('user-box');

  userDocElement.addEventListener('mouseover', () => {
    userBoxDocElement.style.display = 'block';
  }, false);

  userDocElement.addEventListener('mouseout', () => {
    userBoxDocElement.style.display = 'none';
  }, false);
}, false);
  /************************************************* */