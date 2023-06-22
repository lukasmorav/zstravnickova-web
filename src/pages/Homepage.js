import React from 'react'
import SiteHeader from '../components/SiteHeader'
import ArticleShowcase from '../components/ArticleShowcase'
import NoticeViewer from '../components/NoticeViewer'

export default function Homepage() {


    return (
        <div>
            <SiteHeader />
            <NoticeViewer apiID={"oznamenis"}/>
            <ArticleShowcase apiID={"dulazita-sdelenis"}/>
        </div>
    )
}
