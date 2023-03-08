let isActive = false;
function  toggle(){
    if(isActive){
        document.querySelector('.shop-btn').className = 'shop-btn' ; 
        document.querySelector('.shadow').className = 'shadow'; 
        document.querySelector('.mobile-nav').className = 'mobile-nav';
       isActive = false;
    }
    else{
     document.querySelector('.shop-btn').className = 'shop-btn active' ; 
     document.querySelector('.shadow').className = 'shadow active'; 
    document.querySelector('.mobile-nav').className = 'mobile-nav active';
    isActive = true;
    }
}