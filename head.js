var back = 'back.jpg';
var tile = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg'];

function randOrd(a, b)
{
	return (Math.round(Math.random())-0.5);
} 
var im = []; 
for (var i = 0; i < 5; i++) 
{
	im[i] = new Image();
	im[i].src = tile[i]; 
	tile[i] = '<img src="'+tile[i]+'" width="160" height="200" alt="tile" \/>'; 
	tile[i+5] = tile[i];
} 

function displayBack(i) 
{
	document.getElementById('t'+i).innerHTML = '<div onclick="disp('+i+');return false;"><img src="'+back+'" width="160" height="200" alt="Backside" \/><\/div>';
	} 
	
	var ch1, ch2, tmr, tno, tid, cid, cnt; 
	window.onload=start; 
	function start() 
	{
		for (var i = 0; i <= 9 ;i++) 
		displayBack(i);
		clearInterval(tid);
		tmr = tno = cnt = 0;
		tile.sort( randOrd );
		cntr(); 
		tid = setInterval('cntr()', 1000);
	} 
	
	function cntr() 
	{
		var min = Math.floor(tmr/60);
		var sec = tmr%60;document.getElementById('cnt').value = min+':'+ (sec<10 ? '0' : '') + sec;
		tmr++;
	} 
	
	function disp(sel) 
	{
		if (tno>1) 
		{
			clearTimeout(cid); 
			conceal();
		}
		document.getElementById('t'+sel).innerHTML = tile[sel];
		if (tno==0) 
			ch1 = sel;
		else 
		{
			ch2 = sel;
			cid = setTimeout('conceal()', 900);}tno++;
		} 
		
	function conceal() 
	{
		tno = 0; 
		if (tile[ch1] != tile[ch2]) 
		{
			displayBack(ch1);
			displayBack(ch2);
		} 
		else 
			cnt++; 
		if (cnt >= 5) 
			clearInterval(tid);
	}
                    