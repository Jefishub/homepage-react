const listItems = (content) => {
    return content.map((item, i) => {
        const { name, level, imgsrc } = item
        const alternative = name + " flag"
        return (
          <div className="text-box" key={i}>
            <img src={imgsrc} alt={alternative}></img>
            <p><strong>{item.name}</strong> - {level}</p>
          </div>
        )
      })
}
const languageList = (data) => {
  const { header, content } = data
    const Items = listItems(content)
    return (
      <div className="text-box">
        <h1>{header}</h1>
        {Items}
      </div>
    )
  }

  export default languageList