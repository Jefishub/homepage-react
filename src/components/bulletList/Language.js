/* header: "Language skills",
content: [
{name: "Finnish", level: "Native", imgsrc: "'../../images/fin_flag.jpg'"}, */

const listItems = (content) => {
    return content.map((item, i) => {
        console.log(item)
        const { name, level, imgsrc } = item
        const alternative = name + " flag"
        return (
          <div className="text_box" key={i}>
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
      <div>
        <h2>{header}</h2>
        {Items}
      </div>
    )
  }

  export default languageList