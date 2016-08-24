function popup(){
  var _self = this,
      initClass = 'popup-init',
      coverClass = 'popup-cover',
      xMarkClass = 'popup-xMark',
      activeClass = '-open';

  document.onclick = function(e){
    var el = e.target,
        openPopup = el.classList.contains(initClass),
        closePopup = el.classList.contains(coverClass),
        xMark = el.classList.contains(xMarkClass);

    if(openPopup){

      _self.openPopup(el);

    } else if(closePopup){

      _self.closePopup(el);

    } else if(xMark){

      var coverEl = el.parentNode.parentNode;
      _self.closePopup(coverEl);

    }
  }

  _self.openPopup = function(el){
    var popupId = el.getAttribute('data-popup-id'),
        cover = document.getElementById(popupId);

    cover.classList.add(activeClass);
  };

  _self.closePopup = function(el){
    el.classList.remove(activeClass)
  };

};

window.onload = function() {
  popup();
}
