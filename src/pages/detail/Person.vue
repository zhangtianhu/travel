<template>
<div id="per" >
    <div style="position:relative;top:20%;">
    <Select v-model="city" style="width:100%">
        <Avatar src="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar" slot="prefix" size="small" />
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
    <div>
        <Input v-model="name" placeholder="修改昵称" style="width: 100%;margin-top:10px" />
        <Input v-model="txt" placeholder="修改个性签名" style="width: 100%;margin-top:10px" />
    </div>
    <router-link to='Me'>
        <Button style="margin-top:10px" type="default" long @click="sub">保存修改</Button>
    </router-link>
    </div>
</div>
</template>
<script>
    export default {
        props: ['name'],
        data () {
            return {a:true,
                cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    }              
                ],
                city: '',
                txt:'',
            }
        },
        methods: {
		  sub:function(){
              this.a=false
          }
		  },
    }
</script>
<style>
#per{
    height: 640px;
    width: 100%;
    background-image:url('3.jpg')
}
</style>