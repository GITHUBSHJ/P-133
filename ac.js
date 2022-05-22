start = "";
img = "";
objectDetector = "";
objects = [];

function preload()
{
	img = loadImage('ac.jpeg');
}
function setup()
{
	canvas = createCanvas(640, 420);
	canvas.center();
	objectDetector = ml5.objectDetector('cocossd', modelLoaded);
	document.getElementById("start").innerHTML = "Status : DETECTING OBJECTS";
}
function modelLoaded()
{
	console.log(
		"%cMADE BY - SWASTIK SIBAM NAYAK",
		"color: white; background:linear-gradient(#E66465, #9198E5); padding: 1.2em; border-radius: 6px;"
	 );
	 start = true;
	 objectDetector.detect(img, gotResult);
}
function draw()
{
	image(img, 0, 90, 640, 420);
    if(start != ""){
        for(i = 0; i < objects.length; i++){
            document.getElementById("start").innerHTML = "Status: Objects Detected";

            fill("#fc0303");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%",objects[i].x - 180, objects[i].y - 200);
            noFill();
            stroke("#fc0303");
            rect(objects[i].x - 180, objects[i].y - 200, objects[i].width - 2693, objects[i].height - 1750);
        }
    }
}
function gotResult(error, results)
{
	if (error)
	{
		console.log(error);
	}

	console.log(results);
	objects = results;
}