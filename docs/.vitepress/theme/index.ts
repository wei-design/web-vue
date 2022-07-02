import Theme from 'vitepress/dist/client/theme-default'
import Button  from '../../../packages/components/button'

export default {
    ...Theme,
    enhanceApp({ app }) {
        app.component('w-button', Button)
    }
}
