# 表格组件思路
1.先使用vue做出基本表格效果
2.因为动态表格，列是不固定的，标题和字段都需要自定义，而二者有对应关系
3.所以需要创建复合组件，tb和tb-col, tb作为容器管理数据, 由tb-col指定标题及字段
4.形如：
```
    <tb :data = "userlist">
        <tb-col field='id' label='编号'></tb-col>
        <tb-col field='age' label='年龄'></tb-col>
    </tb-col>

```
5.tb-col的template设置成th标签，用于渲染表头，形如：
```
    <th>{{label}}</th>
```
6.因为tb中包含tb-col，所以tb中需要些slot插槽，因为tb-col是th标签，所以需要将slot放在tr中，形如：
```
    <table>
        <tr>
            <slot></slot>
        </tr>
    </table>
```
7.因为tb中需要根据表头渲染对应字段，所以在tb- co1的created中将field传给父级tb,形如：
```
    tb:
        data(){
            return{
                fieldlist:[]
            }
        }
    tb-col:
        created(){
            this.$parent.filedlist.push(this.field)
        }
```
8. tb根据data循环渲染tr,每行中根据fieldlist渲染td,形如:
```
    <tr v-for="row in data">
        <td v-for="col in fieldlist">
            {{row[col]}}
        </td>
    </tr>
```
9.如需hover效果，可在tb中加个props选项，如canhover : Boolean,在table标签上绑定class,在CSS中使用交集选择器控制行变色，形如
```
    html:
    <tb canhover>...</tb>
    tb:
    prpos:{
        canhover:{
            type:Boolean
        }
    }
    template:
    <table :class="{ canhover : canhover}">

    css:
    .tb.canhover tr:hover{
        background:...
    }
```

