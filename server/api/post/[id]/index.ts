export default defineEventHandler((event) => {
    const id = getRouterParam(event, 'id')
  
    return `Post ke, ${id}!`
  })