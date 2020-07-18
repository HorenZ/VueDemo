## 组件中使用v-model
> Vue对于组件提供一个语法糖v-model，如果使用v-model，则组件必须接收一个prpos为value，比如$emit 一个事件为input形如：
```
 <counter v-model="num1"></counter>
 <counter :value='num1' @input="num1=$event"></counter>
```

## 插槽
1.插槽可具有默认数据如```<slot>默认值</slot>```
2.具名插槽可以使调用者更准确的传入对应数据，形如：
```
    <slot name="a"></slot>

    <template v-slot:a>
        xxx
    </template>
    或简写
    <template #a>
        xxxx
    </template>
```
3.如果调用者希望自定义内容或样式，可使用作用域插槽，即绑定了数据的插槽
```
    <slot :id="item.id></slot>

    <template #default="scope">
        <button @click="del(scope.id)">删除</button>
    </template>
```

## 混入，可给Vue和Vue组件对象，扩展统一属性或方法

```
    Vue.mixin({
        methods:{
            $get(url){
                return axios.get(url)
            }
        }
    })

    new Vue({
        created(){
            this.$get('xxxx')
        }
    })
```

## fetch 下一代JS请求对象，天生支持promise，第一次then返回数据流，可进行对应处理并return，二次处理。
>注意：fetch请求总是成功，即使遇到404/500，依然执行then
```
    fetch(url).then(res=>{
        //数据stream流
        return res.json()
    }).then(res=>{
        // 结果数据

    })
```