import React from 'react'

function BusinessCard({name, description, interests, links}) {
  return (
    <>
    <div className='container-main'>
        <div className='name'>
        {name}
    </div>
    <div className='description'>
        {description}
    </div>
    <div className='interest'>
        <div className='interest-heading'>Interests</div>
            <div className='interest-list'>{interests}</div>
    </div>
    <div>
        {links.map(link => (
            <button key={link.url} className='link-button' onClick={() => {window.open(`${link.url}.com`)}} target="_blank" rel="noreferrer">{link.name}</button>
        ))}
    </div>
    </div>
    </>
  )
}

export default BusinessCard