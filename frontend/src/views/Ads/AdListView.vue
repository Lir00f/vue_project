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
            id: "5"
          },
          {
            title: "BMW X7 M60i xDrive",
            desc: "Невероятно динамичный BMW X7",
            promo: true,
            src: "https://www.bmw.ru/content/dam/bmw/common/all-models/m-series/x7-m60i/2022/highlights/bmw-x-series-x7-m60i-sp-desktop.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1648803097402.jpg",
            id: "6"
          }
        ],
    };
  },
};
</script>

<template>
  <v-container>
    <h1 class="text--secondary mb-3 mt-3">В корзине</h1>
    <v-card v-for="ad in ads" :key="ad.id" class="mb-3" max-width="1000">
      <v-row>
        <v-col xs="4">
          <v-img :src="ad.src" height="175px" cover></v-img>
          <v-spacer></v-spacer>
        </v-col>
        <v-col xs="8">
          <h2 class="text--primary">{{ ad.title }}</h2>
          <p style="height: 85px; overflow: hidden; text-overflow: ellipsis">
            {{ ad.desc }}
          </p>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" variant="text" :to="'/ad/' + ad.id">
              Открыть
            </v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>