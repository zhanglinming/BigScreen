function loadecharts(){
	var Big_PieCharts = document.getElementById('Big_PieCharts');
	var BigPieCharts = echarts.init(Big_PieCharts);
	var option = {
		legend: {
			orient: 'vertical',
			x: 'right',
			y: 'center',
			itemWidth: 10,
			itemHeight: 10,
			data: ['房费','会议','餐费','娱乐','其他'],
			textStyle: {color : '#9ba5c7'}
		},
		textStyle: {color : '#9ba5c7'},
		series: [{
			type: 'pie',
            radius: ['55%', '70%'],
            center: ['50%', '50%'],
            color: ['#595ec4','#6476f6','#988cd6','#4ac9ea','#50d6b3'],
            data: [{value:335, name:'房费'},
                   {value:310, name:'会议'},
                   {value:234, name:'餐费'},
                   {value:135, name:'娱乐'},
                   {value:1548, name:'其他'}]
		}]
	};
	BigPieCharts.setOption(option);
	
	var complete_income = document.getElementById('complete_income');
	var complete_incomeCharts = echarts.init(complete_income);
	var option = {
		title: {
			text: '本月收入完成度',
			x: 'center',
			y: 'top',
			textStyle: {
				fontSize:12,
				fontWeight:"bold",
				color:"#9ba5c7",
				top:'middle'
			}
		},
		legend: {
			x: 'right',
			y: 'top',
			padding: [35,0,0,0],
			itemWidth: 10,
			itemHeight: 10,
			data:['实际收入','收入预算'],
			textStyle: {
				fontSize:12,
				fontWeight:"bold",
				color:"#9ba5c7",
				top:'middle'
			}
		},
		grid: {
        	    left: '3%',
        	    right: '4%',
        	    bottom: '3%',
        	    containLabel: true
       },
       xAxis: [
        {
            type: 'category',
            data: ['一号店','二号店','三号店','四号店','五号店','六号店','七号店','八号店','九号店','十号店'],
            axisPointer: {
                type: 'shadow'
            },
            axisLine: {
				lineStyle: {color: '#143994'}
			},
			axisLabel: {color: '#9ba5c7'}
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '收入/万元',
            nameTextStyle: {color : '#9ba5c7'},
        	    axisLine: {
				lineStyle: {color : '#143994'}
			},
			axisLabel: {color: '#9ba5c7'},
			splitLine: {
				show: true,
				lineStyle: {color: "#143994",type: 'dashed'}
			}
        }
    ],
    series: [
        {
            name:'实际收入',
            type:'bar',
            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0],
            itemStyle: {
				normal: {
					color: '#143994',
				}
			}
        },
        {
            name:'收入预算',
            type:'line',
            data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5],
            itemStyle: {
				normal: {
					color: '#5bc9e2',
					borderColor: '#5bc9e2',
					borderWidth: 5,
					lineStyle: {width: 2,color: '#5bc9e2'}
				}
			}
        }
    ]    
    };
    complete_incomeCharts.setOption(option);
	
	var complete_Rentals = document.getElementById('complete_Rentals');
	var complete_RentalsCharts = echarts.init(complete_Rentals);
	var option = {
		title: {
			text: '本月出租率完成度',
			x: 'center',
			y: 'top',
			textStyle: {
				fontSize:12,
				fontWeight:"bold",
				color:"#9ba5c7",
				top:'middle'
			}
		},
		legend: {
			x: 'right',
			y: 'top',
			padding: [35,0,0,0],
			itemWidth: 10,
			itemHeight: 10,
			data:['实际收入','收入预算'],
			textStyle: {
				fontSize:12,
				fontWeight:"bold",
				color:"#9ba5c7",
				top:'middle'
			}
		},
		grid: {
        	    left: '3%',
        	    right: '4%',
        	    bottom: '3%',
        	    containLabel: true
       },
       xAxis: [
        {
            type: 'category',
            data: ['一号店','二号店','三号店','四号店','五号店','六号店','七号店','八号店','九号店','十号店'],
            axisPointer: {
                type: 'shadow'
            },
            axisLine: {
				lineStyle: {color: '#143994'}
			},
			axisLabel: {color: '#9ba5c7'}
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '出租率/%',
            nameTextStyle: {color : '#9ba5c7'},
        	    axisLine: {
				lineStyle: {color : '#143994'}
			},
			axisLabel: {color: '#9ba5c7'},
			splitLine: {
				show: true,
				lineStyle: {color: "#143994",type: 'dashed'}
			}
        }
    ],
    series: [
        {
            name:'实际收入',
            type:'bar',
            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0],
            itemStyle: {
				normal: {
					color: '#143994',
				}
			}
        },
        {
            name:'收入预算',
            type:'line',
            data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5],
            itemStyle: {
				normal: {
					color: '#5bc9e2',
					borderColor: '#5bc9e2',
					borderWidth: 5,
					lineStyle: {width: 2,color: '#5bc9e2'}
				}
			}
        }
    ]};
    complete_RentalsCharts.setOption(option);
	
	var Seven_days_of_income = document.getElementById('Seven_days_of_income');
	var Seven_days_of_incomeCharts = echarts.init(Seven_days_of_income);
	var option = {
		title: {
			text: '收入七日走势',
			x: 'center',
			y: 'top',
			textStyle: {
				fontSize:12,
				fontWeight:"bold",
				color:"#9ba5c7",
				top:'middle'
			}
		},
        legend: {
        	    x: 'right',
			y: 'top',
			padding: [35,0,0,0],
        	    data:['实际','同比','占比'],
        	    textStyle: {
				fontSize:12,
				fontWeight:"bold",
				color:"#9ba5c7",
				top:'middle'
			}
        	},
        grid: {
        	    left: '3%',
        	    right: '4%',
        	    bottom: '3%',
        	    containLabel: true
        },
        xAxis: {
        	    type: 'category',
            boundaryGap: false,
            data: ['周一','周二','周三','周四','周五','周六','周日'],
            nameTextStyle: {color : '#9ba5c7'},
			axisLine: {
				lineStyle: {color: '#143994'}
			},
			axisLabel: {color: '#9ba5c7'},
			splitLine: {
				show: true,
				lineStyle: {color: "#143994",type: 'dashed'}
			}
        },
        yAxis: {
        	    type: 'value',
        	    name: '收入/万元',
        	    nameTextStyle: {color : '#9ba5c7'},
        	    axisLine: {
				lineStyle: {color : '#143994'}
			},
			axisLabel: {color: '#9ba5c7'},
			splitLine: {
				show: true,
				lineStyle: {color : "#143994",type : 'dashed'}
			}
        },
        series: [{
            name:'实际',
            type:'line',
            smooth:true, 
            data:[120, 132, 101, 134, 90, 230, 210],
            itemStyle: {
				normal: {
					color: '#6bbee0',
					borderColor: '#6bbee0',
					borderWidth: 5,
					lineStyle: {width: 2,color: '#6bbee0'}
				}
			}
        },{
            name:'同比',
            type:'line',
            smooth:true, 
            data:[220, 182, 191, 234, 290, 330, 310],
            itemStyle: {
				normal: {
					color: '#2f5cd9',
					borderColor: '#2f5cd9',
					borderWidth: 5,
					lineStyle: {width: 2,color: '#2f5cd9'}
				}
			}
        },{
            name:'占比',
            type:'line',
            smooth:true, 
            data:[22, 18, 19, 23, 20, 30, 10],
            itemStyle: {
				normal: {
					color: '#d46619',
					borderColor: '#d46619',
					borderWidth: 5,
					lineStyle: {width: 2,color: '#d46619'}
				}
			}
        }]
    };
    Seven_days_of_incomeCharts.setOption(option);
    
    var Seven_days_of_income_two = document.getElementById('Seven_days_of_income_two');
	var Seven_days_of_income_twoCharts = echarts.init(Seven_days_of_income_two);
	var option = {
		title: {
			text: '收入七日走势',
			x: 'center',
			y: 'top',
			textStyle: {
				fontSize:12,
				fontWeight:"bold",
				color:"#9ba5c7",
				top:'middle'
			}
		},
        legend: {
        	    x: 'right',
			y: 'top',
			padding: [35,0,0,0],
        	    data:['实际','同比','占比'],
        	    textStyle: {
				fontSize:12,
				fontWeight:"bold",
				color:"#9ba5c7",
				top:'middle'
			}
        	},
        grid: {
        	    left: '3%',
        	    right: '4%',
        	    bottom: '3%',
        	    containLabel: true
        },
        xAxis: {
        	    type: 'category',
            boundaryGap: false,
            data: ['周一','周二','周三','周四','周五','周六','周日'],
            nameTextStyle: {color : '#9ba5c7'},
			axisLine: {
				lineStyle: {color: '#143994'}
			},
			axisLabel: {color: '#9ba5c7'},
			splitLine: {
				show: true,
				lineStyle: {color: "#143994",type: 'dashed'}
			}
        },
        yAxis: {
        	    type: 'value',
        	    name: '收入/万元',
        	    nameTextStyle: {color : '#9ba5c7'},
        	    axisLine: {
				lineStyle: {color : '#143994'}
			},
			axisLabel: {color: '#9ba5c7'},
			splitLine: {
				show: true,
				lineStyle: {color : "#143994",type : 'dashed'}
			}
        },
        series: [{
            name:'实际',
            type:'line',
            smooth:true, 
            data:[120, 132, 101, 134, 90, 230, 210],
            itemStyle: {
				normal: {
					color: '#6bbee0',
					borderColor: '#6bbee0',
					borderWidth: 5,
					lineStyle: {width: 2,color: '#6bbee0'}
				}
			}
        },{
            name:'同比',
            type:'line',
            smooth:true, 
            data:[220, 182, 191, 234, 290, 330, 310],
            itemStyle: {
				normal: {
					color: '#2f5cd9',
					borderColor: '#2f5cd9',
					borderWidth: 5,
					lineStyle: {width: 2,color: '#2f5cd9'}
				}
			}
        },{
            name:'占比',
            type:'line',
            smooth:true, 
            data:[22, 18, 19, 23, 20, 30, 10],
            itemStyle: {
				normal: {
					color: '#d46619',
					borderColor: '#d46619',
					borderWidth: 5,
					lineStyle: {width: 2,color: '#d46619'}
				}
			}
        }]
    };
    Seven_days_of_income_twoCharts.setOption(option);
    
    var Seven_days_of_income_three = document.getElementById('Seven_days_of_income_three');
	var Seven_days_of_income_threeCharts = echarts.init(Seven_days_of_income_three);
	var option = {
		title: {
			text: '收入七日走势',
			x: 'center',
			y: 'top',
			textStyle: {
				fontSize:12,
				fontWeight:"bold",
				color:"#9ba5c7",
				top:'middle'
			}
		},
        legend: {
        	    x: 'right',
			y: 'top',
			padding: [35,0,0,0],
        	    data:['实际','同比','占比'],
        	    textStyle: {
				fontSize:12,
				fontWeight:"bold",
				color:"#9ba5c7",
				top:'middle'
			}
        	},
        grid: {
        	    left: '3%',
        	    right: '4%',
        	    bottom: '3%',
        	    containLabel: true
        },
        xAxis: {
        	    type: 'category',
            boundaryGap: false,
            data: ['周一','周二','周三','周四','周五','周六','周日'],
            nameTextStyle: {color : '#9ba5c7'},
			axisLine: {
				lineStyle: {color: '#143994'}
			},
			axisLabel: {color: '#9ba5c7'},
			splitLine: {
				show: true,
				lineStyle: {color: "#143994",type: 'dashed'}
			}
        },
        yAxis: {
        	    type: 'value',
        	    name: '收入/万元',
        	    nameTextStyle: {color : '#9ba5c7'},
        	    axisLine: {
				lineStyle: {color : '#143994'}
			},
			axisLabel: {color: '#9ba5c7'},
			splitLine: {
				show: true,
				lineStyle: {color : "#143994",type : 'dashed'}
			}
        },
        series: [{
            name:'实际',
            type:'line',
            smooth:true, 
            data:[120, 132, 101, 134, 90, 230, 210],
            itemStyle: {
				normal: {
					color: '#6bbee0',
					borderColor: '#6bbee0',
					borderWidth: 5,
					lineStyle: {width: 2,color: '#6bbee0'}
				}
			}
        },{
            name:'同比',
            type:'line',
            smooth:true, 
            data:[220, 182, 191, 234, 290, 330, 310],
            itemStyle: {
				normal: {
					color: '#2f5cd9',
					borderColor: '#2f5cd9',
					borderWidth: 5,
					lineStyle: {width: 2,color: '#2f5cd9'}
				}
			}
        },{
            name:'占比',
            type:'line',
            smooth:true, 
            data:[22, 18, 19, 23, 20, 30, 10],
            itemStyle: {
				normal: {
					color: '#d46619',
					borderColor: '#d46619',
					borderWidth: 5,
					lineStyle: {width: 2,color: '#d46619'}
				}
			}
        }]
    };
    Seven_days_of_income_threeCharts.setOption(option);
    
    var Seven_days_of_Rentals = document.getElementById('Seven_days_of_Rentals');
	var Seven_days_of_RentalsCharts = echarts.init(Seven_days_of_Rentals);
	var option = {
		title: {
			text: '出租率七日走势',
			x: 'center',
			y: 'top',
			textStyle: {
				fontSize:12,
				fontWeight:"bold",
				color:"#9ba5c7",
				top:'middle'
			}
		},
        legend: {
        	    x: 'right',
			y: 'top',
			padding: [35,0,0,0],
        	    data:['实际','同比','占比'],
        	    textStyle: {
				fontSize:12,
				fontWeight:"bold",
				color:"#9ba5c7",
				top:'middle'
			}
        	},
        grid: {
        	    left: '3%',
        	    right: '4%',
        	    bottom: '3%',
        	    containLabel: true
        },
        xAxis: {
        	    type: 'category',
            boundaryGap: false,
            data: ['周一','周二','周三','周四','周五','周六','周日'],
            nameTextStyle: {color : '#9ba5c7'},
			axisLine: {
				lineStyle: {color: '#143994'}
			},
			axisLabel: {color: '#9ba5c7'},
			splitLine: {
				show: true,
				lineStyle: {color: "#143994",type: 'dashed'}
			}
        },
        yAxis: {
        	    type: 'value',
        	    name: '出租率/%',
        	    nameTextStyle: {color : '#9ba5c7'},
        	    axisLine: {
				lineStyle: {color : '#143994'}
			},
			axisLabel: {color: '#9ba5c7'},
			splitLine: {
				show: true,
				lineStyle: {color : "#143994",type : 'dashed'}
			}
        },
        series: [{
            name:'实际',
            type:'line',
            smooth:true, 
            data:[120, 132, 101, 134, 90, 230, 210],
            itemStyle: {
				normal: {
					color: '#6bbee0',
					borderColor: '#6bbee0',
					borderWidth: 5,
					lineStyle: {width: 2,color: '#6bbee0'}
				}
			}
        },{
            name:'同比',
            type:'line',
            smooth:true, 
            data:[220, 182, 191, 234, 290, 330, 310],
            itemStyle: {
				normal: {
					color: '#2f5cd9',
					borderColor: '#2f5cd9',
					borderWidth: 5,
					lineStyle: {width: 2,color: '#2f5cd9'}
				}
			}
        },{
            name:'占比',
            type:'line',
            smooth:true, 
            data:[22, 18, 19, 23, 20, 30, 10],
            itemStyle: {
				normal: {
					color: '#d46619',
					borderColor: '#d46619',
					borderWidth: 5,
					lineStyle: {width: 2,color: '#d46619'}
				}
			}
        }]
    };
    Seven_days_of_RentalsCharts.setOption(option);
    
    var Seven_days_of_Rentals_two = document.getElementById('Seven_days_of_Rentals_two');
	var Seven_days_of_Rentals_twoCharts = echarts.init(Seven_days_of_Rentals_two);
	var option = {
		title: {
			text: '出租率七日走势',
			x: 'center',
			y: 'top',
			textStyle: {
				fontSize:12,
				fontWeight:"bold",
				color:"#9ba5c7",
				top:'middle'
			}
		},
        legend: {
        	    x: 'right',
			y: 'top',
			padding: [35,0,0,0],
        	    data:['实际','同比','占比'],
        	    textStyle: {
				fontSize:12,
				fontWeight:"bold",
				color:"#9ba5c7",
				top:'middle'
			}
        	},
        grid: {
        	    left: '3%',
        	    right: '4%',
        	    bottom: '3%',
        	    containLabel: true
        },
        xAxis: {
        	    type: 'category',
            boundaryGap: false,
            data: ['周一','周二','周三','周四','周五','周六','周日'],
            nameTextStyle: {color : '#9ba5c7'},
			axisLine: {
				lineStyle: {color: '#143994'}
			},
			axisLabel: {color: '#9ba5c7'},
			splitLine: {
				show: true,
				lineStyle: {color: "#143994",type: 'dashed'}
			}
        },
        yAxis: {
        	    type: 'value',
        	    name: '出租率/%',
        	    nameTextStyle: {color : '#9ba5c7'},
        	    axisLine: {
				lineStyle: {color : '#143994'}
			},
			axisLabel: {color: '#9ba5c7'},
			splitLine: {
				show: true,
				lineStyle: {color : "#143994",type : 'dashed'}
			}
        },
        series: [{
            name:'实际',
            type:'line',
            smooth:true, 
            data:[120, 132, 101, 134, 90, 230, 210],
            itemStyle: {
				normal: {
					color: '#6bbee0',
					borderColor: '#6bbee0',
					borderWidth: 5,
					lineStyle: {width: 2,color: '#6bbee0'}
				}
			}
        },{
            name:'同比',
            type:'line',
            smooth:true, 
            data:[220, 182, 191, 234, 290, 330, 310],
            itemStyle: {
				normal: {
					color: '#2f5cd9',
					borderColor: '#2f5cd9',
					borderWidth: 5,
					lineStyle: {width: 2,color: '#2f5cd9'}
				}
			}
        },{
            name:'占比',
            type:'line',
            smooth:true, 
            data:[22, 18, 19, 23, 20, 30, 10],
            itemStyle: {
				normal: {
					color: '#d46619',
					borderColor: '#d46619',
					borderWidth: 5,
					lineStyle: {width: 2,color: '#d46619'}
				}
			}
        }]
    };
    Seven_days_of_Rentals_twoCharts.setOption(option);
    
    var Seven_days_of_Rentals_three = document.getElementById('Seven_days_of_Rentals_three');
	var Seven_days_of_Rentals_threeCharts = echarts.init(Seven_days_of_Rentals_three);
	var option = {
		title: {
			text: '出租率七日走势',
			x: 'center',
			y: 'top',
			textStyle: {
				fontSize:12,
				fontWeight:"bold",
				color:"#9ba5c7",
				top:'middle'
			}
		},
        legend: {
        	    x: 'right',
			y: 'top',
			padding: [35,0,0,0],
        	    data:['实际','同比','占比'],
        	    textStyle: {
				fontSize:12,
				fontWeight:"bold",
				color:"#9ba5c7",
				top:'middle'
			}
        	},
        grid: {
        	    left: '3%',
        	    right: '4%',
        	    bottom: '3%',
        	    containLabel: true
        },
        xAxis: {
        	    type: 'category',
            boundaryGap: false,
            data: ['周一','周二','周三','周四','周五','周六','周日'],
            nameTextStyle: {color : '#9ba5c7'},
			axisLine: {
				lineStyle: {color: '#143994'}
			},
			axisLabel: {color: '#9ba5c7'},
			splitLine: {
				show: true,
				lineStyle: {color: "#143994",type: 'dashed'}
			}
        },
        yAxis: {
        	    type: 'value',
        	    name: '出租率/%',
        	    nameTextStyle: {color : '#9ba5c7'},
        	    axisLine: {
				lineStyle: {color : '#143994'}
			},
			axisLabel: {color: '#9ba5c7'},
			splitLine: {
				show: true,
				lineStyle: {color : "#143994",type : 'dashed'}
			}
        },
        series: [{
            name:'实际',
            type:'line',
            smooth:true, 
            data:[120, 132, 101, 134, 90, 230, 210],
            itemStyle: {
				normal: {
					color: '#6bbee0',
					borderColor: '#6bbee0',
					borderWidth: 5,
					lineStyle: {width: 2,color: '#6bbee0'}
				}
			}
        },{
            name:'同比',
            type:'line',
            smooth:true, 
            data:[220, 182, 191, 234, 290, 330, 310],
            itemStyle: {
				normal: {
					color: '#2f5cd9',
					borderColor: '#2f5cd9',
					borderWidth: 5,
					lineStyle: {width: 2,color: '#2f5cd9'}
				}
			}
        },{
            name:'占比',
            type:'line',
            smooth:true, 
            data:[22, 18, 19, 23, 20, 30, 10],
            itemStyle: {
				normal: {
					color: '#d46619',
					borderColor: '#d46619',
					borderWidth: 5,
					lineStyle: {width: 2,color: '#d46619'}
				}
			}
        }]
    };
    Seven_days_of_Rentals_threeCharts.setOption(option);
    
    var Seven_days_of_Average_house_price = document.getElementById('Seven_days_of_Average_house_price');
	var Seven_days_of_Average_house_priceCharts = echarts.init(Seven_days_of_Average_house_price);
	var option = {
		title: {
			text: '平均房价七日走势',
			x: 'center',
			y: 'top',
			textStyle: {
				fontSize:12,
				fontWeight:"bold",
				color:"#9ba5c7",
				top:'middle'
			}
		},
        legend: {
        	    x: 'right',
			y: 'top',
			padding: [35,0,0,0],
        	    data:['实际','同比','占比'],
        	    textStyle: {
				fontSize:12,
				fontWeight:"bold",
				color:"#9ba5c7",
				top:'middle'
			}
        	},
        grid: {
        	    left: '3%',
        	    right: '4%',
        	    bottom: '3%',
        	    containLabel: true
        },
        xAxis: {
        	    type: 'category',
            boundaryGap: false,
            data: ['周一','周二','周三','周四','周五','周六','周日'],
            nameTextStyle: {color : '#9ba5c7'},
			axisLine: {
				lineStyle: {color: '#143994'}
			},
			axisLabel: {color: '#9ba5c7'},
			splitLine: {
				show: true,
				lineStyle: {color: "#143994",type: 'dashed'}
			}
        },
        yAxis: {
        	    type: 'value',
        	    name: '平均房价/元',
        	    nameTextStyle: {color : '#9ba5c7'},
        	    axisLine: {
				lineStyle: {color : '#143994'}
			},
			axisLabel: {color: '#9ba5c7'},
			splitLine: {
				show: true,
				lineStyle: {color : "#143994",type : 'dashed'}
			}
        },
        series: [{
            name:'实际',
            type:'line',
            smooth:true, 
            data:[120, 132, 101, 134, 90, 230, 210],
            itemStyle: {
				normal: {
					color: '#6bbee0',
					borderColor: '#6bbee0',
					borderWidth: 5,
					lineStyle: {width: 2,color: '#6bbee0'}
				}
			}
        },{
            name:'同比',
            type:'line',
            smooth:true, 
            data:[220, 182, 191, 234, 290, 330, 310],
            itemStyle: {
				normal: {
					color: '#2f5cd9',
					borderColor: '#2f5cd9',
					borderWidth: 5,
					lineStyle: {width: 2,color: '#2f5cd9'}
				}
			}
        },{
            name:'占比',
            type:'line',
            smooth:true, 
            data:[22, 18, 19, 23, 20, 30, 10],
            itemStyle: {
				normal: {
					color: '#d46619',
					borderColor: '#d46619',
					borderWidth: 5,
					lineStyle: {width: 2,color: '#d46619'}
				}
			}
        }]
    };
    Seven_days_of_Average_house_priceCharts.setOption(option);
    
    var Seven_days_of_Average_house_price_two = document.getElementById('Seven_days_of_Average_house_price_two');
	var Seven_days_of_Average_house_price_twoCharts = echarts.init(Seven_days_of_Average_house_price_two);
	var option = {
		title: {
			text: '平均房价七日走势',
			x: 'center',
			y: 'top',
			textStyle: {
				fontSize:12,
				fontWeight:"bold",
				color:"#9ba5c7",
				top:'middle'
			}
		},
        legend: {
        	    x: 'right',
			y: 'top',
			padding: [35,0,0,0],
        	    data:['实际','同比','占比'],
        	    textStyle: {
				fontSize:12,
				fontWeight:"bold",
				color:"#9ba5c7",
				top:'middle'
			}
        	},
        grid: {
        	    left: '3%',
        	    right: '4%',
        	    bottom: '3%',
        	    containLabel: true
        },
        xAxis: {
        	    type: 'category',
            boundaryGap: false,
            data: ['周一','周二','周三','周四','周五','周六','周日'],
            nameTextStyle: {color : '#9ba5c7'},
			axisLine: {
				lineStyle: {color: '#143994'}
			},
			axisLabel: {color: '#9ba5c7'},
			splitLine: {
				show: true,
				lineStyle: {color: "#143994",type: 'dashed'}
			}
        },
        yAxis: {
        	    type: 'value',
        	    name: '平均房价/元',
        	    nameTextStyle: {color : '#9ba5c7'},
        	    axisLine: {
				lineStyle: {color : '#143994'}
			},
			axisLabel: {color: '#9ba5c7'},
			splitLine: {
				show: true,
				lineStyle: {color : "#143994",type : 'dashed'}
			}
        },
        series: [{
            name:'实际',
            type:'line',
            smooth:true, 
            data:[120, 132, 101, 134, 90, 230, 210],
            itemStyle: {
				normal: {
					color: '#6bbee0',
					borderColor: '#6bbee0',
					borderWidth: 5,
					lineStyle: {width: 2,color: '#6bbee0'}
				}
			}
        },{
            name:'同比',
            type:'line',
            smooth:true, 
            data:[220, 182, 191, 234, 290, 330, 310],
            itemStyle: {
				normal: {
					color: '#2f5cd9',
					borderColor: '#2f5cd9',
					borderWidth: 5,
					lineStyle: {width: 2,color: '#2f5cd9'}
				}
			}
        },{
            name:'占比',
            type:'line',
            smooth:true, 
            data:[22, 18, 19, 23, 20, 30, 10],
            itemStyle: {
				normal: {
					color: '#d46619',
					borderColor: '#d46619',
					borderWidth: 5,
					lineStyle: {width: 2,color: '#d46619'}
				}
			}
        }]
    };
    Seven_days_of_Average_house_price_twoCharts.setOption(option);
    
    var Seven_days_of_Average_house_price_three = document.getElementById('Seven_days_of_Average_house_price_three');
	var Seven_days_of_Average_house_price_threeCharts = echarts.init(Seven_days_of_Average_house_price_three);
	var option = {
		title: {
			text: '平均房价七日走势',
			x: 'center',
			y: 'top',
			textStyle: {
				fontSize:12,
				fontWeight:"bold",
				color:"#9ba5c7",
				top:'middle'
			}
		},
        legend: {
        	    x: 'right',
			y: 'top',
			padding: [35,0,0,0],
        	    data:['实际','同比','占比'],
        	    textStyle: {
				fontSize:12,
				fontWeight:"bold",
				color:"#9ba5c7",
				top:'middle'
			}
        	},
        grid: {
        	    left: '3%',
        	    right: '4%',
        	    bottom: '3%',
        	    containLabel: true
        },
        xAxis: {
        	    type: 'category',
            boundaryGap: false,
            data: ['周一','周二','周三','周四','周五','周六','周日'],
            nameTextStyle: {color : '#9ba5c7'},
			axisLine: {
				lineStyle: {color: '#143994'}
			},
			axisLabel: {color: '#9ba5c7'},
			splitLine: {
				show: true,
				lineStyle: {color: "#143994",type: 'dashed'}
			}
        },
        yAxis: {
        	    type: 'value',
        	    name: '平均房价/元',
        	    nameTextStyle: {color : '#9ba5c7'},
        	    axisLine: {
				lineStyle: {color : '#143994'}
			},
			axisLabel: {color: '#9ba5c7'},
			splitLine: {
				show: true,
				lineStyle: {color : "#143994",type : 'dashed'}
			}
        },
        series: [{
            name:'实际',
            type:'line',
            smooth:true, 
            data:[120, 132, 101, 134, 90, 230, 210],
            itemStyle: {
				normal: {
					color: '#6bbee0',
					borderColor: '#6bbee0',
					borderWidth: 5,
					lineStyle: {width: 2,color: '#6bbee0'}
				}
			}
        },{
            name:'同比',
            type:'line',
            smooth:true, 
            data:[220, 182, 191, 234, 290, 330, 310],
            itemStyle: {
				normal: {
					color: '#2f5cd9',
					borderColor: '#2f5cd9',
					borderWidth: 5,
					lineStyle: {width: 2,color: '#2f5cd9'}
				}
			}
        },{
            name:'占比',
            type:'line',
            smooth:true, 
            data:[22, 18, 19, 23, 20, 30, 10],
            itemStyle: {
				normal: {
					color: '#d46619',
					borderColor: '#d46619',
					borderWidth: 5,
					lineStyle: {width: 2,color: '#d46619'}
				}
			}
        }]
    };
    Seven_days_of_Average_house_price_threeCharts.setOption(option);
    
    var Seven_days_of_REVPAR = document.getElementById('Seven_days_of_REVPAR');
	var Seven_days_of_REVPARCharts = echarts.init(Seven_days_of_REVPAR);
	var option = {
		title: {
			text: 'REVPAR七日走势',
			x: 'center',
			y: 'top',
			textStyle: {
				fontSize:12,
				fontWeight:"bold",
				color:"#9ba5c7",
				top:'middle'
			}
		},
        legend: {
        	    x: 'right',
			y: 'top',
			padding: [35,0,0,0],
        	    data:['实际','同比','占比'],
        	    textStyle: {
				fontSize:12,
				fontWeight:"bold",
				color:"#9ba5c7",
				top:'middle'
			}
        	},
        grid: {
        	    left: '3%',
        	    right: '4%',
        	    bottom: '3%',
        	    containLabel: true
        },
        xAxis: {
        	    type: 'category',
            boundaryGap: false,
            data: ['周一','周二','周三','周四','周五','周六','周日'],
            nameTextStyle: {color : '#9ba5c7'},
			axisLine: {
				lineStyle: {color: '#143994'}
			},
			axisLabel: {color: '#9ba5c7'},
			splitLine: {
				show: true,
				lineStyle: {color: "#143994",type: 'dashed'}
			}
        },
        yAxis: {
        	    type: 'value',
        	    name: 'REVPAR/元',
        	    nameTextStyle: {color : '#9ba5c7'},
        	    axisLine: {
				lineStyle: {color : '#143994'}
			},
			axisLabel: {color: '#9ba5c7'},
			splitLine: {
				show: true,
				lineStyle: {color : "#143994",type : 'dashed'}
			}
        },
        series: [{
            name:'实际',
            type:'line',
            smooth:true, 
            data:[120, 132, 101, 134, 90, 230, 210],
            itemStyle: {
				normal: {
					color: '#6bbee0',
					borderColor: '#6bbee0',
					borderWidth: 5,
					lineStyle: {width: 2,color: '#6bbee0'}
				}
			}
        },{
            name:'同比',
            type:'line',
            smooth:true, 
            data:[220, 182, 191, 234, 290, 330, 310],
            itemStyle: {
				normal: {
					color: '#2f5cd9',
					borderColor: '#2f5cd9',
					borderWidth: 5,
					lineStyle: {width: 2,color: '#2f5cd9'}
				}
			}
        },{
            name:'占比',
            type:'line',
            smooth:true, 
            data:[22, 18, 19, 23, 20, 30, 10],
            itemStyle: {
				normal: {
					color: '#d46619',
					borderColor: '#d46619',
					borderWidth: 5,
					lineStyle: {width: 2,color: '#d46619'}
				}
			}
        }]
    };
    Seven_days_of_REVPARCharts.setOption(option);
    
    var Seven_days_of_REVPAR_two = document.getElementById('Seven_days_of_REVPAR_two');
	var Seven_days_of_REVPAR_twoCharts = echarts.init(Seven_days_of_REVPAR_two);
	var option = {
		title: {
			text: 'REVPAR七日走势',
			x: 'center',
			y: 'top',
			textStyle: {
				fontSize:12,
				fontWeight:"bold",
				color:"#9ba5c7",
				top:'middle'
			}
		},
        legend: {
        	    x: 'right',
			y: 'top',
			padding: [35,0,0,0],
        	    data:['实际','同比','占比'],
        	    textStyle: {
				fontSize:12,
				fontWeight:"bold",
				color:"#9ba5c7",
				top:'middle'
			}
        	},
        grid: {
        	    left: '3%',
        	    right: '4%',
        	    bottom: '3%',
        	    containLabel: true
        },
        xAxis: {
        	    type: 'category',
            boundaryGap: false,
            data: ['周一','周二','周三','周四','周五','周六','周日'],
            nameTextStyle: {color : '#9ba5c7'},
			axisLine: {
				lineStyle: {color: '#143994'}
			},
			axisLabel: {color: '#9ba5c7'},
			splitLine: {
				show: true,
				lineStyle: {color: "#143994",type: 'dashed'}
			}
        },
        yAxis: {
        	    type: 'value',
        	    name: 'REVPAR/元',
        	    nameTextStyle: {color : '#9ba5c7'},
        	    axisLine: {
				lineStyle: {color : '#143994'}
			},
			axisLabel: {color: '#9ba5c7'},
			splitLine: {
				show: true,
				lineStyle: {color : "#143994",type : 'dashed'}
			}
        },
        series: [{
            name:'实际',
            type:'line',
            smooth:true, 
            data:[120, 132, 101, 134, 90, 230, 210],
            itemStyle: {
				normal: {
					color: '#6bbee0',
					borderColor: '#6bbee0',
					borderWidth: 5,
					lineStyle: {width: 2,color: '#6bbee0'}
				}
			}
        },{
            name:'同比',
            type:'line',
            smooth:true, 
            data:[220, 182, 191, 234, 290, 330, 310],
            itemStyle: {
				normal: {
					color: '#2f5cd9',
					borderColor: '#2f5cd9',
					borderWidth: 5,
					lineStyle: {width: 2,color: '#2f5cd9'}
				}
			}
        },{
            name:'占比',
            type:'line',
            smooth:true, 
            data:[22, 18, 19, 23, 20, 30, 10],
            itemStyle: {
				normal: {
					color: '#d46619',
					borderColor: '#d46619',
					borderWidth: 5,
					lineStyle: {width: 2,color: '#d46619'}
				}
			}
        }]
    };
    Seven_days_of_REVPAR_twoCharts.setOption(option);
    
    var Seven_days_of_REVPAR_three = document.getElementById('Seven_days_of_REVPAR_three');
	var Seven_days_of_REVPAR_threeCharts = echarts.init(Seven_days_of_REVPAR_three);
	var option = {
		title: {
			text: 'REVPAR七日走势',
			x: 'center',
			y: 'top',
			textStyle: {
				fontSize:12,
				fontWeight:"bold",
				color:"#9ba5c7",
				top:'middle'
			}
		},
        legend: {
        	    x: 'right',
			y: 'top',
			padding: [35,0,0,0],
        	    data:['实际','同比','占比'],
        	    textStyle: {
				fontSize:12,
				fontWeight:"bold",
				color:"#9ba5c7",
				top:'middle'
			}
        	},
        grid: {
        	    left: '3%',
        	    right: '4%',
        	    bottom: '3%',
        	    containLabel: true
        },
        xAxis: {
        	    type: 'category',
            boundaryGap: false,
            data: ['周一','周二','周三','周四','周五','周六','周日'],
            nameTextStyle: {color : '#9ba5c7'},
			axisLine: {
				lineStyle: {color: '#143994'}
			},
			axisLabel: {color: '#9ba5c7'},
			splitLine: {
				show: true,
				lineStyle: {color: "#143994",type: 'dashed'}
			}
        },
        yAxis: {
        	    type: 'value',
        	    name: 'REVPAR/元',
        	    nameTextStyle: {color : '#9ba5c7'},
        	    axisLine: {
				lineStyle: {color : '#143994'}
			},
			axisLabel: {color: '#9ba5c7'},
			splitLine: {
				show: true,
				lineStyle: {color : "#143994",type : 'dashed'}
			}
        },
        series: [{
            name:'实际',
            type:'line',
            smooth:true, 
            data:[120, 132, 101, 134, 90, 230, 210],
            itemStyle: {
				normal: {
					color: '#6bbee0',
					borderColor: '#6bbee0',
					borderWidth: 5,
					lineStyle: {width: 2,color: '#6bbee0'}
				}
			}
        },{
            name:'同比',
            type:'line',
            smooth:true, 
            data:[220, 182, 191, 234, 290, 330, 310],
            itemStyle: {
				normal: {
					color: '#2f5cd9',
					borderColor: '#2f5cd9',
					borderWidth: 5,
					lineStyle: {width: 2,color: '#2f5cd9'}
				}
			}
        },{
            name:'占比',
            type:'line',
            smooth:true, 
            data:[22, 18, 19, 23, 20, 30, 10],
            itemStyle: {
				normal: {
					color: '#d46619',
					borderColor: '#d46619',
					borderWidth: 5,
					lineStyle: {width: 2,color: '#d46619'}
				}
			}
        }]
    };
    Seven_days_of_REVPAR_threeCharts.setOption(option);
    
    var Seven_days_of_Arrive_leave = document.getElementById('Seven_days_of_Arrive_leave');
	var Seven_days_of_Arrive_leaveCharts = echarts.init(Seven_days_of_Arrive_leave);
	var option = {
		title: {
			text: '预抵预离七日走势',
			x: 'center',
			y: 'top',
			textStyle: {
				fontSize:12,
				fontWeight:"bold",
				color:"#9ba5c7",
				top:'middle'
			}
		},
        legend: {
        	    x: 'right',
			y: 'top',
			padding: [35,0,0,0],
        	    data:['实际','同比','占比'],
        	    textStyle: {
				fontSize:12,
				fontWeight:"bold",
				color:"#9ba5c7",
				top:'middle'
			}
        	},
        grid: {
        	    left: '3%',
        	    right: '4%',
        	    bottom: '3%',
        	    containLabel: true
        },
        xAxis: {
        	    type: 'category',
            boundaryGap: false,
            data: ['周一','周二','周三','周四','周五','周六','周日'],
            nameTextStyle: {color : '#9ba5c7'},
			axisLine: {
				lineStyle: {color: '#143994'}
			},
			axisLabel: {color: '#9ba5c7'},
			splitLine: {
				show: true,
				lineStyle: {color: "#143994",type: 'dashed'}
			}
        },
        yAxis: {
        	    type: 'value',
        	    name: '预抵预离/间',
        	    nameTextStyle: {color : '#9ba5c7'},
        	    axisLine: {
				lineStyle: {color : '#143994'}
			},
			axisLabel: {color: '#9ba5c7'},
			splitLine: {
				show: true,
				lineStyle: {color : "#143994",type : 'dashed'}
			}
        },
        series: [{
            name:'实际',
            type:'line',
            smooth:true, 
            data:[120, 132, 101, 134, 90, 230, 210],
            itemStyle: {
				normal: {
					color: '#6bbee0',
					borderColor: '#6bbee0',
					borderWidth: 5,
					lineStyle: {width: 2,color: '#6bbee0'}
				}
			}
        },{
            name:'同比',
            type:'line',
            smooth:true, 
            data:[220, 182, 191, 234, 290, 330, 310],
            itemStyle: {
				normal: {
					color: '#2f5cd9',
					borderColor: '#2f5cd9',
					borderWidth: 5,
					lineStyle: {width: 2,color: '#2f5cd9'}
				}
			}
        },{
            name:'占比',
            type:'line',
            smooth:true, 
            data:[22, 18, 19, 23, 20, 30, 10],
            itemStyle: {
				normal: {
					color: '#d46619',
					borderColor: '#d46619',
					borderWidth: 5,
					lineStyle: {width: 2,color: '#d46619'}
				}
			}
        }]
    };
    Seven_days_of_Arrive_leaveCharts.setOption(option);
    
    var Seven_days_of_Arrive_leave_two = document.getElementById('Seven_days_of_Arrive_leave_two');
	var Seven_days_of_Arrive_leave_twoCharts = echarts.init(Seven_days_of_Arrive_leave_two);
	var option = {
		title: {
			text: '预抵预离七日走势',
			x: 'center',
			y: 'top',
			textStyle: {
				fontSize:12,
				fontWeight:"bold",
				color:"#9ba5c7",
				top:'middle'
			}
		},
        legend: {
        	    x: 'right',
			y: 'top',
			padding: [35,0,0,0],
        	    data:['实际','同比','占比'],
        	    textStyle: {
				fontSize:12,
				fontWeight:"bold",
				color:"#9ba5c7",
				top:'middle'
			}
        	},
        grid: {
        	    left: '3%',
        	    right: '4%',
        	    bottom: '3%',
        	    containLabel: true
        },
        xAxis: {
        	    type: 'category',
            boundaryGap: false,
            data: ['周一','周二','周三','周四','周五','周六','周日'],
            nameTextStyle: {color : '#9ba5c7'},
			axisLine: {
				lineStyle: {color: '#143994'}
			},
			axisLabel: {color: '#9ba5c7'},
			splitLine: {
				show: true,
				lineStyle: {color: "#143994",type: 'dashed'}
			}
        },
        yAxis: {
        	    type: 'value',
        	    name: '预抵预离/间',
        	    nameTextStyle: {color : '#9ba5c7'},
        	    axisLine: {
				lineStyle: {color : '#143994'}
			},
			axisLabel: {color: '#9ba5c7'},
			splitLine: {
				show: true,
				lineStyle: {color : "#143994",type : 'dashed'}
			}
        },
        series: [{
            name:'实际',
            type:'line',
            smooth:true, 
            data:[120, 132, 101, 134, 90, 230, 210],
            itemStyle: {
				normal: {
					color: '#6bbee0',
					borderColor: '#6bbee0',
					borderWidth: 5,
					lineStyle: {width: 2,color: '#6bbee0'}
				}
			}
        },{
            name:'同比',
            type:'line',
            smooth:true, 
            data:[220, 182, 191, 234, 290, 330, 310],
            itemStyle: {
				normal: {
					color: '#2f5cd9',
					borderColor: '#2f5cd9',
					borderWidth: 5,
					lineStyle: {width: 2,color: '#2f5cd9'}
				}
			}
        },{
            name:'占比',
            type:'line',
            smooth:true, 
            data:[22, 18, 19, 23, 20, 30, 10],
            itemStyle: {
				normal: {
					color: '#d46619',
					borderColor: '#d46619',
					borderWidth: 5,
					lineStyle: {width: 2,color: '#d46619'}
				}
			}
        }]
    };
    Seven_days_of_Arrive_leave_twoCharts.setOption(option);
    
    var Seven_days_of_Arrive_leave_three = document.getElementById('Seven_days_of_Arrive_leave_three');
	var Seven_days_of_Arrive_leave_threeCharts = echarts.init(Seven_days_of_Arrive_leave_three);
	var option = {
		title: {
			text: '预抵预离七日走势',
			x: 'center',
			y: 'top',
			textStyle: {
				fontSize:12,
				fontWeight:"bold",
				color:"#9ba5c7",
				top:'middle'
			}
		},
        legend: {
        	    x: 'right',
			y: 'top',
			padding: [35,0,0,0],
        	    data:['实际','同比','占比'],
        	    textStyle: {
				fontSize:12,
				fontWeight:"bold",
				color:"#9ba5c7",
				top:'middle'
			}
        	},
        grid: {
        	    left: '3%',
        	    right: '4%',
        	    bottom: '3%',
        	    containLabel: true
        },
        xAxis: {
        	    type: 'category',
            boundaryGap: false,
            data: ['周一','周二','周三','周四','周五','周六','周日'],
            nameTextStyle: {color : '#9ba5c7'},
			axisLine: {
				lineStyle: {color: '#143994'}
			},
			axisLabel: {color: '#9ba5c7'},
			splitLine: {
				show: true,
				lineStyle: {color: "#143994",type: 'dashed'}
			}
        },
        yAxis: {
        	    type: 'value',
        	    name: '预抵预离/间',
        	    nameTextStyle: {color : '#9ba5c7'},
        	    axisLine: {
				lineStyle: {color : '#143994'}
			},
			axisLabel: {color: '#9ba5c7'},
			splitLine: {
				show: true,
				lineStyle: {color : "#143994",type : 'dashed'}
			}
        },
        series: [{
            name:'实际',
            type:'line',
            smooth:true, 
            data:[120, 132, 101, 134, 90, 230, 210],
            itemStyle: {
				normal: {
					color: '#6bbee0',
					borderColor: '#6bbee0',
					borderWidth: 5,
					lineStyle: {width: 2,color: '#6bbee0'}
				}
			}
        },{
            name:'同比',
            type:'line',
            smooth:true, 
            data:[220, 182, 191, 234, 290, 330, 310],
            itemStyle: {
				normal: {
					color: '#2f5cd9',
					borderColor: '#2f5cd9',
					borderWidth: 5,
					lineStyle: {width: 2,color: '#2f5cd9'}
				}
			}
        },{
            name:'占比',
            type:'line',
            smooth:true, 
            data:[22, 18, 19, 23, 20, 30, 10],
            itemStyle: {
				normal: {
					color: '#d46619',
					borderColor: '#d46619',
					borderWidth: 5,
					lineStyle: {width: 2,color: '#d46619'}
				}
			}
        }]
    };
    Seven_days_of_Arrive_leave_threeCharts.setOption(option);
    
    var eightPie_one = document.getElementById('eightPie_one');
	var eightPie_oneCharts = echarts.init(eightPie_one);
    var option = {
		title: {
			text: '收入渠道占比',
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
			radius: ['10%', '15%'],
			center: ['70%', '50%'],
			label: {
				normal: {position: 'inner'}
			},
			labelLine: {
				normal: {show: false}
			},
			itemStyle: {
				normal: {
					label: {show : false},   //隐藏标示文字
					labelLine: {show : false}   //隐藏标示线
				}
			},
			data:[{value:3, name:'其他'}]
			},{
			type:'pie',
			selectedMode: 'single',
			hoverAnimation: false,
			avoidLabelOverlap: false,
			color: ['#4acad5'],
			radius: ['25%', '30%'],
			center: ['70%', '50%'],
			label: {
				normal: {position: 'inner'}
			},
			labelLine: {
				normal: {show: false}
			},
			itemStyle: {
				normal: {
					label: {show : false},   //隐藏标示文字
					labelLine: {show : false}   //隐藏标示线
				}
			},
			data:[{value:3, name:'美图'}]
			},{
			type:'pie',
			selectedMode: 'single',
			hoverAnimation: false,
			avoidLabelOverlap: false,
			color: ['#2a61f7'],
			radius: ['40%', '45%'],
			center: ['70%', '50%'],
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
			data:[{value:3, name:'上门散客'}]
		}]
	};
	eightPie_oneCharts.setOption(option);
	
	var eightPie_two = document.getElementById('eightPie_two');
	var eightPie_twoCharts = echarts.init(eightPie_two);
    var option = {
		title: {
			text: '收入市场占比',
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
			radius: ['10%', '15%'],
			center: ['70%', '50%'],
			label: {
				normal: {position: 'inner'}
			},
			labelLine: {
				normal: {show: false}
			},
			itemStyle: {
				normal: {
					label: {show : false},   //隐藏标示文字
					labelLine: {show : false}   //隐藏标示线
				}
			},
			data:[{value:3, name:'其他'}]
			},{
			type:'pie',
			selectedMode: 'single',
			hoverAnimation: false,
			avoidLabelOverlap: false,
			color: ['#4acad5'],
			radius: ['25%', '30%'],
			center: ['70%', '50%'],
			label: {
				normal: {position: 'inner'}
			},
			labelLine: {
				normal: {show: false}
			},
			itemStyle: {
				normal: {
					label: {show : false},   //隐藏标示文字
					labelLine: {show : false}   //隐藏标示线
				}
			},
			data:[{value:3, name:'美图'}]
			},{
			type:'pie',
			selectedMode: 'single',
			hoverAnimation: false,
			avoidLabelOverlap: false,
			color: ['#2a61f7'],
			radius: ['40%', '45%'],
			center: ['70%', '50%'],
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
			data:[{value:3, name:'上门散客'}]
		}]
	};
	eightPie_twoCharts.setOption(option);
	
	var eightPie_three = document.getElementById('eightPie_three');
	var eightPie_threeCharts = echarts.init(eightPie_three);
    var option = {
		title: {
			text: '收入渠道占比',
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
			radius: ['10%', '15%'],
			center: ['70%', '50%'],
			label: {
				normal: {position: 'inner'}
			},
			labelLine: {
				normal: {show: false}
			},
			itemStyle: {
				normal: {
					label: {show : false},   //隐藏标示文字
					labelLine: {show : false}   //隐藏标示线
				}
			},
			data:[{value:3, name:'其他'}]
			},{
			type:'pie',
			selectedMode: 'single',
			hoverAnimation: false,
			avoidLabelOverlap: false,
			color: ['#4acad5'],
			radius: ['25%', '30%'],
			center: ['70%', '50%'],
			label: {
				normal: {position: 'inner'}
			},
			labelLine: {
				normal: {show: false}
			},
			itemStyle: {
				normal: {
					label: {show : false},   //隐藏标示文字
					labelLine: {show : false}   //隐藏标示线
				}
			},
			data:[{value:3, name:'美图'}]
			},{
			type:'pie',
			selectedMode: 'single',
			hoverAnimation: false,
			avoidLabelOverlap: false,
			color: ['#2a61f7'],
			radius: ['40%', '45%'],
			center: ['70%', '50%'],
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
			data:[{value:3, name:'上门散客'}]
		}]
	};
	eightPie_threeCharts.setOption(option);
	
	var eightPie_four = document.getElementById('eightPie_four');
	var eightPie_fourCharts = echarts.init(eightPie_four);
    var option = {
		title: {
			text: '收入市场占比',
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
			radius: ['10%', '15%'],
			center: ['70%', '50%'],
			label: {
				normal: {position: 'inner'}
			},
			labelLine: {
				normal: {show: false}
			},
			itemStyle: {
				normal: {
					label: {show : false},   //隐藏标示文字
					labelLine: {show : false}   //隐藏标示线
				}
			},
			data:[{value:3, name:'其他'}]
			},{
			type:'pie',
			selectedMode: 'single',
			hoverAnimation: false,
			avoidLabelOverlap: false,
			color: ['#4acad5'],
			radius: ['25%', '30%'],
			center: ['70%', '50%'],
			label: {
				normal: {position: 'inner'}
			},
			labelLine: {
				normal: {show: false}
			},
			itemStyle: {
				normal: {
					label: {show : false},   //隐藏标示文字
					labelLine: {show : false}   //隐藏标示线
				}
			},
			data:[{value:3, name:'美图'}]
			},{
			type:'pie',
			selectedMode: 'single',
			hoverAnimation: false,
			avoidLabelOverlap: false,
			color: ['#2a61f7'],
			radius: ['40%', '45%'],
			center: ['70%', '50%'],
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
			data:[{value:3, name:'上门散客'}]
		}]
	};
	eightPie_fourCharts.setOption(option);
	
	var eightPie_five = document.getElementById('eightPie_five');
	var eightPie_fiveCharts = echarts.init(eightPie_five);
    var option = {
		title: {
			text: '出租率渠道占比',
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
			radius: ['10%', '15%'],
			center: ['70%', '50%'],
			label: {
				normal: {position: 'inner'}
			},
			labelLine: {
				normal: {show: false}
			},
			itemStyle: {
				normal: {
					label: {show : false},   //隐藏标示文字
					labelLine: {show : false}   //隐藏标示线
				}
			},
			data:[{value:3, name:'其他'}]
			},{
			type:'pie',
			selectedMode: 'single',
			hoverAnimation: false,
			avoidLabelOverlap: false,
			color: ['#4acad5'],
			radius: ['25%', '30%'],
			center: ['70%', '50%'],
			label: {
				normal: {position: 'inner'}
			},
			labelLine: {
				normal: {show: false}
			},
			itemStyle: {
				normal: {
					label: {show : false},   //隐藏标示文字
					labelLine: {show : false}   //隐藏标示线
				}
			},
			data:[{value:3, name:'美图'}]
			},{
			type:'pie',
			selectedMode: 'single',
			hoverAnimation: false,
			avoidLabelOverlap: false,
			color: ['#2a61f7'],
			radius: ['40%', '45%'],
			center: ['70%', '50%'],
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
			data:[{value:3, name:'上门散客'}]
		}]
	};
	eightPie_fiveCharts.setOption(option);
	
	var eightPie_six = document.getElementById('eightPie_six');
	var eightPie_sixCharts = echarts.init(eightPie_six);
    var option = {
		title: {
			text: '出租率市场占比',
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
			radius: ['10%', '15%'],
			center: ['70%', '50%'],
			label: {
				normal: {position: 'inner'}
			},
			labelLine: {
				normal: {show: false}
			},
			itemStyle: {
				normal: {
					label: {show : false},   //隐藏标示文字
					labelLine: {show : false}   //隐藏标示线
				}
			},
			data:[{value:3, name:'其他'}]
			},{
			type:'pie',
			selectedMode: 'single',
			hoverAnimation: false,
			avoidLabelOverlap: false,
			color: ['#4acad5'],
			radius: ['25%', '30%'],
			center: ['70%', '50%'],
			label: {
				normal: {position: 'inner'}
			},
			labelLine: {
				normal: {show: false}
			},
			itemStyle: {
				normal: {
					label: {show : false},   //隐藏标示文字
					labelLine: {show : false}   //隐藏标示线
				}
			},
			data:[{value:3, name:'美图'}]
			},{
			type:'pie',
			selectedMode: 'single',
			hoverAnimation: false,
			avoidLabelOverlap: false,
			color: ['#2a61f7'],
			radius: ['40%', '45%'],
			center: ['70%', '50%'],
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
			data:[{value:3, name:'上门散客'}]
		}]
	};
	eightPie_sixCharts.setOption(option);
	
	var eightPie_seven = document.getElementById('eightPie_seven');
	var eightPie_sevenCharts = echarts.init(eightPie_seven);
    var option = {
		title: {
			text: '出租率渠道占比',
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
			radius: ['10%', '15%'],
			center: ['70%', '50%'],
			label: {
				normal: {position: 'inner'}
			},
			labelLine: {
				normal: {show: false}
			},
			itemStyle: {
				normal: {
					label: {show : false},   //隐藏标示文字
					labelLine: {show : false}   //隐藏标示线
				}
			},
			data:[{value:3, name:'其他'}]
			},{
			type:'pie',
			selectedMode: 'single',
			hoverAnimation: false,
			avoidLabelOverlap: false,
			color: ['#4acad5'],
			radius: ['25%', '30%'],
			center: ['70%', '50%'],
			label: {
				normal: {position: 'inner'}
			},
			labelLine: {
				normal: {show: false}
			},
			itemStyle: {
				normal: {
					label: {show : false},   //隐藏标示文字
					labelLine: {show : false}   //隐藏标示线
				}
			},
			data:[{value:3, name:'美图'}]
			},{
			type:'pie',
			selectedMode: 'single',
			hoverAnimation: false,
			avoidLabelOverlap: false,
			color: ['#2a61f7'],
			radius: ['40%', '45%'],
			center: ['70%', '50%'],
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
			data:[{value:3, name:'上门散客'}]
		}]
	};
	eightPie_sevenCharts.setOption(option);
	
	var eightPie_eight = document.getElementById('eightPie_eight');
	var eightPie_eightCharts = echarts.init(eightPie_eight);
    var option = {
		title: {
			text: '出租率市场占比',
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
			radius: ['10%', '15%'],
			center: ['70%', '50%'],
			label: {
				normal: {position: 'inner'}
			},
			labelLine: {
				normal: {show: false}
			},
			itemStyle: {
				normal: {
					label: {show : false},   //隐藏标示文字
					labelLine: {show : false}   //隐藏标示线
				}
			},
			data:[{value:3, name:'其他'}]
			},{
			type:'pie',
			selectedMode: 'single',
			hoverAnimation: false,
			avoidLabelOverlap: false,
			color: ['#4acad5'],
			radius: ['25%', '30%'],
			center: ['70%', '50%'],
			label: {
				normal: {position: 'inner'}
			},
			labelLine: {
				normal: {show: false}
			},
			itemStyle: {
				normal: {
					label: {show : false},   //隐藏标示文字
					labelLine: {show : false}   //隐藏标示线
				}
			},
			data:[{value:3, name:'美图'}]
			},{
			type:'pie',
			selectedMode: 'single',
			hoverAnimation: false,
			avoidLabelOverlap: false,
			color: ['#2a61f7'],
			radius: ['40%', '45%'],
			center: ['70%', '50%'],
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
			data:[{value:3, name:'上门散客'}]
		}]
	};
	eightPie_eightCharts.setOption(option);
}