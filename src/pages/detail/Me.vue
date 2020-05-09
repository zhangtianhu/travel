<template>
    <div>
    <per-son v-if="show" :childMsg='name' ></per-son>
    <div id="top" v-if="a">
        <div class="demo-avatar">
            <Avatar style="color: #ffffff;background-color: rgb(237,200,0);position:absolute;top:10%;left:43%;width:60px;height:60px;padding:14px">
                {{name}}
            </Avatar>
        </div>
        <div style="position:relative;top:140px;left:42%;color:#ffffff">
        <svg t="1588928675296" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5419" width="20" height="20"><path d="M638.76 417.036L379.04 676.754 341 638.712l259.718-259.718z" fill="#F469FD" p-id="5420"></path><path d="M794.7 326.7L691.1 223.1c-40-40-105.1-40-145.2 0L270.2 498.8c-17.5 17.5-27.4 39.9-29.5 62.8L200 768.9l-0.3 1.8c-2.1 16.5 3.5 32.8 15.2 44.5 10.1 10.1 23.6 15.7 37.7 15.7 2.3 0 4.6-0.1 6.8-0.4l1.8-0.2L458.3 777c22.8-2.7 44-12.8 60.5-29.3L794.5 472c40.2-40.1 40.2-105.2 0.2-145.3z m-176.2-79.8c12.5 0 25 4.8 34.5 14.3l103.6 103.6c19 19 19 50 0 69.1l-12.4 12.4-172.7-172.7 12.4-12.4c9.6-9.6 22.1-14.3 34.6-14.3zM253.3 776.7l24.5-125 93.2 93.2-117.7 31.8z m227.6-67.2c-7.9 7.9-17.9 12.7-28.8 13.9l-0.2-0.6-3 0.8c-0.8 0-1.7 0.1-2.5 0.1-13 0-25.3-5.1-34.5-14.3L308.2 605.9C298 595.7 293.3 582 294 568.6l1-4.9-0.4-0.1c1.6-9.8 6.1-19.2 13.6-26.8l225.2-225.2 172.7 172.7-225.2 225.2z" fill="#504CFF" p-id="5421"></path></svg>
        {{text}}
        </div>
        
    </div>
    <div>
        <List border>
            <ListItem>我的收藏</ListItem>
            <ListItem>我的设置</ListItem>
            <ListItem>关于Travl</ListItem>
            <router-link to='Login'><ListItem>退出登录</ListItem></router-link>
        </List>
    </div>
    <home-tab></home-tab>
    </div>
</template>
<script>
    import HomeTab from './components/Tab'
    import PerSon from './Person'
    export default {
        name : 'Me',
        components: {
            HomeTab,
            PerSon
        },
        data () {
		  return {
            text:'UU',
            name:'Y',
            show:false,
            a:true
		  }
        },
        methods:{
            toPerson:function(){
                this.show = true
                this.a = false

            }
        },
    }
</script>
<style>
#top{
    height: 200px;
    background-image:url('3.jpg') ;
    
}
</style>
