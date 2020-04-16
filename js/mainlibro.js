$(document).ready(init);

function init(){
	$("#mi_libro").booklet(
			{
				width:950,
				height:560,

				closed: true,
				covers:true,
				autoCenter: true,
				
				pagePadding:1,
				hoverWidth:100,
				arrows:true,
			}
		);
	
$("#bt_go").click(function(){
	$("#mi_libro").booklet("gotopage", 
		$("#in_go").val());
});
}