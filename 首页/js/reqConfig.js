/*****************************增值测试地址*************************************/
var requestUrl = "";	//请求后台地址business
// var requestUrl = "http://localhost:8051/";	//请求后台地址
//var requestUrl = "http://rap.ennew.dev/mockjs/32/";	//请求rap地址
var currEnv = "php";	//html或者php

var urlStr = "http://localhost:8051/static/";
var jsonReqHeaderData = {"appId":"21064","sid":""};
getCookie("sid",jsonReqHeaderData);

/*****************************用户测试地址*************************************/
//var requestUrl = "http://10.4.105.172:8051";	//请求后台地址

/*****************************本机测试地址*************************************/
//var requestUrl = "http://localhost:8080";	//请求后台地址


/******************************************************************************
 *                               地址跳转
 *    author:zhongwei by egou
 *    version:1.0
 *    updateTime: 2017-07-28
 *    参数说明:
 *		strUrl:跳转地址   status:错误码，404,500这种,  
 *      jumpType:0表示本页刷新,1表示打开新页面
 *
 ******************************************************************************/


function comJudgeLogin(){
	$.ajax({ 
	    url: requestUrl+'/vasCommon/getUserInfo', 
	    type:'post',
	    data:'',
	    async:false,
	    success:function (data){
	    	data = JSON.parse(data);

	    	//status==1已登录，0未登录
	    	if(typeof(comJudgeLogin) == 'function'){
	    		comJudgeLoginLogic(data);
	    	}
	    },
	    error:function (data){
	    	alert(data)
	    }
	});
}


/******************************************************************************
 *                               地址跳转
 *    author:zhongwei by egou
 *    version:1.0
 *    updateTime: 2017-07-28
 *    参数说明:
 *      strUrl:跳转地址   status:错误码，404,500这种,  
 *      jumpType:0表示本页刷新,1表示打开新页面
 *
 ******************************************************************************/

function jumpUrl(strUrl,status,jumpType,data)
{
    //if(jumpType == "-1")
    //  return false;
    if(status != null)
    {
        var objWin = (window.parent.location.href == window.location.href) ? window.location : window.parent.location;
        switch(status)
        {
            /*case "1":
                (jumpType == 0) ? window.location.href = "" : window.open("");
                break;*/
            case "0":
                alert(data.msg);
                break;
            case "999999":
                objWin.href = "/shop/index.php?act=login";
                break;
            default:
                if(strUrl != "" && strUrl != null)
                    (jumpType == 0) ? window.location.href = strUrl : window.open(strUrl);
                break;
        }
    }
}
$(function(){
	if(jsonReqHeaderData.sid=="1"||jsonReqHeaderData.sid==""){
        if(GetQueryString("sid")){
            checkCookie(GetQueryString("sid"));
        }
//      else if($("#hiddenSpan").text()!=1){
//          window.location.href="http://localhost:8051/channelfrontdesk/html-www/index.html"
//      }
    }
})

function checkCookie(val){
    var sid = val;//document.getElementById("userName").value;
    setCookie('sid',sid,1,jsonReqHeaderData);
    getCookie("sid",jsonReqHeaderData);
}
function goHref(strUrl){
    var currUrl = window.location.href;
    if(currUrl.indexOf(".alpha") > -1){
        //跳转到alpha环境
        if(strUrl.indexOf(".dev") >-1){
            strUrl = strUrl.replace(".dev1",".alpha");
        }
    } else{
        //跳转到dev环境
        if(strUrl.indexOf(".alpha") >-1){
            strUrl = strUrl.replace(".alpha",".dev1");
        }
    }
    return strUrl;
}
/******************************************************************************
 *                               头部加载
 *    author:
 *    version:1.0
 *    updateTime: 2017-07-28
 *    参数说明:
 *		num: 1代表有侧边栏(990px)  2代表没有侧边栏(890px) 3代表没有侧边栏(1190px)
 *      typeId: 1代表采购商  2代表供应商  3代表运营端  4代表企业中心  5代表消息中心
 *
 ******************************************************************************/
//var creatHeaderUrl = "http://localhost:8051/";
//function creatHeader(num,typeId){
//  // num 1代表有侧边栏(990px)  2代表没有侧边栏(890px) 3代表没有侧边栏(1190px)
//  // typeId 1代表采购商  2代表供应商  3代表运营端  4代表企业中心  5代表消息中心
//  if(typeId == 1){
//      $("#js-loader").load(creatHeaderUrl + "static/purchaser/commonHeader/commonHeader.html",function(){
//          determineWhether(num);
//      });
//  }else if(typeId == 2){
//      $("#js-loader").load(creatHeaderUrl + "static/supplier/commonHeader/commonHeader.html",function(){
//
//          determineWhether(num);
//      });
//  }else if(typeId == 3){
//      $("#js-loader").load(creatHeaderUrl + "static/operater/commonHeader/commonHeader.html",function(){
//          determineWhether(num);
//      });
//  }else if(typeId == 4){
//      $("#js-loader").load(creatHeaderUrl + "static/enterpriser/commonHeader/commonHeader.html",function(){
//          determineWhether(num);
//      });
//  }else if(typeId == 5){
//      $("#js-loader").load(creatHeaderUrl + "static/messager/commonHeader/commonHeader.html",function(){
//          determineWhether(num);
//      });
//  }
//}
//function determineWhether(num)
//{
//  if(num == 1){
//      $("#js-mainWidth").css({
//          "right":"0px",
//          "width":"990px"
//      });
//      $("#js-leftNavBar").show();
//  }else if(num == 2){
//      $("#js-mainWidth").css({
//          "right":"150px",
//          "width":"890px"
//      });
//      //console.log($("#js-leftNavBar"));
//      $("#js-leftNavBar").hide();
//  }else if(num == 3){
//      $("#js-mainWidth").css({
//          "right":"0",
//          "width":"1190px"
//      });
//      //console.log($("#js-leftNavBar"));
//      $("#js-leftNavBar").hide();
//  }
//  $("#js-mainWidth").show();
//}
////});
//$(function(){
//
//  if($("#hiddenSpan").text()!=1){
//      $("body").children().eq(0).before("<div id='headerLoad'></div>").css({"marginLeft":"200px","marginTop":"70px","width":"auto"});
//      $("#headerLoad").load("http://localhost:8051/static/theGrid/theGridMarketHead/html-www/channelOperBackhead.html");
//      $("body").append("<div id='leftLoad'></div>")
//      $("#leftLoad").load("http://localhost:8051/static/theGrid/theGridMarketHead/html-www/channelOperBackside.html",function(){
//          var arr=[["角色管理","人员管理","订单中心","网格超市","售后管理","商品中心"],
//              [
//                  ["角色管理","新增角色"],
//                  ["人员管理"],
//                  ["销售订单管理","出库单管理","发运单管理"],
//                  ["超市管理","入驻管理"],
//                  ["售后管理"],
//                  ["商品管理","渠道后台类目管理","渠道前台类目管理","补货管理","入库单管理","库存管理"]
//              ],
//              [["/static/theGrid/theGridLog/html-www/roleManagement.html",
//                  "/static/theGrid/theGridLog/html-www/addRole.html"],
//                  ["/static/theGrid/theGridLog/html-www/acctManageSuperAdmin.html"],
//                  ["/static/theGrid/theGridMarketOrderCenter/html-www/saleOrderWarehouse.html","/static/theGrid/theGridMarketOrderCenter/html-www/outBoundOrderManage.html","/static/theGrid/theGridMarketOrderCenter/html-www/dispatchBillManage.html"],
//                  ["/static/theGrid/theGridSupermarket/theGridMarketCont/html-www/supermarketManagement.html","/static/theGrid/theGridSupermarket/theGridMarketCont/html-www/enterManagement.html"],
//                  ["/static/theGrid/theGridMarketAfterSale/html-www/salesmanagementlist.html"],
//                  ["/static/theGrid/theGridMarketGoodcenter/html-www/goodsManage.html","/static/theGrid/theGridMarketGoodcenter/html-www/channelBackClassManage.html","/static/theGrid/theGridMarketGoodcenter/html-www/newThreeClass.html","/static/theGrid/theGridMarketGoodcenter/html-www/replenishmentOrderManager.html","/static/theGrid/theGridMarketGoodcenter/html-www/warehouseWarrantManage.html","/static/theGrid/theGridMarketGoodcenter/html-www/stockControl.html"]
//
//
//
//
//              ]];
//          for(var j=0;j<arr[0].length;j++){
//              var cloneLi;
//              cloneLi = $("#temLi").clone(true)[0];
//              cloneLi.id = "cloneLi";
//              cloneLi.style.display = "";
//              $(cloneLi).find(".publicList").text(arr[0][j]);
//              $(cloneLi).addClass("receMtLi");
//              $(cloneLi).css("cursor","pointer");
//              $("#receiptMan").append(cloneLi);
//          }
//          $("#receiptMan .receMtLi").on("click",function(){
//              debugger;
//              $("#receiptMan #cloneOneLi").remove();
//              var index=$(this).index()-1
//              for(var i=0;i<arr[1][index].length;i++){
//                  var cloneOneLi;
//                  cloneOneLi = $("#temOneLi").clone(true)[0];
//                  cloneOneLi.id = "cloneOneLi";
//                  cloneOneLi.style.display = "";
////                    $(cloneOneLi).addClass("linkSkip");
//                  $(cloneOneLi).find(".subsetName").text(arr[1][index][i]);
//                  $(cloneOneLi).attr("href",arr[2][index][i])
//                  $("#receiptMan #cloneLi").eq(index).find(".subsetUl").append(cloneOneLi);
//                  $(cloneOneLi).css("cursor","pointer");
//                  $(cloneOneLi).on("click",function(){
//                      window.location.href=$(this).attr("href");
//                  })
//              }
//          })
//      });
//  }else{
//      $("body").children().eq(0).before("<div id='headerLoad'></div>").css({"marginTop":"60px","width":"auto","height":"682px"});
//      $("#headerLoad").load("http://localhost:8051/static/theGrid/theGridMarketHead/html-www/channelOperBackhead.html",function(){
//          $(".receiptManagement-status").css("display","none");
//          $(".receiptManagement-userState").css("display","none");
//      });
//
//  }
//
//});

