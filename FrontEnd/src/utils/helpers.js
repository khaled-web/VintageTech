import localUrl from './URL'
//FlattenProduct
export const flattenProduct = (data) => {
 return data.map((item) => {
  let {
   title,
   price,
   image,
   featured,
   description
  } = item.attributes
  let url = image.data[0].attributes.url
  let deployImage = `${localUrl}${url}`
  return {
   ...item,
   title,
   price,
   featured,
   description,
   deployImage
  }
 })
}



// helper functions
export function featuredProducts(data) {
 return data.filter(i => {
  return i.featured === true
 })
}