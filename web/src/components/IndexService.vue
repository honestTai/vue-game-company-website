<template>
    <div class="wrap-block">
        <div class="content-blok service-idea">
            <div class="service-idea">
                <div class="idea-left">
                    <img :src="serviceIdeaImg[0].path" :alt="serviceIdeaImg[0].name">
                </div>
                <div class="idea-right">
                    <div class="block-line"></div>
                    <p class="idea-title">{{ serviceIdeaInfo.ideaTitle }}</p>
                    <p class="idea-subtitle">{{ serviceIdeaInfo.ideaSubTitle }}</p>
                    <img :src="serviceIdeaImg[1].path" :alt="serviceIdeaImg[1].name">
                    <p class="idea-desc">{{ serviceIdeaInfo.ideaDesc }}</p>
                    <router-link to="/news">
                        <el-button type="primary" round>了解更多</el-button>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="content-blok service-case">
            <div class="service-case">
                <div class="block-line"></div>
              <p class="service-info-title">我们的理念与行业优势</p>
              <p class="service-info-subtitle">我们已经创建打造多款游戏，创造了会呼吸的江湖</p>
                <div class="case-list">
                    <div class="case-info" v-for="(item, index) in caseList" :key="index">
                        <el-card :body-style="{ padding: '0px' }" shadow="hover">
                            <img :src="item.path" :alt="item.desc">
                        </el-card>
                        <el-progress :percentage="50" :show-text="false"></el-progress>
                        <p class="case-desc">{{ item.desc }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup name="">
import { onBeforeMount, onMounted, ref } from 'vue'
// 这里演示一下如何实现复杂类型的定义，使用ts接口继承
interface BaseItem {
    path: string;
}
interface ServiceItem extends BaseItem {
    description: string;
}
interface ImgItem extends BaseItem {
    name: string;
}
interface CaseItem extends BaseItem {
    desc: string;
}
// 其实不用这么复杂，只是演示而已
type InfoData = {
    ideaTitle: string;
    ideaSubTitle: string;
    ideaDesc: string;
}
const serviceList = ref<ServiceItem[]>([])
const serviceIdeaInfo = ref<InfoData>({
  ideaTitle: '服务理念',
  ideaSubTitle: 'SERVICE IDEA',
  ideaDesc: '专注游戏开发，开发出多款大型游戏。'
})
const serviceIdeaImg = ref<ImgItem[]>([])
const caseList = ref<CaseItem[]>([])
const percentage = ref('50')
onBeforeMount(() => {
  serviceList.value = [
    {
      description: 'MOBA游戏',
      path: require('../assets/img/index/bigData.webp')
    },
    {
      description: 'AI娱乐',
      path: require('../assets/img/index/media.webp')
    },
    {
      description: 'VR',
      path: require('../assets/img/index/internet.webp')
    },
    {
      description: '游戏生活',
      path: require('../assets/img/index/cloud.webp')
    }
  ]
  serviceIdeaImg.value = [
    {
      name: 'lefImg',
      path: require('@/../src/game5.jpg')
    },
    {
      name: 'rightImg',
      path: require('@/../src/game5.jpg')
    }
  ]
  caseList.value = [
    {
      desc: '呼吸的江湖',
      path: require('@/../src/1.png')
    },
    {
      desc: '生化危机8',
      path: require('@/../src/2.png')
    },
    {
      desc: '生化危机6',
      path: require('@/../src/3.png')
    },
    {
      desc: '生化危机5',
      path: require('@/../src/4.png')
    }
  ]
})
</script>
<style lang="less" scoped>
.wrap-block {
    position: relative;
    padding-top: 54px;

    .content-block {
        position: relative;
        overflow: hidden;
    }
}

.service-block {
    max-width: 1440px;
    height: 500px;
    margin: 0 auto;
    text-align: center;
    overflow-x: hidden;

    .block-line {
        margin: 0 auto 12px;
        width: 24px;
        height: 4px;
        background-color: #3370ff;
        border-radius: 100px;
    }

    .service-info-title {
        font-weight: 700;
        font-size: 32px;
        position: relative;
        bottom: 2px;
        //padding-top: 60px;
    }

    .service-info-subtitle {
        font-size: 16px;
        line-height: 1.5;
        color: #646a73;
        margin-top: 30px;
    }

    .service-list {
        display: flex;
        justify-content: space-evenly;
        text-align: center;
        margin: 70px auto 0 auto;
    }

    .service-title-shadow {
        width: 111px;
        height: 111px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: .3s;
    }

    .service-title-shadow:hover {
        width: 111px;
        height: 111px;
        border-radius: 50%;
        transform: scale(1.05) translateY(-1px);
        box-shadow: 0 6px 20px 0 rgba(0, 0, 0, .15);
    }

    .service-name {
        margin-top: 30px;
        font-weight: 600;
        font-size: 20px;
    }
}

.service-idea {
    background-color: #F5F5F5;
    width: 100%;

    .service-idea {
        max-width: 1440px;
        overflow: hidden;
        display: flex;
    }

    .idea-left img {
        width: 600px;
    }

    .idea-right {
        height: 500px;
        width: calc(100%-600px);
        margin-left: 100px;
        padding-top: 50px;

        .block-line {
            margin: 0 0 12px 0;
            width: 24px;
            height: 4px;
            background-color: #3370ff;
            border-radius: 100px;
        }

        .idea-title {
            font-weight: 700;
            font-size: 32px;
            position: relative;
            bottom: 2px;
            //padding-top: 60px;
        }

        .idea-subtitle {
            font-size: 16px;
            line-height: 1.5;
            color: #646a73;
            margin-top: 10px;
        }

        img {
            width: 500px;
            height: 200px;
            object-fit: cover;
            margin-top: 40px;
            margin-bottom: 30px;
            padding: 10px;
            border: #d3dce6 2px dashed;
        }

        .idea-desc {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 4;
            overflow: hidden;
            max-height: 88px;
            max-width: 550px;
            font-size: 14px;
            line-height: 30px;
            color: #646a73;
        }

        .el-button {
            margin-top: 40px;
        }
    }
}

.service-case {
    background-color: #FFFFFF;
    width: 100%;

    .service-case {
        max-width: 1440px;
        //height: 700px;
        overflow: hidden;
        margin: 0 auto;
        text-align: center;
        padding-top: 50px;

        .block-line {
            margin: 0 auto 12px;
            width: 24px;
            height: 4px;
            background-color: #3370ff;
            border-radius: 100px;
        }

        .case-title {
            font-weight: 700;
            font-size: 32px;
            position: relative;
            bottom: 2px;
            //padding-top: 60px;
        }

        .case-subtitle {
            font-size: 16px;
            line-height: 1.5;
            color: #646a73;
            margin-top: 10px;
        }

        .case-list {
            display: flex;
            justify-content: space-evenly;
        }

        .el-card {
            width: 247px;
            height: 217px;
            margin-top: 40px;
        }

        .el-progress {
            margin-top: 10px;
        }

        /deep/ .el-progress-bar__outer {
            height: 2px !important;
        }

        .case-desc {
            margin-top: 30px;
            margin-bottom: 60px;
            font-weight: 500;
            font-size: 14px;
        }
    }
}
</style>
