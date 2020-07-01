import React from 'react'
import App from 'next/app'
import '../public/css/tailwind.css'

class Muckle extends App {
  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default Muckle
