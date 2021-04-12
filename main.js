var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start()
{
    document.getElementById("text_area").innerHTML= "";
    recognition.start();
}
recognition.onresult = function(event) {

    console.log(event);
    var content= event.results[0][0].transcript;
    document.getElementById("text_area").innerHTML= content;
    console.log(content);
    if(content== "take my selfie")
    {
        console.log("taking selfie")
    speak();
    }
}


function speak()
{
    var synth = window.speechSynthesis;

    speak_data="taking your selfie in five seconds";
    var ut= new SpeechSynthesisUtterance(speak_data);
    synth.speak(ut);
    Webcam.attach(camera);
    
    setTimeout(function() {
        takeSnapshot();
        saveSelfie();
    }, 5000 );
}

Webcam.set({

    width:200,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality:100
});
camera= document.getElementById("camera");

function takeSnapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML ='<img id="image_download" src="'+data_uri+'">';
    });
}

function saveSelfie()
{
    link= document.getElementById("link");
    image= document.getElementById("image_download").src;
    link.href=image;
    link.click();
}