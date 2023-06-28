import React from 'react'
import useFetch from '../hooks/useFetch'

export default function ArticleShowcase(apiID) {
  const {loading, error, data} = useFetch('https://test2.zstravnickova.cz:1338/api/' + apiID.apiID)

    if (loading) return <p>Načítání...</p>
    if (error || !data) return <p>Chyba v načítání...</p>
    
  return (
    <div className='showcase-container'>
        {data.data.map((article, id) => (

          <div className='article-container'>
            <h3>{article.attributes.Title}</h3>
            {article.attributes.Content}
          </div>
        ))}
    </div>
  )
}
