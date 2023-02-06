const main = () => {
  const textForm = document.getElementById("text");
  const startButton = document.getElementById("buttonStart");
  const rate = document.querySelector('#rate');


  textForm.addEventListener("input", () => {
    if (textForm.value) {
      buttonStart.removeAttribute('disabled');
    } else {
      buttonStart.setAttribute('disabled', '');
    }
  });

  startButton.addEventListener("click", () => {
    const script = textForm.value
    if (!("speechSynthesis" in window)) {
      return alert('このブラウザは音声合成に対応していません。')
    }

    const uttr = new SpeechSynthesisUtterance()
    uttr.text = script
    uttr.rate = rate.value;
    // 発言を再生
    window.speechSynthesis.speak(uttr)
  })
}

main();
