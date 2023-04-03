<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" xs="12">
        <v-carousel>
          <v-carousel-item v-for="ad in ads"
  		:key="ad.id"
  		:src="ad.src" cover>
    <div class="ad-link">
  	<v-btn class="error" :to="'/ad/' + ad.id">
  		{{ ad.title }}
  	</v-btn>
  </div>
  </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
  <v-container grid-list-lg>
    <v-row justify="center">
      <v-col cols="12" sm="6" md="4" xs="12" v-for="ad in ads" :key="ad.id">
        <v-card>
          <v-img :src="ad.src" height="200px"></v-img>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb0">{{ ad.title }}</h3>
              <div>{{ ad.desc }}</div>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text :to="'/ad/' + ad.id">Open</v-btn>
            <v-btn raised color="primary">
              Buy
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

  
  <script>
  export default {
    data() {
      return {
        ads: [
          {
            title: "BMW M5 Competition",
            desc: "Новые Автомобили M BMW 5 Серии",
            promo: true,
            src: "https://www.bmw.ru/content/dam/bmw/marketRU/bmw_ru/all-models/m-series/m5-sedan/2021/bmw-m5-cs-onepager-sp-desktop.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1612248015307.jpg",
            id: "1"
          },
          {
            title: "BMW M4",
            desc: "Автомобили M BMW 4 Серии COUPE",
            promo: true,
            src: "https://www.bmw.ru/content/dam/bmw/common/all-models/m-series/m4-coupe/2022/Highlights/bmw-4-series-coupe-m-automobiles-sp-desktop.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1677156862555.jpg",
            id: "2"
          },
          {
            title: "BMW XM",
            desc: "Новый BMW XM",
            promo: true,
            src: "https://www.bmw.ru/content/dam/bmw/common/all-models/m-series/xm/2022/Highlights/bmw-x-series-xm-sp-desktop.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1662478476113.jpg",
            id: "3"
          },
          {
            title: "BMW iX M60",
            desc: "Полностью электрический BMW iX",
            promo: true,
            src: "https://www.bmw.ru/content/dam/bmw/marketRU/bmw_ru/teaserpool/large/bmw-ix-m60-onepager-sp-desktop_1680x756_V33.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1641460066695.jpg",
            id: "4"
          },
          {
            title: "BMW M3 Competition",
            desc: "Для тех, кто любит побыстрее",
            promo: true,
            src: "https://www.bmw.ru/content/dam/bmw/common/all-models/m-series/m3-sedan/2023/highlights/bmw-3-series-cs-m-automobiles-sp-desktop.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1669651504729.jpg",
            id: "4"
          },
          {
            title: "BMW X7 M60i xDrive",
            desc: "Невероятно динамичный BMW X7",
            promo: true,
            src: "https://www.bmw.ru/content/dam/bmw/common/all-models/m-series/x7-m60i/2022/highlights/bmw-x-series-x7-m60i-sp-desktop.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1648803097402.jpg",
            id: "4"
          }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .ad-link {
    position: absolute;
    bottom: 50px;
    left: 50%;
    background: rgb(0, 0, 0, 0.5);
    transform: translate(-50%, 0);
    padding: 5px 15px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }
  </style>