
## 时间选择 

### 功能

- 提供弹出的方式选择时间
- 时间格式配置
- 支持设置最大时间和最小时间
- ...


### 属性

属性名称 | 类型  | 说明 | 是否必要
---|---|---|---
show | Boolean | 控制组件是否展示 | 是
wrapperClassName | String | 扩展样式名称 | 否
formart | String | 时间格式如：yyyy-MM-dd | 否
maxDate | date | 最大时间 new Date() | 否
onRenderItem | Function | 当渲染每一项的回调,需要返回一个组件实例 | 否


### API

API |说明 
---|---|
show | 组件实例方法 展示组件 
hide | 组件实例方法 隐藏组件  


### 使用示例



```
import DatePicker from 'snk/democomponent'


<DatePicker ref={(instance)=>{this.datePicker = instance;}} show={show} formart='yyyy-MM-dd'/>


this.datePicker.hide();
```