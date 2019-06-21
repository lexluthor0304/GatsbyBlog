module.exports = {
    siteMetadata: {
        title: 'Full-Stack Engineer Lex',
        author: 'Lex Luthor'
    },
    plugins: [
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/`
            }
        },
        'gatsby-transformer-remark'
    ]
}