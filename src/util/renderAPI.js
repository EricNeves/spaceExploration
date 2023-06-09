import { fetchAPOD } from './ajax'

export function fetchAPI() {
  const url = `https://api.nasa.gov/planetary/apod?api_key=3AXsuVMwkt39C3DFsah6PZtGbQBuXgre46ISpntw`

  fetchAPOD({
    url,
    success(data) {
      renderAPIToHTML(data)
    },
    error(error) {
      renderAPIToHTML({
        title: 'Sorry, something went wrong',
        date: new Date(),
        explanation: '',
        media_type: '',
        url: 'https://images.pexels.com/photos/9121365/pexels-photo-9121365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      })
    }
  })
}

function renderAPIToHTML({ title, date, media_type, url, explanation }) {
  const boxAPOD = document.querySelector('.box-apod')

  boxAPOD.innerHTML = `
    <h3>${title}</h3>
    <span>${date}</span>
    ${(media_type === 'video') ? 
    `<iframe src=${url} scrolling="no" frameborder="0"></iframe>`
    :
    `<img data-aos="zoom-in" data-aos-duration="1500" src="${url}" alt="APOD Image"></img>`
    }
    <p>${explanation.split('.')[0]}...</p>
    <a href="https://apod.nasa.gov/apod/astropix.html" target="_blank">Read more...</a>
  `
}