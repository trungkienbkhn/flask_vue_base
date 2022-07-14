import { Component, Vue } from 'vue-property-decorator'
import api from '@/utils/api'

type TStatus = {
  data: {
    server: string
    mongodb: string
  }
}

@Component({ components: {} })
export default class Home extends Vue {
  server = ''
  mongodb = ''

  async created(): Promise<void> {
    this.server = '...'
    this.mongodb = '...'

    const response = await api.get<TStatus>('status')

    if (response.data && response.data.data) {
      const result = response.data.data

      this.server = result.server || 'failed'
      this.mongodb = result.mongodb || 'failed'

      return
    }

    this.server = 'failed'
    this.mongodb = 'failed'
  }
}
