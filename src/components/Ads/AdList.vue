<template>
    <v-container>
        <v-layout>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb-3">My ads</h1>

                <v-card
                    class="elevation-10 mb-3"
                    v-for="ad in ads"
                    :key="ad.id"
                >
                    <v-layout row>
                        <v-flex xs4>
                            <v-img
                                :src="ad.image"
                                height="160px"
                            ></v-img>
                        </v-flex>
                        <v-flex xs8>
                            <v-card-text>
                                <h2 class="text--primary">{{ ad.title }}</h2>
                                <p>{{ ad.description }}</p>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                class="info"
                                :to="'/ad/' + ad.id"
                                >Open</v-btn>
                            </v-card-actions>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  data () {
    return {
      ads: [
        {
          title: 'Tiger in nature',
          description: 'It is a description',
          promo: false,
          image: 'https://wallpapershome.ru/images/wallpapers/tigr-3840x2160-tigr-17836.jpg',
          id: 1
        },
        {
          title: 'Сute squirrel',
          description: 'It is a description',
          promo: false,
          image: 'https://www.nastol.com.ua/pic/201209/1920x1200/nastol.com.ua-32366.jpg',
          id: 2
        },
        {
          title: 'Racoon on a tree',
          description: 'It is a description',
          promo: false,
          image: 'https://s1.1zoom.ru/b5050/360/261982-frederika_2880x1800.jpg',
          id: 3
        }
      ]
    }
  }
}
</script>
