class Formulario extends HTMLElement {
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

      h3{
        margin:0;
      }

      svg{
       width:40px;
      }

      .formulario{
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .formulario-header{
        align-items:center;
        background-color: white;
        display:flex;
        justify-content: space-between;
        height:40px;
      }

      .formulario-text{
        padding:7px;
        text-align: center;
        justify-content:center;
        background-color: #0077b6;
        height:40px;
        align-items: center; 
        justify-content: center; 
      }

      .formulario-body{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(20%, 1fr));
        gap:1rem;
      }

      .form-element{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      button{
        border: none; 
        background: none; 
        outline: none; 
      }

      input{
        border: none;
        outline: none;
        box-shadow: none;
        padding: 1rem;
        width: 100%;
      }

    </style>
    <section class="formulario">
      <div class="formulario-header">
        <div class="formulario-text"><h3>General</h3></div>
        <div class="formulario-buttons">
          <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>broom</title><path d="M19.36,2.72L20.78,4.14L15.06,9.85C16.13,11.39 16.28,13.24 15.38,14.44L9.06,8.12C10.26,7.22 12.11,7.37 13.65,8.44L19.36,2.72M5.93,17.57C3.92,15.56 2.69,13.16 2.35,10.92L7.23,8.83L14.67,16.27L12.58,21.15C10.34,20.81 7.94,19.58 5.93,17.57Z" /></svg></button>
          <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>content-save</title><path d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z" /></svg></button>
        </div>
      </div>
      <div class="formulario-body">
        <div class="form-element">
          <div class="form-element-label">
            <label>Nombre</label>
          </div>
          <div class="form-element-input">
            <input type="text" placeholder="Escribe tu nombre." />
          </div>
        </div>
        <div class="form-element">
          <div class="form-element-label">
            <label>Email</label>
          </div>
          <div class="form-element-input">
            <input type="text" placeholder="Escribe tu email" />
          </div>
        </div>
      </div>
    </section>
    `
  }
}
customElements.define('formulario-component', Formulario)
