export default {
  state: {
    ads: [
      {
        title: 'Tiger in nature',
        description: 'It is a description',
        promo: true,
        image: 'https://wallpapershome.ru/images/wallpapers/tigr-3840x2160-tigr-17836.jpg',
        id: 1
      },
      {
        title: 'Сute squirrel',
        description: 'It is a description',
        promo: true,
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
  },
  mutations: {
    createAd (state, payload) {
      state.ads.push(payload)
    }
  },
  actions: {
    createAd ({ commit }, payload) {
      payload.id = parseInt(Math.random() * 3000)

      commit('createAd', payload)
    }
  },
  getters: {
    ads (state) {
      return state.ads
    },
    promoAds (state) {
      return state.ads.filter(ad => ad.promo)
    },
    myAds (state) {
      return state.ads
    },
    adById (state) {
      return ID => state.ads.find(ad => ad.id === ID)
    }
  }
}
