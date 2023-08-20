song_1 = "";
song_2 = "";
leftWristX = 0;
rightWristY = 0;
leftWristX = 0;
rightWristY = 0;

function preload(){
    song_1 = loadSound("Harry-Potter-Theme.mp3");
    song_2 = loadSound("Hymn-for-weekend.mp3");
}
function setup(){
    canvas = createCanvas(600,530);
    canvas.center();
    canvas.position(360, 290);

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotPoses);
}
function modelloaded(){
    console.log('PoseNet is iniatilized');
}
function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = "+ leftWristX + "leftWristY = "+ leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = "+ rightWristX + "rightWristY = "+ rightWristY);        
    }   
}
function draw(){
    image(video, 0, 0, 600, 530);
}
function play(){
   song_1.play();
   song_2.play();
   song_1.setVolume(1);
   song_2.setVolume(1);
   song_1.rate(1);
   song_2.rate(1);
}
