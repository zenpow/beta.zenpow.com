import NextImage from 'next/image'

const myLoader = ({ src }) => {
  return `${src}`
}

// eslint-disable-next-line jsx-a11y/alt-text
const Image = ({ ...rest }) => <NextImage loader={myLoader} {...rest} />

export default Image
