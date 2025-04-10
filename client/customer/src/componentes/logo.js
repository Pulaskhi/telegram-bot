class Logo extends HTMLElement {
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
    
      h2{
        font-size:2rem;
        margin: 0;
      }
    </style>

    <section class="logo">
      <h2>Pedidos</h2>
    </section>
    `
  }
}
customElements.define('logo-component', Logo)
