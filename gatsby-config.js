module.exports = {
    siteMetadata: {
        title: 'Full-Stack Engineer Lex',
        author: 'Lex Luthor'
    },
    plugins: [
        {
            resolve: 'gatsby-source-contentful',
            options: {
                // speaceId: 'fhkqbmihmps2',
                // accessToken: '3dqfzhbXq22haJtZRf1e9gksh2lLW4iHigk4pSOWRaM'
                speaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_ACESS_TOKEN
            }
        },
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/`
            }
        },
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    'gatsby-remark-relative-images',
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 750,
                            linkImagesToOriginal: false
                        }
                    }
                ]
            }
        }
    ]
}