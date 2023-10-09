// helper functions
export function featuredProducts(data) {
 return data.filter(i => {
  const newData = i.attributes
  return newData.featured === true
 })
}