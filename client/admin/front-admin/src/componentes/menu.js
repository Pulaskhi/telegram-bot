class Menu extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }
  async connectedCallback() {
    await this.render()
  }

  render(){
    this.shadow.innerHTML =
    /*html*/`
    <style>
      *{
        box-sizing: border-box;
      }

      

      svg{
        width: 50px;      
      }

    </style>

    <section class="menu">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>menu</title><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>
    </section>
    `
  }

}
customElements.define('menu-component', Menu);