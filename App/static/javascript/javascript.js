windows.onload=one();
function one(){
alert("this one");
}

windows.onclick = show_picture(miaoshu);
function show_picture(miaoshu)
{
    var source = miaoshu.getAttribute("href");
    var eve = document.getElementById("tupian");
    eve.setAttribute("src",source);
}