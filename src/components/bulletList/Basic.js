const listItemBullets = (item) => {
    const bullets = item.bullets.map((bullet, i) => {
        return <p key={i}>{bullet}</p>
    })
    return bullets
}

const listItems = (content) => {
    return content.map((item, i) => {
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
    const { header, content } = data
    const Items = listItems(content)
    return (
      <div>
        <h2>{header}</h2>
        {Items}
      </div>
    )
  }

  export default bulletList