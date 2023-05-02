const path = require('path')

module.exports = {
  resolve: {
    alias: {
      '@clients': path.resolve(__dirname, 'src/clients/'),
      '@entities': path.resolve(__dirname, 'src/entities/'),
      '@errors': path.resolve(__dirname, 'src/errors/'),
      '@gqltypes': path.resolve(__dirname, 'src/gqltypes/'),
      '@modules': path.resolve(__dirname, 'src/modules/'),
      '@factories': path.resolve(__dirname, 'test/factories/'),
    },
  },
}
