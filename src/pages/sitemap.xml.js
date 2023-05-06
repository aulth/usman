import React from 'react'

class Sitemap extends React.Component {
    static async getInitialProps({ res }) {
        const request = await fetch(process.env.NODE_ENV == 'production' ? 'https://mohd-usman.vercel.app/api/blog/fetchall' : 'http://localhost:3000/api/blog/fetchall');
        var data = await request.json();
        data = data.article;
        res.setHeader('Content-Type', 'text/xml');
        res.write(createSitemap(data));
        res.end();
    }
}
// function returnCommentSymbol(){
//     let a = ""
// }
const createSitemap = (data) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>${`https://mohd-usman.vercel.app/blog`}</loc>
    </url>
    <url>
        <loc>${`https://mohd-usman.vercel.app/blog/category/story`}</loc>
    </url>
    <url>
        <loc>${`https://mohd-usman.vercel.app/blog/category/tips`}</loc>
    </url>
    <url>
        <loc>${`https://mohd-usman.vercel.app/blog/category/thoughts`}</loc>
    </url>
        ${data
        .map((article) => {
            return `
                <url>
                    <loc>${`https://mohd-usman.vercel.app/blog/article/${article.link}`}</loc>
                </url>
            `;
        })
        .join('')}
    </urlset>
    `;

export default Sitemap