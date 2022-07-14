import { Component, Vue } from 'vue-property-decorator'

@Component({ components: {} })
export default class Helloworld extends Vue {
  get name(): string {
    return this.$route.params.name || 'world'
  }
}
