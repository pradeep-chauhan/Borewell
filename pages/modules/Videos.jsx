import React from 'react'
import ReactPlayer from 'react-player'

const Videos = () => {
  return (
    <section>
      <div className='container'>
        <div class="row pt-5">
          <div class="col-12">
            <h3 class="text-uppercase mb-4 text-center heading">Videos</h3>
          </div>
        </div>
        <div class="row row-cols-1 row-cols-md-2 g-4">
          <div class="col">
            <div class="card">
              <ReactPlayer url='<iframe width="560" height="315" src="https://www.youtube.com/embed/pKbzFupIvLA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' class="card-img-top img-fluid" />
              <div class="card-body">
                <h5 class="card-title text-center sub-heading">Drilling Process Of Borewell</h5>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <ReactPlayer url='<iframe width="560" height="315" src="https://www.youtube.com/embed/pKbzFupIvLA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' class="card-img-top img-fluid" />
              <div class="card-body">
                <h5 class="card-title text-center sub-heading">Drilling Process Of Borewell</h5>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <ReactPlayer url='<iframe width="560" height="315" src="https://www.youtube.com/embed/pKbzFupIvLA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' class="card-img-top img-fluid" />

              <div class="card-body">
                <h5 class="card-title text-center sub-heading">Drilling Process Of Borewell</h5>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <ReactPlayer url='<iframe width="560" height="315" src="https://www.youtube.com/embed/pKbzFupIvLA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' class="card-img-top img-fluid" />
              <div class="card-body">
                <h5 class="card-title text-center sub-heading">Drilling Process Of Borewell</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Videos