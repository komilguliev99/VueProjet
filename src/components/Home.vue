<template>
    <div>
        <v-container fluid>
            <v-layout row>
                <v-flex xs12>
                    <v-carousel>
                        <v-carousel-item
                            v-for="ad in ads"
                            :key="ad.id"
                            :src="ad.image"
                        >
                            <div class="carousel__link">
                                <v-btn :to="'/ad/' + ad.id">{{ ad.title }}</v-btn>
                            </div>
                        </v-carousel-item>
                    </v-carousel>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container grid-list-lg>
            <v-layout row wrap>
                <v-flex 
                    xs12
                    sm6
                    md4
                    v-for="ad in ads"
                    :key="ad.id"
                >
                     <v-card>
                        <v-img
                            :src="ad.image"
                            aspect-ratio="2.75"
                        >
                        </v-img>

                        <v-card-title primary-title>
                            <div>
                                <h3 class="headline mb-0">{{ ad.title }}</h3>
                                <div> {{ ad.description }} </div>
                            </div>
                        </v-card-title>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn flat :to="'/ad/' + ad.id">Open</v-btn>
                            <v-btn raised color="primary">Buy</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
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

<style scoped>
.carousel__link {
    position: absolute;
    bottom: 50px;
    left: 50%;
    background: rgba(0, 0, 0, .5);
    transform: translate(-50%, 0);
    padding: 5px 15px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
}
</style>

