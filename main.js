function preload()
{

}

function setup()
{
    canvas = createCanvas(900,500);
    canvas.position(580,120);

    video = createCapture(VIDEO);
    video.size(550,500);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log("Model is loaded, poseNet is initialized!");
}

function draw()
{
    background('#00cccc');
}

function gotPoses(results)
{
    if(result.length > 0)
    {
       console.log(results);
    }
}