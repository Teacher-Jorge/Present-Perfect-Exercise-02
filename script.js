//LINE 01
let word1 = document.getElementById('word1')
let btn1Done = document.getElementById('btn1Done')
let btn1Do = document.getElementById('btn1Do')
let btn1Doing = document.getElementById('btn1Doing')
let btn1Translate = document.getElementById('btn1Translate')
let translationText = document.getElementById('translationText')

btn1Done.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    word1.innerHTML = 'done'
    word1.style.color ='limegreen'
    let check1 = document.getElementById('check1')
    check1.style.visibility = 'visible'
    btn1Done.style.background = 'green'
    btn1Done.disabled = 'true'
    btn1Doing.disabled = 'true'
    btn1Do.disabled = 'true'
})

btn1Doing.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    btn1Doing.style.background = 'red'
    word1.innerHTML = 'doing'
    word1.style.color = 'red'
    btn1Doing.disabled = 'true'
})

btn1Do.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    btn1Do.style.background = 'red'
    word1.innerHTML = 'do'
    word1.style.color = 'red'
    btn1Do.disabled = 'true'
})

btn1Translate.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    translationText.innerText = 'O que você tem feito ultimamente?'
    setTimeout(() => {
        translationText.innerHTML = 'Translation'
    }, 3000);
    })

//LINE 02
let word2 = document.getElementById('word2')
let btn2Working = document.getElementById('btn2Working')
let btn2Work = document.getElementById('btn2Work')
let btn2Worked = document.getElementById('btn2Worked')
let btn2Translate = document.getElementById('btn2Translate')

btn2Worked.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    word2.innerHTML = 'worked'
    word2.style.color ='limegreen'
    let check2 = document.getElementById('check2')
    check2.style.visibility = 'visible'
    btn2Worked.style.background = 'green'
    btn2Worked.disabled = 'true'
    btn2Working.disabled = 'true'
    btn2Work.disabled = 'true'
})

btn2Working.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    btn2Working.style.background = 'red'
    word2.innerHTML = 'working'
    word2.style.color = 'red'
    btn2Working.disabled = 'true'
})

btn2Work.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    btn2Work.style.background = 'red'
    word2.innerHTML = 'work'
    word2.style.color = 'red'
    btn2Work.disabled = 'true'
})

btn2Translate.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    translationText.innerText = 'Tenho trabalhado muito. E você?'
    setTimeout(() => {
        translationText.innerHTML = 'Translation'
    }, 3000);
    })

//LINE 03
let word3 = document.getElementById('word3')
let btn3Take = document.getElementById('btn3Take')
let btn3Took = document.getElementById('btn3Took')
let btn3Taken = document.getElementById('btn3Taken')
let btn3Translate = document.getElementById('btn3Translate')

btn3Taken.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    word3.innerHTML = 'taken'
    word3.style.color ='limegreen'
    let check3 = document.getElementById('check3')
    check3.style.visibility = 'visible'
    btn3Taken.style.background = 'green'
    btn3Taken.disabled = 'true'
    btn3Take.disabled = 'true'
    btn3Took.disabled = 'true'
})

btn3Take.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    btn3Take.style.background = 'red'
    word3.innerHTML = 'take'
    word3.style.color = 'red'
    btn3Take.disabled = 'true'
})

btn3Took.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    btn3Took.style.background = 'red'
    word3.innerHTML = 'took'
    word3.style.color = 'red'
    btn3Took.disabled = 'true'
})

btn3Translate.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    translationText.innerText = 'Só tenho relaxado. Estou de férias'
    setTimeout(() => {
        translationText.innerHTML = 'Translation'
    }, 3000);
    })

//LINE 04
let word4 = document.getElementById('word4')
let btn4Go = document.getElementById('btn4Go')
let btn4Went = document.getElementById('btn4Went')
let btn4Gone = document.getElementById('btn4Gone')
let btn4Translate = document.getElementById('btn4Translate')

btn4Gone.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    word4.innerHTML = 'gone'
    word4.style.color ='limegreen'
    let check4 = document.getElementById('check4')
    check4.style.visibility = 'visible'
    btn4Gone.style.background = 'green'
    btn4Gone.disabled = 'true'
    btn4Go.disabled = 'true'
    btn4Went.disabled = 'true'
})

btn4Go.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    btn4Go.style.background = 'red'
    word4.innerHTML = 'go'
    word4.style.color = 'red'
    btn4Go.disabled = 'true'
})

btn4Went.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    btn4Went.style.background = 'red'
    word4.innerHTML = 'went'
    word4.style.color = 'red'
    btn4Went.disabled = 'true'
})

btn4Translate.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    translationText.innerText = 'Ótimo! Tem ido surfar?'
    setTimeout(() => {
        translationText.innerHTML = 'Translation'
    }, 3000);
    })

//LINE 05
let word5 = document.getElementById('word5')
let btn5Has = document.getElementById('btn5Has')
let btn5Have = document.getElementById('btn5Have')
let btn5Had = document.getElementById('btn5Had')
let btn5Translate = document.getElementById('btn5Translate')

btn5Had.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    word5.innerHTML = 'Had'
    word5.style.color ='limegreen'
    let check5 = document.getElementById('check5')
    check5.style.visibility = 'visible'
    btn5Had.style.background = 'green'
    btn5Had.disabled = 'true'
    btn5Has.disabled = 'true'
    btn5Have.disabled = 'true'
})

btn5Has.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    btn5Has.style.background = 'red'
    word5.innerHTML = 'has'
    word5.style.color = 'red'
    btn5Has.disabled = 'true'
})

btn5Have.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    btn5Have.style.background = 'red'
    word5.innerHTML = 'Have'
    word5.style.color = 'red'
    btn5Have.disabled = 'true'
})

btn5Translate.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    translationText.innerText = 'Sim. Todos os dias! Tenho me diverido muito!'
    setTimeout(() => {
        translationText.innerHTML = 'Translation'
    }, 3000);
    })