import React from 'react'

const SocialLink = (props) => {
    const {href, pic} = props.link;
  return (
    <li>
        <a href={href} target="_blank" rel="noreferrer" className={props.navClass}
            ><i className={pic}></i
        ></a>
    </li>
  )
}

export default SocialLink