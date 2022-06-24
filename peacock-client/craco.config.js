const path = require('path')

module.exports = {
    webpack:{
        configure:{
            target: 'electron-renderer'
        },
        alias: {
            /** RENDERER ALIASES */
            ['@peacock-renderer-component-commons']: path.resolve(__dirname, 'src/renderer/components/commons'),
            ['@peacock-renderer-components']: path.resolve(__dirname,'src/renderer/components'),
            ['@peacock-renderer-reducers']: path.resolve(__dirname, 'src/renderer/reducers'),
            ['@peacock-renderer-models']: path.resolve(__dirname, 'src/renderer/models'),
            ['@peacock-renderer-utils']: path.resolve(__dirname, 'src/renderer/utils')
        }
    },
    jest: {
        configure: {
            moduleNameMapper: {
                /** RENDERER ALIASES */
                '^@peacock-renderer-component-commons(.*)$': '<rootDir>/src/renderer/components/commons$1',
                '^@peacock-renderer-components(.*)': '<rootDir>src/renderer/components$1',
                '^@peacock-renderer-reducers(.*)': '<rootDir>src/renderer/reducers$1',
                '^@peacock-renderer-models(.*)': '<rootDir>src/renderer/models$1',
                '^@peacock-renderer-utils(.*)': '<rootDir>src/renderer/utils$1'
            }
        }
    }
}
