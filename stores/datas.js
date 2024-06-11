import { defineStore } from 'pinia'

export const useDatasStore = defineStore( 'datas', {
  
  state: () => ({
    datas: null,
  }),

  actions: {

    async fetchDatas() {

      // console.log('--- Fetching datas for ', apiId);
      
      const config = useRuntimeConfig()
      
      console.log(`Fetch url ${config.public.apiDataUrl}`);

      try {        
        const { data, error, refresh } = await useFetch(`${config.public.apiDataUrl}`, {
          method: 'GET',
        })

        // console.log('Data ERROR', error);
        // console.log(`Data from ${apiId}`, data.value);

        this.datas = data.value

      } catch(e) {
        console.log(`Error fetching - ${e}`);
      }
    }
  }
})