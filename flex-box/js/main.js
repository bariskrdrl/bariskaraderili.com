function displayChange() {

  var display = document.querySelector('#display select');
  var flexDirection = document.querySelector('#flex-direction select');
  var flexWrap = document.querySelector('#flex-wrap select');
  var alignItems = document.querySelector('#align-items select');
  var justifyContent = document.querySelector('#justify-content select');
  var alignContent = document.querySelector('#align-content select');

  display.addEventListener('change', function(){
    var displayValue = this.value;
    var displayContent = document.querySelector('#display ~ section');
    displayContent.style.display=displayValue;
  });

  flexDirection.addEventListener('change', function(){
    var displayValue = this.value;
    var displayContent = document.querySelector('#flex-direction ~ section');
    displayContent.style.flexDirection=displayValue;
  });

  flexWrap.addEventListener('change', function(){
    var displayValue = this.value;
    var displayContent = document.querySelector('#flex-wrap ~ section');
    displayContent.style.flexWrap=displayValue;
  });

  alignItems.addEventListener('change', function(){
    var displayValue = this.value;
    var displayContent = document.querySelector('#align-items ~ section');
    displayContent.style.alignItems=displayValue;
  });

  justifyContent.addEventListener('change', function(){
    var displayValue = this.value;
    var displayContent = document.querySelector('#justify-content ~ section');
    displayContent.style.justifyContent=displayValue;
  });

  alignContent.addEventListener('change', function(){
    var displayValue = this.value;
    var displayContent = document.querySelector('#align-content ~ section');
    displayContent.style.alignContent=displayValue;
  });

  /*var select = document.querySelector('.control select');

  select.addEventListener('change', function(){
    var id = this.parentElement.id;
    alert(id);
  });*/

}

displayChange();
