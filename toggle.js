function customToggle(elemId) {
  this.elem = document.getElementById(elemId);
  this.elem.setAttribute('for', 't_'+elemId);

  const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.className = 'cToggle_checkbox';
        checkbox.setAttribute('id', 't_'+elemId);
        checkbox.hidden = true;
        checkbox.checked = this.elem.classList.contains('checked') ? true : false;

  const span = document.createElement('span');
        span.className = 'cToggle_span';

  if (this.elem.classList.contains('disabled')) {
    checkbox.disabled = true;
  } else {
    this.elem.addEventListener('click', () => {  
      document.getElementById('t_'+elemId).dispatchEvent(new CustomEvent('change'));
    });          
  }

  this.elem.appendChild(checkbox);
  this.elem.appendChild(span);
}