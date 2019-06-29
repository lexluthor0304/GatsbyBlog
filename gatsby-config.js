module.exports = {
    siteMetadata: {
        title: 'Full-Stack Engineer Lex',
        author: 'Lex Luthor'
    },
    plugins: [
        // {
        //     resolve: `gatsby-plugin-nprogress`,
        //     options: {
        //       // Setting a color is optional.
        //       color: `tomato`,
        //       // Disable the loading spinner.
        //       showSpinner: false,
        //     },
        //   },

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
                        resolve: 'gatsby-remark-responsive-iframe',
                        options: {
                            maxWidth: 750,
                            ratio: 1.77,
                            related: false,
                            noIframeBorder: true 
                        }
                    },

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
                          maxWidth: 750,
                          ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
                          // height: 396, // Optional: Overrides optional.ratio
                          related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
                          noIframeBorder: true //Optional: Disable insertion of <style> border: 0
                        }
                      },

                      {
                        resolve: `gatsby-remark-vscode`,
                        // All options are optional. Defaults shown here.
                        options: {
                          colorTheme: 'Dark+ (default dark)', // Read on for list of included themes. Also accepts object and function forms.
                          wrapperClassName: '',  // Additional class put on 'pre' tag
                          injectStyles: true,    // Injects (minimal) additional CSS for layout and scrolling
                          extensions: [],        // Extensions to download from the marketplace to provide more languages and themes
                          languageAliases: {},   // Map of custom/unknown language codes to standard/known language codes
                          replaceColor: x => x,  // Function allowing replacement of a theme color with another. Useful for replacing hex colors with CSS variables.
                          getLineClassName: ({   // Function allowing dynamic setting of additional class names on individual lines
                            content,             //   - the string content of the line
                            index,               //   - the zero-based index of the line within the code fence
                            language,            //   - the language specified for the code fence
                            codeFenceOptions     //   - any options set on the code fence alongside the language (more on this later)
                          }) => ''
                        }
                      }
                ]
            }
        }
    ]
}