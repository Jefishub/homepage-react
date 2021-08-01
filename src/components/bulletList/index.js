const listItemBullets = (item) => {
    const bullets = item.bullets.map((bullet, i) => {
        return <p key={i}>{bullet}</p>
    })
    return bullets
}

const listItems = (data) => {
    return data.content.map((item, i) => {
        const bullets = listItemBullets(item)
        return (
          <div className="text_box" key={i}>
            <h2>{item.name}</h2>
            {bullets}
          </div>
        )
      })
}
const bulletList = (data) => {
    const header = <h2>{data.header}</h2>
    const Items = listItems(data)
    return (
      <div>
        {header}
        {Items}
      </div>
    )
  }

  export default bulletList