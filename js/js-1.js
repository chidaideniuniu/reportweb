// JavaScript Document
//实验目的
function showpurreference()
{
	"use strict";
    document.getElementById("purposereference").style.display="block";
}

function hidepurreference()
{
	"use strict";
    document.getElementById("purposereference").style.display="none";
}
//实验原理
function firstprin()
{
	"use strict";
	document.getElementById('prin').src="imgs/newpage1.png";
}

function secondprin()
{
	"use strict";
	document.getElementById('prin').src="imgs/page2.png";
}

function thirdprin()
{
	"use strict";
	document.getElementById('prin').src="imgs/page3.png";
}

function fourthprin()
{
	"use strict";
	document.getElementById('prin').src="imgs/page4.png";
}

function fifthprin()
{
	"use strict";
	document.getElementById('prin').src="imgs/page5.png";
}

function sixthprin()
{
	"use strict";
	document.getElementById('prin').src="imgs/page6.png";
}

function seventhprin()
{
	"use strict";
	document.getElementById('prin').src="imgs/page7.png";
}

function eighthprin()
{
	"use strict";
	document.getElementById('prin').src="imgs/page8.png";
}

//数据处理
function fisfigure()
{
	"use strict";
	var tb = document.getElementById("table2nd");    //获取table对像
	var mi = new Array();
	var ms = new Array();
	var ai = new Array();
	var as = new Array(); //四个数组存放四组数据
    var rows=tb.rows;
	for(var i=1;i<rows.length;i++)
	{    //--循环所有的行
		var cells=rows[i].cells;
		mi[i] = parseFloat(cells[1].getElementsByTagName("INPUT")[0].value);
		ms[i] = parseFloat(cells[2].getElementsByTagName("INPUT")[0].value);
		ai[i] = parseFloat(cells[3].getElementsByTagName("INPUT")[0].value);
		as[i] = parseFloat(cells[4].getElementsByTagName("INPUT")[0].value);
    }
	var x1 = ai[1]/as[1];
	var x2 = ai[2]/as[2];
	var x3 = ai[3]/as[3];
	var y1 = mi[1]/ms[1];
	var y2 = mi[2]/ms[2];
	var y3 = mi[3]/ms[3];
	var sumx = x1+x2+x3;
	var sumy = y1+y2+y3;
	var meanx = sumx/3;
	var meany = sumy/3;
	var sumxy = x1*y1+x2*y2+x3*y3; 
	var mean3xy = 3*meanx*meany;
	var sumxx = x1*x1+x2*x2+x3*x3;
	var fis = (sumxy-mean3xy)/(sumxx-3*meanx*meanx);
	/*相关系数的计算*/
	var xd1 = x1 - meanx;
	var xd2 = x2 - meanx;
	var xd3 = x3 - meanx;
	var yd1 = y1 - meany;
	var yd2 = y2 - meany;
	var yd3 = y3 - meany;
	var sumxdyd = xd1*yd1+xd2*yd2+xd3*yd3;
	var sumx2d = xd1*xd1+xd2*xd2+xd3*xd3;
	var sumy2d = yd1*yd1+yd2*yd2+yd3*yd3;
	var RR = (sumxdyd*sumxdyd)/(sumx2d*sumy2d);
    document.getElementById("xiangguanxishu").innerHTML = RR+"，相对校正因子是"+fis;
	return fis;
}

