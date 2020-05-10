<template>
<div>
    <div style="height:40px;background-color:rgb(0,188,212);width:100%;padding-left:46%;padding-top:2px">
        <svg t="1589002755739" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2145" width="36" height="36"><path d="M864.1 716.9H143.9c-8.5 0-15.4 6.9-15.4 15.4s6.9 15.4 15.4 15.4h720.2c8.5 0 15.4-6.9 15.4-15.4s-6.9-15.4-15.4-15.4zM640.6 852H212.7c-8.5 0-15.4 6.9-15.4 15.4s6.9 15.4 15.4 15.4h427.8c8.5 0 15.4-7 15.5-15.4 0-8.5-6.9-15.4-15.4-15.4zM792.7 852h-75.1c-8.5 0-15.4 6.9-15.4 15.4s6.9 15.4 15.4 15.4h75.1c8.5 0 15.4-7 15.4-15.4 0-8.5-6.9-15.4-15.4-15.4zM903.1 570.6c35.6-45.1 57.1-101.9 57.1-163.7 0-75-30.5-141.8-80.7-190.1l-0.1 0.1c-3.2-2.9-7.3-4.7-11.9-4.7-9.9 0-17.9 8-17.9 17.9 0 4.6 1.9 8.7 4.7 11.9l-0.1 0.1c39.5 41.2 70.3 103.4 70.3 164.8 0 49.6-15.9 95.4-42.8 132.9l-93.2-133.2c-3.2-4.5-8.3-7.3-13.8-7.6-5.4-0.3-10.9 2-14.5 6.2L630.8 555.5 477.2 336c30-91.8 116-158.5 217.7-158.5 13.3 0 26.3 1.4 39 3.6l0.1-0.4c1.5 0.4 2.9 0.9 4.5 0.9 9.9 0 17.9-8 17.9-17.9 0-8.4-5.9-15.1-13.7-17.1l0.1-0.4c-18.5-4.1-28.2-4.5-47.9-4.5-108.4 0-201.4 65.5-242.5 158.9l-81.1-115.9c-3.5-4.9-9-7.8-15.2-7.6-6 0.2-11.6 3.4-14.7 8.5L209.4 399l0.2 0.1c-1.5 2.6-2.5 5.4-2.5 8.6 0 9.9 8 17.9 17.9 17.9 6.2 0 11.4-3.3 14.6-8.1l0.3 0.2 117.7-190.3L632.8 621H114.3l50-80.8-0.3-0.2c1.9-2.9 3.3-6.1 3.3-9.8 0-9.9-8-17.9-17.9-17.9-6.5 0-11.9 3.6-15.1 8.8l-0.3-0.2-67.1 108.6c-3.4 5.5-3.6 12.5-0.4 18.1 3.2 5.7 9.2 9.2 15.7 9.2H929c6.7 0 12.8-3.7 15.9-9.6 3.1-5.9 2.6-13.1-1.2-18.5l-40.6-58.1zM676.6 621L652 585.8l120.3-139.7L894.6 621h-218z" fill="#ffffff" p-id="2146"></path></svg>
    </div>
    <List>
        <ListItem v-for="item in data" :key="item.title">
            <ListItemMeta  :title="item.title" :description="item.description" />
            <div style="padding:10px">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp{{ item.content }}</div>
            <template slot="action" >
                <li style="margin-left:66px;font-size:18px">
                    <Icon type="ios-star-outline"  :class="{changeColor}" v-on:click="star"/><span :class="{changeColor}"> {{count}}</span>
                </li>
                <li style="margin-left:10px;color:rgb(248,197,74);font-size:18px">
                    <Icon type="ios-thumbs-up-outline" /> 234
                </li>
                <li style="margin-left:10px;color:rgb(248,197,74);font-size:18px">
                    <Icon type="ios-chatbubbles-outline" /> 345
                </li>
            </template>
            
                <img :src="item.src" style="width: 360px;height:220px">
            
        </ListItem>
    </List>
    <home-tab></home-tab>
</div>
</template>
<script>
import HomeTab from './Tab'
    export default {
      components: {
			    HomeTab
		},
        data () {
            return {
                changeColor: false,
                count:123,
                data: [
                  {
                        title: '西沙群岛',
                        avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
                        content: ' 西沙群岛地处北回归线以南，雨量充沛，岛屿附近海域的水温年变化小。这些优越的自然条件形成了西沙群岛奇特的景观。 登上西沙群岛的第一大岛永兴岛，就如走进了一座热带植物园。那里热带植物丛生，四季繁茂。环岛沙堤以内的地区生长着以白避霜花组成的乔木林，越靠岛的中心地带植株越高，越靠近海岸，植株越矮。',
                        src:'http://www.51yala.com/UPLOAD/NewsIMG/200811181610343.jpg'
                    },
                    {
                        title: '大兴安岭',                       
                        avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
                        content: '大兴安岭(Greater Khingan Mountains)是兴安岭的西部组成部分， 位于黑龙江省、内蒙古自治区东北部，是内蒙古高原与松辽平原的分水岭。北起黑龙江畔，南至西拉木伦河上游谷地，东北-西南走向，全长1200多公里，宽200-300公里，海拔1100-1400米，主峰索岳尔济山。大兴安岭原始森林茂密，是中国重要的林业基地之一。主要树木有兴安落叶松、樟子松、红皮云杉、白桦、蒙古栎、山杨等',
                        src:'http://www.51yala.com/UPLOAD/NewsIMG/20071211329431.jpg'
                    },
                    {
                        title: '黄山',                       
                        avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
                        content: ' 黄山市最大的特点是旅游资源丰富，景观独特，不仅有大自然造就的天下无双的山水风光，而且有大量展现中国古老文化的人文景观。方圆154平方公里的黄山风景区无处不景，无景不奇，以奇松、怪石、云海、温泉“四绝”著称于世，徐霞客称赞：“薄海内外无如徽之黄山，登黄山而后天下无山，观止矣”。后人传颂为“五岳归来不看山，黄山归来不看岳。”1985年，黄山作为唯一的山岳风光，被评选为全国十大风景名胜之一；1990年被联合国教科文组织列入世界文化遗产和自然遗产名录。',
                        src:'http://www.51yala.com/UPLOAD/NewsIMG/200611101338413.jpg'
                    },
                    {
                        title: '黄果树瀑布',                       
                        avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
                        content: ' 黄果树瀑布风景区位于贵州省镇宁、关岭两县境内北盘江支流、打帮河上游的白水河和坝陵河上。景区以黄果树大瀑布为中心，以瀑布、溶洞、地下湖为主体，素有“天下奇景”之称。这一带是典型的岩溶地区，长期的河道变迁、袭夺、暗河塌陷、河流下切，致使河床级级跌落，形成了多种多样的瀑布。景区共有地表瀑布18个、地下瀑布14个，可以说是一巨大的瀑布群。在这些瀑布中，黄果树瀑布是白水河上九级瀑布中的最大一级，是我国第一达瀑布，也是亚洲最大的瀑布。除黄果树瀑布外，其四周还分布串串珍珠似的瀑布。世界上著名的瀑布不可胜数，但象黄果树如此集中、姿态各异的瀑布群，则为我国所独有 ',
                        src:'http://www.51yala.com/UPLOAD/NewsIMG/200610201528220.jpg'
                    },
                    {
                        title: '帕米尔高原',                
                        avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
                        content: ' 帕米尔高原是我国的西疆极地，平均海拔5000米以上。它位于新疆喀什市正西和西南的公格尔山、慕士塔格山一带，其最西点接近塔吉斯坦的喀拉湖。公、慕两山号称“冰川之父”，素为登山胜地。帕米尔是古丝绸之路上最为艰险和神秘的一段。当地民谣：一二三雪封山，四五六雨淋头，七八九正好走，十冬腊月开头。七八九是帕米尔高原之旅的黄金季节！',
                        src:'http://www.51yala.com/UPLOAD/NewsIMG/200412311035451.jpg'
                    }
                ]
            }
        },
        methods:{
            star(){
               this.changeColor =!this.changeColor
               this.count+=1
               console.log(this.count,this.changeColor)
            },
            console:function(){
                console.log(this.data)
            }
        },
        mounted(){
            this.console()
        }
    }
</script>
<style lang="stylus">
.ivu-list-item-meta-title{
    font-size:16px;
    color:#2e57bc;
    font-weight: bold;
    margin-left :10px}
.changeColor{
        color:rgb(248,197,74);

    }
</style>
