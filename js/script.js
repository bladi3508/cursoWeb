function scrollClass(){
    const navBar = document.querySelector('.navbar');

    window.addEventListener('scroll', function(){
        if(this.window.scrollY > 50){
            navBar.classList.add('bg-dark', 'navbar-sticky');
        }else{
            navBar.classList.remove('bg-dark', 'navbar-sticky');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    scrollClass();
});