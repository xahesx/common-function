/**
 * 常用功能：
 * 1.页面局部刷新
 * 2.页面动态添加（行）
 * 3.页面取消（弹框隐藏并取消选中状态）
 * 4.页面添加（添加行和列）
 * 5.页面删除（删除整行）
 * 6.选项卡
 * 7.编辑跳转（选中后跳转）
 * 8.确认删除（确认后删除）
 * 9.动态渲染菜单（从后台获取数据）
 * 10.复选框全选反选（包括动态生成以后的复选框）
 * 11.文本框字数限制
 * 2018/8/31/13:56
 */

//页面局部刷新
$("#attr").click(function(){//id为a标签里的id，name为a标签里的name
	var name= $(this).attr("name");
	 $("#ifranme").attr("src",name).ready();//动态改变iframe里的src路径
})

//属性页面动态添加
$("#tianjiasubmit").click(function(){
    //获取下标
        let n = $("#append td").index();
        let arr = [];
        for(n = 0;n<$("#append td").length;n++){
            //获取相应下标下input框的value值
            let str = $("#append td").eq(n).children().val();
            arr.push(str);
        }
        $(".tableinput").append("<tr>"
        +"<td>"+arr[0]+":</td>"
        +"<td>"
        +"<input type='text'readonly='readonly' value='"+arr[2]+"' style='width: 120px; ime-mode: disabled; height: 26px; padding: 0px;'/>"
        +"<a href='javascript:;' class='tiny-icon iconfont icon-shanchu' title='创建'></a>"
        +"</td>"
        +"</tr>");
        $(".icon-shanchu").css("color","red");
        $(".icon-shanchu").click(function(){
            let con = confirm("确认删除吗？");
            if(con==true){
                $(this).parent().parent().remove();
            }
        });
        $("#append").css("display","none");
    })

    //联系页面取消
    $("#btn2").click(function(){
        $("#txtaddBox").css("display","none");
        $("#tianjia").css("display","none");
        $("input[name='sel']:checked").attr("checked",false);
    })
    //联系页面添加
    $("#btn1").click(function(){
        $("#alternatecolorSmall input[name='sel']:checked").each(function() { // 遍历选中的单选框
            n = $(this).parents("tr").index()+1;  // 获取单选框所在行的顺序
            let str = $("table#alternatecolorSmall").find("tr:eq("+n+")").find("td");
            arr = [];
            for(n = 0;n<str.length;n++){
                let htmlText = $(str[n]).html();
                arr.push(htmlText);
            }
            $("#alternatecolor").append("<tr>"
            +"<td>"
            +"<input name='sel' type='checkbox' value=''>"
            +"</td>"
            +"<td style='display: none;'>2</td>"
            +"<td>"+arr[2]+"</td>"
            +"<td>"+arr[3]+"</td>"
            +"<td>"+arr[4]+"</td>"
            +"<td>"+arr[5]+"</td>"
            +"<td>"+arr[6]+"</td>"
            +"<td>张三</td>"
            +"<td>"+arr[7]+"</td>"
            +"<td>无</td>"
            +"<td>gtx-1060</td>"
            +"<td>gtx-1060</td>"
            +"<td>英特尔</td>"
            )
        });
        $("#tianjia").css("display","none");
        $("#txtaddBox").css("display","none");
        $("input[name='sel']:checked").attr("checked",false);	//关闭弹出框后取消选中状态
    })

    //联系页面删除
    $("#removeTab").click(function(){
        if($("input[name='sel']").is(":checked")){
            let con = confirm("确认删除吗？");
            if(con==true){
                $("input[name='sel']:checked").each(function() { // 遍历选中的单选框
                $(this).parent().parent().remove();
                });
            }
        }else{
            alert("请先进行选择！");
        }
        
    })

    //选项卡
$(".message li").click(function() {
	//通过.index()方法获取元素下标，从0开始，赋值给某个变量
	var _index = $(this).index();
	var i = $(".leftside-content-header .section-icon").index();
	$(this).children().addClass("on").parent().siblings().children().removeClass("on");
		for(i = 0;i<$(".leftside-content-header .section-icon").length;i++){
			if(i==_index){
				$(".leftside-content-header .section-icon").eq(i).show().siblings().hide();
			}
		}
		$(".clx").css("display","block");
})

//编辑跳转
function bianji(){
	if($("#facitilitydiv table input[name='sel']").is(":checked")){
		window.location.href="../../page/equipment/equipment-属性.html"
	}else{
		alert("请先进行选择！");
	}
}

//确认删除
function shan() {
	if($("input[name='sel']").is(":checked")){
		let con = confirm("确认删除吗？");
		if(con==true){
			$("input[name='sel']:checked").each(function() { // 遍历选中的单选框
				n = $(this).parents("tr").index()+1;  // 获取单选框所在行的顺序
				$("table#alternatecolor").find("tr:eq("+n+")").remove();
			});
		}
	}else{
		alert("请先进行选择！");
	}
}

/**============  动态渲染菜单   ============ */


var json = [
    {
        "icon": "",
        "menuId": 18,
        "name": "首页",
        "orderNum": 0,
        "parentId": 0,
        "parentName": "",
        "perms": "",
        "type": 0,
        "url": ""
    }, {
        "icon": "",
        "menuId": 19,
        "name": "我的业务",
        "orderNum": 1,
        "parentId": 0,
        "parentName": "",
        "perms": "",
        "type": 0,
        "url": "",
        "list":[
            {
                "icon": "",
                "menuId": 24,
                "name": "审批",
                "orderNum": 0,
                "parentId": 19,
                "parentName": "",
                "perms": "",
                "type": 0,
                "url": "",
                "list":[
                    {
                        "icon": "",
                        "menuId": 26,
                        "name": "问题审批",
                        "orderNum": 0,
                        "parentId": 24,
                        "parentName": "",
                        "perms": "",
                        "type": 1,
                        "url": "approval/showtroublelist.do"
                    },
                    {
                        "icon": "",
                        "menuId": 27,
                        "name": "风险审批",
                        "orderNum": 0,
                        "parentId": 24,
                        "parentName": "",
                        "perms": "",
                        "type": 1,
                        "url": "risk/showtroublelist.do"
                    },{
                        "icon": "",
                        "menuId": 28,
                        "name": "运维审批",
                        "orderNum": 0,
                        "parentId": 24,
                        "parentName": "",
                        "perms": "",
                        "type": 1,
                        "url": "approval/showspareapplylist.do"
                    }
                ]
            }
        ]
    }, {
        "icon": "",
        "menuId": 25,
        "name": "知识库",
        "orderNum": 0,
        "parentId": 19,
        "parentName": "",
        "perms": "",
        "type": 0,
        "url": "",
        "list":[
            {
                "icon": "",
                "menuId": 29,
                "name": "问题知识库",
                "orderNum": 0,
                "parentId": 25,
                "parentName": "",
                "perms": "",
                "type": 1,
                "url": "approval/showtrknowledgelist.do"
            },{
                "icon": "",
                "menuId": 30,
                "name": "风险知识库",
                "orderNum": 0,
                "parentId": 25,
                "parentName": "",
                "perms": "",
                "type": 1,
                "url": "risk/showtrknowledgelist.do"
            },{
                "icon": "",
                "menuId": 31,
                "name": "运维备件库",
                "orderNum": 0,
                "parentId": 25,
                "parentName": "",
                "perms": "",
                "type": 1,
                "url": "approval/knowlegespareapply.do"
            }
        ]
    }   
]

/*递归实现获取无级树数据并生成DOM结构*/
var str = "";
var forTree = function(o){
     for(var i=0;i<o.length;i++){
            var urlstr = "";
         try{
                 if(typeof o[i]["url"] == "undefined"){
                          urlstr = "<div><span>"+ o[i]["name"] +"</span><ul>";
                 }else{
                     urlstr = "<div><span>"+"<a href="+ o[i]["url"] +">"+ o[i]["name"] +"</a></span><ul>"; 
                 }
             str += urlstr;
             if(o[i]["list"] != null){
                 forTree(o[i]["list"]);
             }
            str += "</ul></div>";
         }catch(e){}
 }
 return str;
}
/*添加无级树*/
document.getElementById("menuTree").innerHTML = forTree(json);

/*树形菜单*/
var menuTree = function(){
 //给有子对象的元素加
     $("#menuTree ul").each(function(index, element) {
         var ulContent = $(element).html();
         var spanContent = $(element).siblings("span").html();
         if(ulContent){
             $(element).siblings("span").html(spanContent) 
         }
     });

     $("#menuTree").find("div span").click(function(){
          var ul = $(this).siblings("ul");
         var spanStr = $(this).html();
          var spanContent = spanStr.substr(3,spanStr.length);
         if(ul.find("div").html() != null){
             if(ul.css("display") == "none"){
                 ul.show(300);
              }else{
                 ul.hide(300);
              }
         }
     })
}()

/*树形列表展开*/
$("#btn_open").click(function(){
    $("#menuTree ul").show(300);
     curzt("-");
})

/*收缩*/
$("#btn_close").click(function(){
     $("#menuTree ul").hide(300);
     curzt("+");
})
function curzt(v){
 $("#menuTree span").each(function(index, element) {
     var ul = $(this).siblings("ul");
     var spanStr = $(this).html();
     var spanContent = spanStr.substr(3,spanStr.length);
     if(ul.find("div").html() != null){
         $(this).html("["+ v +"] " + spanContent);
      }
 }); 
}

//复选框全选反选
$("#all").on('click',function() {  //用on来绑定事件
	$("input[name='sel']").prop("checked", this.checked);  //prop来改变属性checked
});  

//当有一个选中状态取消时
$("input[name='sel']").on('click',function() {  
	var $subs = $("input[name='sel']");  
	$("#all").prop("checked" , $subs.length == $subs.filter(":checked").length ? true :false);  //filter遍历checked，选中状态长度等于复选框长度时，三元表达式返回true,当选中状态的长度不等于复选框长度时，返回false
});


//文本框字符数限制
<table>
    <tr>
        <td><label>原因描述<span class="cred">*</span></label></td>
        <td>
        <textarea id="orgAuditDesc" name="orgAuditDesc" placeholder="请填写审核原因描述"></textarea>
        <p><span id="text-count">100</span>/100</p>
        </td>
    </tr>
</table>

/*字数限制*/
$("#orgAuditDesc").on("input propertychange", function () {//propertychange 动态监听input中value
    var $this = $(this),
            _val = $this.val(),
            count = "";
    if (_val.length > 100) {
        $this.val(_val.substring(0, 100));
    }   
    count = 100 - $this.val().length;
    $("#text-count").text(count);
});