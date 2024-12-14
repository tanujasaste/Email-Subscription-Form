const scriptURL = 'https://script.google.com/macros/s/AKfycbwwzoGIfNpipb0lm2UYej0ACvDe3yccfkDIQD5cVFwmTqy_kk7aUuq63n-gB2kwgAiQBA/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.querySelector("#msg")
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML ="Thank you for subscribing!"
                setTimeout(function(){
                    msg.innerHTML = ""
                },5000)
                form.reset()
            })
            .catch(error => console.error('Error!', error.message))
})