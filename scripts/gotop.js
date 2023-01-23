window.onscroll = () => {
    toggleTopButton();
  }

  function scrollToTop(){
    window.scrollTo({
        top: 0, 
        behavior: 'smooth'
    });
  }

  function toggleTopButton() {
    if(document.documentElement.scrollTop > 100){
                document.querySelector('.go-top-container').classList.add('show')
            } else{
                document.querySelector('.go-top-container').classList.remove('show')
            }
}