class Main extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  async connectedCallback () {
    await this.render()
  }

  render () {
    this.shadow.innerHTML =
    /* html */`
    <style>
      *{
        box-sizing: border-box;
      }
      main{
        display: grid;
        gap: 2rem;
        grid-template-columns: 1fr 2fr;
      }
    </style>
    <main>
      <slot></slot>
    </main>
    `
  }
}

customElements.define('main-component', Main)
