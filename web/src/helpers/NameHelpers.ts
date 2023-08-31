export const SplitFullName = (name: string) => {
  const nameArray = name?.split(' ') || []
  const firstName = nameArray[0]
  const lastName = name.replace(firstName, '')
  return [firstName, lastName]
}
