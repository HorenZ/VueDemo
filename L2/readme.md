#

#大麦网

new Vue()

1.做初始化工作
2.执行beforeCreate钩子函数（如果有）
3.初始化data数据
4.执行created钩子函数（如果有）
5.判断是否传了el选项
6.如果没有传，则等到实例vm主动调用$mount()再继续执行
7.如果传了，在判断是否有传入template选项
8.如果没有传template，则将el对应容器的所有内容当成template
9.将template通过render函数编译成vdom虚拟DOM树 


let por = axios.get(url,{}).then(function(res){
    console.log(res)
})

find 返回找到的第一个》》对象
filter 返回找到的所有对象数组