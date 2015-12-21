var items = document.getElementsByTagName('img');
var left = document.getElementById('left-button');
var right = document.getElementById('right-button');
var count=5;
	right.onclick=function(){
		if (count<5) {
			items[count].className="right_active";
			items[count+1].className="right_show";
		}else{
			items[count].className="right_active";
			count=0;
			items[count].className="right_show";
		};
		count++;
		
	}
	
	/*right.onclick=function(){
		if (count>0&&count<5) {
			items[count-1].className="pic";
			items[count].className="right_active";
			items[count+1].className="right_show";
		}else if (count=0) {
			items[5].className="pic";
			items[0].className="right_active";
			items[1].className="right_show";
		}else{
			items[4].className="pic";
			items[5].className="right_active";
			count= -1 ;
			items[count+1].className="right_show";
		};
		count++;
	};*/
	 
	 left.onclick=function(){
	 	if (count>0&&count<5) {
	 		items[count].className="left_active";
	 		items[count+1].className="pic";
	 		items[count-1].className="left_show";
	 	}else if (count=5) {
	 		items[5].className="left_active";
	 		items[4].className="left_show";
	 		items[0].className="pic";
	 	}else{
	 		items[0].className="left_active"
	 		items[1].className="pic"
	 		count=6;
	 		items[count-1].className="left_show";
	 	};
	 	count--;
	 };

