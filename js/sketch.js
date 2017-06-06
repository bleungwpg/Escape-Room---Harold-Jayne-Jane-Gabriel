var room;
var arrow;
var lock;
var password;
var plock;
var passwordInput;
var unlock;
var roomp1;
var sympno5;
var sad;
var lockout;
var alock;
var plock;


function preload()
{
  //Intro
  room = loadImage('https://dl.dropboxusercontent.com/s/wvf1xhqb0s4h3d6/room1a.jpg');
  arrow = loadImage('https://dl.dropboxusercontent.com/s/x22j4te3qv8wjxl/Red_Arrow_Left.png');
  arrow2 = loadImage('https://dl.dropboxusercontent.com/s/cm2rq89pk0moieo/red-arrow-right-15.png');
  uparrow = loadImage('https://dl.dropboxusercontent.com/s/6ffcy45xfglgr3y/Up-Arrow-Transparent-Background.png');
  downarrow = loadImage('https://dl.dropboxusercontent.com/s/l8i8vkg6c3htr0a/Red_Arrow_Down.svg');
  closedroom = loadImage('https://dl.dropboxusercontent.com/s/d7j343155wbbus0/room1.jpg');


  //Puzzle1
  lock = loadImage('https://dl.dropboxusercontent.com/s/urc08ktp47lfsfq/lock-512.png');
  unlock = loadImage('https://dl.dropboxusercontent.com/s/y8tlp5b0h5mi53q/unlock-xxl.png');
  roomp1 = loadImage('https://dl.dropboxusercontent.com/s/ycixsodu0sj9n17/live-escape-rooms-bg.jpg');
  roomp2 = loadImage('https://dl.dropboxusercontent.com/s/b295h3xgcqhnsas/close%20up.jpg');
  openroom = loadImage('https://dl.dropboxusercontent.com/s/0833w71u9crc0b7/1%20%281%29.jpg');

  //Puzzle2
  hallway = loadImage('https://dl.dropboxusercontent.com/s/whf7wugghsewbpy/Jail%2Bhallway.jpg');
  cell = loadImage('https://dl.dropboxusercontent.com/s/rj0ck73b29jztxr/KakaoTalk_20170527_191324845.png');
  paint = loadImage('https://dl.dropboxusercontent.com/s/kp3j4jfbodxasyj/Puzzle.png');
  paintred = loadImage('https://dl.dropboxusercontent.com/s/4wibifa7tomayx6/Untitled.png');
  paintgreen = loadImage('https://dl.dropboxusercontent.com/s/qckjyjjg5wp3bm0/Untitled-2.png');
  paintyellow = loadImage('https://dl.dropboxusercontent.com/s/nkxclx9seclml2t/Untitled-3.png');
  paintblue = loadImage('https://dl.dropboxusercontent.com/s/8btsga5f59oildm/Untitled-4.png');
  lswitch = loadImage('https://dl.dropboxusercontent.com/s/a9m49wsp5l32gsq/light-switch-white-on-hi.png');
  flashlight = loadImage('https://dl.dropboxusercontent.com/s/ix7q4war3db44ab/redflashlight.png');
  flashlighty = loadImage('https://dl.dropboxusercontent.com/s/nx23fgxptcowwhh/yellowflashlight.png');
  flashlightg = loadImage('https://dl.dropboxusercontent.com/s/ht4zzlnyml7lc6g/greenflashlight.png');
  flashlightb = loadImage('https://dl.dropboxusercontent.com/s/ef630n6pq5fgt4d/blueflashlight.png');
  searchLightr = loadImage('https://dl.dropboxusercontent.com/s/ft355wfbdhajopd/searchlight.png');
  mglass = loadImage('https://dl.dropboxusercontent.com/s/h2ypz6lii499hsn/%EB%8F%8B%EB%B3%B4%EA%B8%B0%EA%B7%B8%EB%A6%BC1.png')

  //Puzzle3
  crime = loadImage('https://dl.dropboxusercontent.com/s/5q3vkrs1rrxg4hc/crime.png')
  policecar = loadImage('https://dl.dropboxusercontent.com/s/f4cmtkyveeyxlnk/policecar.png')
  crime2 = loadImage('https://dl.dropboxusercontent.com/s/1yxb1sklauv45tj/%EA%B7%B8%EB%A6%BC3.png')
  puzzle = loadImage('https://dl.dropboxusercontent.com/s/o2he173oyofa2ai/%EA%B7%B8%EB%A6%BC4.png')
  hint = loadImage('https://dl.dropboxusercontent.com/s/dgvu6vqfrh27j9f/paper_room3.jpg')
  dogsplayingpoker = loadImage('https://dl.dropboxusercontent.com/s/412vzjaujsioun0/postcard.png');
  crumpledpaper = loadImage('https://dl.dropboxusercontent.com/s/yxvveubufyeh9cx/cumpledpaper.png');
  //Letters
  J = loadImage('https://dl.dropboxusercontent.com/s/ywssysybiftq00g/letter%20J.png')
  I = loadImage('https://dl.dropboxusercontent.com/s/kymilpboukx81zh/letter%20I.png')
  S = loadImage('https://dl.dropboxusercontent.com/s/jqjadoudwp8pcbv/letter%20S.png')
  C = loadImage('https://dl.dropboxusercontent.com/s/pdbgi4l8idvw2st/letterC.png')
  A = loadImage('https://dl.dropboxusercontent.com/s/1fo6nssi06144cb/letter%20A.png')
  B = loadImage('https://dl.dropboxusercontent.com/s/abcgc9rku04w8q1/letter%20B.png')
  K = loadImage('https://dl.dropboxusercontent.com/s/066f4py45njwo5t/letter%20K.png')
  E = loadImage('https://dl.dropboxusercontent.com/s/q88uotra9jvuezv/letter%20E.png')
  L = loadImage('https://dl.dropboxusercontent.com/s/9ixx1v93tuih82h/letter%20L.png')
  N = loadImage('https://dl.dropboxusercontent.com/s/lfzs41p6tm4454s/letter%20N.png')
  R = loadImage('https://dl.dropboxusercontent.com/s/rj5odfcgx4916g6/letter%20R.png')
  T = loadImage('https://dl.dropboxusercontent.com/s/qexcqjt8figr847/letter%20T.png')
  Eraser = loadImage('https://dl.dropboxusercontent.com/s/jnvl4tjlkqj89i4/eraser.png')
  letters[0] = N;
  letters[1] = B;
  letters[2] = I;
  letters[3] = L;
  letters[4] = N;
  letters[5] = A;
  letters[6] = C;
  letters[7] = E;
  letters[8] = K;
  letters[9] = L;
  letters[10] = E;
  letters[11] = J;
  letters[12] = A;
  letters[13] = T;
  letters[14] = T;
  letters[15] = C;
  letters[16] = E;
  letters[17] = K;
  letters[18] = R;
  letters[19] = S;

  lockout = false;

  //Sound
  // music
  sad = loadSound('https://dl.dropboxusercontent.com/s/m9b6fvcse8jnefd/Sad%20escape%20room.mp3')
  thinking = loadSound('https://dl.dropboxusercontent.com/s/keo157t0y9mcigy/Escape%20Room%20thinking%20time.mp3')
  main = loadSound('https://dl.dropboxusercontent.com/s/ky9b8dp32282kdv/Main%20game%20song.mp3')
  eerie = loadSound('https://dl.dropboxusercontent.com/s/kcy2qxr4qg1ey8p/Eerie%20Escape%20Room.mp3')

  // sound effects
  lightswitch = loadSound('https://dl.dropboxusercontent.com/s/u0c1chhnpysml9b/Light%20Switch%20%28Sound%20Effect%29.mp3');
  erasersound = loadSound('https://dl.dropboxusercontent.com/s/72synkheofw8xea/erasersound.mp3');
  arrowClick = loadSound('https://dl.dropboxusercontent.com/s/v5ec3jatuluj1dp/ArrowClick.mp3');
  arrowHover = loadSound('https://dl.dropboxusercontent.com/s/kysn9ry22ei0nm9/ArrowHover.mp3');
  elecLock = loadSound('https://dl.dropboxusercontent.com/s/b6f6yovryhi0rs4/ElectronicLockClick.mp3');
}


//Password
var wholepassword = "";

//Puzzle 3
var letters = [20];
var lettersX
var lettersY
var showLetters = [20];
var lettercontrol
//arrays
var lettersX = [80,110,140,170,200,230,260,290,320,350,380,410,440,470,500,530,560,590,620,650];
var lettersY = [200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200];

function setup()
{
  myhtmlcanvas = createCanvas(800,600);
  myhtmlcanvas.parent('canvasHolder');

  //Canvas = 9;
  Canvas = 1;

  //Puzzle1
  plock = false;
  alock = false;
  password = 0;

  passwordInput = createInput();
  passwordInput.position(400,250);
  passwordInput.hide();

  answer1 = 0;

  //Puzzle2
  //Red
  stateofflashlight = 1;
  moveflashlightX = 130;
  moveflashlightY = 400;
  endflashlightX = 30;
  endflashlightY = 535;
  //Yellow
  stateofflashlighty = 1;
  moveflashlightyX = 480;
  moveflashlightyY = 380;
  endflashlightyX = 110;
  endflashlightyY = 535;
  //Green
  stateofflashlightg = 1;
  moveflashlightgX = 100;
  moveflashlightgY = 120;
  endflashlightgX = 190;
  endflashlightgY = 535;
  //Blue
  stateofflashlightb = 1;
  moveflashlightbX = 500;
  moveflashlightbY = 530;
  endflashlightbX = 270;
  endflashlightbY = 535;

  llock = false;
  codeInput = createInput();
  codeInput.position(580,450);
  codeInput.hide();

  //Puzzle3
  //Collecting item
  moveEraserX = 250;
  moveEraserY = 250;
  endEraserX = 30;
  endEraserY = 535;
  stateofEraser = 1;

  for (var i = 0; i < 20; i=i+1)
  {
    showLetters[i] = 1;
  }

  startup = false;

  // arrow hover and click
  arrowHoverPast1 = false;
  arrowHoverPast2 = false;
  
  
  // speed up final room transition to finale.html
  once = false;
}



//Intro
function draw()
{

  //Intro
  if (Canvas == 1)
  {
    Canvas1();
    if (sad.isPlaying() == false)
    {
      sad.play();
    }
  }
  else if (Canvas == 2)
  {
    Canvas2();
    if (sad.isPlaying() == false)
    {
      sad.play();
    }
  }
  else if (Canvas == 3)
  {
    if(password == 0)
    { 
      Canvas3();
      text("Find out the password",330,120);
      label();
      if (sad.isPlaying() == false)
      {
        sad.play();
      }
    }
    else if (password == 1)
    {
      Canvas3_1();
      if (sad.isPlaying() == true)
      {
        sad.pause();
      }
      if (thinking.isPlaying() == false)
      {
        thinking.play();
      }

    }
  }
  else if (Canvas == 4)
  {
    Canvas4();
    if (thinking.isPlaying() == true)
    {
      thinking.pause();
    }
    if (main.isPlaying() == false)
    {
      main.play();
    }
  }
  else if (Canvas == 5)
  {
    Canvas5();
    passwordInput.hide();
    if (thinking.isPlaying() == true)
    {
      thinking.pause();
    }
    if (main.isPlaying() == false)
    {
      main.play();
    }
  }
  else if (Canvas == 6)
  {
    Canvas6();
    if (thinking.isPlaying() == true)
    {
      thinking.pause();
    }
    if (main.isPlaying() == false)
    {
      main.play();
    }
  }
  else if (Canvas == 7)
  {
    Canvas7();
    if (main.isPlaying() == true)
    {
      main.pause();
    }
    if (thinking.isPlaying() == false)
    {
      thinking.play();
    }
  }
  else if (Canvas == 8)
  {
    Canvas8();
    if (main.isPlaying() == true)
    {
      main.pause();
    }
    if (thinking.isPlaying() == false)
    {
      thinking.play();
    }
  }
  else if (Canvas == 9)
  {
    Canvas9();
    codeInput.hide();
    if (thinking.isPlaying() == true)
    {
      thinking.pause();
    }
    if (main.isPlaying() == false)
    {
      main.play();
    }
  }
  else if (Canvas == 10)
  {
    Canvas10();
    if (thinking.isPlaying() == true)
    {
      thinking.pause();
    }
    if (main.isPlaying() == false)
    {
      main.play();
    }
  }
  else if (Canvas == 11)
  {
    Canvas11();
    if (thinking.isPlaying() == true)
    {
      thinking.pause();
    }
    if (main.isPlaying() == false)
    {
      main.play();
    }
  }
  else if (Canvas == 12)
  {
    Canvas12();
    if (thinking.isPlaying() == true)
    {
      thinking.pause();
    }
    if (main.isPlaying() == false)
    {
      main.play();
    }
  }
  else if (Canvas == 13)
  {
    Canvas13();
    if (main.isPlaying() == true)
    {
      main.pause();
    }
    if (thinking.isPlaying() == false)
    {
      thinking.play();
    }
  }
  else if (Canvas == 14)
  {
    Canvas14();
    if (thinking.isPlaying() == true)
    {
      thinking.pause();
    }
    if (eerie.isPlaying() == false)
    {
      eerie.play();
    }
  }
  else if (Canvas == 15)
  {
    Canvas15();
    if (thinking.isPlaying() == true)
    {
      thinking.pause();
    }
    if (eerie.isPlaying() == false)
    {
      eerie.play();
    }
  }


}


//Puzzle1
function draw1()
{
  if(answer1 == 0)
  {
  }
  else if (answer1 == 1)
  {
    showResult();
  }
  else
  {
  } 
  //Password
  var hdist = 30;
  var vdist = 28;
  var gap = 5;
  var x = 400;
  var y = 195;


}


//Intro
function Canvas1()
{
  background(room,800,600);

  //Mouse
  image(arrow,120,300,60,45);

  if (mouseX > 100 && mouseX < 200 && mouseY > 300 && mouseY < 350)
  {
    if (arrowHoverPast1 == false)
    {
      if (arrowHover.isPlaying() == false)
      {
        arrowHover.play();
      }
      arrowHoverPast1 = true;
    }
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      arrowClick.play();
      Canvas = 2;
    }
  }
  else
  {
    arrowHoverPast1 = false;
    cursor(ARROW);
  }


}

function Canvas2()
{
  background(closedroom,800,600);
  var cursorShape = "arrow";

  image(arrow2,720,300,80,60);

  //Mouse
  if (mouseX > 700 && mouseX < 800 && mouseY > 300 && mouseY < 350)
  {
    if (arrowHoverPast1 == false)
    {
      if (arrowHover.isPlaying() == false)
      {
        arrowHover.play();
      }
      arrowHoverPast1 = true;
    }
    cursorShape = "hand";

    if (mouseIsPressed == true)
    {
      Canvas = 1;
      arrowClick.play();
    }
  }
  else
  {
    arrowHoverPast1 = false;
  }

  if (mouseX > 250 && mouseX <330 && mouseY > 100 && mouseY < 150)
  {
    if (arrowHoverPast2 == false)
    {
      if (arrowHover.isPlaying() == false)
      {
        arrowHover.play();
      }
      arrowHoverPast2 = true;
    }
    cursorShape = "hand";
    if (mouseIsPressed == true)
    {
      Canvas = 3;
    }
  }
  else
  {
    arrowHoverPast2 = false;
  }



  if (cursorShape == "arrow")
  {
    cursor(ARROW);
  }
  else
  {
    cursor(HAND);
  }
}


//Puzzle1
function Canvas3()
{
  background(closedroom,800,600);


  //click the lock in order to enter the password
  DrawCanvasButton();
}

function Canvas3_1()
{
  DrawCanvasButton();
  background(roomp2,800,600);
  label();


  // is the horizontal distance 30 units?
  // and vertically is 28 units?

  var hdist = 30;
  var vdist = 28;
  var gap = 5;
  var x = 400;
  var y = 195;


  fill(255,255,255);
  text(wholepassword,410,185);

  for (var i = 1; i < 10; i++)
  {
    cursor(HAND);
    if (mouseX > x && mouseX < x+hdist && mouseY > y && mouseY < y+vdist)
    {
      cursor(HAND);
      if (mouseIsPressed == true && alock == false)
      {
        elecLock.play();
        fill(125,125,125);
        text(i,x+(gap*2),y+(gap*3));
        //        passwordInput.value(i);
        wholepassword = wholepassword + "" + i;
        alock = true;
      }

    }

    // the computer 11 is your 0

    x = x + hdist + gap;    
    // every multiple of 3 we reset x to 400
    if (i % 3 == 0)
    {
      x = 400;  
      y = y + vdist + gap;  
    }


  } // for loop

  if (wholepassword == "915")
  {
    Canvas = 6;
  }
  if (wholepassword.length > 2 && wholepassword != "915")
  {
    text("Click to Try Again!",380,400);
    if (wholepassword.length > 3)
    {
      wholepassword = "";

    }
  }
  else
  {
    cursor(ARROW);
  }

}

function Canvas4()
{
  background(openroom,800,600);
  image(unlock,280,300,50,50);

  if (mouseX > 280 && mouseX < 350 && mouseY > 380 && mouseY < 450)
  {
    image(uparrow,300,400,50,50);
    if (mouseIsPressed == true)
    {
      Canvas = 6;
    }
  }

}
function label()
{
  fill(255,255,255);
  text("1+9 = 810",100,100);
  text("8+2 = 610",100,120);
  text("3+7 = 410",100,140);
  text("5+6 = 111",100,160);
  text("2+7 = 59",100,180);
  text("3+12 = ?",100,200);
}
function showResult()
{

  //rect(390,225,35,25);
  if(passwordInput.value() != "915")
  {
    text("Click to Try Again!",380,400);
  }
  else if(passwordInput.value() == "915")
  {
    Canvas4();
  }
}
function mouseReleased()
{
  if (plock)
  {
    plock = false;
  }
  if (lockout)
  {
    lockout = false;
  }
  if (alock == true)
  {
    alock = false;
  }
}

//Puzzle2
function Canvas5()
{
  background(hallway,800,600);
  itemGrid();
  cursor(ARROW);
  if (mouseX > 360 && mouseX < 410 && mouseY > 330 && mouseY < 380)
  {
    image(uparrow,385,355,30,30);
    if (mouseIsPressed == true)
    {
      Canvas = 6;
    }
  }

}
//Cafeteria
function Canvas6()
{
  background(cell,800,600);
  itemGrid();
  rmove();
  ymove();
  gmove();
  bmove();

  text("There are some flashlights to collect...",580,580);


  if (stateofflashlight == 3 && stateofflashlighty == 3 && stateofflashlightg == 3 && stateofflashlightb == 3)
  {
    text("Enter",100,275);

    if (mouseX > 100 && mouseX < 160 && mouseY > 250 && mouseY < 400)
    {

      cursor(HAND);
      if (mouseIsPressed == true)
      {
        Canvas = 7;
      }
    }
    else
    {
      //Cursor
      noCursor();
      image(mglass,mouseX-40,mouseY-40,50,50);      
    }
  }
  else
  {
    //Cursor
    noCursor();
    image(mglass,mouseX-40,mouseY-40,50,50);
  }



  //Collects the flashlight
  //Red
  if (mouseX > 130 && mouseX < 190 && mouseY > 400 && mouseY < 445)
  {
    if(mouseIsPressed == true)
    {
      stateofflashlight = 2;
    }
  }

  //Collects the flashlight
  //Yellow
  if (mouseX > 480 && mouseX < 540 && mouseY > 380 && mouseY < 425)
  {
    if(mouseIsPressed == true)
    {
      stateofflashlighty = 2;
    }
  }

  //Collects the flashlight
  //Green
  if (mouseX > 100 && mouseX < 160 && mouseY > 120 && mouseY < 165)
  {
    if (mouseIsPressed == true)
    {
      stateofflashlightg = 2;
    }
  }

  //Blue
  fill(0,0,0)
  if (mouseX > 500 && mouseX < 560 && mouseY > 530 && mouseY < 575)
  {
    if (mouseIsPressed == true)
    {
      stateofflashlightb = 2;
    }
  }
}
//Painting
function Canvas7()
{
  cursor(ARROW);
  background(96,96,96);
  itemGrid();
  rmove();
  ymove();
  gmove();
  bmove();

  text("Maybe I should turn the light off...",580,530);
  text("Click on the lock to enter password",580,550);


  stateofflashlight = 3;
  stateofflashlighty = 3;
  stateofflashlightg = 3;
  stateofflashlightb = 3;
  image(lswitch,50,120,35,50);

  image(paint,220,80,350,240);
  image(lock,320,310,50,50);
  //Enter Password
  if (mouseX > 320 && mouseX < 370 && mouseY > 310 && mouseY < 360)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      codeInput.show();
    }

  }
  else
  {
    cursor(ARROW);
  }
  if (codeInput.value() == "8603")
  {
    Canvas = 9;
  }
  //Light
  if(mouseX > 50 && mouseX < 205 && mouseY > 120 && mouseY < 170)
  {

    cursor(HAND);
    if (mouseIsPressed == true && lockout == false)
    {
      if (lightswitch.isPlaying() == false)
      {
        lightswitch.play();
      }
      Canvas = 8;
      lockout = true;
    }
  }


}
//Light off
function Canvas8()
{
  image(paint,220,80,350,240);
  image(lock,320,310,50,50);
  background(0,0,0);
  image(lswitch,50,120,35,50);

  if (!(stateofflashlight == 4 || stateofflashlightg == 4 || stateofflashlighty == 4 || stateofflashlightb == 4))
  {
    itemGrid();
  }

  if (startup == false)
  {
    stateofflashlight = 3;
    stateofflashlighty = 3;
    stateofflashlightg = 3;
    stateofflashlightb = 3;
    startup = true;
  }


  //Light
  if(mouseX > 50 && mouseX < 205 && mouseY > 120 && mouseY < 170)
  {
    cursor(HAND);
    if (mouseIsPressed == true && lockout == false)
    {
      if (lightswitch.isPlaying() == false)
      {
        lightswitch.play();
      }

      Canvas = 7;
      lockout = true;
    }
  }

  //Hidden Painting
  //mouse control
  //Red
  if (mouseX > 200 && mouseX < 260 && mouseY > 400 && mouseY < 445)
  {
    if(mouseIsPressed == true)
    {
      stateofflashlight = 2;
    }
  }
  if (mouseX > 20 && mouseX < 90 && mouseY > 520 && mouseY < 590 && mouseIsPressed == true)
  {
    stateofflashlight = 4;
  }
  if(stateofflashlight == 4 && mouseX > 120 && mouseX < 470 && mouseY > 80 && mouseY < 320)
  {
    image(paintred,220,80,350,240);
  }

  //Yellow
  if (mouseX > 500 && mouseX < 560 && mouseY > 300 && mouseY < 345)
  {
    if(mouseIsPressed == true)
    {
      stateofflashlighty = 2;
    }
  }
  if (mouseX > 110 && mouseX < 180 && mouseY > 520 && mouseY < 590 && mouseIsPressed == true)
  {
    stateofflashlighty = 4;
  }
  if(stateofflashlighty == 4 && mouseX > 120 && mouseX < 470 && mouseY > 80 && mouseY < 320)
  {
    image(paintyellow,220,80,350,240);
  }

  //Green
  if (mouseX > 600 && mouseX < 760 && mouseY > 200 && mouseY < 345)
  {
    if(mouseIsPressed == true)
    {
      stateofflashlightg = 2;
    }
  }
  if (mouseX > 200 && mouseX < 270 && mouseY > 520 && mouseY < 590 && mouseIsPressed == true)
  {
    stateofflashlightg = 4;
  }
  if(stateofflashlightg == 4 && mouseX > 120 && mouseX < 470 && mouseY > 80 && mouseY < 320)
  {
    image(paintgreen,220,80,350,240);
  }

  //Blue
  if (mouseX > 400 && mouseX < 470 && mouseY > 470 && mouseY < 540)
  {
    if (mouseIsPressed == true)
    {
      stateofflashlightb = 2;
    }
  }
  if (mouseX > 280 && mouseX < 350 && mouseY > 520 && mouseY < 590 && mouseIsPressed == true)
  {
    stateofflashlightb = 4;
  }
  if(stateofflashlightb == 4 && mouseX > 120 && mouseX < 470 && mouseY > 80 && mouseY < 320)
  {
    image(paintblue,220,80,350,240);
  }

  if (!(stateofflashlightg == 4 || stateofflashlighty == 4 || stateofflashlightb == 4))
  {
    rmove();
  }

  if (!(stateofflashlight == 4 || stateofflashlightg == 4 || stateofflashlightb == 4))
  {
    ymove();
  }
  if (!(stateofflashlight == 4 || stateofflashlighty == 4 || stateofflashlightb == 4))
  {
    gmove();
  }
  if (!(stateofflashlight == 4 || stateofflashlightg == 4 || stateofflashlighty == 4))
  {
    bmove();
  }

}

//Puzzle3
function Canvas9()
{
  var  cursorShape = "arrow";


  background(crime,800,600);
  image(arrow,80,350,50,50);

  if (mouseX > 60 && mouseX < 150 && mouseY > 300 && mouseY < 400)
  {
    if (arrowHoverPast1 == false)
    {
      if (arrowHover.isPlaying() == false)
      {
        arrowHover.play();
      }
      arrowHoverPast1 = true;
    }
    cursorShape = "hand";
    if (mouseIsPressed == true)
    {
      Canvas = 10;
      arrowClick.play();
    }
  }
  else
  {
    arrowHoverPast1 = false;
  }

  image(arrow2,720,350,50,50);

  if (mouseX > 700 && mouseX < 800 && mouseY > 300 && mouseY < 400)
  {
    if (arrowHoverPast2 == false)
    {
      if (arrowHover.isPlaying() == false)
      {
        arrowHover.play();
      }
      arrowHoverPast2 = true;
    }
    cursorShape = "hand";

    if (mouseIsPressed == true)
    {
      Canvas = 11;
      arrowClick.play();
    }
  }
  else
  {
    arrowHoverPast2 = false;
  }


  if (cursorShape == "arrow")
  {
    cursor(ARROW);
  }
  else
  {
    cursor(HAND);
  }
}
function Canvas10()
{
  background(policecar,800,600);
  image(arrow2,720,250,50,50);



  if (mouseX > 90 && mouseX < 90 + 130 && mouseY > 410 && mouseY < 410+130)
  {
    fill(255,255,255);
    text("You see a Jack of Spades",90,400);
  }

  if (mouseX > 700 && mouseX < 800 && mouseY > 200 && mouseY < 290)
  {
    if (arrowHoverPast1 == false)
    {
      if (arrowHover.isPlaying() == false)
      {
        arrowHover.play();
      }
      arrowHoverPast1 = true;
    }
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      Canvas = 9;
      arrowClick.play();
    }
  }
  else
  {
    arrowHoverPast1 = false;
    cursor(ARROW);
  }
}
function Canvas11()
{

  var cursorShape = "arrow";

  background(crime2,800,600);
  image(arrow,80,250,50,50);

  if (mouseX > 60 && mouseX < 150 && mouseY > 200 && mouseY < 300)
  {

    if (arrowHoverPast1 == false)
    {
      if (arrowHover.isPlaying() == false)
      {
        arrowHover.play();
      }
      arrowHoverPast1 = true;
    }
    cursorShape = "hand";
    if (mouseIsPressed == true)
    {
      Canvas = 9;
      arrowClick.play();
    }
  }
  else
  {
    arrowHoverPast1 = false;
  }



  image(uparrow,720,100,50,50);

  image(crumpledpaper,400,275,207/6,217/6);

  if (mouseX > 400 && mouseX < 400+50 && mouseY > 275 && mouseY < 275+50)
  {
    cursorShape = "hand";

    if (mouseIsPressed == true && lockout == false)
    {
      lockout = true;
      Canvas = 12;
    }
  }


  if (mouseX > 680 && mouseX < 800 && mouseY > 0 && mouseY < 150)
  {
    if (arrowHoverPast2 == false)
    {
      if (arrowHover.isPlaying() == false)
      {
        arrowHover.play();
      }
      arrowHoverPast2 = true;
    }
    cursorShape = "hand";

    if (mouseIsPressed == true)
    {
      arrowClick.play();
      Canvas = 13;
    }
  }
  else
  {
    arrowHoverPast2 = false;
  }

  if (cursorShape == "arrow")
  {
    cursor(ARROW);
  }
  else
  {
    cursor(HAND);
  }

}


function Canvas12()
{

  background(crime2,800,600);
  image(dogsplayingpoker,200-20,150-20,480,360);  

  fill(255,255,255);
  text("Click anywhere to exit",540,510);
  if (mouseIsPressed == true && lockout == false)
  {
    Canvas = 11;
  }
}


function Canvas13()
{
  background(hint,800,600);


  if (stateofEraser != 4)
  {
    image(downarrow,400,500,50,50);

    if (mouseX > 350 && mouseX < 450 && mouseY > 450 && mouseY < 550)
    {
      if (arrowHoverPast1 == false)
      {
        if (arrowHover.isPlaying() == false)
        {
          arrowHover.play();
        }
        arrowHoverPast1 = true;
      }
      cursor(HAND);
      if (mouseIsPressed == true && lockout == false)
      {
        lockout = true;

        arrowClick.play();
        Canvas = 11;
      }
    }
    else
    {
      arrowHoverPast1 = false;
      cursor(ARROW);
    }
  }

  itemGrid();

  //letter
  for (var i = 0; i < 20; i=i+1)
  {
    if (showLetters[i] == 1)
    {
      image(letters[i],lettersX[i],lettersY[i],30,30);
    }
  }

  //item

  if (stateofEraser == 1)
  {
    moveEraserX = 250;
    moveEraserY = 250;
    image(Eraser,moveEraserX,moveEraserY,50,50);
  }
  else if (stateofEraser == 2)
  {
    image(Eraser,moveEraserX,moveEraserY,50,50);
    if (moveEraserX > endEraserX)
    {
      moveEraserX = moveEraserX - 5;
    }
    if (moveEraserY < endEraserY)
    {
      moveEraserY = moveEraserY + 6.25;
    }
    if (!(moveEraserX > endEraserX && moveEraserY < endEraserY))
    {
      stateofEraser = 3;
    }
  }
  else if (stateofEraser == 3)
  {
    image(Eraser,endEraserX,endEraserY,50,50);
  }
  //change cursor
  else if (stateofEraser == 4)
  {
    noCursor();
    image(Eraser,mouseX-40,mouseY-40,70,70);

  }
  else if (stateofEraser != 4)
  {
    mouse(ARROW);
  }


  //mouse control
  if (mouseX > 250 && mouseX < 300 && mouseY > 250 && mouseY < 300)
  {
    if(mouseIsPressed == true)
    {
      stateofEraser = 2;
    }
  }

  if (mouseX > 20 && mouseX < 90 && mouseY > 520 && mouseY < 590 && mouseIsPressed == true)
  {
    stateofEraser = 4;
  }

  //letters control
  //Bigger letters
  if(stateofEraser == 4)
  {
    //Return Button
    fill(255,255,255);
    rect(400,520,50,50);
    fill(0,0,0);
    text("Return",408,550);
    if (mouseX > 400 && mouseX < 400+50 && mouseY > 520 && mouseY < 570 && mouseIsPressed == true && lockout == false)
    {
      cursor(HAND);
      lockout = true;
      stateofEraser = 3;
      for (var i = 0; i < 20; i=i+1)
      {
        showLetters[i] = 1;
      }
    }
  }

  if (stateofEraser == 4)
  { 
    for (var i = 0; i < 20; i=i+1)
      if (mouseX > lettersX[i] && mouseX < lettersX[i]+30 && mouseY > lettersY[i] && mouseY < lettersY[i]+30 && showLetters[i] == 1)
        //Erasing letters
      {   
        image(letters[i],lettersX[i],lettersY[i],50,50);
        if (mouseIsPressed==true)
        {
          if (erasersound.isPlaying() == false)
          {
            erasersound.play();
          }
          showLetters[i] = 0;
          // 0,2,4,7,9,10,13,14,16,18,19 = 0 = erase
          if (showLetters[0] == 0 && showLetters[1] == 1 && showLetters[2] == 0 && showLetters[3] == 1 && showLetters[4] == 0 && showLetters[5] == 1 && showLetters[6] == 1 && showLetters[7] == 0 && showLetters[8] == 1 && showLetters[9] == 0 && showLetters[10] == 0 && showLetters[11] == 1 && showLetters[12] == 1 && showLetters[13] == 0 && showLetters[14] == 0 && showLetters[15] == 1 && showLetters[16] == 0 && showLetters[17] == 1 && showLetters[18] == 0 && showLetters[19] == 0)
          {
            Canvas = 14;
            lockout = true;
          }
        }
      }
  }

}

function Canvas14()
{
  background(hint,800,600);
  cursor(ARROW);
  image(B,170,200,30,30);
  image(L,200,200,30,30);
  image(A,230,200,30,30);
  image(C,260,200,30,30);
  image(K,290,200,30,30);
  image(J,320,200,30,30);
  image(A,350,200,30,30);
  image(C,380,200,30,30);
  image(K,410,200,30,30);

  fill(255,255,255);
  text("Click anywhere to continue",100,400);
  if (mouseIsPressed == true && lockout == false)
  {
    Canvas = 15;
  }
}

function Canvas15()
{
  if (once == false)
    {
      window.location.replace("finale.html");
      once = true;
    }
  /*
  background(255,255,255)
  fill(0,0,0)
  text("Congratulaion! You escaped the prison and found the true criminal!",200,300)
  */
}

//Puzzle1
function DrawCanvasButton()
{
  draw1();
  if(plock == false && mouseX > 250 && mouseX < 330 && mouseY > 100 && mouseY < 150 && mouseIsPressed == true)
  {
    if(password == 0)
    {
      password = 1;
      answer1 = 1;
    }
    else if (password == 1)
    {
      password = 0;
      answer1 = 0;
    }
    plock = true;
  }
}


//Puzzle2
//Red flasthlight
//Red flasthlight
function rmove()
{
  //Red flashlight
  //Collets flashlight
  if (stateofflashlight == 1)
  {
    moveflashlightX = 130;
    moveflashlightY = 400;
    image(flashlight,moveflashlightX,moveflashlightY,20,10);
  }
  //flashlight move
  else if (stateofflashlight == 2)
  {
    image(flashlight,moveflashlightX,moveflashlightY,60,45);
    if(moveflashlightX > endflashlightX)
    {
      moveflashlightX = moveflashlightX - 5;
    }
    if (moveflashlightY < endflashlightY)
    {
      moveflashlightY = endflashlightY + 6.25;
    }
    if(!(moveflashlightX > endflashlightX && moveflashlightY < endflashlightY))
    {
      stateofflashlight = 3;
    }
  }
  //complete
  else if (stateofflashlight == 3)
  {
    image(flashlight,endflashlightX,endflashlightY,60,45);
  }
  //change cursor
  else if (stateofflashlight == 4)
  {
    image(searchLightr,mouseX-1540,mouseY-1420);


    //Return Button
    fill(255,255,255);
    rect(400,520,50,50);
    fill(0,0,0);
    text("Return",408,550);


    noCursor();
    image(flashlight,mouseX,mouseY,235/7,123/7);

    fill(255,255,255);
    text("Move the flash light around!",580,530);
    text("Press Return to reset.",580,550);


    if (mouseX > 400 && mouseX < 450 && mouseY > 520 && mouseY < 570 && mouseIsPressed == true)
    {
      Canvas = 8;
      stateofflashlight = 3;
      cursor(HAND);
    }
  }

}

//green flashlight
function gmove()
{
  //Green flashlight
  //Collets flashlight
  if (stateofflashlightg == 1)
  {
    moveflashlightgX = 100;
    moveflashlightgY = 120;
    image(flashlightg,moveflashlightgX,moveflashlightgY,20,10);
  }
  //flashlight move
  else if (stateofflashlightg == 2)
  {
    image(flashlightg,moveflashlightgX,moveflashlightgY,60,45);
    if(moveflashlightgX > endflashlightgX)
    {
      moveflashlightgX = moveflashlightgX - 5;
    }
    if (moveflashlightgY < endflashlightgY)
    {
      moveflashlightgY = endflashlightgY + 6.25;
    }
    if(!(moveflashlightgX > endflashlightgX && moveflashlightgY < endflashlightgY))
    {
      stateofflashlightg = 3;
    }
  }
  //complete
  else if (stateofflashlightg == 3)
  {
    image(flashlightg,endflashlightgX,endflashlightgY,60,45);
  }
  //change cursor
  else if (stateofflashlightg == 4)
  {
    image(searchLightr,mouseX-1540,mouseY-1420);


    //Return Button
    fill(255,255,255);
    rect(400,520,50,50);
    fill(0,0,0);
    text("Return",408,550);

    noCursor();
    image(flashlightg,mouseX,mouseY,235/7,123/7);

    fill(255,255,255);
    text("Move the flash light around!",580,530);
    text("Press Return to reset.",580,550);


    if (mouseX > 400 && mouseX < 450 && mouseY > 520 && mouseY < 570 && mouseIsPressed == true)
    {
      Canvas = 8;
      stateofflashlightg = 3;
      cursor(HAND);
    }
  }
}


//yellow flashlight
function ymove()
{
  //Yellow flashlight
  //Collets flashlight
  if (stateofflashlighty == 1)
  {
    moveflashlightyX = 480;
    moveflashlightyY = 380;
    image(flashlighty,moveflashlightyX,moveflashlightyY,20,10);
  }
  //flashlight move
  else if (stateofflashlighty == 2)
  {
    image(flashlighty,moveflashlightyX,moveflashlightyY,60,45);
    if(moveflashlightyX > endflashlightyX)
    {
      moveflashlightyX = moveflashlightyX - 5;
    }
    if (moveflashlightyY < endflashlightyY)
    {
      moveflashlightyY = endflashlightyY + 6.25;
    }
    if(!(moveflashlightyX > endflashlightyX && moveflashlightyY < endflashlightyY))
    {
      stateofflashlighty = 3;
    }
  }
  //complete
  else if (stateofflashlighty == 3)
  {
    image(flashlighty,endflashlightyX,endflashlightyY,60,45);
  }
  //change cursor
  else if (stateofflashlighty == 4)
  {
    image(searchLightr,mouseX-1540,mouseY-1420);


    //Return Button
    fill(255,255,255);
    rect(400,520,50,50);
    fill(0,0,0);
    text("Return",408,550);


    noCursor();
    image(flashlighty,mouseX,mouseY,235/7,123/7);

    fill(255,255,255);
    text("Move the flash light around!",580,530);
    text("Press Return to reset.",580,550);


    if (mouseX > 400 && mouseX < 450 && mouseY > 520 && mouseY < 570 && mouseIsPressed == true)
    {
      Canvas = 8;
      stateofflashlighty = 3;
      cursor(HAND);
    }
  }
}

//Blue flasthlight
function bmove()
{
  //Blue flashlight
  //Collets flashlight
  if (stateofflashlightb == 1)
  {
    moveflashlightbX = 500;
    moveflashlightbY = 530;
    image(flashlightb,moveflashlightbX,moveflashlightbY,20,10);
  }
  //flashlight move
  else if (stateofflashlightb == 2)
  {
    image(flashlightb,moveflashlightbX,moveflashlightbY,60,45);
    if(moveflashlightbX > endflashlightbX)
    {
      moveflashlightbX = moveflashlightbX - 5;
    }
    if (moveflashlightbY < endflashlightbY)
    {
      moveflashlightbY = endflashlightbY + 6.25;
    }
    if(!(moveflashlightbX > endflashlightbX && moveflashlightbY < endflashlightbY))
    {
      stateofflashlightb = 3;
    }
  }
  //complete
  else if (stateofflashlightb == 3)
  {
    image(flashlightb,endflashlightbX,endflashlightbY,60,45);
  }
  //change cursor
  else if (stateofflashlightb == 4)
  {
    image(searchLightr,mouseX-1540,mouseY-1420);


    //Return Button
    fill(255,255,255);
    rect(400,520,50,50);
    fill(0,0,0);
    text("Return",408,550);


    noCursor();
    image(flashlightb,mouseX,mouseY,235/7,123/7);

    fill(255,255,255);
    text("Move the flash light around!",580,530);
    text("Press Return to reset.",580,550);


    if (mouseX > 400 && mouseX < 450 && mouseY > 520 && mouseY < 570 && mouseIsPressed == true)
    {
      Canvas = 8;
      stateofflashlightb = 3;
      cursor(HAND);
    }
  }

}
//Turning off the light
function llight()
{
  //turn off the light
  if(llock == false && mouseX > 50 && mouseX < 205 && mouseY > 120 && mouseY < 170 && mouseIsPressed == true)
  {
    if(canvas == 7)
    {
      canvas = 8;
    }
    else if (canvas == 8)
    {
      canvas = 7;
    }
  }
}

function lettercontrol()
{
  for (var i = 0; i<20; i=i+1)
  {
    if(lettercontrol = 1)
    {
      i = 0;
      i = 2;
    }
  }
}


//Itemgrid
function itemGrid()
{
  // background for item grid
  fill(0,0,0);
  rect(10,510,330,580);
  // 1st box
  fill(250,250,250);
  rect(20,520,70,70);
  // 2nd box
  fill(250,250,250);
  rect(100,520,70,70);
  // 3rd box
  fill(250,250,250);
  rect(180,520,70,70);
  // 4th box
  fill(250,250,250);
  rect(260,520,70,70);
}