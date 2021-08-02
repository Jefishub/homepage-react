import '../../css/indicator.css'

const listItemIndicators = (bullets) => {
  return bullets.map((indicator, i) => {
    return (
      <div className="skills-container" key={i}>
        <div className={`skills ${indicator.level}`}>
          {indicator.items}
        </div>
      </div>)
    })
}

const listItems = (content) => {
  return content.map((item, i) => {
    const { name, bullets } = item
      const indicators = listItemIndicators(bullets)
      return (
        <div className="text-box" key={i}>
          <h2>{name}</h2>
          {indicators}
        </div>
      )
    })
}

const indicatorList = (data) => {
  const { header, content } = data
    const items = listItems(content)
    return (
      <div className="text-box">
        <h1>{header}</h1>
        {items}
      </div>
    )
  }

export default indicatorList