noseX = 0;
noseY = 0;

function preload()
{
    img = loadImage("mustache.png");
}

function setup()
{
    canvas = createCanvas(450,400);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(450,400);
    video.hide();

    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotposes);
}

function draw()
{
    image(video,0,0,450,400);
    image(img,noseX - 40,noseY,80,40);
}

function takeSnapshot()
{
    save('filter.png');
}

function modelLoaded()
{
    console.log("model is loaded");
}

function gotposes(results)
{
    if(results.length > 0)
    {
        console.log(results);

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
    }
}