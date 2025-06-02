// Botão WhatsApp flutuante - abre link direto
document.getElementById('btn-whatsapp-float').addEventListener('click', () => {
  window.open('https://wa.me/5568992493742?text=Ol%C3%A1%2C%20fiquei%20interessado%20nos%20seus%20servi%C3%A7os!', '_blank');
});

// Formulário contato simples (com Formspree para backend grátis)
// Caso queira um backend próprio, pode trocar o action no form por outro endpoint
// Aqui não tem validação extra, pode implementar depois se quiser
