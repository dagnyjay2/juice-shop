/*
 * Copyright (c) 2014-2021 Bjoern Kimminich.
 * SPDX-License-Identifier: MIT
 */

module.exports = function productPreview () {
  return (req, res) => {
    const productName = req.query.name || 'Juice Shop'
    // Query text is placed in the HTML response with no encoding.
    const banner = '<div class="product-banner"><h1>' + productName + '</h1></div>'
    res.setHeader('Content-Type', 'text/html')
    res.send(banner)
  }
}
