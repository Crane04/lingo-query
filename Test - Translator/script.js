      let first=document.querySelectorAll("textarea")[0]
      let second=document.querySelectorAll("textarea")[1]
      let firstvalue=document.querySelectorAll("select")[0]
      let secondvalue=document.querySelectorAll("select")[1]
      let btn=document.querySelector("button")
      let copy0=document.querySelectorAll(".fa-files-o")[0]
      let copy1=document.querySelectorAll(".fa-files-o")[1]
      let reverse=document.querySelector(".fa-exchange")
      let speak0=document.querySelectorAll(".fa-volume-up")[0]
      let speak1=document.querySelectorAll(".fa-volume-up")[1]
      const select1=document.querySelectorAll("select")[0]
      const select2=document.querySelectorAll("select")[1]



      // Fetch the JSON data
      fetch('https://raw.githubusercontent.com/Crane04/Translator/main/languages.json')
      .then(response => response.json())
      .then(data => {
         // Loop through the data
         data.forEach(item => {
            let create_option = document.createElement("option")
            create_option.value = item.code
            create_option.innerText = item.name
            select1.append(create_option)

         });
      })
      .catch(error => console.error('Error fetching JSON:', error));


      fetch('https://raw.githubusercontent.com/Crane04/Translator/main/languages.json')
      .then(response => response.json())
      .then(data => {
         // Loop through the data
         data.forEach(item => {
            let create_option = document.createElement("option")
            create_option.value = item.code
            create_option.innerText = item.name
            select2.append(create_option)

         });
      })
      .catch(error => console.error('Error fetching JSON:', error));

        btn.addEventListener("click",function(){
         if(first.value===""){
            second.value="Please, enter a text."
         }
           let api=`http://127.0.0.1:8000/translator/?from=${firstvalue.value}&to=${secondvalue.value}&text=${first.value}`
           console.log(api);
           second.setAttribute("placeholder","Translating...")
           fetch(api).then(res=>res.json())
           .then(data=>{
            second.value=data.meaning
            console.log(data)
           })
           .catch(err=>
           second.setAttribute("placeholder","Translation error")
           )
        })

        copy0.addEventListener("click", function(){
         navigator.clipboard.writeText(first.value)
        })

        copy1.addEventListener("click", function(){
         navigator.clipboard.writeText(second.value)
        })

        reverse.addEventListener("click", function(){
         let changeText=second.value
         second.value=first.value
         first.value=changeText

         let changeLanguage=secondvalue.value
         secondvalue.value=firstvalue.value
         firstvalue.value=changeLanguage
        })

        let speech=new SpeechSynthesisUtterance()
        speak0.addEventListener("click",function(){
         speech.lang=firstvalue.value;
         speech.text=first.value
         window.speechSynthesis.speak(speech)
        })

        speak1.addEventListener("click",function(){
         speech.lang=secondvalue.value;
         speech.text=second.value
         window.speechSynthesis.speak(speech)
         console.log(speech)
        })