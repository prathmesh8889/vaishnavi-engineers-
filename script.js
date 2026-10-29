document.addEventListener('DOMContentLoaded',()=>{
  const toggle=document.querySelector('.menu-toggle');
  const nav=document.querySelector('.nav-links');
  if(toggle&&nav){
    toggle.addEventListener('click',()=>{
      const open=nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded',String(open));
      toggle.textContent=open?'×':'☰';
    });
    nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
      nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='☰';
    }));
  }
  document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
  const productSelect=document.querySelector('#product');
  const params=new URLSearchParams(location.search);const product=params.get('product');
  if(productSelect&&product){
    const option=[...productSelect.options].find(o=>o.text.toLowerCase()===product.toLowerCase())||[...productSelect.options].find(o=>o.text.toLowerCase().includes(product.toLowerCase()));
    if(option)productSelect.value=option.value||option.text;
  }
  const form=document.querySelector('#enquiry-form');
  if(form){form.addEventListener('submit',e=>{
    e.preventDefault();const data=new FormData(form);
    const message='Hello Vaishnavi Engineers, I would like to enquire about food processing machinery.\\n\\nName: '+data.get('name')+'\\nBusiness: '+(data.get('business')||'Not provided')+'\\nEmail: '+(data.get('email')||'Not provided')+'\\nPhone: '+(data.get('phone')||'Not provided')+'\\nMachine / product: '+(data.get('product')||'Not selected')+'\\n\\nRequirement: '+data.get('message');
    const status=document.querySelector('#form-status');if(status)status.textContent='Opening WhatsApp with your enquiry. Please review and send the message.';
    window.open('https://wa.me/917083964413?text='+encodeURIComponent(message),'_blank','noopener,noreferrer');
  });}
});