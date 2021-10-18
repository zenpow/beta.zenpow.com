import NextImage from 'next/image'

const imageLoader = ({ src }) => {
  return `${src}`
}

// eslint-disable-next-line jsx-a11y/alt-text
const Image = ({ ...rest }) => <NextImage loader={imageLoader} {...rest} />

export default Image
