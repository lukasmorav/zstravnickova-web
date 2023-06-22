import React from 'react'
import useFetch from '../hooks/useFetch'

export default function ArticleShowcase(apiID) {
  const {loading, error, data} = useFetch('109.123.194.106:1337/api/' + apiID)

    if (loading) return <p>Načítání...</p>
    if (error || !data) return <p>Chyba v načítání...</p>
    console.log(data.data[0])
  return (
    <div className='showcase-container'>
        {data.data.map(article => (

          <div className='article-container'>
            <h3>{article.attributes.Title}</h3>
            {article.attributes.Content}
            {(article.attributes.Media) ? '' : 'cuck'}
          </div>
        ))}
    </div>
  )
}
