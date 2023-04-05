export function formatNumberToPokemonNr(value: string): string {
  switch (value.toString().length) {
    case 1:
      return 'Nr. 00' + value
    case 2:
      return 'Nr. 0' + value
    case 3:
      return 'Nr. ' + value
    default:
      return 'Missing Nr.'
  }
}
