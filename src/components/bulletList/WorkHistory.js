const getBullets = (bullets) => {
  return bullets.map((item, i) => {
    return <li key={i}><strong>{item.start}</strong>{item.end}</li>
  })
}

const listCompanyRoles = (role) => {
  return role.map((bullet, i) => {
    const { title, bullets } = bullet
    const listBullets = getBullets(bullets)
    return (
      <div key={i}>
        <p>{title}</p>
        <ul>
          {listBullets}
        </ul>
      </div>
    )
  })
}

const companyItems = (content) => {
    return content.map((company, i) => {
      const { name, roles } = company
      const companyRoles = listCompanyRoles(roles)
      return (
        <div className="text-box" key={i}>
          <h2>{name}</h2>
            {companyRoles}
        </div>
      )
      })
}
const workHistoryList = (data) => {
    const { header, content } = data
    const Items = companyItems(content)
    return (
      <div className="text-box">
        <h1>{header}</h1>
        {Items}
      </div>
    )
  }

  export default workHistoryList