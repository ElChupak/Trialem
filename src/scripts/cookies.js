window.addEventListener('DOMContentLoaded', ()=>{

    const cookiesSec = document.querySelector('#cookies'),
          cookiesBtn = document.querySelector('#cookies-btn'),
          policyBtn = document.querySelector('#policy-btn'),
          policy = document.querySelector('#policy'),
          pClose = document.querySelector('.policy-close'),
          burger = document.querySelector('.burger');

    function setCookie(cName, cValue, expDays) {
        let date = new Date();
        date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
        const expires = 'expires=' + date.toUTCString();
        document.cookie = cName + '=' + cValue + ';' + expires + '; path=/';
    };

    function hideCookie() {
        cookiesSec.classList.remove('active')
        setTimeout(() => {
            cookiesSec.style.display = 'none';
        }, 1000)
        setCookie('cookie', true, 30);
    }

    cookiesBtn?.addEventListener('click', hideCookie);
    policyBtn?.addEventListener('click', hideCookie);


    function getCookie(cName) {
        const name = cName + "=";
        const cDecoded = decodeURIComponent(document.cookie);
        const cArr = cDecoded .split('; ');
        let res;
        cArr.forEach(val => {
            if (val.indexOf(name) === 0) res = val.substring(name.length);
        })
        return res;
    }

    function cookieMessage() {
        if(!getCookie('cookie')) 
            setTimeout(() => {
                cookiesSec.classList.add('active')
            }, 500)
    }

    window.addEventListener('load', cookieMessage);
    

    // Policy Show
          
    policyBtn?.addEventListener('click', ()=>{
        cookiesSec.classList.remove('active')
        policy.classList.add('active');

        setTimeout(() => {
            policy.classList.add('active');
            // document.body.style.overflow = 'hidden'
        }, 500)

        setTimeout(() => {
            document.body.style.overflow = 'hidden'
        }, 900)

        if(burger.classList.contains('active')) {
            burger.classList.remove('active')
        }
    });

    pClose.addEventListener('click', ()=>{
        policy.classList.remove('active')
        document.body.style.overflow = 'auto'
    });
    
});
