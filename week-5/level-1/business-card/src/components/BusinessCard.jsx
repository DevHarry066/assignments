import React from 'react'

function BusinessCard({name, description, interests, links}) {
  return (
    <>
    <div className='app-title'>Business Card</div>
    <div className='container-main'>
        <div className='name'>
        {name}
    </div>
    <div className='description'>
        {description}
    </div>
    <div className='interest'>
        <div className='interest-heading'>Interests</div>
        {interests.map(interest => (
            <div className='interest-list'>{interest.name}</div>
        ))}
    </div>
    <div>
        {links.map(link => (
            <button className='link-button' href={`${link.url}`} target="_blank" rel="noreferrer">{link.name}</button>
        ))}
    </div>
    </div>
    </>
  )
}

export default BusinessCard