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
	$.ajax({
		type:"post",
		url:store_all_url,
		async:true,
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
	
	var hotelid_data = 0;
	setInterval(function(){
		if(hotelid_data > store_all_name.length-1){
			hotelid_data = 0;
		}else{
			store_all_name_data = store_all_name[hotelid_data];
			hotelid_data++;
			
			var Rentals = document.getElementById('Rentals_one');
			var Rentals_url = store_all_url;
			var Rentals_url_method = "xmsopen.report.xopgetcurrentdatehoursofincome";
			var Rentals_data = {
				"hotelid":"G000001",
				"appkey":"WEB",
				"ver":"1.0.0",
				"secret":"2wN5ip9D65k04svHQH0",
				"method":Rentals_url_method,
				"params":[{
					"hotelid":store_all_name[hotelid_data]
				}]
			};
			var RentalsCharts_name = [];
			var RentalsCharts_time = [];
			var RentalsCharts_num = [];
			var RentalsCharts = echarts.init(Rentals);
			$.ajax({
				type:"post",
				url:Rentals_url,
				async:true,
				data:JSON.stringify(Rentals_data),
				dataType:"json",
				success:function(data){
					if(data.success==true){
						for(var i=0;i<data.results.length;i++){
							RentalsCharts_name.push(data.results[i].descript);
						};
						if(data.results[0].datalist!=undefined && data.results[0].datalist!=""){
							for(var i=0;i<data.results[0].datalist.length;i++){
								RentalsCharts_time.push(data.results[0].datalist[i].time);
								RentalsCharts_num.push(data.results[0].datalist[i].income);
							};
						};
						var option = {
							title: {
								text: RentalsCharts_name + '24小时收入变化趋势',
								padding: [10,0,0,0],
								x:'center',
								textStyle:{
									fontSize:12,
									fontWeight:"bold",
									color:"#9ba5c7",
									top:'middle'
								}
							},
							grid: {left: '3%',right: '3%',bottom: '1%',containLabel: true},
							xAxis: {
								type: 'category',
								boundaryGap: false,
								data: RentalsCharts_time,
								nameTextStyle : {color : '#9ba5c7'},
								axisLine : {
									lineStyle : {color : '#143994'}
								},
								axisLabel : {color : '#9ba5c7'},
								splitLine : {
									show : true,
									lineStyle : {color : "#143994",type : 'dashed'}
								}
							},
							yAxis: {
								type: 'value',
								name : '出租率/%',
								nameTextStyle : {color : '#9ba5c7'},
								axisLine : {
									lineStyle : {color : '#143994'}
								},
								axisLabel : {color : '#9ba5c7'},
								splitLine : {
									lineStyle : {color : "#143994",type : 'dashed'}
								}
							},
							series: [{
								data: RentalsCharts_num,
								type: 'line',
								itemStyle : {
									normal : {
										color : '#143994',
										borderColor : '#143994',
										borderWidth : 10,
										lineStyle:{width : 2,color : '#143994'}
									}
								}
							}]
						};
						RentalsCharts.setOption(option);
					}
				},
				error:function(error){
					console.log(error);
				}
			});
			
			var Rentals_two = document.getElementById('Rentals_two');
			var Rentals_two_url = store_all_url;
			var Rentals_two_url_method = "xmsopen.report.xopgetcurrentdaterentalschange";
			var Rentals_two_data = {
				"hotelid":"G000001",
				"appkey":"WEB",
				"ver":"1.0.0",
				"secret":"2wN5ip9D65k04svHQH0",
				"method":Rentals_two_url_method,
				"params":[{
					"hotelid":store_all_name[hotelid_data]
				}]
			};
			var RentalsCharts_two_name = [];
			var RentalsCharts_two_time = [];
			var RentalsCharts_two_num = [];
			var RentalsCharts_two = echarts.init(Rentals_two);
			$.ajax({
				type:"post",
				url:Rentals_two_url,
				async:true,
				data:JSON.stringify(Rentals_two_data),
				dataType:"json",
				success:function(data){
					if(data.success==true){
						for(var i=0;i<data.results.length;i++){
							RentalsCharts_two_name.push(data.results[i].descript);
						};
						if(data.results[0].datalist!=undefined && data.results[0].datalist!=""){
							for(var i=0;i<data.results[0].datalist.length;i++){
								RentalsCharts_two_time.push(data.results[0].datalist[i].time);
								RentalsCharts_two_num.push((data.results[0].datalist[i].occ)*100);
							};
						};
						var option = {
							title: {
								text: RentalsCharts_two_name + '24小时出租率变化趋势',
								padding: [10,0,0,0],
								x:'center',
								textStyle:{
									fontSize:12,
									fontWeight:"bold",
									color:"#9ba5c7",
									top:'middle'
								}
							},
							grid: {left: '3%',right: '3%',bottom: '1%',containLabel: true},
							xAxis: {
								type: 'category',
								boundaryGap: false,
								data: RentalsCharts_two_time,
								nameTextStyle : {color : '#9ba5c7'},
								axisLine : {
									lineStyle : {color : '#143994'}
								},
								axisLabel : {color : '#9ba5c7'},
								splitLine : {
									show : true,
									lineStyle : {color : "#143994",type : 'dashed'}
								}
							},
							yAxis: {
								type: 'value',
								name : '出租率/%',
								nameTextStyle : {color : '#9ba5c7'},
								axisLine : {
									lineStyle : {color : '#143994'}
								},
								axisLabel : {color : '#9ba5c7'},
								splitLine : {
									lineStyle : {color : "#143994",type : 'dashed'}
								}
							},
							series: [{
								data: RentalsCharts_two_num,
								type: 'line',
								itemStyle : {
									normal : {
										color : '#143994',
										borderColor : '#143994',
										borderWidth : 10,
										lineStyle:{width : 2,color : '#143994'}
									}
								}
							}]
						};
						RentalsCharts_two.setOption(option);
					}
				},
				error:function(error){
					console.log(error);
				}
			});
			
			var Rentals_three = document.getElementById('Rentals_three');
			var Rentals_three_url = store_all_url;
			var Rentals_three_url_method = "xmsopen.report.xopgetcurrentdateadrandrevpar";
			var Rentals_three_data = {
				"hotelid":"G000001",
				"appkey":"WEB",
				"ver":"1.0.0",
				"secret":"2wN5ip9D65k04svHQH0",
				"method":Rentals_three_url_method,
				"params":[{
					"hotelid":store_all_name[hotelid_data]
				}]
			};
			var RentalsCharts_three_name = [];
			var RentalsCharts_three_time_one = [];
			var RentalsCharts_three_num_one = [];
			var RentalsCharts_three_time_two = [];
			var RentalsCharts_three_num_two = [];
			var RentalsCharts_three = echarts.init(Rentals_three);
			$.ajax({
				type:"post",
				url:Rentals_three_url,
				async:true,
				data:JSON.stringify(Rentals_three_data),
				dataType:"json",
				success:function(data){
					if(data.success==true){
						for(var i=0;i<data.results.length;i++){
							RentalsCharts_three_name.push(data.results[i].descript);
						};
						if(data.results[0].datalist_adr!=undefined && data.results[0].datalist_adr!=""){
							for(var i=0;i<data.results[0].datalist_adr.length;i++){
								RentalsCharts_three_time_one.push(data.results[0].datalist_adr[i].time);
								RentalsCharts_three_num_one.push((data.results[0].datalist_adr[i].adr)*100);
							};
						};
						if(data.results[0].datalist_revpar!=undefined && data.results[0].datalist_revpar!=""){
							for(var i=0;i<data.results[0].datalist_revpar.length;i++){
								RentalsCharts_three_time_two.push(data.results[0].datalist_revpar[i].time);
								RentalsCharts_three_num_two.push((data.results[0].datalist_revpar[i].revpar)*100);
							};
						};
						var option = {
							title: {
								text: RentalsCharts_three_name + '24小时变化趋势',
								padding: [10,0,0,0],
								x:'center',
								textStyle:{
									fontSize:12,
									fontWeight:"bold",
									color:"#9ba5c7",
									top:'middle'
								}
							},
							grid: {left: '3%',right: '3%',bottom: '1%',containLabel: true},
							xAxis: {
								type: 'category',
								boundaryGap: false,
								data: RentalsCharts_three_time_two,
								nameTextStyle : {color : '#9ba5c7'},
								axisLine : {
									lineStyle : {color : '#143994'}
								},
								axisLabel : {
									color : '#9ba5c7'
								},
								splitLine : {
									show : true,
									lineStyle : {color : "#143994",type : 'dashed'}
								}
							},
							yAxis: {
								type: 'value',
								name :'出租率/%',
								nameTextStyle : {color : '#9ba5c7'},
								axisLine : {
									lineStyle : {color : '#143994'}
								},
								axisLabel : {color : '#9ba5c7'},
								splitLine : {
									lineStyle : {color : "#143994",type : 'dashed'}
								}
							},
							series: [{
								data: RentalsCharts_three_num_one,
								type: 'line',
								itemStyle : {
									normal : {
										color : '#143994',
										borderColor : '#143994',
										borderWidth : 10,
										lineStyle:{width : 2,color : '#143994'}
									}
								}
							},{
								data: RentalsCharts_three_num_two,
								type: 'line',
								itemStyle : {
									normal : {
										color : '#73e5f3',
										borderColor : '#73e5f3',
										borderWidth : 10,
										lineStyle:{width : 2,color : '#73e5f3'}
									}
								}
							}]
						};
						RentalsCharts_three.setOption(option);
					}
				},
				error:function(error){
					console.log(error);
				}
			});
		}
	},3000)
	
	var PieCharts_one = document.getElementById('PieCharts_one');
	var PieCharts_one_url = store_all_url;
	var PieCharts_one_url_method = "xmsopen.report.xopchanmarkstatistics";
	var PieCharts_one_data = {
		"hotelid":"G000001",
		"appkey":"WEB",
		"ver":"1.0.0",
		"secret":"2wN5ip9D65k04svHQH0",
		"method":PieCharts_one_url_method,
		"params":[{
			"hotelid":store_all_name[1]
		}]
	};
	var PieCharts_one_Charts_one_name = [];
	var PieCharts_one_Charts_one_num = [];
	var PieCharts_one_Charts = echarts.init(PieCharts_one);
	$.ajax({
		type:"post",
		url:PieCharts_one_url,
		async:true,
		data:JSON.stringify(PieCharts_one_data),
		dataType:"json",
		success:function(data){
			if(data.success==true){
				for(var i=0;i<data.results[0].cmlist.length;i++){
					PieCharts_one_Charts_one_name.push(data.results[0].cmlist[i].channel_des);
					PieCharts_one_Charts_one_num.push(data.results[0].cmlist[i].rmnum);
				};
				var option = {
					title: {
						text: '渠道房数占比',
						padding: [5,0],
						x:'center',
						textStyle:{
							fontSize:12,
							fontWeight:"bold",
							color:"#9ba5c7",
							top:'middle'
						}
					},
					legend:{
						orient:'vertical',
						x: 'left',
						y: 'center',
						itemWidth : 10,
						itemHeight : 10,
						textStyle:{color:'#9ba5c7'}
					},
					series: [{
						type:'pie',
						selectedMode: 'single',
						hoverAnimation: false,
						avoidLabelOverlap: false,
						color: ['#ff8f47'],
						radius: ['40%', '45%'],
						center: ['70%', '55%'],
						label: {
							normal: {position: 'inner'}
						},
						labelLine: {
							normal: {show: false}
						},
						itemStyle : {
							normal : {
								label : {show : false},   //隐藏标示文字
								labelLine : {show : false}   //隐藏标示线
							}
						},
						data:[{value:3, name:'其他'}]
					},{
						type:'pie',
						selectedMode: 'single',
						hoverAnimation: false,
						avoidLabelOverlap: false,
						color: ['#4acad5'],
						radius: ['55%', '60%'],
						center: ['70%', '55%'],
						label: {
							normal: {position: 'inner'}
						},
						labelLine: {
							normal: {show: false}
						},
						itemStyle : {
							normal : {
								label : {show : false},   //隐藏标示文字
								labelLine : {show : false}   //隐藏标示线
							}
						},
						data:[{value:PieCharts_one_Charts_one_num[1], name:PieCharts_one_Charts_one_name[1]}]
					},{
						type:'pie',
						selectedMode: 'single',
						hoverAnimation: false,
						avoidLabelOverlap: false,
						color: ['#2a61f7'],
						radius: ['70%', '75%'],
						center: ['70%', '55%'],
						label: {
							normal: {position: 'inner'}
						},
						labelLine: {
							normal: {show: false}
						},
						itemStyle : {
							normal : {
								label : {show : false},   //隐藏标示文字
								labelLine : {show : false}   //隐藏标示线
							}
						},
						data:[{value:PieCharts_one_Charts_one_num[0], name:PieCharts_one_Charts_one_name[0]}]
					}]
				};
				PieCharts_one_Charts.setOption(option);
			}
		},
		error:function(error){
			console.log(error);
		}
	});
	
	var PieCharts_two = document.getElementById('PieCharts_two');
	var PieCharts_two_url = store_all_url;
	var PieCharts_two_url_method = "xmsopen.report.xopchanmarkstatistics";
	var PieCharts_two_data = {
		"hotelid":"G000001",
		"appkey":"WEB",
		"ver":"1.0.0",
		"secret":"2wN5ip9D65k04svHQH0",
		"method":PieCharts_two_url_method,
		"params":[{
			"hotelid":store_all_name[1]
		}]
	};
	var PieCharts_two_Charts_one_name = [];
	var PieCharts_two_Charts_one_num = [];
	var PieCharts_two_Charts = echarts.init(PieCharts_two);
	$.ajax({
		type:"post",
		url:PieCharts_two_url,
		async:true,
		data:JSON.stringify(PieCharts_two_data),
		dataType:"json",
		success:function(data){
			if(data.success==true){
				for(var i=0;i<data.results[0].mmlist.length;i++){
					PieCharts_two_Charts_one_name.push(data.results[0].mmlist[i].market_des);
					PieCharts_two_Charts_one_num.push(data.results[0].mmlist[i].rmnum);
				};
				var option = {
					title: {
						text: '市场房数占比',
						padding: [5,0],
						x:'center',
						textStyle:{
							fontSize:12,
							fontWeight:"bold",
							color:"#9ba5c7",
							top:'middle'
						}
					},
					legend:{
						orient:'vertical',
						x: 'left',
						y: 'center',
						itemWidth : 10,
						itemHeight : 10,
//						data:['上门散客','其他','美图'],
						textStyle:{color:'#9ba5c7'}
					},
					series: [{
						type:'pie',
						selectedMode: 'single',
						hoverAnimation: false,
						avoidLabelOverlap: false,
						color: ['#ff8f47'],
						radius: ['40%', '45%'],
						center: ['70%', '55%'],
						label: {
							normal: {position: 'inner'}
						},
						labelLine: {
							normal: {show: false}
						},
						itemStyle : {
							normal : {
								label : {show : false},   //隐藏标示文字
								labelLine : {show : false}   //隐藏标示线
							}
						},
						data:[{value:PieCharts_two_Charts_one_num[0], name:PieCharts_two_Charts_one_name[0]}]
					},{
						type:'pie',
						selectedMode: 'single',
						hoverAnimation: false,
						avoidLabelOverlap: false,
						color: ['#4acad5'],
						radius: ['55%', '60%'],
						center: ['70%', '55%'],
						label: {
							normal: {position: 'inner'}
						},
						labelLine: {
							normal: {show: false}
						},
						itemStyle : {
							normal : {
								label : {show : false},   //隐藏标示文字
								labelLine : {show : false}   //隐藏标示线
							}
						},
						data:[{value:PieCharts_two_Charts_one_num[1], name:PieCharts_two_Charts_one_name[1]}]
					},{
						type:'pie',
						selectedMode: 'single',
						hoverAnimation: false,
						avoidLabelOverlap: false,
						color: ['#2a61f7'],
						radius: ['70%', '75%'],
						center: ['70%', '55%'],
						label: {
							normal: {position: 'inner'}
						},
						labelLine: {
							normal: {show: false}
						},
						itemStyle : {
							normal : {
								label : {show : false},   //隐藏标示文字
								labelLine : {show : false}   //隐藏标示线
							}
						},
						data:[{value:PieCharts_two_Charts_one_num[2], name:PieCharts_two_Charts_one_name[2]}]
					}]
				};
				PieCharts_two_Charts.setOption(option);
			}
		},
		error:function(error){
			console.log(error);
		}
	});
	
	var PieCharts_three = document.getElementById('PieCharts_three');
	var PieCharts_three_url = store_all_url;
	var PieCharts_three_url_method = "xmsopen.report.xopchanmarkstatistics";
	var PieCharts_three_data = {
		"hotelid":"G000001",
		"appkey":"WEB",
		"ver":"1.0.0",
		"secret":"2wN5ip9D65k04svHQH0",
		"method":PieCharts_three_url_method,
		"params":[{
			"hotelid":store_all_name[1]
		}]
	};
	var PieCharts_three_Charts_one_name = [];
	var PieCharts_three_Charts_one_num = [];
	var PieCharts_three_Charts = echarts.init(PieCharts_three);
	$.ajax({
		type:"post",
		url:PieCharts_three_url,
		async:true,
		data:JSON.stringify(PieCharts_three_data),
		dataType:"json",
		success:function(data){
			if(data.success==true){
				for(var i=0;i<data.results[0].cplist.length;i++){
					PieCharts_three_Charts_one_name.push(data.results[0].cplist[i].channel_des);
					PieCharts_three_Charts_one_num.push(data.results[0].cplist[i].price);
				};
				var option = {
					title: {
						text: '渠道价格占比',
						padding: [5,0],
						x:'center',
						textStyle:{
							fontSize:12,
							fontWeight:"bold",
							color:"#9ba5c7",
							top:'middle'
						}
					},
					legend:{
						orient:'vertical',
						x: 'left',
						y: 'center',
						itemWidth : 10,
						itemHeight : 10,
						textStyle:{color:'#9ba5c7'}
					},
					series: [{
						type:'pie',
						selectedMode: 'single',
						hoverAnimation: false,
						avoidLabelOverlap: false,
						color: ['#ff8f47'],
						radius: ['40%', '45%'],
						center: ['70%', '55%'],
						label: {
							normal: {position: 'inner'}
						},
						labelLine: {
							normal: {show: false}
						},
						itemStyle : {
							normal : {
								label : {show : false},   //隐藏标示文字
								labelLine : {show : false}   //隐藏标示线
							}
						},
						data:[{value:3, name:'其他'}]
					},{
						type:'pie',
						selectedMode: 'single',
						hoverAnimation: false,
						avoidLabelOverlap: false,
						color: ['#4acad5'],
						radius: ['55%', '60%'],
						center: ['70%', '55%'],
						label: {
							normal: {position: 'inner'}
						},
						labelLine: {
							normal: {show: false}
						},
						itemStyle : {
							normal : {
								label : {show : false},   //隐藏标示文字
								labelLine : {show : false}   //隐藏标示线
							}
						},
						data:[{value:PieCharts_three_Charts_one_num[1], name:PieCharts_three_Charts_one_name[1]}]
					},{
						type:'pie',
						selectedMode: 'single',
						hoverAnimation: false,
						avoidLabelOverlap: false,
						color: ['#2a61f7'],
						radius: ['70%', '75%'],
						center: ['70%', '55%'],
						label: {
							normal: {position: 'inner'}
						},
						labelLine: {
							normal: {show: false}
						},
						itemStyle : {
							normal : {
								label : {show : false},   //隐藏标示文字
								labelLine : {show : false}   //隐藏标示线
							}
						},
						data:[{value:PieCharts_three_Charts_one_num[0], name:PieCharts_three_Charts_one_name[0]}]
					}]
				};
				PieCharts_three_Charts.setOption(option);
			}
		},
		error:function(error){
			console.log(error);
		}
	});
	
	var PieCharts_four = document.getElementById('PieCharts_four');
	var PieCharts_four_url = store_all_url;
	var PieCharts_four_url_method = "xmsopen.report.xopchanmarkstatistics";
	var PieCharts_four_data = {
		"hotelid":"G000001",
		"appkey":"WEB",
		"ver":"1.0.0",
		"secret":"2wN5ip9D65k04svHQH0",
		"method":PieCharts_four_url_method,
		"params":[{
			"hotelid":store_all_name[1]
		}]
	};
	var PieCharts_four_Charts_one_name = [];
	var PieCharts_four_Charts_one_num = [];
	var PieCharts_four_Charts = echarts.init(PieCharts_four);
	$.ajax({
		type:"post",
		url:PieCharts_four_url,
		async:true,
		data:JSON.stringify(PieCharts_four_data),
		dataType:"json",
		success:function(data){
			if(data.success==true){
				for(var i=0;i<data.results[0].mplist.length;i++){
					PieCharts_four_Charts_one_name.push(data.results[0].mplist[i].market_des);
					PieCharts_four_Charts_one_num.push(data.results[0].mplist[i].price);
				};
				var option = {
					title: {
						text: '市场价格占比',
						padding: [5,0],
						x:'center',
						textStyle:{
							fontSize:12,
							fontWeight:"bold",
							color:"#9ba5c7",
							top:'middle'
						}
					},
					legend:{
						orient:'vertical',
						x: 'left',
						y: 'center',
						itemWidth : 10,
						itemHeight : 10,
//						data:['上门散客','其他','美图'],
						textStyle:{color:'#9ba5c7'}
					},
					series: [{
						type:'pie',
						selectedMode: 'single',
						hoverAnimation: false,
						avoidLabelOverlap: false,
						color: ['#ff8f47'],
						radius: ['40%', '45%'],
						center: ['70%', '55%'],
						label: {
							normal: {position: 'inner'}
						},
						labelLine: {
							normal: {show: false}
						},
						itemStyle : {
							normal : {
								label : {show : false},   //隐藏标示文字
								labelLine : {show : false}   //隐藏标示线
							}
						},
						data:[{value:PieCharts_four_Charts_one_num[0], name:PieCharts_four_Charts_one_name[0]}]
					},{
						type:'pie',
						selectedMode: 'single',
						hoverAnimation: false,
						avoidLabelOverlap: false,
						color: ['#4acad5'],
						radius: ['55%', '60%'],
						center: ['70%', '55%'],
						label: {
							normal: {position: 'inner'}
						},
						labelLine: {
							normal: {show: false}
						},
						itemStyle : {
							normal : {
								label : {show : false},   //隐藏标示文字
								labelLine : {show : false}   //隐藏标示线
							}
						},
						data:[{value:PieCharts_four_Charts_one_num[1], name:PieCharts_four_Charts_one_name[1]}]
					},{
						type:'pie',
						selectedMode: 'single',
						hoverAnimation: false,
						avoidLabelOverlap: false,
						color: ['#2a61f7'],
						radius: ['70%', '75%'],
						center: ['70%', '55%'],
						label: {
							normal: {position: 'inner'}
						},
						labelLine: {
							normal: {show: false}
						},
						itemStyle : {
							normal : {
								label : {show : false},   //隐藏标示文字
								labelLine : {show : false}   //隐藏标示线
							}
						},
						data:[{value:PieCharts_four_Charts_one_num[2], name:PieCharts_four_Charts_one_name[2]}]
					}]
				};
				PieCharts_four_Charts.setOption(option);
			}
		},
		error:function(error){
			console.log(error);
		}
	});
	
	var Rentals_one_one = document.getElementById('Rentals_one_one');
	var Rentals_one_one_url = store_all_url;
	var Rentals_one_one_url_method = "xmsopen.report.xopgetrealtimettlincome";
	var Rentals_one_one_data = {
		"hotelid":"G000001",
		"appkey":"WEB",
		"ver":"1.0.0",
		"secret":"2wN5ip9D65k04svHQH0",
		"method":Rentals_one_one_url_method,
		"params":[{
			"hotelid":"",
			"top":5
		}]
	};
	var RentalsCharts_one_one_name = [];
	var RentalsCharts_one_one_num_one = [];
	var RentalsCharts_one_one_num_two = [];
	var RentalsCharts_one_one = echarts.init(Rentals_one_one);
	$.ajax({
		type:"post",
		url:Rentals_one_one_url,
		async:true,
		data:JSON.stringify(Rentals_one_one_data),
		dataType:"json",
		success:function(data){
			if(data.success==true){
				for(var i=0;i<data.results.length;i++){
					RentalsCharts_one_one_name.push(data.results[i].hoteldes);
				};
				for(var i=0;i<data.results.length;i++){
					RentalsCharts_one_one_num_one.push(data.results[i].ttlrev);
				};
				for(var i=0;i<data.results.length;i++){
					RentalsCharts_one_one_num_two.push(data.results[i].ttlrev_plan);
				};
				var option = {
					title: {
						text: '酒店收入TOP10',
						padding: [10,0,0,0],
						x:'center',
						textStyle:{
							fontSize:12,
							fontWeight:"bold",
							color:"#9ba5c7",
							top:'middle'
						}
					},
					tooltip : {
						trigger: 'axis',
						axisPointer : {
							type : 'line'
						}
					},
					grid: {left: '3%',right: '3%',bottom: '1%',containLabel: true},
					xAxis : [{
						type : 'category',
						data : RentalsCharts_one_one_name,
						position : 'bottom',
						nameTextStyle : {
							color : '#9ba5c7'
						},
						axisLine : {
							interval : 2,
							lineStyle : {color : '#143994'}
						},
						axisLabel : {color : '#9ba5c7'},
						splitLine : {
							show : false,
							lineStyle : {
								color : "#143994",
								type : 'dashed',
							}
						}
					}],
					yAxis : [{
						type : 'value',
						name : '酒店收入/万元',
						boundaryGap : false,
						nameTextStyle : {color : '#9ba5c7'},
						axisLine : {
							lineStyle : {color : '#143994'}
						},
						axisLabel : {color : '#9ba5c7'},
						splitLine : {
							lineStyle : {color : "#143994",type : 'dashed',}
						}
					}],
					series : [{
						type:'bar',
						barWidth : 15,
						data:RentalsCharts_one_one_num_one,
						color: ['#73e5f3'],
					},{
						type:'bar',
						barWidth : 15,
						data:RentalsCharts_one_one_num_two,
						color: ['#73e5f3'],
					}]
				};
				RentalsCharts_one_one.setOption(option);
			}
		},
		error:function(error){
			console.log(error);
		}
	});
	
	var Rentals_one_three = document.getElementById('Rentals_one_three');
	var Rentals_one_three_url = store_all_url;
	var Rentals_one_three_url_method = "xmsopen.report.xopgetrealtimettlrentals";
	var Rentals_one_three_data = {
		"hotelid":"G000001",
		"appkey":"WEB",
		"ver":"1.0.0",
		"secret":"2wN5ip9D65k04svHQH0",
		"method":Rentals_one_three_url_method,
		"params":[{
			"hotelid":"",
			"top":5
		}]
	};
	var RentalsCharts_one_three_name = [];
	var RentalsCharts_one_three_num_one = [];
	var RentalsCharts_one_three_num_two = [];
	var RentalsCharts_one_three = echarts.init(Rentals_one_three);
	$.ajax({
		type:"post",
		url:Rentals_one_three_url,
		async:true,
		data:JSON.stringify(Rentals_one_three_data),
		dataType:"json",
		success:function(data){
			if(data.success==true){
				for(var i=0;i<data.results.length;i++){
					RentalsCharts_one_three_name.push(data.results[i].hoteldes);
				};
				for(var i=0;i<data.results.length;i++){
					RentalsCharts_one_three_num_one.push((data.results[i].occ)*100);
//					RentalsCharts_one_three_num_one.push(data.results[i].occ);
				};
				for(var i=0;i<data.results.length;i++){
					RentalsCharts_one_three_num_one.push((data.results[i].occ_plan)*100);
//					RentalsCharts_one_three_num_two.push(data.results[i].occ_plan);
				};
				var option = {
					title: {
						text: '酒店出租率TOP10',
						padding: [10,0,0,0],
						x:'center',
						textStyle:{
							fontSize:12,
							fontWeight:"bold",
							color:"#9ba5c7",
							top:'middle'
						}
					},
					tooltip : {
						trigger: 'axis',
						axisPointer : {type : 'line'}
					},
					grid: {left: '3%',right: '3%',bottom: '1%',containLabel: true},
					xAxis : [{
						type : 'category',
						data : RentalsCharts_one_three_name,
						position : 'bottom',
						nameTextStyle : {color : '#9ba5c7'},
						axisLine : {
							interval : 2,
							lineStyle : {color : '#143994'}
						},
						axisLabel : {color : '#9ba5c7'},
						splitLine : {
							show : false,
							lineStyle : {
								color : "#143994",
								type : 'dashed',
							}
						}
					}],
					yAxis : [{
						type : 'value',
						name : '出租率/%',
						boundaryGap : false,
						nameTextStyle : {color : '#9ba5c7'},
						axisLine : {
							lineStyle : {color : '#143994'}
						},
						axisLabel : {color : '#9ba5c7'},
						splitLine : {
							lineStyle : {color : "#143994",type : 'dashed',}
						}
					}],
					series : [{
						type:'bar',
						barWidth : 15,
						data:RentalsCharts_one_three_num_one,
						color: ['#73e5f3'],
					},{
						type:'bar',
						barWidth : 15,
						data:RentalsCharts_one_three_num_two,
						color: ['#73e5f3'],
					}]
				};
				RentalsCharts_one_three.setOption(option);
			}
		},
		error:function(error){
			console.log(error);
		}
	});
	
	var RevparRanking = document.getElementById('RevparRanking');
	var RevparRanking_url = store_all_url;
	var RevparRanking_url_method = "xmsopen.report.xopgetrealtimerevpartop";
	var RevparRanking_data = {
		"hotelid":"G000001",
		"appkey":"WEB",
		"ver":"1.0.0",
		"secret":"2wN5ip9D65k04svHQH0",
		"method":RevparRanking_url_method,
		"params":[{
			"hotelid":"",
			"top":5
		}]
	};
	var RevparRankingCharts_name = [];
	var RevparRankingCharts_num_one = [];
	var RevparRankingCharts_num_two = [];
	var RevparRankingCharts = echarts.init(RevparRanking);
	$.ajax({
		type:"post",
		url:RevparRanking_url,
		async:true,
		data:JSON.stringify(RevparRanking_data),
		dataType:"json",
		success:function(data){
			if(data.success==true){
				for(var i=0;i<data.results.length;i++){
					RevparRankingCharts_name.push(data.results[i].hoteldes);
				};
				for(var i=0;i<data.results.length;i++){
					RevparRankingCharts_num_one.push(data.results[i].revpar);
				};
				for(var i=0;i<data.results.length;i++){
					RevparRankingCharts_num_two.push(data.results[i].revpar_plan);
				};
				var option = {
					title: {
						text: 'REVPAR排名TOP10',
						padding: [10,0,0,0],
						x:'center',
						textStyle:{
							fontSize:12,
							fontWeight:"bold",
							color:"#9ba5c7",
							top:'middle'
						}
					},
					tooltip: {
						trigger: 'axis',
						axisPointer: {type: 'line'}
					},
					legend: {
						x: 'right',
						y: 'top',
						itemWidth : 10,
						itemHeight : 10,
						data: ['今日', '预算'],
						padding: [30,10,0,0],
						textStyle:{color:'#9ba5c7'}
					},
					grid: {left: '3%',right: '4%',bottom: '3%',containLabel: true},
					xAxis: {
						type: 'value',
						boundaryGap: [0, 0.01],
						nameTextStyle : {color : '#9ba5c7'},
						axisLine : {
							lineStyle : {color : '#143994'}
						},
						axisLabel : {color : '#9ba5c7'},
						splitLine : {
							show : false,
							lineStyle : {color : "#143994",type : 'dashed'}
						}
					},
					yAxis: {
						type: 'category',
						name : '酒店',
						data: RevparRankingCharts_name,
						nameTextStyle : {color : '#9ba5c7'},
						axisLine : {
							lineStyle : {color : '#143994'}
						},
						axisLabel : {color : '#9ba5c7'},
						splitLine : {
							show : true,
							lineStyle : {color : "#143994",type : 'dashed'}
						}
					},
					series: [{
						name: '今日',
						type: 'bar',
						data: RevparRankingCharts_num_one,
						color : '#285fec'
					},{
						name: '预算',
						type: 'bar',
						data: RevparRankingCharts_num_two,
						color : '#153892'
					}]
				};
				RevparRankingCharts.setOption(option);
			}
		},
		error:function(error){
			console.log(error);
		}
	});
	
	var AverageHousePrice = document.getElementById('AverageHousePrice');
	var AverageHousePrice_url = store_all_url;
	var AverageHousePrice_url_method = "xmsopen.report.xopgetrealtimeavehprices";
	var AverageHousePrice_data = {
		"hotelid":"G000001",
		"appkey":"WEB",
		"ver":"1.0.0",
		"secret":"2wN5ip9D65k04svHQH0",
		"method":AverageHousePrice_url_method,
		"params":[{
			"hotelid":"",
			"top":5
		}]
	};
	var AverageHousePriceCharts_name = [];
	var AverageHousePriceCharts_num_one = [];
	var AverageHousePriceCharts_num_two = [];
	var AverageHousePriceCharts = echarts.init(AverageHousePrice);
    $.ajax({
    	    type:"post",
		url:AverageHousePrice_url,
		async:true,
		data:JSON.stringify(AverageHousePrice_data),
		dataType:"json",
		success:function(data){
			if(data.success==true){
				for(var i=0;i<data.results.length;i++){
					AverageHousePriceCharts_name.push(data.results[i].hoteldes);
				};
				for(var i=0;i<data.results.length;i++){
					AverageHousePriceCharts_num_one.push(data.results[i].adr);
				};
				for(var i=0;i<data.results.length;i++){
					AverageHousePriceCharts_num_two.push(data.results[i].adr_plan);
				};
				var option = {
					title: {
						text: '平均房价排名TOP10',
						padding: [10,0,0,0],
						x:'center',
						textStyle:{
							fontSize:12,
							fontWeight:"bold",
							color:"#9ba5c7",
							top:'middle'
						}
					},
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							type: 'line'
						}
					},
					legend: {
						x: 'right',
						y: 'top',
						itemWidth : 10,
						itemHeight : 10,
						data: ['今日', '预算'],
						padding: [30,10,0,0],
						textStyle:{
							color:'#9ba5c7'
						}
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},
					xAxis: {
						type: 'value',
						boundaryGap: [0, 0.01],
						nameTextStyle : {
							color : '#9ba5c7'
						},
						axisLine : {
							lineStyle : {
								color : '#143994'
							}
						},
						axisLabel : {
							color : '#9ba5c7'
						},
						splitLine : {
							show : false,
							lineStyle : {
								color : "#143994",
								type : 'dashed',
							}
						}
					},
					yAxis: {
						type : 'category',
						name : '酒店',
						data : AverageHousePriceCharts_name,
						nameTextStyle : {color : '#9ba5c7'},
						axisLine : {
							lineStyle : {color : '#143994'}
						},
						axisLabel : {color : '#9ba5c7'},
						splitLine : {
							show : true,
							lineStyle : {
								color : "#143994",
								type : 'dashed',
							}
						}
					},
					series: [{
						name: '今日',
						type: 'bar',
						data: AverageHousePriceCharts_num_one,
						color : '#285fec'
					},{
						name: '预算',
						type: 'bar',
						data: AverageHousePriceCharts_num_two,
						color : '#153892'
					}]
				};
				AverageHousePriceCharts.setOption(option);
			}
		},
		error:function(error){
			console.log(error);
		}
   });

	var Pie_one = document.getElementById('Pie_one');
	var Pie_one_url = store_all_url;
	var Pie_one_url_method = "xmsopen.common.xopgethotelinfo";
	var Pie_one_data = {
		"hotelid":"G000001",
		"appkey":"WEB",
		"ver":"1.0.0",
		"secret":"2wN5ip9D65k04svHQH0",
		"method":Pie_one_url_method,
		"params":[{
			"hotelid":"H000018"
		}]
	}
	var PieOneCharts_one = [];
	var PieOneCharts = echarts.init(Pie_one);
	$.ajax({
		type:"post",
		url:Pie_one_url,
		async:true,
		data:JSON.stringify(Pie_one_data),
		dataType:"json",
		success:function(data){
			if(data.success==true){
				for(var i=0;i<data.results.length;i++){
					PieOneCharts_one.push(data.results[i].sign);
				};
				var option = {
					title:{
						show: true,
						text: '出租率',
						x:'center',
						y:'center',
						textStyle : {
							fontSize:12,
							fontWeight:"bold",
							color:"#9ba5c7",
							align:'center',
							verticalAlign:'center'
						}
					},
					series:[{
						type:'pie',
						radius: ['60%', '70%'],
						hoverAnimation: false,
						avoidLabelOverlap: false,
						color: ['#fbd42e','#153892'],
						stillShowZeroSum: false,
						label: {
							normal: {show: true,position: 'center'}
						},
						data:[{value:PieOneCharts_one},{value:10}]
					}]
				}
				PieOneCharts.setOption(option);
			}
		},
		error:function(error){
			console.log(error);
		}
	});
	
	var Pie_two = document.getElementById('Pie_two');
	var Pie_two_url = store_all_url;
	var Pie_two_url_method = "xmsopen.common.xopgethotelinfo";
	var Pie_two_data = {
		"hotelid":"G000001",
		"appkey":"WEB",
		"ver":"1.0.0",
		"secret":"2wN5ip9D65k04svHQH0",
		"method":Pie_two_url_method,
		"params":[{
			"hotelid":"H000018"
		}]
	}
	var PieTwoCharts_one = [];
	var PieTwoCharts = echarts.init(Pie_two);
	$.ajax({
		type:"post",
		url:Pie_two_url,
		async:true,
		data:JSON.stringify(Pie_two_data),
		dataType:"json",
		success:function(data){
			if(data.success==true){
				for(var i=0;i<data.results.length;i++){
					PieTwoCharts_one.push(data.results[i].sign);
				};
				var option = {
					title:{
						show: true,
						text: '出租率',
						x:'center',
						y:'center',
						textStyle : {
							fontSize:12,
							fontWeight:"bold",
							color:"#9ba5c7",
							align:'center',
							verticalAlign:'center'
						}
					},
					series:[{
						type:'pie',
						radius: ['60%', '70%'],
						hoverAnimation: false,
						avoidLabelOverlap: false,
						color: ['#f21e6b','#153892'],
						stillShowZeroSum: false,
						label: {
							normal: {show: true,position: 'center'}
						},
						data:[{value:PieTwoCharts_one},{value:10}]
					}]
				}
				PieTwoCharts.setOption(option);
			}
		},
		error:function(error){
			console.log(error);
		}
	});
	
	var Pie_three = document.getElementById('Pie_three');
	var Pie_three_url = store_all_url;
	var Pie_three_url_method = "xmsopen.common.xopgethotelinfo";
	var Pie_three_data = {
		"hotelid":"G000001",
		"appkey":"WEB",
		"ver":"1.0.0",
		"secret":"2wN5ip9D65k04svHQH0",
		"method":Pie_three_url_method,
		"params":[{
			"hotelid":"H000018"
		}]
	}
	var PieThreeCharts_one = [];
	var PieThreeCharts = echarts.init(Pie_three);
	$.ajax({
		type:"post",
		url:Pie_three_url,
		async:true,
		data:JSON.stringify(Pie_three_data),
		dataType:"json",
		success:function(data){
			if(data.success==true){
				for(var i=0;i<data.results.length;i++){
					PieThreeCharts_one.push(data.results[i].sign);
				};
				var option = {
					title:{
						show: true,
						text: '出租率',
						x:'center',
						y:'center',
						textStyle : {
							fontSize:12,
							fontWeight:"bold",
							color:"#9ba5c7",
							align:'center',
							verticalAlign:'center'
						}
					},
					series:[{
						type:'pie',
						radius: ['60%', '70%'],
						hoverAnimation: false,
						avoidLabelOverlap: false,
						color: ['#2e64ff','#153892'],
						stillShowZeroSum: false,
						label: {
							normal: {show: true,position: 'center'}
						},
						data:[{value:PieThreeCharts_one},{value:10}]
					}]
				}
				PieThreeCharts.setOption(option);
			}
		},
		error:function(error){
			console.log(error);
		}
	});
	
	var Pie_four = document.getElementById('Pie_four');
	var Pie_four_url = store_all_url;
	var Pie_four_url_method = "xmsopen.common.xopgethotelinfo";
	var Pie_four_data = {
		"hotelid":"G000001",
		"appkey":"WEB",
		"ver":"1.0.0",
		"secret":"2wN5ip9D65k04svHQH0",
		"method":Pie_four_url_method,
		"params":[{
			"hotelid":"H000018"
		}]
	}
	var PieFourCharts_one = [];
	var PieFourCharts = echarts.init(Pie_four);
	$.ajax({
		type:"post",
		url:Pie_four_url,
		async:true,
		data:JSON.stringify(Pie_four_data),
		dataType:"json",
		success:function(data){
			if(data.success==true){
				for(var i=0;i<data.results.length;i++){
					PieFourCharts_one.push(data.results[i].sign);
				};
				var option = {
					title:{
						show: true,
						text: '出租率',
						x:'center',
						y:'center',
						textStyle : {
							fontSize:12,
							fontWeight:"bold",
							color:"#9ba5c7",
							align:'center',
							verticalAlign:'center'
						}
					},
					series:[{
						type:'pie',
						radius: ['60%', '70%'],
						hoverAnimation: false,
						avoidLabelOverlap: false,
						color: ['#5adcec','#153892'],
						stillShowZeroSum: false,
						label: {
							normal: {show: true,position: 'center'}
						},
						data:[{value:PieFourCharts_one},{value:10}]
					}]
				}
				PieFourCharts.setOption(option);
			}
		},
		error:function(error){
			console.log(error);
		}
	});

//  var Rentals_four = document.getElementById('Rentals_four');
//  var Rentals_four_url = store_all_url;
//  var Rentals_four_url_method = "xmsopen.report.xopgetcurrentdatehoursofincome";
//  var Rentals_four_data = {
//		"hotelid":"G000001",
//		"appkey":"WEB",
//		"ver":"1.0.0",
//		"secret":"2wN5ip9D65k04svHQH0",
//		"method":Rentals_four_url_method,
//		"params":[{
//			"hotelid":store_all_name[1]
//		}]
//	};
//	var RentalsCharts_four_name = [];
//	var RentalsCharts_four_time = [];
//	var RentalsCharts_four_num = [];
//	var RentalsCharts_four = echarts.init(Rentals_four);
//	$.ajax({
//		type:"post",
//		url:Rentals_four_url,
//		async:true,
//		data:JSON.stringify(Rentals_four_data),
//		dataType:"json",
//		success:function(data){
//			if(data.success==true){
//				for(var i=0;i<data.results.length;i++){
//					RentalsCharts_four_name.push(data.results[i].descript);
//				};
//				if(data.results[0].datalist!=undefined && data.results[0].datalist!=""){
//					for(var i=0;i<data.results[0].datalist.length;i++){
//						RentalsCharts_four_time.push(data.results[0].datalist[i].time);
//						RentalsCharts_four_num.push(data.results[0].datalist[i].income);
//					};
//				};
//				var option = {
//					title: {
//						text: RentalsCharts_four_name + '24小时收入变化趋势',
//						padding: [10,0,0,0],
//						x:'center',
//						textStyle:{
//							fontSize:12,
//							fontWeight:"bold",
//							color:"#9ba5c7",
//							top:'middle'
//						}
//					},
//					grid: {left: '3%',right: '3%',bottom: '1%',containLabel: true},
//					xAxis: {
//						type: 'category',
//						boundaryGap: false,
//						data: RentalsCharts_four_time,
//						nameTextStyle : {color : '#9ba5c7'},
//						axisLine : {
//							lineStyle : {color : '#143994'}
//						},
//						axisLabel : {color : '#9ba5c7'},
//						splitLine : {
//							show : true,
//							lineStyle : {color : "#143994",type : 'dashed'}
//						}
//					},
//					yAxis: {
//						type: 'value',
//						name : '出租率/%',
//						nameTextStyle : {color : '#9ba5c7'},
//						axisLine : {
//							lineStyle : {color : '#143994'}
//						},
//						axisLabel : {color : '#9ba5c7'},
//						splitLine : {
//							lineStyle : {color : "#143994",type : 'dashed'}
//						}
//					},
//					series: [{
//						data: RentalsCharts_four_num,
//						type: 'line',
//						itemStyle : {
//							normal : {
//								color : '#143994',
//								borderColor : '#143994',
//								borderWidth : 10,
//								lineStyle:{width : 2,color : '#143994'}
//							}
//						}
//					}]
//				};
//				RentalsCharts_four.setOption(option);
//			}
//		},
//		error:function(error){
//			console.log(error);
//		}
//	});

//	var Rentals_five = document.getElementById('Rentals_five');
//	var Rentals_five_url = store_all_url;
//  var Rentals_five_url_method = "xmsopen.report.xopgetcurrentdatehoursofincome";
//  var Rentals_five_data = {
//		"hotelid":"G000001",
//		"appkey":"WEB",
//		"ver":"1.0.0",
//		"secret":"2wN5ip9D65k04svHQH0",
//		"method":Rentals_five_url_method,
//		"params":[{
//			"hotelid":store_all_name[1]
//		}]
//	};
//	var RentalsCharts_five_name = [];
//	var RentalsCharts_five_time = [];
//	var RentalsCharts_five_num = [];
//	var RentalsCharts_five = echarts.init(Rentals_five);
//	$.ajax({
//		type:"post",
//		url:Rentals_five_url,
//		async:true,
//		data:JSON.stringify(Rentals_five_data),
//		dataType:"json",
//		success:function(data){
//			if(data.success==true){
//				for(var i=0;i<data.results.length;i++){
//					RentalsCharts_five_name.push(data.results[i].descript);
//				};
//				if(data.results[0].datalist!=undefined && data.results[0].datalist!=""){
//					for(var i=0;i<data.results[0].datalist.length;i++){
//						RentalsCharts_five_time.push(data.results[0].datalist[i].time);
//						RentalsCharts_five_num.push(data.results[0].datalist[i].occ);
//					};
//				};
//				var option = {
//					title: {
//						text: RentalsCharts_five_name + '24小时出租率变化趋势',
//						padding: [10,0,0,0],
//						x:'center',
//						textStyle:{
//							fontSize:12,
//							fontWeight:"bold",
//							color:"#9ba5c7",
//							top:'middle'
//						}
//					},
//					grid: {left: '3%',right: '3%',bottom: '1%',containLabel: true},
//					xAxis: {
//						type: 'category',
//						boundaryGap: false,
//						data: RentalsCharts_five_time,
//						nameTextStyle : {color : '#9ba5c7'},
//						axisLine : {
//							lineStyle : {color : '#143994'}
//						},
//						axisLabel : {color : '#9ba5c7'},
//						splitLine : {
//							show : true,
//							lineStyle : {color : "#143994",type : 'dashed'}
//						}
//					},
//					yAxis: {
//						type: 'value',
//						name : '出租率/%',
//						nameTextStyle : {color : '#9ba5c7'},
//						axisLine : {
//							lineStyle : {color : '#143994'}
//						},
//						axisLabel : {color : '#9ba5c7'},
//						splitLine : {
//							lineStyle : {color : "#143994",type : 'dashed'}
//						}
//					},
//					series: [{
//						data: RentalsCharts_five_num,
//						type: 'line',
//						itemStyle : {
//							normal : {
//								color : '#143994',
//								borderColor : '#143994',
//								borderWidth : 10,
//								lineStyle:{width : 2,color : '#143994'}
//							}
//						}
//					}]
//				};
//				RentalsCharts_five.setOption(option);
//			}
//		},
//		error:function(error){
//			console.log(error);
//		}
//	});
	
//	var Rentals_six = document.getElementById('Rentals_six');
//	var Rentals_six_url = store_all_url;
//	var Rentals_six_url_method = "xmsopen.report.xopgetcurrentdateadrandrevpar";
//	var Rentals_six_data = {
//		"hotelid":"G000001",
//		"appkey":"WEB",
//		"ver":"1.0.0",
//		"secret":"2wN5ip9D65k04svHQH0",
//		"method":Rentals_six_url_method,
//		"params":[{
//			"hotelid":store_all_name[1]
//		}]
//	};
//	var RentalsCharts_six_name = [];
//	var RentalsCharts_six_time_one = [];
//	var RentalsCharts_six_num_one = [];
//	var RentalsCharts_six_time_two = [];
//	var RentalsCharts_six_num_two = [];
//	var RentalsCharts_six = echarts.init(Rentals_six);
//	$.ajax({
//		type:"post",
//		url:Rentals_six_url,
//		async:true,
//		data:JSON.stringify(Rentals_six_data),
//		dataType:"json",
//		success:function(data){
//			if(data.success==true){
//				for(var i=0;i<data.results.length;i++){
//					RentalsCharts_six_name.push(data.results[i].descript);
//				};
//				if(data.results[0].datalist_adr!=undefined && data.results[0].datalist_adr!=""){
//					for(var i=0;i<data.results[0].datalist_adr.length;i++){
//						RentalsCharts_six_time_one.push(data.results[0].datalist_adr[i].time);
//						RentalsCharts_six_num_one.push(data.results[0].datalist_adr[i].adr);
//					};
//				};
//				if(data.results[0].datalist_revpar!=undefined && data.results[0].datalist_revpar!=""){
//					for(var i=0;i<data.results[0].datalist_revpar.length;i++){
//						RentalsCharts_six_time_two.push(data.results[0].datalist_revpar[i].time);
//						RentalsCharts_six_num_two.push(data.results[0].datalist_revpar[i].revpar);
//					};
//				};
//				var option = {
//					title: {
//						text: RentalsCharts_six_name + '24小时变化趋势',
//						padding: [10,0,0,0],
//						x:'center',
//						textStyle:{
//							fontSize:12,
//							fontWeight:"bold",
//							color:"#9ba5c7",
//							top:'middle'
//						}
//					},
//					grid: {left: '3%',right: '3%',bottom: '1%',containLabel: true},
//					xAxis: {
//						type: 'category',
//						boundaryGap: false,
//						data: RentalsCharts_six_time_two,
//						nameTextStyle : {color : '#9ba5c7'},
//						axisLine : {
//							lineStyle : {color : '#143994'}
//						},
//						axisLabel : {
//							color : '#9ba5c7'
//						},
//						splitLine : {
//							show : true,
//							lineStyle : {color : "#143994",type : 'dashed'}
//						}
//					},
//					yAxis: {
//						type: 'value',
//						name :'出租率/%',
//						nameTextStyle : {color : '#9ba5c7'},
//						axisLine : {
//							lineStyle : {color : '#143994'}
//						},
//						axisLabel : {color : '#9ba5c7'},
//						splitLine : {
//							lineStyle : {color : "#143994",type : 'dashed'}
//						}
//					},
//					series: [{
//						data: RentalsCharts_six_num_one,
//						type: 'line',
//						itemStyle : {
//							normal : {
//								color : '#143994',
//								borderColor : '#143994',
//								borderWidth : 10,
//								lineStyle:{width : 2,color : '#143994'}
//							}
//						}
//					},{
//						data: RentalsCharts_six_num_two,
//						type: 'line',
//						itemStyle : {
//							normal : {
//								color : '#73e5f3',
//								borderColor : '#73e5f3',
//								borderWidth : 10,
//								lineStyle:{width : 2,color : '#73e5f3'}
//							}
//						}
//					}]
//				};
//				RentalsCharts_six.setOption(option);
//			}
//	    },
//		error:function(error){
//			console.log(error);
//		}
//	});
	
//	var Rentals_seven = document.getElementById('Rentals_seven');
//  var Rentals_seven_url = store_all_url;
//  var Rentals_seven_url_method = "xmsopen.report.xopgetcurrentdatehoursofincome";
//  var Rentals_seven_data = {
//		"hotelid":"G000001",
//		"appkey":"WEB",
//		"ver":"1.0.0",
//		"secret":"2wN5ip9D65k04svHQH0",
//		"method":Rentals_seven_url_method,
//		"params":[{
//			"hotelid":store_all_name[2]
//		}]
//	};
//	var RentalsCharts_seven_name = [];
//	var RentalsCharts_seven_time = [];
//	var RentalsCharts_seven_num = [];
//	var RentalsCharts_seven = echarts.init(Rentals_seven);
//	$.ajax({
//		type:"post",
//		url:Rentals_seven_url,
//		async:true,
//		data:JSON.stringify(Rentals_seven_data),
//		dataType:"json",
//		success:function(data){
//			if(data.success==true){
//				for(var i=0;i<data.results.length;i++){
//					RentalsCharts_seven_name.push(data.results[i].descript);
//				};
//				if(data.results[0].datalist!=undefined && data.results[0].datalist!=""){
//					for(var i=0;i<data.results[0].datalist.length;i++){
//						RentalsCharts_seven_time.push(data.results[0].datalist[i].time);
//						RentalsCharts_seven_num.push(data.results[0].datalist[i].income);
//					};
//				};
//				var option = {
//					title: {
//						text: RentalsCharts_seven_name + '24小时收入变化趋势',
//						padding: [10,0,0,0],
//						x:'center',
//						textStyle:{
//							fontSize:12,
//							fontWeight:"bold",
//							color:"#9ba5c7",
//							top:'middle'
//						}
//					},
//					grid: {left: '3%',right: '3%',bottom: '1%',containLabel: true},
//					xAxis: {
//						type: 'category',
//						boundaryGap: false,
//						data: RentalsCharts_seven_time,
//						nameTextStyle : {color : '#9ba5c7'},
//						axisLine : {
//							lineStyle : {color : '#143994'}
//						},
//						axisLabel : {color : '#9ba5c7'},
//						splitLine : {
//							show : true,
//							lineStyle : {color : "#143994",type : 'dashed'}
//						}
//					},
//					yAxis: {
//						type: 'value',
//						name : '出租率/%',
//						nameTextStyle : {color : '#9ba5c7'},
//						axisLine : {
//							lineStyle : {color : '#143994'}
//						},
//						axisLabel : {color : '#9ba5c7'},
//						splitLine : {
//							lineStyle : {color : "#143994",type : 'dashed'}
//						}
//					},
//					series: [{
//						data: RentalsCharts_seven_num,
//						type: 'line',
//						itemStyle : {
//							normal : {
//								color : '#143994',
//								borderColor : '#143994',
//								borderWidth : 10,
//								lineStyle:{width : 2,color : '#143994'}
//							}
//						}
//					}]
//				};
//				RentalsCharts_seven.setOption(option);
//			}
//		},
//		error:function(error){
//			console.log(error);
//		}
//	});
	
//	var Rentals_eight = document.getElementById('Rentals_eight');
//	var Rentals_eight_url = store_all_url;
//  var Rentals_eight_url_method = "xmsopen.report.xopgetcurrentdatehoursofincome";
//  var Rentals_eight_data = {
//		"hotelid":"G000001",
//		"appkey":"WEB",
//		"ver":"1.0.0",
//		"secret":"2wN5ip9D65k04svHQH0",
//		"method":Rentals_eight_url_method,
//		"params":[{
//			"hotelid":store_all_name[2]
//		}]
//	};
//	var RentalsCharts_eight_name = [];
//	var RentalsCharts_eight_time = [];
//	var RentalsCharts_eight_num = [];
//	var RentalsCharts_eight = echarts.init(Rentals_eight);
//	$.ajax({
//		type:"post",
//		url:Rentals_eight_url,
//		async:true,
//		data:JSON.stringify(Rentals_eight_data),
//		dataType:"json",
//		success:function(data){
//			if(data.success==true){
//				for(var i=0;i<data.results.length;i++){
//					RentalsCharts_eight_name.push(data.results[i].descript);
//				};
//				if(data.results[0].datalist!=undefined && data.results[0].datalist!=""){
//					for(var i=0;i<data.results[0].datalist.length;i++){
//						RentalsCharts_eight_time.push(data.results[0].datalist[i].time);
//						RentalsCharts_eight_num.push(data.results[0].datalist[i].occ);
//					};
//				};
//				var option = {
//					title: {
//						text: RentalsCharts_eight_name + '24小时出租率变化趋势',
//						padding: [10,0,0,0],
//						x:'center',
//						textStyle:{
//							fontSize:12,
//							fontWeight:"bold",
//							color:"#9ba5c7",
//							top:'middle'
//						}
//					},
//					grid: {left: '3%',right: '3%',bottom: '1%',containLabel: true},
//					xAxis: {
//						type: 'category',
//						boundaryGap: false,
//						data: RentalsCharts_eight_time,
//						nameTextStyle : {color : '#9ba5c7'},
//						axisLine : {
//							lineStyle : {color : '#143994'}
//						},
//						axisLabel : {color : '#9ba5c7'},
//						splitLine : {
//							show : true,
//							lineStyle : {color : "#143994",type : 'dashed'}
//						}
//					},
//					yAxis: {
//						type: 'value',
//						name : '出租率/%',
//						nameTextStyle : {color : '#9ba5c7'},
//						axisLine : {
//							lineStyle : {color : '#143994'}
//						},
//						axisLabel : {color : '#9ba5c7'},
//						splitLine : {
//							lineStyle : {color : "#143994",type : 'dashed'}
//						}
//					},
//					series: [{
//						data: RentalsCharts_eight_num,
//						type: 'line',
//						itemStyle : {
//							normal : {
//								color : '#143994',
//								borderColor : '#143994',
//								borderWidth : 10,
//								lineStyle:{width : 2,color : '#143994'}
//							}
//						}
//					}]
//				};
//				RentalsCharts_eight.setOption(option);
//			}
//		},
//		error:function(error){
//			console.log(error);
//		}
//	});
	
//	var Rentals_nine = document.getElementById('Rentals_nine');
//	var Rentals_nine_url = store_all_url;
//	var Rentals_nine_url_method = "xmsopen.report.xopgetcurrentdateadrandrevpar";
//	var Rentals_nine_data = {
//		"hotelid":"G000001",
//		"appkey":"WEB",
//		"ver":"1.0.0",
//		"secret":"2wN5ip9D65k04svHQH0",
//		"method":Rentals_nine_url_method,
//		"params":[{
//			"hotelid":store_all_name[2]
//		}]
//	};
//	var RentalsCharts_nine_name = [];
//	var RentalsCharts_nine_time_one = [];
//	var RentalsCharts_nine_num_one = [];
//	var RentalsCharts_nine_time_two = [];
//	var RentalsCharts_nine_num_two = [];
//	var RentalsCharts_nine = echarts.init(Rentals_nine);
//	$.ajax({
//		type:"post",
//		url:Rentals_nine_url,
//		async:true,
//		data:JSON.stringify(Rentals_nine_data),
//		dataType:"json",
//		success:function(data){
//			if(data.success==true){
//				for(var i=0;i<data.results.length;i++){
//					RentalsCharts_nine_name.push(data.results[i].descript);
//				};
//				if(data.results[0].datalist_adr!=undefined && data.results[0].datalist_adr!=""){
//					for(var i=0;i<data.results[0].datalist_adr.length;i++){
//						RentalsCharts_nine_time_one.push(data.results[0].datalist_adr[i].time);
//						RentalsCharts_nine_num_one.push(data.results[0].datalist_adr[i].adr);
//					};
//				};
//				if(data.results[0].datalist_revpar!=undefined && data.results[0].datalist_revpar!=""){
//					for(var i=0;i<data.results[0].datalist_revpar.length;i++){
//						RentalsCharts_nine_time_two.push(data.results[0].datalist_revpar[i].time);
//						RentalsCharts_nine_num_two.push(data.results[0].datalist_revpar[i].revpar);
//					};
//				};
//				var option = {
//					title: {
//						text: RentalsCharts_nine_name + '24小时变化趋势',
//						padding: [10,0,0,0],
//						x:'center',
//						textStyle:{
//							fontSize:12,
//							fontWeight:"bold",
//							color:"#9ba5c7",
//							top:'middle'
//						}
//					},
//					grid: {left: '3%',right: '3%',bottom: '1%',containLabel: true},
//					xAxis: {
//						type: 'category',
//						boundaryGap: false,
//						data: RentalsCharts_nine_time_two,
//						nameTextStyle : {color : '#9ba5c7'},
//						axisLine : {
//							lineStyle : {color : '#143994'}
//						},
//						axisLabel : {
//							color : '#9ba5c7'
//						},
//						splitLine : {
//							show : true,
//							lineStyle : {color : "#143994",type : 'dashed'}
//						}
//					},
//					yAxis: {
//						type: 'value',
//						name :'出租率/%',
//						nameTextStyle : {color : '#9ba5c7'},
//						axisLine : {
//							lineStyle : {color : '#143994'}
//						},
//						axisLabel : {color : '#9ba5c7'},
//						splitLine : {
//							lineStyle : {color : "#143994",type : 'dashed'}
//						}
//					},
//					series: [{
//						data: RentalsCharts_nine_num_one,
//						type: 'line',
//						itemStyle : {
//							normal : {
//								color : '#143994',
//								borderColor : '#143994',
//								borderWidth : 10,
//								lineStyle:{width : 2,color : '#143994'}
//							}
//						}
//					},{
//						data: RentalsCharts_nine_num_two,
//						type: 'line',
//						itemStyle : {
//							normal : {
//								color : '#73e5f3',
//								borderColor : '#73e5f3',
//								borderWidth : 10,
//								lineStyle:{width : 2,color : '#73e5f3'}
//							}
//						}
//					}]
//				};
//				RentalsCharts_nine.setOption(option);
//			}
//	    },
//		error:function(error){
//			console.log(error);
//		}
//	});
	
	var PieCharts_five = document.getElementById('PieCharts_five');
	var PieCharts_five_url = store_all_url;
	var PieCharts_five_url_method = "xmsopen.report.xopchanmarkstatistics";
	var PieCharts_five_data = {
		"hotelid":"G000001",
		"appkey":"WEB",
		"ver":"1.0.0",
		"secret":"2wN5ip9D65k04svHQH0",
		"method":PieCharts_five_url_method,
		"params":[{
			"hotelid":store_all_name[2]
		}]
	};
	var PieCharts_five_Charts_one_name = [];
	var PieCharts_five_Charts_one_num = [];
	var PieCharts_five_Charts = echarts.init(PieCharts_five);
	$.ajax({
		type:"post",
		url:PieCharts_five_url,
		async:true,
		data:JSON.stringify(PieCharts_five_data),
		dataType:"json",
		success:function(data){
			if(data.success==true){
//				console.log(data);
				for(var i=0;i<data.results[0].cmlist.length;i++){
					PieCharts_five_Charts_one_name.push(data.results[0].cmlist[i].channel_des);
					PieCharts_five_Charts_one_num.push(data.results[0].cmlist[i].rmnum);
				};
				var option = {
					title: {
						text: '渠道房数占比',
						padding: [5,0],
						x:'center',
						textStyle:{
							fontSize:12,
							fontWeight:"bold",
							color:"#9ba5c7",
							top:'middle'
						}
					},
					legend:{
						orient:'vertical',
						x: 'left',
						y: 'center',
						itemWidth : 10,
						itemHeight : 10,
						textStyle:{color:'#9ba5c7'}
					},
					series: [{
						type:'pie',
						selectedMode: 'single',
						hoverAnimation: false,
						avoidLabelOverlap: false,
						color: ['#ff8f47'],
						radius: ['40%', '45%'],
						center: ['70%', '55%'],
						label: {
							normal: {position: 'inner'}
						},
						labelLine: {
							normal: {show: false}
						},
						itemStyle : {
							normal : {
								label : {show : false},   //隐藏标示文字
								labelLine : {show : false}   //隐藏标示线
							}
						},
						data:[{value:3, name:'其他'}]
					},{
						type:'pie',
						selectedMode: 'single',
						hoverAnimation: false,
						avoidLabelOverlap: false,
						color: ['#4acad5'],
						radius: ['55%', '60%'],
						center: ['70%', '55%'],
						label: {
							normal: {position: 'inner'}
						},
						labelLine: {
							normal: {show: false}
						},
						itemStyle : {
							normal : {
								label : {show : false},   //隐藏标示文字
								labelLine : {show : false}   //隐藏标示线
							}
						},
						data:[{value:PieCharts_five_Charts_one_num[1], name:PieCharts_five_Charts_one_name[1]}]
					},{
						type:'pie',
						selectedMode: 'single',
						hoverAnimation: false,
						avoidLabelOverlap: false,
						color: ['#2a61f7'],
						radius: ['70%', '75%'],
						center: ['70%', '55%'],
						label: {
							normal: {position: 'inner'}
						},
						labelLine: {
							normal: {show: false}
						},
						itemStyle : {
							normal : {
								label : {show : false},   //隐藏标示文字
								labelLine : {show : false}   //隐藏标示线
							}
						},
						data:[{value:PieCharts_five_Charts_one_num[0], name:PieCharts_five_Charts_one_name[0]}]
					}]
				};
				PieCharts_five_Charts.setOption(option);
			}
		},
		error:function(error){
			console.log(error);
		}
	});
	
	var PieCharts_six = document.getElementById('PieCharts_six');
	var PieCharts_six_url = store_all_url;
	var PieCharts_six_url_method = "xmsopen.report.xopchanmarkstatistics";
	var PieCharts_six_data = {
		"hotelid":"G000001",
		"appkey":"WEB",
		"ver":"1.0.0",
		"secret":"2wN5ip9D65k04svHQH0",
		"method":PieCharts_six_url_method,
		"params":[{
			"hotelid":store_all_name[2]
		}]
	};
	var PieCharts_six_Charts_one_name = [];
	var PieCharts_six_Charts_one_num = [];
	var PieCharts_six_Charts = echarts.init(PieCharts_six);
	$.ajax({
		type:"post",
		url:PieCharts_six_url,
		async:true,
		data:JSON.stringify(PieCharts_six_data),
		dataType:"json",
		success:function(data){
			if(data.success==true){
				for(var i=0;i<data.results[0].mmlist.length;i++){
					PieCharts_six_Charts_one_name.push(data.results[0].mmlist[i].market_des);
					PieCharts_six_Charts_one_num.push(data.results[0].mmlist[i].rmnum);
				};
				var option = {
					title: {
						text: '市场房数占比',
						padding: [5,0],
						x:'center',
						textStyle:{
							fontSize:12,
							fontWeight:"bold",
							color:"#9ba5c7",
							top:'middle'
						}
					},
					legend:{
						orient:'vertical',
						x: 'left',
						y: 'center',
						itemWidth : 10,
						itemHeight : 10,
//						data:['上门散客','其他','美图'],
						textStyle:{color:'#9ba5c7'}
					},
					series: [{
						type:'pie',
						selectedMode: 'single',
						hoverAnimation: false,
						avoidLabelOverlap: false,
						color: ['#ff8f47'],
						radius: ['40%', '45%'],
						center: ['70%', '55%'],
						label: {
							normal: {position: 'inner'}
						},
						labelLine: {
							normal: {show: false}
						},
						itemStyle : {
							normal : {
								label : {show : false},   //隐藏标示文字
								labelLine : {show : false}   //隐藏标示线
							}
						},
						data:[{value:PieCharts_six_Charts_one_num[0], name:PieCharts_six_Charts_one_name[0]}]
					},{
						type:'pie',
						selectedMode: 'single',
						hoverAnimation: false,
						avoidLabelOverlap: false,
						color: ['#4acad5'],
						radius: ['55%', '60%'],
						center: ['70%', '55%'],
						label: {
							normal: {position: 'inner'}
						},
						labelLine: {
							normal: {show: false}
						},
						itemStyle : {
							normal : {
								label : {show : false},   //隐藏标示文字
								labelLine : {show : false}   //隐藏标示线
							}
						},
						data:[{value:PieCharts_six_Charts_one_num[1], name:PieCharts_six_Charts_one_name[1]}]
					},{
						type:'pie',
						selectedMode: 'single',
						hoverAnimation: false,
						avoidLabelOverlap: false,
						color: ['#2a61f7'],
						radius: ['70%', '75%'],
						center: ['70%', '55%'],
						label: {
							normal: {position: 'inner'}
						},
						labelLine: {
							normal: {show: false}
						},
						itemStyle : {
							normal : {
								label : {show : false},   //隐藏标示文字
								labelLine : {show : false}   //隐藏标示线
							}
						},
						data:[{value:PieCharts_six_Charts_one_num[2], name:PieCharts_six_Charts_one_name[2]}]
					}]
				};
				PieCharts_six_Charts.setOption(option);
			}
		},
		error:function(error){
			console.log(error);
		}
	});
	
	var PieCharts_seven = document.getElementById('PieCharts_seven');
	var PieCharts_seven_url = store_all_url;
	var PieCharts_seven_url_method = "xmsopen.report.xopchanmarkstatistics";
	var PieCharts_seven_data = {
		"hotelid":"G000001",
		"appkey":"WEB",
		"ver":"1.0.0",
		"secret":"2wN5ip9D65k04svHQH0",
		"method":PieCharts_seven_url_method,
		"params":[{
			"hotelid":store_all_name[2]
		}]
	};
	var PieCharts_seven_Charts_one_name = [];
	var PieCharts_seven_Charts_one_num = [];
	var PieCharts_seven_Charts = echarts.init(PieCharts_seven);
	$.ajax({
		type:"post",
		url:PieCharts_seven_url,
		async:true,
		data:JSON.stringify(PieCharts_seven_data),
		dataType:"json",
		success:function(data){
			if(data.success==true){
				for(var i=0;i<data.results[0].cplist.length;i++){
					PieCharts_seven_Charts_one_name.push(data.results[0].cplist[i].channel_des);
					PieCharts_seven_Charts_one_num.push(data.results[0].cplist[i].price);
				};
				var option = {
					title: {
						text: '渠道价格占比',
						padding: [5,0],
						x:'center',
						textStyle:{
							fontSize:12,
							fontWeight:"bold",
							color:"#9ba5c7",
							top:'middle'
						}
					},
					legend:{
						orient:'vertical',
						x: 'left',
						y: 'center',
						itemWidth : 10,
						itemHeight : 10,
						textStyle:{color:'#9ba5c7'}
					},
					series: [{
						type:'pie',
						selectedMode: 'single',
						hoverAnimation: false,
						avoidLabelOverlap: false,
						color: ['#ff8f47'],
						radius: ['40%', '45%'],
						center: ['70%', '55%'],
						label: {
							normal: {position: 'inner'}
						},
						labelLine: {
							normal: {show: false}
						},
						itemStyle : {
							normal : {
								label : {show : false},   //隐藏标示文字
								labelLine : {show : false}   //隐藏标示线
							}
						},
						data:[{value:3, name:'其他'}]
					},{
						type:'pie',
						selectedMode: 'single',
						hoverAnimation: false,
						avoidLabelOverlap: false,
						color: ['#4acad5'],
						radius: ['55%', '60%'],
						center: ['70%', '55%'],
						label: {
							normal: {position: 'inner'}
						},
						labelLine: {
							normal: {show: false}
						},
						itemStyle : {
							normal : {
								label : {show : false},   //隐藏标示文字
								labelLine : {show : false}   //隐藏标示线
							}
						},
						data:[{value:PieCharts_seven_Charts_one_num[1], name:PieCharts_seven_Charts_one_name[1]}]
					},{
						type:'pie',
						selectedMode: 'single',
						hoverAnimation: false,
						avoidLabelOverlap: false,
						color: ['#2a61f7'],
						radius: ['70%', '75%'],
						center: ['70%', '55%'],
						label: {
							normal: {position: 'inner'}
						},
						labelLine: {
							normal: {show: false}
						},
						itemStyle : {
							normal : {
								label : {show : false},   //隐藏标示文字
								labelLine : {show : false}   //隐藏标示线
							}
						},
						data:[{value:PieCharts_seven_Charts_one_num[0], name:PieCharts_seven_Charts_one_name[0]}]
					}]
				};
				PieCharts_seven_Charts.setOption(option);
			}
		},
		error:function(error){
			console.log(error);
		}
	});
	
	var PieCharts_eight = document.getElementById('PieCharts_eight');
	var PieCharts_eight_url = store_all_url;
	var PieCharts_eight_url_method = "xmsopen.report.xopchanmarkstatistics";
	var PieCharts_eight_data = {
		"hotelid":"G000001",
		"appkey":"WEB",
		"ver":"1.0.0",
		"secret":"2wN5ip9D65k04svHQH0",
		"method":PieCharts_eight_url_method,
		"params":[{
			"hotelid":store_all_name[2]
		}]
	};
	var PieCharts_eight_Charts_one_name = [];
	var PieCharts_eight_Charts_one_num = [];
	var PieCharts_eight_Charts = echarts.init(PieCharts_eight);
	$.ajax({
		type:"post",
		url:PieCharts_eight_url,
		async:true,
		data:JSON.stringify(PieCharts_eight_data),
		dataType:"json",
		success:function(data){
			if(data.success==true){
				for(var i=0;i<data.results[0].mplist.length;i++){
					PieCharts_eight_Charts_one_name.push(data.results[0].mplist[i].market_des);
					PieCharts_eight_Charts_one_num.push(data.results[0].mplist[i].price);
				};
				var option = {
					title: {
						text: '市场价格占比',
						padding: [5,0],
						x:'center',
						textStyle:{
							fontSize:12,
							fontWeight:"bold",
							color:"#9ba5c7",
							top:'middle'
						}
					},
					legend:{
						orient:'vertical',
						x: 'left',
						y: 'center',
						itemWidth : 10,
						itemHeight : 10,
//						data:['上门散客','其他','美图'],
						textStyle:{color:'#9ba5c7'}
					},
					series: [{
						type:'pie',
						selectedMode: 'single',
						hoverAnimation: false,
						avoidLabelOverlap: false,
						color: ['#ff8f47'],
						radius: ['40%', '45%'],
						center: ['70%', '55%'],
						label: {
							normal: {position: 'inner'}
						},
						labelLine: {
							normal: {show: false}
						},
						itemStyle : {
							normal : {
								label : {show : false},   //隐藏标示文字
								labelLine : {show : false}   //隐藏标示线
							}
						},
						data:[{value:PieCharts_eight_Charts_one_num[0], name:PieCharts_eight_Charts_one_name[0]}]
					},{
						type:'pie',
						selectedMode: 'single',
						hoverAnimation: false,
						avoidLabelOverlap: false,
						color: ['#4acad5'],
						radius: ['55%', '60%'],
						center: ['70%', '55%'],
						label: {
							normal: {position: 'inner'}
						},
						labelLine: {
							normal: {show: false}
						},
						itemStyle : {
							normal : {
								label : {show : false},   //隐藏标示文字
								labelLine : {show : false}   //隐藏标示线
							}
						},
						data:[{value:PieCharts_eight_Charts_one_num[1], name:PieCharts_eight_Charts_one_name[1]}]
					},{
						type:'pie',
						selectedMode: 'single',
						hoverAnimation: false,
						avoidLabelOverlap: false,
						color: ['#2a61f7'],
						radius: ['70%', '75%'],
						center: ['70%', '55%'],
						label: {
							normal: {position: 'inner'}
						},
						labelLine: {
							normal: {show: false}
						},
						itemStyle : {
							normal : {
								label : {show : false},   //隐藏标示文字
								labelLine : {show : false}   //隐藏标示线
							}
						},
						data:[{value:PieCharts_eight_Charts_one_num[2], name:PieCharts_eight_Charts_one_name[2]}]
					}]
				};
				PieCharts_eight_Charts.setOption(option);
			}
		},
		error:function(error){
			console.log(error);
		}
	});
	
	var PieCharts_nine = document.getElementById('PieCharts_nine');
	var PieCharts_nine_url = store_all_url;
	var PieCharts_nine_url_method = "xmsopen.report.xopchanmarkstatistics";
	var PieCharts_nine_data = {
		"hotelid":"G000001",
		"appkey":"WEB",
		"ver":"1.0.0",
		"secret":"2wN5ip9D65k04svHQH0",
		"method":PieCharts_nine_url_method,
		"params":[{
			"hotelid":store_all_name[3]
		}]
	};
	var PieCharts_nine_Charts_one_name = [];
	var PieCharts_nine_Charts_one_num = [];
	var PieCharts_nine_Charts = echarts.init(PieCharts_nine);
	$.ajax({
		type:"post",
		url:PieCharts_nine_url,
		async:true,
		data:JSON.stringify(PieCharts_nine_data),
		dataType:"json",
		success:function(data){
			if(data.success==true){
				for(var i=0;i<data.results[0].cmlist.length;i++){
					PieCharts_nine_Charts_one_name.push(data.results[0].cmlist[i].channel_des);
					PieCharts_nine_Charts_one_num.push(data.results[0].cmlist[i].rmnum);
				};
				var option = {
					title: {
						text: '渠道房数占比',
						padding: [5,0],
						x:'center',
						textStyle:{
							fontSize:12,
							fontWeight:"bold",
							color:"#9ba5c7",
							top:'middle'
						}
					},
					legend:{
						orient:'vertical',
						x: 'left',
						y: 'center',
						itemWidth : 10,
						itemHeight : 10,
						textStyle:{color:'#9ba5c7'}
					},
					series: [{
						type:'pie',
						selectedMode: 'single',
						hoverAnimation: false,
						avoidLabelOverlap: false,
						color: ['#ff8f47'],
						radius: ['40%', '45%'],
						center: ['70%', '55%'],
						label: {
							normal: {position: 'inner'}
						},
						labelLine: {
							normal: {show: false}
						},
						itemStyle : {
							normal : {
								label : {show : false},   //隐藏标示文字
								labelLine : {show : false}   //隐藏标示线
							}
						},
						data:[{value:3, name:'其他'}]
					},{
						type:'pie',
						selectedMode: 'single',
						hoverAnimation: false,
						avoidLabelOverlap: false,
						color: ['#4acad5'],
						radius: ['55%', '60%'],
						center: ['70%', '55%'],
						label: {
							normal: {position: 'inner'}
						},
						labelLine: {
							normal: {show: false}
						},
						itemStyle : {
							normal : {
								label : {show : false},   //隐藏标示文字
								labelLine : {show : false}   //隐藏标示线
							}
						},
						data:[{value:PieCharts_nine_Charts_one_num[1], name:PieCharts_nine_Charts_one_name[1]}]
					},{
						type:'pie',
						selectedMode: 'single',
						hoverAnimation: false,
						avoidLabelOverlap: false,
						color: ['#2a61f7'],
						radius: ['70%', '75%'],
						center: ['70%', '55%'],
						label: {
							normal: {position: 'inner'}
						},
						labelLine: {
							normal: {show: false}
						},
						itemStyle : {
							normal : {
								label : {show : false},   //隐藏标示文字
								labelLine : {show : false}   //隐藏标示线
							}
						},
						data:[{value:PieCharts_nine_Charts_one_num[0], name:PieCharts_nine_Charts_one_name[0]}]
					}]
				};
				PieCharts_nine_Charts.setOption(option);
			}
		},
		error:function(error){
			console.log(error);
		}
	});
	
	var PieCharts_ten = document.getElementById('PieCharts_ten');
	var PieCharts_ten_url = store_all_url;
	var PieCharts_ten_url_method = "xmsopen.report.xopchanmarkstatistics";
	var PieCharts_ten_data = {
		"hotelid":"G000001",
		"appkey":"WEB",
		"ver":"1.0.0",
		"secret":"2wN5ip9D65k04svHQH0",
		"method":PieCharts_ten_url_method,
		"params":[{
			"hotelid":store_all_name[3]
		}]
	};
	var PieCharts_ten_Charts_one_name = [];
	var PieCharts_ten_Charts_one_num = [];
	var PieCharts_ten_Charts = echarts.init(PieCharts_ten);
	$.ajax({
		type:"post",
		url:PieCharts_ten_url,
		async:true,
		data:JSON.stringify(PieCharts_ten_data),
		dataType:"json",
		success:function(data){
			if(data.success==true){
				for(var i=0;i<data.results[0].mmlist.length;i++){
					PieCharts_ten_Charts_one_name.push(data.results[0].mmlist[i].market_des);
					PieCharts_ten_Charts_one_num.push(data.results[0].mmlist[i].rmnum);
				};
				var option = {
					title: {
						text: '市场房数占比',
						padding: [5,0],
						x:'center',
						textStyle:{
							fontSize:12,
							fontWeight:"bold",
							color:"#9ba5c7",
							top:'middle'
						}
					},
					legend:{
						orient:'vertical',
						x: 'left',
						y: 'center',
						itemWidth : 10,
						itemHeight : 10,
//						data:['上门散客','其他','美图'],
						textStyle:{color:'#9ba5c7'}
					},
					series: [{
						type:'pie',
						selectedMode: 'single',
						hoverAnimation: false,
						avoidLabelOverlap: false,
						color: ['#ff8f47'],
						radius: ['40%', '45%'],
						center: ['70%', '55%'],
						label: {
							normal: {position: 'inner'}
						},
						labelLine: {
							normal: {show: false}
						},
						itemStyle : {
							normal : {
								label : {show : false},   //隐藏标示文字
								labelLine : {show : false}   //隐藏标示线
							}
						},
						data:[{value:PieCharts_ten_Charts_one_num[0], name:PieCharts_ten_Charts_one_name[0]}]
					},{
						type:'pie',
						selectedMode: 'single',
						hoverAnimation: false,
						avoidLabelOverlap: false,
						color: ['#4acad5'],
						radius: ['55%', '60%'],
						center: ['70%', '55%'],
						label: {
							normal: {position: 'inner'}
						},
						labelLine: {
							normal: {show: false}
						},
						itemStyle : {
							normal : {
								label : {show : false},   //隐藏标示文字
								labelLine : {show : false}   //隐藏标示线
							}
						},
						data:[{value:PieCharts_ten_Charts_one_num[1], name:PieCharts_ten_Charts_one_name[1]}]
					},{
						type:'pie',
						selectedMode: 'single',
						hoverAnimation: false,
						avoidLabelOverlap: false,
						color: ['#2a61f7'],
						radius: ['70%', '75%'],
						center: ['70%', '55%'],
						label: {
							normal: {position: 'inner'}
						},
						labelLine: {
							normal: {show: false}
						},
						itemStyle : {
							normal : {
								label : {show : false},   //隐藏标示文字
								labelLine : {show : false}   //隐藏标示线
							}
						},
						data:[{value:PieCharts_ten_Charts_one_num[2], name:PieCharts_ten_Charts_one_name[2]}]
					}]
				};
				PieCharts_ten_Charts.setOption(option);
			}
		},
		error:function(error){
			console.log(error);
		}
	});
	
	var PieCharts_eleven = document.getElementById('PieCharts_eleven');
	var PieCharts_eleven_url = store_all_url;
	var PieCharts_eleven_url_method = "xmsopen.report.xopchanmarkstatistics";
	var PieCharts_eleven_data = {
		"hotelid":"G000001",
		"appkey":"WEB",
		"ver":"1.0.0",
		"secret":"2wN5ip9D65k04svHQH0",
		"method":PieCharts_eleven_url_method,
		"params":[{
			"hotelid":store_all_name[3]
		}]
	};
	var PieCharts_eleven_Charts_one_name = [];
	var PieCharts_eleven_Charts_one_num = [];
	var PieCharts_eleven_Charts = echarts.init(PieCharts_eleven);
	$.ajax({
		type:"post",
		url:PieCharts_eleven_url,
		async:true,
		data:JSON.stringify(PieCharts_eleven_data),
		dataType:"json",
		success:function(data){
			if(data.success==true){
				for(var i=0;i<data.results[0].cplist.length;i++){
					PieCharts_eleven_Charts_one_name.push(data.results[0].cplist[i].channel_des);
					PieCharts_eleven_Charts_one_num.push(data.results[0].cplist[i].price);
				};
				var option = {
					title: {
						text: '渠道价格占比',
						padding: [5,0],
						x:'center',
						textStyle:{
							fontSize:12,
							fontWeight:"bold",
							color:"#9ba5c7",
							top:'middle'
						}
					},
					legend:{
						orient:'vertical',
						x: 'left',
						y: 'center',
						itemWidth : 10,
						itemHeight : 10,
						textStyle:{color:'#9ba5c7'}
					},
					series: [{
						type:'pie',
						selectedMode: 'single',
						hoverAnimation: false,
						avoidLabelOverlap: false,
						color: ['#ff8f47'],
						radius: ['40%', '45%'],
						center: ['70%', '55%'],
						label: {
							normal: {position: 'inner'}
						},
						labelLine: {
							normal: {show: false}
						},
						itemStyle : {
							normal : {
								label : {show : false},   //隐藏标示文字
								labelLine : {show : false}   //隐藏标示线
							}
						},
						data:[{value:3, name:'其他'}]
					},{
						type:'pie',
						selectedMode: 'single',
						hoverAnimation: false,
						avoidLabelOverlap: false,
						color: ['#4acad5'],
						radius: ['55%', '60%'],
						center: ['70%', '55%'],
						label: {
							normal: {position: 'inner'}
						},
						labelLine: {
							normal: {show: false}
						},
						itemStyle : {
							normal : {
								label : {show : false},   //隐藏标示文字
								labelLine : {show : false}   //隐藏标示线
							}
						},
						data:[{value:PieCharts_eleven_Charts_one_num[1], name:PieCharts_eleven_Charts_one_name[1]}]
					},{
						type:'pie',
						selectedMode: 'single',
						hoverAnimation: false,
						avoidLabelOverlap: false,
						color: ['#2a61f7'],
						radius: ['70%', '75%'],
						center: ['70%', '55%'],
						label: {
							normal: {position: 'inner'}
						},
						labelLine: {
							normal: {show: false}
						},
						itemStyle : {
							normal : {
								label : {show : false},   //隐藏标示文字
								labelLine : {show : false}   //隐藏标示线
							}
						},
						data:[{value:PieCharts_eleven_Charts_one_num[0], name:PieCharts_eleven_Charts_one_name[0]}]
					}]
				};
				PieCharts_eleven_Charts.setOption(option);
			}
		},
		error:function(error){
			console.log(error);
		}
	});
	
	var PieCharts_twelve = document.getElementById('PieCharts_twelve');
	var PieCharts_twelve_url = store_all_url;
	var PieCharts_twelve_url_method = "xmsopen.report.xopchanmarkstatistics";
	var PieCharts_twelve_data = {
		"hotelid":"G000001",
		"appkey":"WEB",
		"ver":"1.0.0",
		"secret":"2wN5ip9D65k04svHQH0",
		"method":PieCharts_twelve_url_method,
		"params":[{
			"hotelid":store_all_name[3]
		}]
	};
	var PieCharts_twelve_Charts_one_name = [];
	var PieCharts_twelve_Charts_one_num = [];
	var PieCharts_twelve_Charts = echarts.init(PieCharts_twelve);
	$.ajax({
		type:"post",
		url:PieCharts_twelve_url,
		async:true,
		data:JSON.stringify(PieCharts_twelve_data),
		dataType:"json",
		success:function(data){
			console.log(data);
			if(data.success==true){
				for(var i=0;i<data.results[0].mplist.length;i++){
					PieCharts_twelve_Charts_one_name.push(data.results[0].mplist[i].market_des);
					PieCharts_twelve_Charts_one_num.push(data.results[0].mplist[i].price);
				};
				var option = {
					title: {
						text: '市场价格占比',
						padding: [5,0],
						x:'center',
						textStyle:{
							fontSize:12,
							fontWeight:"bold",
							color:"#9ba5c7",
							top:'middle'
						}
					},
					legend:{
						orient:'vertical',
						x: 'left',
						y: 'center',
						itemWidth : 10,
						itemHeight : 10,
//						data:['上门散客','其他','美图'],
						textStyle:{color:'#9ba5c7'}
					},
					series: [{
						type:'pie',
						selectedMode: 'single',
						hoverAnimation: false,
						avoidLabelOverlap: false,
						color: ['#ff8f47'],
						radius: ['40%', '45%'],
						center: ['70%', '55%'],
						label: {
							normal: {position: 'inner'}
						},
						labelLine: {
							normal: {show: false}
						},
						itemStyle : {
							normal : {
								label : {show : false},   //隐藏标示文字
								labelLine : {show : false}   //隐藏标示线
							}
						},
						data:[{value:PieCharts_twelve_Charts_one_num[0], name:PieCharts_twelve_Charts_one_name[0]}]
					},{
						type:'pie',
						selectedMode: 'single',
						hoverAnimation: false,
						avoidLabelOverlap: false,
						color: ['#4acad5'],
						radius: ['55%', '60%'],
						center: ['70%', '55%'],
						label: {
							normal: {position: 'inner'}
						},
						labelLine: {
							normal: {show: false}
						},
						itemStyle : {
							normal : {
								label : {show : false},   //隐藏标示文字
								labelLine : {show : false}   //隐藏标示线
							}
						},
						data:[{value:PieCharts_twelve_Charts_one_num[1], name:PieCharts_twelve_Charts_one_name[1]}]
					},{
						type:'pie',
						selectedMode: 'single',
						hoverAnimation: false,
						avoidLabelOverlap: false,
						color: ['#2a61f7'],
						radius: ['70%', '75%'],
						center: ['70%', '55%'],
						label: {
							normal: {position: 'inner'}
						},
						labelLine: {
							normal: {show: false}
						},
						itemStyle : {
							normal : {
								label : {show : false},   //隐藏标示文字
								labelLine : {show : false}   //隐藏标示线
							}
						},
						data:[{value:PieCharts_twelve_Charts_one_num[2], name:PieCharts_twelve_Charts_one_name[2]}]
					}]
				};
				PieCharts_twelve_Charts.setOption(option);
			}
		},
		error:function(error){
			console.log(error);
		}
	});
	
}
	