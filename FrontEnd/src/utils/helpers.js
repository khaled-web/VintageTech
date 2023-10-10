// helper functions
export function featuredProducts(data) {
 return data.filter(i => {
  const newData = i.attributes
  console.log(newData)
  return newData.featured === true
 })
}