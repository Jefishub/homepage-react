const listItemBullets = (item) => {
    const bullets = item.bullets.map((bullet, i) => {
        return <div key={i}>{bullet}</div>
    })
    return bullets
}

const listItems = (content) => {
    return content.map((item, i) => {
        const bullets = listItemBullets(item)
        return (
          <div className="text-box" key={i}>
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
      <div className="text-box">
        <h1>{header}</h1>
        {Items}
      </div>
    )
  }

  export default bulletList