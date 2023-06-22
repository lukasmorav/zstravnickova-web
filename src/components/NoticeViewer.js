import React from 'react'
import useFetch from '../hooks/useFetch'

export default function NoticeViewer(apiID) {
  const {loading, error, data} = useFetch('http://109.123.194.106:1337/api/' + apiID.apiID);
  if (loading) { return 'Načítání dat...';}
  if (error) { return 'Chyba v načítání dat...';}

  return (
    <div>
      bla bla
    </div>
  )
}
