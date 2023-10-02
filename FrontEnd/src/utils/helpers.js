// helper functions
export function featuredProducts(data) {
 return data.filter(i => {
  return i.featured === true
 })
}