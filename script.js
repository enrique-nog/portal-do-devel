// Adicionando efeito de foco nos itens do menu com JavaScript
const menuItems = document.querySelectorAll("ul li");

menuItems.forEach(item => {
  item.addEventListener("mouseover", () => {
    item.style.backgroundColor = "#a9a9a9"; // muda para cinza mais escuro
  });
  
  item.addEventListener("mouseout", () => {
    item.style.backgroundColor = ""; // volta à cor original
  });
});
