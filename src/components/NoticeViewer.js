import React from 'react'
import useFetch from '../hooks/useFetch'

export default function NoticeViewer(apiID) {
  const {loading, error, data} = useFetch('http://109.123.194.106:1337/api/' + apiID.apiID);
  if (loading) { return 'Načítání dat...';}
  if (error || !data) { return 'Chyba v načítání dat...';}
  console.log(data)
  return (
    <div className='main-notices'>
      {data.data.map( (notice, id) => (
        
        <div className='notice-container'>
          <h3>{notice.attributes.Title}</h3>
          <p>{notice.attributes.Content}</p>
        </div>

      ))}
    </div>
  )
}
