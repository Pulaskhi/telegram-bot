class Filas extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.data = []
  }

  async connectedCallback () {
    await this.loadData()
    await this.render()
  }

  loadData () {
    this.data = [
      {
        name: 'Carlos',
        email: 'carlossedagambin@gmail.com',
        createdAt: '2024-04-22',
        updatedAt: '2024-04-22'
      },
      {
        name: 'Bonifacio',
        email: 'boni@example.com',
        createdAt: '2024-03-10',
        updatedAt: '2024-04-01'
      },
      {
        name: 'Carlos',
        email: 'carlossedagambin@gmail.com',
        createdAt: '2024-04-22',
        updatedAt: '2024-04-22'
      },
      {
        name: 'Bonifacio',
        email: 'boni@example.com',
        createdAt: '2024-03-10',
        updatedAt: '2024-04-01'
      }
    ]
  }

  render () {
    this.shadow.innerHTML =
    /* html */`
      <style>
        * {
          box-sizing: border-box;
        }
        svg {
          width: 40px;
        }

        section {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .card-header {
          background-color: white;
          display: flex;
          justify-content: flex-end;
        }

        .formulario {
          background-color: white;
          height:40px;
        }

        .formulario-svg{
          margin-left:0.5rem;
        }

        .lista-datos{
          display: flex;
          flex-direction: column;
          gap: 1rem;
          min-height: 70vh;
          max-height: 70vh;
          overflow-y: scroll;
          padding: 0 2rem;
        }

        .lista-datos::-webkit-scrollbar{
          background-color: #b3d9ff;
        }

        .lista-datos::-webkit-scrollbar-thumb{
          background-color: grey;
        }

        .lista-contador {
          background-color: white;
          padding: 1rem;
        }

        .list {
          display: flex;
          flex-direction: column;
        }

        ul, li {
          color: white;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .card-info {
          background-color: black;
        }

        .card-info{
          padding: 0.5rem;
        }

        .card-info ul{
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        button{
          border: none; 
          background: none; 
          outline: none; 
        }
      </style>

      <section class="lista-box">
        <div class="formulario">
          <div class="formulario-svg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>filter-menu</title><path d="M11 11L16.76 3.62A1 1 0 0 0 16.59 2.22A1 1 0 0 0 16 2H2A1 1 0 0 0 1.38 2.22A1 1 0 0 0 1.21 3.62L7 11V16.87A1 1 0 0 0 7.29 17.7L9.29 19.7A1 1 0 0 0 10.7 19.7A1 1 0 0 0 11 18.87V11M13 16L18 21L23 16Z" /></svg>
          </div>  
        </div>

        <div class="lista-datos"></div>

        <div class="lista-contador">
          <div class="contador-text">
            <span>${this.data.length} registros en total, mostrando 10 por página</span>
          </div>
        </div>
      </section>
    `

    const listaDatos = this.shadow.querySelector('.lista-datos')

    this.data.forEach((x) => {
      const card = document.createElement('div')
      card.classList.add('card')

      const cardHeader = document.createElement('div')
      cardHeader.classList.add('card-header')

      const cardButtons = document.createElement('div')
      cardButtons.classList.add('card-buttons')

      const editButton = document.createElement('button')
      editButton.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>pencil</title><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>
    `
      cardButtons.appendChild(editButton)

      const deleteButton = document.createElement('button')
      deleteButton.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20">
        <path fill="black" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"/>
      </svg>
    `
      cardButtons.appendChild(deleteButton)

      cardHeader.appendChild(cardButtons)
      card.appendChild(cardHeader)

      const cardInfo = document.createElement('div')
      cardInfo.classList.add('card-info')

      const ul = document.createElement('ul')
      cardInfo.appendChild(ul)

      Object.keys(x).forEach(key => {
        const itemText = document.createElement('li')
        itemText.textContent = `${key}: ${x[key]}`
        ul.appendChild(itemText)
      })

      card.appendChild(cardInfo)
      listaDatos.appendChild(card)
    })
  }
}

customElements.define('filas-component', Filas)
