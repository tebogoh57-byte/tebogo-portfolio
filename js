// Smooth scroll + form alert
document.querySelectorAll('a[href^=\"#\"]').forEach(a=>{
a.addEventListener('click',e=>{
e.preventDefault();document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'})
})});
document.querySelector('form')?.addEventListener('submit',e=>{
e.preventDefault();alert('Thank you Tebogo! Message sent - I will reply soon.');e.target.reset();
});
