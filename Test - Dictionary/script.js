const inputEl=document.querySelector("input")
const button=document.querySelector("button")
const parts=document.querySelector(".partsSpeech")
const phone=document.querySelector(".phonetics")
const audio=document.querySelector(".audio")
const x=document.querySelector(".x")
const antonym=document.querySelector(".antonyms")
const synonym=document.querySelector(".synonyms")
const hypernym=document.querySelector(".hypernyms")
const loadstate = document.querySelector(".inputs h3")
const result=document.querySelector(".result")
button.addEventListener("click", function(){
    loadstate.style.display = "block"
    // fetch("https://api.dictionaryapi.dev/api/v2/entries/en/"+inputEl.value)
    fetch("http://127.0.0.1:8000/dictionary?word="+inputEl.value)
    .then(res=>res.json())
        .then(data=>{

            const meanings = data.meaning
            const partsOfSpeech = Object.keys(data.meaning)
            const phonetics = data.phonetics
            const antonyms = data.antonyms
            const synonyms = data.synonyms
            const hypernyms = data.hypernyms

            let formattedMeanings = '';
            let formattedAntonyms = "";
            let formattedSynonyms = "";
            let formattedHypernyms = "";

            Object.keys(meanings).forEach((partOfSpeech, index) => {
                formattedMeanings += `<br><b>As a ${partOfSpeech}</b> <br>`;
            
                const meaningsArray = meanings[partOfSpeech];
                meaningsArray.forEach((meaning, subIndex) => {
                    formattedMeanings += `${subIndex + 1}. ${meaning}<br>`;
                });
            
            });
            
            antonyms.forEach((anto, Index) => {
                formattedAntonyms += `${Index + 1}. ${anto} <br>`
            })

            synonyms.forEach((syno, Index) => {
                formattedSynonyms += `${Index + 1}. ${syno} <br>`
            })

            hypernyms.forEach((hyper, Index) => {
                formattedHypernyms += `${Index + 1}. ${hyper} <br>`
            })
            result.style.visibility="visible"
            parts.innerHTML=`<b>Part of Speech</b>: ${partsOfSpeech}` 
            phone.innerHTML=`<b>Phonetics: </b>${phonetics}`
            x.innerHTML=`<b>Definitions:<br> </b> ${formattedMeanings}`
            antonym.innerHTML=`<b>Antonyms:<br> </b> ${formattedAntonyms}`
            synonym.innerHTML=`<b>Synonyms:<br> </b> ${formattedSynonyms}`
            hypernym.innerHTML=`<b>Hypernyms:<br> </b> ${formattedHypernyms}`
            // audio.innerHTML=`<audio src="" >Unsupported</audio>
            // <i onclick="playM()" class="fa fa-volume-up" aria-hidden="true"></i>
            // `
            loadstate.style.display = "none"
        })
    .catch(err=>alert(`Couldn't find the Word. If this error persists, try these:

1.  Review the spelling of the searched word.
2. Ensure proper Internet Connection.
3. If problem persists after all these, please contact the developers @mayowayusuf04@gmail.com`))
})

// function playM(){
//  document.querySelector("audio").play()
// }