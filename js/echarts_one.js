function loadecharts(){
	var store_all_url = "http://xmstrunk.test.foxhis.com/xmsopen-web/rest";
	var store_all_url_method = "xmsopen.common.xopgethotelinfo";
	var store_all_data = {
		"hotelid":"G000001",
		"appkey":"WEB",
		"ver":"1.0.0",
		"secret":"2wN5ip9D65k04svHQH0",
		"method":store_all_url_method,
		"params":[{
			"hotelid":""
		}]
	};
	var store_all_name = [];
	var hotelid_data = 0;
	setInterval(function(){
		if(hotelid_data > store_all_name.length-1){
			hotelid_data = 0;
			console.log(hotelid_data);
		}else{
			store_all_name_data = [{'hotelid':store_all_name[hotelid_data]}];
			console.log(store_all_name_data);
			hotelid_data++;
		}
	},1000);
	$.ajax({
		type:"post",
		url:store_all_url,
		async:false,
		data:JSON.stringify(store_all_data),
		dataType:"json",
		success:function(data){
			if(data.success==true){
				for(var i=0;i<data.results.length;i++){
					if(data.results[i].sign=="2" && data.results[i].sta=="I"){
						store_all_name.push(data.results[i].hotelid);
					}
				};
			}
		},
		error:function(error){
			console.log(error);
		}
	});
}