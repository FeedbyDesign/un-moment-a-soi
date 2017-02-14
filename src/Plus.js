import React from 'react'

const Plus = () => {
  return (
    <section id="plus">
      <img className="img_1-2" src="img/photos/IMG_6759_2.jpg" />
      <img className="img_1-2" src="img/photos/IMG_6408_2.jpg" />
      <h1 style={{color: '#6d645f'}}><span>⚫</span> Les petits plus <span>⚫</span></h1>
      <div id="plus_circlesWrapper">
        <div className="plus_circle back_orange"><h2>carte de <strong>fidélité</strong></h2></div>
        <div className="plus_circle back_orange"><h2>journée/ soirée <strong>"bien-être"</strong> entre filles</h2></div>
        <div className="plus_circle back_orange"><h2>chèques <strong>cadeaux</strong></h2></div>
      </div>
      <div id="plus_logos">
        <img src="img/logos/pronails.png" />
        <img src="img/logos/auriege.png" />
        <img src="img/logos/labelbio.png" />
        <img src="img/logos/phyts.png" />
      </div>
    </section>
  )
}

export default Plus
