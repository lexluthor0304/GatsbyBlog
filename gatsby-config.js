module.exports = {
    siteMetadata: {
        title: 'Full-Stack Engineer Lex',
        author: 'Lex Luthor'
    },
    plugins: [
        'gatsby-plugin-react-helmet',

        // {
        //     resolve: 'gatsby-source-contentful',
        //     options: {
        //         // speaceId: 'fhkqbmihmps2',
        //         // accessToken: '3dqfzhbXq22haJtZRf1e9gksh2lLW4iHigk4pSOWRaM'
        //         spaceId: process.env.CONTENTFUL_SPACE_ID,
        //         accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
        //     }
        // },

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
                    // 'gatsby-remark-relative-images',
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 750,
                            linkImagesToOriginal: false
                        }
                    },

                    {
                        resolve: "gatsby-remark-embed-video",
                        options: {
                          width: 800,
                          ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
                          height: 400, // Optional: Overrides optional.ratio
                          related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
                          noIframeBorder: true //Optional: Disable insertion of <style> border: 0
                        }
                      }
                ]
            }
        }
    ]
}