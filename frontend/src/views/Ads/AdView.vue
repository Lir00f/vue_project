<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card class="mt-5">
          <v-img
            height="300px"
            src="https://www.bmw.ru/content/dam/bmw/common/all-models/m-series/m4-coupe/2022/Highlights/bmw-4-series-coupe-m-automobiles-sp-desktop.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1677156862555.jpg"
          ></v-img>

          <v-card-text>
            <h1 class="text--primary mb-3">BMW M4 Competition</h1>
            <p>
              The BMW M4 Competition is a high-performance sports car known for its powerful performance and sleek design. It features a turbocharged engine and advanced technology, making it a thrilling driving experience.
            </p>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text class="warning">Edit</v-btn>
            <v-btn class="success">Buy</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
