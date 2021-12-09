Webcam.attach('#camera')
camera=document.getElementById("camera")
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
})
function takesnap(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'"></img>'
    })
}
console.log('ml5.version',ml5.version)
Classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Oa-X708i0/model.json')
function check(){
    img=document.getElementById('selfie_image')
    Classifier.classify(img,gotresult)
}
function gotresult(error,results){
if (error) {
    console.error(error)
}
else{
    console.log(results)
    document.getElementById("result_object_name").innerHTML=results[0].label
}
}